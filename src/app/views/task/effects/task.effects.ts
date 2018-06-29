import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
// import { switchMap } from 'rxjs-compat/operator/switchMap';
import {
  catchError,
  map,
  tap,
  withLatestFrom,
  switchMap, mapTo,
} from 'rxjs/operators';
import { of, EMPTY  } from 'rxjs';
import {
  CreatingTaskFail,
  CreatingTaskSuccess,
  NewTaskActionTypes,
  StartNewTaskForm,
} from '../actions/new-task.actions';
import * as fromTask from '../reducers';
import { TaskService } from '../task.service';
import {
  DeleteTasksEntity,
  GetBacklogTask, GetBacklogTaskSuccess, LoadTasksEntitysFail,
  LoadTasksEntitysSuccess, RequestDeleteTask, RequestDeleteTaskFail,
  TasksEntityActionTypes
} from '../actions/tasks-entity.actions';
@Injectable()
export class TaskEffects {
  @Effect()
  createTask$ = this.actions$.pipe(
    ofType(NewTaskActionTypes.CreateTask),
    withLatestFrom(this.store.select(fromTask.getNewTask)),
    map(([action, task]) => task),
    switchMap(task =>
      this.taskService.createTask(task).pipe(
        switchMap(task => [new CreatingTaskSuccess({ task: task })]),
        catchError(error => of(new CreatingTaskFail({ error }))),
      ),
    ),
  );


  @Effect()
  createTaskSuccess$ = this.actions$.pipe(
    ofType(NewTaskActionTypes.CreatingTaskSuccess),
    tap(() => this.router.navigate(['/tasks/create-success'])),
    map(() => new StartNewTaskForm()),
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store<fromTask.State>,
    private taskService: TaskService,
  ) {}
  @Effect()
  requestDeleteTask$ = this.actions$.pipe(
    ofType<RequestDeleteTask>(TasksEntityActionTypes.RequestDeleteTask),
    switchMap(action =>
      this.taskService.deleteTask(action.payload.task).pipe(
        mapTo(new DeleteTasksEntity({id: action.payload.task.id})),
        catchError(error => of(new RequestDeleteTaskFail())),
      )
    )

  )
  @Effect()
  getBacklogTask$ = this.actions$.pipe(
    ofType(TasksEntityActionTypes.GetBacklogTask),
    switchMap(() => this.taskService.getTasksWithoutMember().pipe(
      switchMap(tasksEntitys => [new LoadTasksEntitysSuccess({tasksEntitys})]),
      catchError(error => [new LoadTasksEntitysFail({error})])
    )),
  );
}
