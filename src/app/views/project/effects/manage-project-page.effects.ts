import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { LoadUsers, UpdatePasswordSuccess } from '../../users/actions';
import {
  GetProject,
  GetProjectFail,
  GetProjectsSuccess,
  ManageProjectPageActionTypes,
  GetProjectSuccess, GetProjectsFail, UpdateProjectSuccess, UpdateProjectFail,
  DeleteProjectSuccess, DeleteProjectFail,
} from '../actions/manage-project-page.actions';
import {
  DeleteProject, LoadProjects, UpsertProject
} from '../actions/project.actions';
import { ProjectService } from '../project.service';
import * as fromProject from '../reducers';
import * as fromUsers from '../../users/reducers';
import {
  catchError,
  map,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class ManageProjectPageEffects {
  @Effect()
  getProjects$ = this.actions$.pipe(
    ofType(ManageProjectPageActionTypes.GetProjects),
    tap(console.log),
    switchMap(() =>
      this.projectService.getProjects().pipe(
        switchMap(projects => [
          new GetProjectsSuccess({ projects }),
          new LoadProjects({ projects }),
        ]),
        catchError((error: HttpErrorResponse) => of(new GetProjectsFail({ error }))),
      ),
    ),
  );
  @Effect()
  onSelectProject$ = this.actions$.pipe(
    ofType(ManageProjectPageActionTypes.SelectProject),
    map(() => new GetProject()),
  );
  @Effect()
  getProject$ = this.actions$.pipe(
    ofType(ManageProjectPageActionTypes.GetProject),
    withLatestFrom(this.store.select(fromProject.getSelecteProject)),
    switchMap(([action, project]) =>
      this.projectService.getProject(project.id),
    ),
    switchMap(project => [new GetProjectSuccess({formProject: project})]),
  );
  @Effect()
  updateProject$ = this.actions$.pipe(
    ofType(ManageProjectPageActionTypes.UpdateProject),
    withLatestFrom(this.store.select(fromProject.getformProject)),
    switchMap(([action, project]) =>
      this.projectService.updateProject(project.id, project).pipe(
        switchMap((project) => [new UpdateProjectSuccess({project}), new UpsertProject({project})]),
        catchError(error => of(new UpdateProjectFail(error))),
      ),
    ),
  );
  @Effect()
  deleteProject$ = this.actions$.pipe(
    ofType(ManageProjectPageActionTypes.DeleteProject),
    withLatestFrom(this.store.select(fromProject.getSelecteProject)),
    switchMap(([action, project]) => this.projectService.deleteUser(project.id).pipe(
      switchMap(response => [new DeleteProjectSuccess({}), new DeleteProject({id: project.id})]),
      catchError(error => of(new DeleteProjectFail({})))
    ))
  );
  constructor(
    private actions$: Actions,
    private store: Store<fromProject.ProjectState>,
    private projectService: ProjectService,
  ) {}
}
