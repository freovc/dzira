import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { User } from '../models/User.model';

export enum UsersManagePageActionTypes {
  LoadUsers = '[Users] Load Users',
  LoadUsersSuccesss = '[Users] LoadUsersSuccesss',
  LoadUsersFail = '[Users] LoadUsersFail',
  ShowUserDeleteDialog = '[Users] Show delete user dialog',
  HideUserDeleteDialog = '[Users] Hide delete user dialog',
  SelectUser = '[Users] Select user',
  ShowUserEditModalDialog = '[Users] Show edit user dialog',
  HideUserEditModalDialog = '[Users] Hide edit user dialog',
  DeleteUser = '[Users] Delete user',
  DeleteUserSuccess = '[Users] Delete user success',
  UpdateUser = '[Users] Update User', //
  UpdateUserSuccess = '[Users] Update User Success',
  UpdateUserFail = '[Users] Update User Fail',
  SynchronizeFormWithStore = '[Users] Synchronize form with store',
  ClearLoadingState = '[Users] ClearLoadingState',
  UpdatePassword = '[Users] Update User Password', //
  UpdatePasswordSuccess = '[Users] Update Password Success',
  UpdatePasswordFail = '[Users] Update User Password Fail',
}

export class ClearLoadingState implements Action {
  readonly type = UsersManagePageActionTypes.ClearLoadingState;
}

export class SynchronizeFormWithStore implements Action {
  readonly type = UsersManagePageActionTypes.SynchronizeFormWithStore;

  constructor(public payload: User) {}
}

export class UpdateUserFail implements Action {
  readonly type = UsersManagePageActionTypes.UpdateUserFail;
}

export class UpdateUserSuccess implements Action {
  readonly type = UsersManagePageActionTypes.UpdateUserSuccess;
}

export class UpdateUser implements Action {
  readonly type = UsersManagePageActionTypes.UpdateUser;
}

export class DeleteUserSuccess implements Action {
  readonly type = UsersManagePageActionTypes.DeleteUserSuccess;
}

export class DeleteUser implements Action {
  readonly type = UsersManagePageActionTypes.DeleteUser;
}

export class LoadUsers implements Action {
  readonly type = UsersManagePageActionTypes.LoadUsers;
}

export class LoadUsersSuccesss implements Action {
  readonly type = UsersManagePageActionTypes.LoadUsersSuccesss;
}

export class LoadUsersFail implements Action {
  readonly type = UsersManagePageActionTypes.LoadUsersFail;

  constructor(public payload: HttpErrorResponse) {}
}

export class ShowUserDeleteDialog implements Action {
  readonly type = UsersManagePageActionTypes.ShowUserDeleteDialog;
}

export class HideUserDeleteDialog implements Action {
  readonly type = UsersManagePageActionTypes.HideUserDeleteDialog;
}

export class SelectUser implements Action {
  readonly type = UsersManagePageActionTypes.SelectUser;

  constructor(public payload: User) {}
}

export class ShowUserEditModalDialog implements Action {
  readonly type = UsersManagePageActionTypes.ShowUserEditModalDialog;
}

export class HideUserEditModalDialog implements Action {
  readonly type = UsersManagePageActionTypes.HideUserEditModalDialog;
}

export class UpdateUserPassword implements Action {
   readonly type = UsersManagePageActionTypes.UpdatePassword ;
 }

export class UpdatePasswordSuccess implements Action {
   readonly type = UsersManagePageActionTypes.UpdatePasswordSuccess ;
 }

export class UpdatePasswordFail implements Action {
   readonly type = UsersManagePageActionTypes.UpdatePasswordFail ;
   constructor(public payload: {error: HttpErrorResponse}) {}
 }

export type UsersManagePageActions =
  | LoadUsers
  | LoadUsersSuccesss
  | LoadUsersFail
  | ShowUserDeleteDialog
  | HideUserDeleteDialog
  | SelectUser
  | ShowUserEditModalDialog
  | HideUserEditModalDialog
  | DeleteUser
  | DeleteUserSuccess
  | UpdateUser
  | UpdateUserSuccess
  | UpdateUserFail
  | SynchronizeFormWithStore
  | ClearLoadingState
  | UpdateUserPassword
  | UpdatePasswordSuccess
  | UpdatePasswordFail
  ;



