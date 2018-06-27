import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Project } from '../models/project.model';

export enum NewProjectActionTypes {
  StartNewProjectForm = '[NewProject] Start new project form',
  CreateProject = '[NewProject] Create project',
  SyncForm = '[NewProject] Sync project form',
  CreatingProject = '[New Project] Creating project ',
  CreatingProjectFail = '[New Project] Creating project fail',
  CreatingProjectSuccess = '[New Project] Creating project success',
}

export class CreateProject implements Action {
  readonly type = NewProjectActionTypes.CreateProject;
}
export class SyncForm implements Action {
  readonly type = NewProjectActionTypes.SyncForm;
  constructor(public payload: {project: Project}){}
}
export class CreatingProject implements Action {
  readonly type = NewProjectActionTypes.CreatingProject;
  constructor(public payload: {}){}
}
export class CreatingProjectFail implements Action {
  readonly type = NewProjectActionTypes.CreatingProjectFail;
  constructor(public payload: {error: HttpErrorResponse}){}
}
export class CreatingProjectSuccess implements Action {
  readonly type = NewProjectActionTypes.CreatingProjectSuccess;
  constructor(public payload: {project: any}){}
}

export class StartNewProjectForm implements Action {
  readonly type = NewProjectActionTypes.StartNewProjectForm;
}

export type NewProjectActions =
  | StartNewProjectForm
  | CreateProject
  | SyncForm
  | CreatingProject
  | CreatingProjectFail
  | CreatingProjectSuccess
  ;
