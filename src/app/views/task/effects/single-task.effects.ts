import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, tap } from 'rxjs/operators';
import {
  LoadSingleTask, LoadSingleTasksSuccess, SingleTaskActionTypes
} from '../actions/single-task.actions';
import { TaskService } from '../task.service';

@Injectable()
export class SingleTaskEffects {

  @Effect()
  loadSingleTask$ = this.actions$.pipe(
    ofType<LoadSingleTask>(SingleTaskActionTypes.LoadSingleTask),
    switchMap(action =>
      this.taskService.getTask(action.payload.task).pipe(
        tap(result => console.log(result)),
        map(task => new LoadSingleTasksSuccess({task}))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private taskService: TaskService
  ) {}
}
