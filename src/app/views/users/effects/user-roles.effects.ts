import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import {
  LoadUserRolesFail,
  LoadUserRolesSuccess,
  UserRolesActionTypes,
} from '../actions/user-roles.actions';
import * as fromUsers from '../reducers';
import { UsersService } from '../users.service';

@Injectable()
export class UserRolesEffects {
  @Effect()
  loadUserRoles$ = this.actions$.pipe(
    ofType(UserRolesActionTypes.LoadUserRoles),
    withLatestFrom(
      this.store.select(fromUsers.getUserRoles),
      (action, roles) => roles,
    ),
    switchMap(roles => {
      if (roles.length > 0) {
        return of(new LoadUserRolesSuccess(roles));
      } else {
        return this.userService.getUsersRole().pipe(
          map(userRoles => new LoadUserRolesSuccess(userRoles)),
          catchError(err => of(new LoadUserRolesFail(err))),
        );
      }
    }),
  );

  constructor(
    private actions$: Actions,
    private userService: UsersService,
    private store: Store<fromUsers.State>,
  ) {}
}
