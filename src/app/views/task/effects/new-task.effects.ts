import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { NewTaskActions, NewTaskActionTypes } from '../actions/new-task.actions';

@Injectable()
export class NewTaskEffects {

  @Effect()
  effect$ = this.actions$.ofType(NewTaskActionTypes.LoadNewTasks);

  constructor(private actions$: Actions) {}
}
