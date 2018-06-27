import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, tap, withLatestFrom, switchMap } from 'rxjs/operators';
import {
  CreatingProjectFail,
  CreatingProjectSuccess,
  NewProjectActionTypes,
} from '../actions/new-project.actions';
import { Project } from '../models/project.model';
import { ProjectService } from '../project.service';
import * as fromProject from '../reducers';

@Injectable()
export class NewProjectEffects {
  @Effect()
  startNewProject$ = this.actions$.pipe(
    ofType(NewProjectActionTypes.StartNewProjectForm),
    tap(action => console.log),
  );

  @Effect()
  createProject$ = this.actions$.pipe(
    ofType(NewProjectActionTypes.CreateProject),
    withLatestFrom(this.store.select(fromProject.getNewProject)),
    map(([action, project]) => project),
    switchMap(project =>
      this.projectService.createProject(project).pipe(
        switchMap(() => [new CreatingProjectSuccess({ project: null })]),
        catchError(error => of(new CreatingProjectFail(error))),
      ),
    ),
  );

  @Effect({dispatch: false})
  creatingProjectSucces$ = this.actions$.pipe(
    ofType(NewProjectActionTypes.CreatingProjectSuccess),
    map(ignore => this.router.navigate(['/projects/create-success'])),
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromProject.ProjectState>,
    private projectService: ProjectService,
    private router: Router,
  ) {}
}
