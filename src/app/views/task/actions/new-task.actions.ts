import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Task } from '../models/task.model';
import { TaskForm } from '../types/task-form';

export enum NewTaskActionTypes {
  StartNewTaskForm = '[NewTask] Start new project form',
  CreateTask = '[NewTask] Create new task',
  SyncForm = '[NewTask] Sync task form',
  CreatingTask = '[New Task] Creating task',
  CreatingTaskFail = '[New Task] Creating task fail',
  CreatingTaskSuccess = '[New Task] Creating task success',
}

export class CreateTask implements Action {
  readonly type = NewTaskActionTypes.CreateTask;
}
export class SyncForm implements Action {
  readonly type = NewTaskActionTypes.SyncForm;
  constructor(public payload: {newTask: TaskForm}){}
}
export class CreatingTask implements Action {
  readonly type = NewTaskActionTypes.CreatingTask;
  constructor(public payload: {}){}
}
export class CreatingTaskFail implements Action {
  readonly type = NewTaskActionTypes.CreatingTaskFail;
  constructor(public payload: {error: HttpErrorResponse}){}
}
export class CreatingTaskSuccess implements Action {
  readonly type = NewTaskActionTypes.CreatingTaskSuccess;
  constructor(public payload: {task: Task}){}
}

export class StartNewTaskForm implements Action {
  readonly type = NewTaskActionTypes.StartNewTaskForm;
}

export type NewTaskActions =
  | CreateTask
  | SyncForm
  | CreatingTask
  | CreatingTaskFail
  | CreatingTaskSuccess
  | StartNewTaskForm ;
