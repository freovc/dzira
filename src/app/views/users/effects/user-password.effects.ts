import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/internal/observable/of';
import { catchError, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import {
  UpdatePasswordFail,
  UpdatePasswordSuccess,
  UsersManagePageActionTypes,
} from '../actions';
import * as fromUsers from '../reducers/';
import { UsersService } from '../users.service';

@Injectable()
export class UserPasswordEffects {
  @Effect({ dispatch: false })
  testPassword = this.actions$
    .ofType(UsersManagePageActionTypes.UpdateUser)
    .pipe(tap(_ => console.log('from eff', _)));
  @Effect()
  effect$ = this.actions$.pipe(
    ofType(UsersManagePageActionTypes.UpdatePassword),
    tap(_ => console.log('try effect patch password')),
    withLatestFrom(
      this.store.select(fromUsers.getSelectedUser),
      this.store.select(fromUsers.getnewPassword),
      this.store.select(fromUsers.getoldPassword),
    ),
    switchMap(([action, user,  newPassword, oldPassword,]) =>
      this.userService
        .updateUserPassword({
          userId: user.id,
          oldPassword,
          newPassword,
        })
        .pipe(
          switchMap(passwordChanged => [new UpdatePasswordSuccess()]),
          catchError((error: HttpErrorResponse) =>
            of(new UpdatePasswordFail(error)),
          ),
        ),
    ),
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromUsers.State>,
    private userService: UsersService,
  ) {}
}
