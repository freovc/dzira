import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  map,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import {
  DeleteUserEntity,
  LoadUserEntitys,
  UpdateUserEntity,
} from '../actions/user-entity.actions';
import {
  DeleteUser,
  DeleteUserSuccess,
  LoadUsersFail,
  LoadUsersSuccesss,
  UpdateUser,
  UpdateUserSuccess,
  UsersManagePageActionTypes,
} from '../actions/users-manage-page.actions';
import { User } from '../models/User.model';
import * as fromUsers from '../reducers';
import { UsersService } from '../users.service';

@Injectable()
export class UsersEffects {
  currentUser: User;


  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(UsersManagePageActionTypes.LoadUsers),
    switchMap(() =>
      this.usersService.getAllUsers().pipe(
        switchMap(users => [
          new LoadUserEntitys({ userEntitys: users }),
          new LoadUsersSuccesss(),
        ]),
        catchError(error => of(new LoadUsersFail(error))),
      ),
    ),
  );
  @Effect()
  deleteUser$ = this.actions$.pipe(
    ofType<DeleteUser>(UsersManagePageActionTypes.DeleteUser),
    withLatestFrom(this.store.select(fromUsers.getSelectedUser)),
    map(([action, user]) => user),
    tap(user => (this.currentUser = user)),
    switchMap(user => this.usersService.deleteUser(user.id)),
    switchMap(result => [
      new DeleteUserSuccess(),
      new DeleteUserEntity({ id: '' + this.currentUser.id }),
    ]),
  );
  @Effect()
  updateUser$ = this.actions$.pipe(
    ofType<UpdateUser>(UsersManagePageActionTypes.UpdateUser),
    withLatestFrom(this.store.select(fromUsers.getSelectedUser)),
    map(([action, user]) => user),
    switchMap(user => this.usersService.updateUser(user)),
    switchMap(result => [
      new UpdateUserSuccess(),
      new UpdateUserEntity({
        userEntity: { id: result.id, changes: { ...result } },
      }),
    ]),
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService,
    private store: Store<any>,
  ) {}
}
