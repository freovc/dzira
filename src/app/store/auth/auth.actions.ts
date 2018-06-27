import { Action } from '@ngrx/store';
import { User } from '../../views/users/models/User.model';

export enum AuthActionTypes {
  Authenticate = '[Auth] Authenticating',
  AuthenticatingSuccess = '[Auth] auth success',
  AuthenticatingFail = '[Auth]  auth fail',
  LogoutUser = '[Auth]  Logout',
}

export class Authenticate implements Action {
  readonly type = AuthActionTypes.Authenticate;

  constructor(public payload: { name: string; password: string }) {}
}

export class AuthenticatingSuccess implements Action {
  readonly type = AuthActionTypes.AuthenticatingSuccess;

  constructor(public payload: User) {}
}

export class AuthenticatingFail implements Action {
  readonly type = AuthActionTypes.AuthenticatingFail;
}

export class LogoutUser implements Action {
  readonly type = AuthActionTypes.LogoutUser;
}

export type AuthActions =
  | AuthenticatingSuccess
  | AuthenticatingFail
  | Authenticate
  | LogoutUser;
