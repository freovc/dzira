import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Project } from '../models/project.model';

export enum ManageProjectPageActionTypes {
  GetProjects = '[ManageProjectPage] Get projects',
  GetProjectsSuccess = '[ManageProjectPage] Get projects Success',
  GetProjectsFail = '[ManageProjectPage] Get projects Fail',
  UpdateProject = '[ManageProjectPage] UpdateProject',
  UpdateProjectSuccess = '[ManageProjectPage] UpdateProjectSuccess',
  UpdateProjectFail= '[ManageProjectPage] UpdateProjecFail',
  DeleteProject = '[ManageProjectPage] DeleteProject',
  DeleteProjectSuccess = '[ManageProjectPage] DeleteProjectSuccess',
  DeleteProjectFail= '[ManageProjectPage] DeleteProjecFail',
  GetProject = '[ManageProjectPage] Get project',
  GetProjectSuccess = '[ManageProjectPage] Get project Success',
  GetProjectFail = '[ManageProjectPage] Get project Fail',
  ClearAllState = '[ManageProjectPage] Clear all progress state',
  SelectProject = '[ManageProjectPage] Select Project',
  SynchronizeFormProject= '[ManageProjectPage] Synchronize form project',
}

export class SynchronizeFormProject implements Action {
   readonly type = ManageProjectPageActionTypes.SynchronizeFormProject;
   constructor(public payload: {projectForm: Project}) { }
 }


export class SelectProject implements Action {

  readonly type = ManageProjectPageActionTypes.SelectProject;
  constructor(public payload: {project: Project}) { }
}

export class ClearAllState implements Action {l
  readonly type = ManageProjectPageActionTypes.ClearAllState;
}
export class GetProjects implements Action {
  readonly type = ManageProjectPageActionTypes.GetProjects;
}
export class GetProjectsSuccess implements Action {
  readonly type = ManageProjectPageActionTypes.GetProjectsSuccess;
  constructor(public payload: {projects: Project[]}) {}
}
export class GetProjectsFail implements Action {
  readonly type = ManageProjectPageActionTypes.GetProjectsFail;
  constructor(public payload: {error: HttpErrorResponse}) {}
}
export class UpdateProject implements Action {
  readonly type = ManageProjectPageActionTypes.UpdateProject;
}
export class UpdateProjectSuccess implements Action {
  readonly type = ManageProjectPageActionTypes.UpdateProjectSuccess;
  constructor(public payload: {project: Project}) {}
}
export class UpdateProjectFail implements Action {
  readonly type = ManageProjectPageActionTypes.UpdateProjectFail;
  constructor(public payload: {}) {}
}
export class DeleteProject implements Action {
  readonly type = ManageProjectPageActionTypes.DeleteProject;
  constructor(public payload: {projectId: number | string}) {}
}
export class DeleteProjectSuccess implements Action {
  readonly type = ManageProjectPageActionTypes.DeleteProjectSuccess;
  constructor(public payload: {}) {}
}
export class DeleteProjectFail implements Action {
  readonly type = ManageProjectPageActionTypes.DeleteProjectFail;
  constructor(public payload: {}) {}
}
export class GetProject implements Action {
  readonly type = ManageProjectPageActionTypes.GetProject;
}
export class GetProjectSuccess implements Action {
  readonly type = ManageProjectPageActionTypes.GetProjectSuccess;
  constructor(public payload: {formProject: Project}) {}
}
export class GetProjectFail implements Action {
  readonly type = ManageProjectPageActionTypes.GetProjectFail;
  constructor(public payload: {error: HttpErrorResponse}) {}
}


export type ManageProjectPageActions =
  | GetProjects
  | GetProjectsSuccess
  | GetProjectsFail
  | UpdateProject
  | UpdateProjectSuccess
  | UpdateProjectFail
  | DeleteProject
  | DeleteProjectSuccess
  | DeleteProjectFail
  | GetProject
  | GetProjectSuccess
  | GetProjectFail
  | ClearAllState
  | SelectProject
  | SynchronizeFormProject
  ;
