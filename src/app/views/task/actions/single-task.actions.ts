import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Task } from '../models/task.model';

export enum SingleTaskActionTypes {
  LoadSingleTask = '[SingleTask] Load SingleTasks',
  LoadSingleTaskSuccess = '[SingleTask] Load SingleTasks success',
  LoadSingleTaskFail = '[SingleTask] Load SingleTasks fail',

}

export class LoadSingleTask implements Action {
  readonly type = SingleTaskActionTypes.LoadSingleTask;
  constructor(public payload: {task: Task}){};
}
export class LoadSingleTasksSuccess implements Action {
  readonly type = SingleTaskActionTypes.LoadSingleTaskSuccess;
  constructor(public payload: {task: Task}){};
}
export class LoadSingleTaskFail implements Action {
   readonly type = SingleTaskActionTypes.LoadSingleTaskFail;
   constructor(public payload: {error: HttpErrorResponse} ) { }
 }

export type SingleTaskActions = LoadSingleTask
  | LoadSingleTasksSuccess
  | LoadSingleTaskFail;
