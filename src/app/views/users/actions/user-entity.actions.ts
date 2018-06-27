import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { User } from '../models/User.model';

export enum UserEntityActionTypes {
  LoadUserEntitys = '[UserEntity] Load UserEntitys',
  AddUserEntity = '[UserEntity] Add UserEntity',
  UpsertUserEntity = '[UserEntity] Upsert UserEntity',
  AddUserEntitys = '[UserEntity] Add UserEntitys',
  UpsertUserEntitys = '[UserEntity] Upsert UserEntitys',
  UpdateUserEntity = '[UserEntity] Update UserEntity',
  UpdateUserEntitys = '[UserEntity] Update UserEntitys',
  DeleteUserEntity = '[UserEntity] Delete UserEntity',
  DeleteUserEntitys = '[UserEntity] Delete UserEntitys',
  ClearUserEntitys = '[UserEntity] Clear UserEntitys',
}

export class LoadUserEntitys implements Action {
  readonly type = UserEntityActionTypes.LoadUserEntitys;

  constructor(public payload: { userEntitys: User[] }) {}
}

export class AddUserEntity implements Action {
  readonly type = UserEntityActionTypes.AddUserEntity;

  constructor(public payload: { userEntity: User }) {}
}

export class UpsertUserEntity implements Action {
  readonly type = UserEntityActionTypes.UpsertUserEntity;

  constructor(public payload: { userEntity: User }) {}
}

export class AddUserEntitys implements Action {
  readonly type = UserEntityActionTypes.AddUserEntitys;

  constructor(public payload: { userEntitys: User[] }) {}
}

export class UpsertUserEntitys implements Action {
  readonly type = UserEntityActionTypes.UpsertUserEntitys;

  constructor(public payload: { userEntitys: User[] }) {}
}

export class UpdateUserEntity implements Action {
  readonly type = UserEntityActionTypes.UpdateUserEntity;

  constructor(public payload: { userEntity: Update<User> }) {}
}

export class UpdateUserEntitys implements Action {
  readonly type = UserEntityActionTypes.UpdateUserEntitys;

  constructor(public payload: { userEntitys: Update<User>[] }) {}
}

export class DeleteUserEntity implements Action {
  readonly type = UserEntityActionTypes.DeleteUserEntity;

  constructor(public payload: { id: string }) {}
}

export class DeleteUserEntitys implements Action {
  readonly type = UserEntityActionTypes.DeleteUserEntitys;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearUserEntitys implements Action {
  readonly type = UserEntityActionTypes.ClearUserEntitys;
}

export type UserEntityActions =
  | LoadUserEntitys
  | AddUserEntity
  | UpsertUserEntity
  | AddUserEntitys
  | UpsertUserEntitys
  | UpdateUserEntity
  | UpdateUserEntitys
  | DeleteUserEntity
  | DeleteUserEntitys
  | ClearUserEntitys;
