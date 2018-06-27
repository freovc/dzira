import { Action } from '@ngrx/store';

export enum UserPasswordActionTypes {
  SetOldPassword = '[UserPassword] Set old password',
  SetNewPassword = '[UserPassword] Set new password',
}

export class SetOldPassword implements Action {
  readonly type = UserPasswordActionTypes.SetOldPassword;

  constructor(public payload: {oldPassword: string}) { }
}

export class SetNewPassword implements Action {
  readonly type = UserPasswordActionTypes.SetNewPassword;

  constructor(public payload: {newPassword: string}) { }
}

export type UserPasswordActions = SetOldPassword | SetNewPassword;
