import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AddUserEntity } from '../actions/user-entity.actions';
import {
  CreateUser,
  CreatingUserFail,
  CreatingUserSuccess,
  UserFormPageActionTypes,
} from '../actions/user-form-page.actions';
import { User } from '../models/User.model';
import { UsersService } from '../users.service';

@Injectable()
export class UserFormPageEffects {
  @Effect()
  effect$ = this.actions$.pipe(
    ofType<CreateUser>(UserFormPageActionTypes.CreateUser),
    map(action => action.payload),
    switchMap(user =>
      this.usersService.createNewUser(user).pipe(
        switchMap(response => [
          new CreatingUserSuccess(response as User),
          new AddUserEntity({ userEntity: response as User }),
        ]),
        catchError(error => of(new CreatingUserFail(error))),
      ),
    ),
  );
  @Effect({ dispatch: false })
  createSuccess = this.actions$.pipe(
    ofType<CreateUser>(UserFormPageActionTypes.CreatingUserSuccess),
    tap(_ => this.router.navigate(['/users', 'user-created'])),
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService,
    private router: Router,
  ) {}
}
