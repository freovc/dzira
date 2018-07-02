import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
// import { switchMap } from 'rxjs-compat/operator/switchMap';
import {
  catchError, map, mapTo, switchMap, tap, withLatestFrom,
} from 'rxjs/operators';
import {
  CreatingTaskFail, CreatingTaskSuccess, NewTaskActionTypes, StartNewTaskForm,
} from '../actions/new-task.actions';
import {
  DeleteTasksEntity, LoadTasksEntitysFail, LoadTasksEntitysSuccess,
  RequestDeleteTask, RequestDeleteTaskFail, TasksEntityActionTypes,
  RequestUpdateTask, RequestUpdateTaskFail, UpsertTasksEntity
} from '../actions/tasks-entity.actions';
import * as fromTask from '../reducers';
import * as fromRoot from '../../../reducers';
import { TaskService } from '../task.service';

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

  );
  @Effect()
  requestUpdateTask$ = this.actions$.pipe(
    ofType<RequestUpdateTask>(TasksEntityActionTypes.RequestUpdateTask),
    switchMap(action =>
      this.taskService.updateTask(action.payload.task)
        .pipe(
          switchMap(task => [new UpsertTasksEntity({tasksEntity: {...task} })]),
          catchError(error => of(new RequestUpdateTaskFail()))
      )
    )
  );
  @Effect()
  getBacklogTask$ = this.actions$.pipe(
    ofType(TasksEntityActionTypes.GetBacklogTask),
    switchMap(() => this.taskService.getTasksWithoutMember().pipe(
      switchMap(tasksEntitys => [new LoadTasksEntitysSuccess({tasksEntitys})]),
      catchError(error => [new LoadTasksEntitysFail({error})])
    )),
  );
  @Effect()
  getTaskboardTask$ = this.actions$.pipe(
    ofType(TasksEntityActionTypes.GetTaskboardTask),
    switchMap(() => this.taskService.getTasks().pipe(
      switchMap(tasksEntitys => [new LoadTasksEntitysSuccess({tasksEntitys})]),
      catchError(error => [new LoadTasksEntitysFail({error})])
    )),
  );
  @Effect()
  getLoggedUserTask$ = this.actions$.pipe(
    ofType(TasksEntityActionTypes.GetLoggedUserTask),
    withLatestFrom(this.store.select(fromRoot.getAuthenticatedUser)),
    switchMap(([action, user]) => this.taskService.getUserTasks({userId: user.userId}).pipe(
      switchMap(tasksEntitys => [new LoadTasksEntitysSuccess({tasksEntitys})]),
      catchError(error => [new LoadTasksEntitysFail({error})])
    )),
  );
}
