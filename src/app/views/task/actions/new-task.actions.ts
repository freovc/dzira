import { Action } from '@ngrx/store';

export enum NewTaskActionTypes {
  LoadNewTasks = '[NewTask] Load NewTasks'
}

export class NewTask implements Action {
  readonly type = NewTaskActionTypes.LoadNewTasks;
}

export type NewTaskActions = LoadNewTasks;
