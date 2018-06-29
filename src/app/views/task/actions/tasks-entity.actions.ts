import { HttpErrorResponse } from '@angular/common/http';
import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Task } from '../models/task.model';

export enum TasksEntityActionTypes {

  // set pendig state and insert all to entitiesadapter
  LoadTasksEntitysSuccess = '[TasksEntity] Load Tasks Entitys Success',

  LoadTasksEntitysFail = '[TasksEntity] Load Load Tasks Entitys Fail',

  GetBacklogTask = '[TasksEntity] Get Backlog Tasks',

  GetBacklogTaskSuccess = '[TasksEntity] Get Backlog Task Success',
  AddTasksEntity = '[TasksEntity] Add TasksEntity',
  UpsertTasksEntity = '[TasksEntity] Upsert TasksEntity',
  AddTasksEntitys = '[TasksEntity] Add TasksEntitys',
  UpsertTasksEntitys = '[TasksEntity] Upsert TasksEntitys',
  UpdateTasksEntity = '[TasksEntity] Update TasksEntity',
  UpdateTasksEntitys = '[TasksEntity] Update TasksEntitys',
  DeleteTasksEntity = '[TasksEntity] Delete TasksEntity',
  DeleteTasksEntitys = '[TasksEntity] Delete TasksEntitys',
  ClearTasksEntitys = '[TasksEntity] Clear TasksEntitys',
  ClearPendingState = '[TasksEntity] Clear Pending State',
  SelectTask = '[TaskEntity] Select on task in store',
  RequestDeleteTask = '[TaskEntity] Request Delete Task',
  RequestDeleteTaskFail = '[TaskEntity] Request Delete Task Fail',
  RequestUpdateTask = '[TaskEntity] Request Update Task',
  RequestUpdateTaskFail = '[TaskEntity] Request Update Task',

}
export class RequestUpdateTask implements Action {
  readonly type = TasksEntityActionTypes.RequestUpdateTask;
  constructor(public payload: {task: Task} ) { }
}
export class RequestUpdateTaskFail implements Action {
  readonly type = TasksEntityActionTypes.RequestUpdateTaskFail;
}
export class RequestDeleteTaskFail implements Action {
   readonly type = TasksEntityActionTypes.RequestDeleteTaskFail;
 }
export class SelectTask implements Action {
   readonly type = TasksEntityActionTypes.SelectTask;
   constructor(public payload: {selectedTask: Task}) { }
 }
export class RequestDeleteTask implements Action {
   readonly type = TasksEntityActionTypes.RequestDeleteTask;
   constructor(public payload: {task: Task} ) { }
 }

export class GetBacklogTask implements Action {
  readonly type = TasksEntityActionTypes.GetBacklogTask;
}

export class ClearPendingState implements Action {
  readonly type = TasksEntityActionTypes.ClearPendingState;
}

export class GetBacklogTaskSuccess implements Action {
  readonly type = TasksEntityActionTypes.GetBacklogTaskSuccess;

  constructor(public payload: { tasks: Task[] }) {}
}

export class LoadTasksEntitysSuccess implements Action {
  readonly type = TasksEntityActionTypes.LoadTasksEntitysSuccess;

  constructor(public payload: { tasksEntitys: Task[] }) {}
}
export class LoadTasksEntitysFail implements Action {
  readonly type = TasksEntityActionTypes.LoadTasksEntitysFail;
  constructor(public payload: { error: HttpErrorResponse }) {}
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
  | LoadTasksEntitysSuccess
  | LoadTasksEntitysFail
  | AddTasksEntity
  | UpsertTasksEntity
  | AddTasksEntitys
  | UpsertTasksEntitys
  | UpdateTasksEntity
  | UpdateTasksEntitys
  | DeleteTasksEntity
  | DeleteTasksEntitys
  | ClearTasksEntitys
  | GetBacklogTask
  | ClearPendingState
  | GetBacklogTaskSuccess
  | RequestDeleteTask
  | RequestDeleteTaskFail
  | RequestUpdateTask
  | RequestUpdateTaskFail
  | SelectTask;
