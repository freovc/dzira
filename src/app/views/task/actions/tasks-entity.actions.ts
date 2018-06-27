import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Task } from '../models/task.model';
export enum TasksEntityActionTypes {
  LoadTasksEntitys = '[TasksEntity] Load TasksEntitys',
  AddTasksEntity = '[TasksEntity] Add TasksEntity',
  UpsertTasksEntity = '[TasksEntity] Upsert TasksEntity',
  AddTasksEntitys = '[TasksEntity] Add TasksEntitys',
  UpsertTasksEntitys = '[TasksEntity] Upsert TasksEntitys',
  UpdateTasksEntity = '[TasksEntity] Update TasksEntity',
  UpdateTasksEntitys = '[TasksEntity] Update TasksEntitys',
  DeleteTasksEntity = '[TasksEntity] Delete TasksEntity',
  DeleteTasksEntitys = '[TasksEntity] Delete TasksEntitys',
  ClearTasksEntitys = '[TasksEntity] Clear TasksEntitys'
}

export class LoadTasksEntitys implements Action {
  readonly type = TasksEntityActionTypes.LoadTasksEntitys;

  constructor(public payload: { tasksEntitys: Task[] }) {}
}

export class AddTasksEntity implements Action {
  readonly type = TasksEntityActionTypes.AddTasksEntity;

  constructor(public payload: { tasksEntity: Task }) {}
}

export class UpsertTasksEntity implements Action {
  readonly type = TasksEntityActionTypes.UpsertTasksEntity;

  constructor(public payload: { tasksEntity: Task }) {}
}

export class AddTasksEntitys implements Action {
  readonly type = TasksEntityActionTypes.AddTasksEntitys;

  constructor(public payload: { tasksEntitys: Task[] }) {}
}

export class UpsertTasksEntitys implements Action {
  readonly type = TasksEntityActionTypes.UpsertTasksEntitys;

  constructor(public payload: { tasksEntitys: Task[] }) {}
}

export class UpdateTasksEntity implements Action {
  readonly type = TasksEntityActionTypes.UpdateTasksEntity;

  constructor(public payload: { tasksEntity: Update<Task> }) {}
}

export class UpdateTasksEntitys implements Action {
  readonly type = TasksEntityActionTypes.UpdateTasksEntitys;

  constructor(public payload: { tasksEntitys: Update<Task>[] }) {}
}

export class DeleteTasksEntity implements Action {
  readonly type = TasksEntityActionTypes.DeleteTasksEntity;

  constructor(public payload: { id: string }) {}
}

export class DeleteTasksEntitys implements Action {
  readonly type = TasksEntityActionTypes.DeleteTasksEntitys;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearTasksEntitys implements Action {
  readonly type = TasksEntityActionTypes.ClearTasksEntitys;
}

export type TasksEntityActions =
 LoadTasksEntitys
 | AddTasksEntity
 | UpsertTasksEntity
 | AddTasksEntitys
 | UpsertTasksEntitys
 | UpdateTasksEntity
 | UpdateTasksEntitys
 | DeleteTasksEntity
 | DeleteTasksEntitys
 | ClearTasksEntitys;
