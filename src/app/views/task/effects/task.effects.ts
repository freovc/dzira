import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { TaskActions, TaskActionTypes } from '../actions/task.actions';

@Injectable()
export class TaskEffects {

  @Effect()
  effect$ = this.actions$.ofType(TaskActionTypes.LoadTasks);

  constructor(private actions$: Actions) {}
}
