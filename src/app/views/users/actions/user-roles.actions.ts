import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { UserRole } from '../models/user-roles.model';

export enum UserRolesActionTypes {
  LoadUserRoles = '[UserRoles] Load UserRoless',
  LoadUserRolesSuccess = '[UserRoles] LoadUserRolesSuccess',
  LoadUserRolesFail = '[UserRoles] LoadUserRolesFail',
}

export class LoadUserRoles implements Action {
  readonly type = UserRolesActionTypes.LoadUserRoles;
}

export class LoadUserRolesSuccess implements Action {
  readonly type = UserRolesActionTypes.LoadUserRolesSuccess;

  constructor(public payload: UserRole[]) {}
}

export class LoadUserRolesFail implements Action {
  readonly type = UserRolesActionTypes.LoadUserRolesFail;

  constructor(public payload: HttpErrorResponse) {}
}

export type UserRolesActions =
  | LoadUserRoles
  | LoadUserRolesSuccess
  | LoadUserRolesFail;
