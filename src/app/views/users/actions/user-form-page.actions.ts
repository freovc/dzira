import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { User } from '../models/User.model';

export enum UserFormPageActionTypes {
  CreateUser = '[UserFormPage] CreatingUser',
  CreatingUserSuccess = '[UserFormPage] CreatingUserSuccess',
  CreatingUserFail = '[UserFormPage] CreatingUserFail',
}

export class CreateUser implements Action {
  readonly type = UserFormPageActionTypes.CreateUser;

  constructor(public payload: User) {}
}

export class CreatingUserSuccess implements Action {
  readonly type = UserFormPageActionTypes.CreatingUserSuccess;

  constructor(public payload: User) {}
}

export class CreatingUserFail implements Action {
  readonly type = UserFormPageActionTypes.CreatingUserFail;

  constructor(public payload: HttpErrorResponse) {}
}

export type UserFormPageActions =
  | CreateUser
  | CreatingUserSuccess
  | CreatingUserFail;
