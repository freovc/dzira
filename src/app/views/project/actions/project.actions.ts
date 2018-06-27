import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Project } from '../models/project.model';

export enum ProjectActionTypes {
  LoadProjects = '[Project] Load Projects',
  AddProject = '[Project] Add Project',
  UpsertProject = '[Project] Upsert Project',
  AddProjects = '[Project] Add Projects',
  UpsertProjects = '[Project] Upsert Projects',
  UpdateProject = '[Project] Update Project',
  UpdateProjects = '[Project] Update Projects',
  DeleteProject = '[Project] Delete Project',
  DeleteProjects = '[Project] Delete Projects',
  ClearProjects = '[Project] Clear Projects'
}

export class LoadProjects implements Action {
  readonly type = ProjectActionTypes.LoadProjects;

  constructor(public payload: { projects: Project[] }) {}
}

export class AddProject implements Action {
  readonly type = ProjectActionTypes.AddProject;

  constructor(public payload: { project: Project }) {}
}

export class UpsertProject implements Action {
  readonly type = ProjectActionTypes.UpsertProject;

  constructor(public payload: { project: Project }) {}
}

export class AddProjects implements Action {
  readonly type = ProjectActionTypes.AddProjects;

  constructor(public payload: { projects: Project[] }) {}
}

export class UpsertProjects implements Action {
  readonly type = ProjectActionTypes.UpsertProjects;

  constructor(public payload: { projects: Project[] }) {}
}

export class UpdateProject implements Action {
  readonly type = ProjectActionTypes.UpdateProject;

  constructor(public payload: { project: Update<Project> }) {}
}

export class UpdateProjects implements Action {
  readonly type = ProjectActionTypes.UpdateProjects;

  constructor(public payload: { projects: Update<Project>[] }) {}
}

export class DeleteProject implements Action {
  readonly type = ProjectActionTypes.DeleteProject;

  constructor(public payload: { id: string }) {}
}

export class DeleteProjects implements Action {
  readonly type = ProjectActionTypes.DeleteProjects;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearProjects implements Action {
  readonly type = ProjectActionTypes.ClearProjects;
}

export type ProjectActions =
 LoadProjects
 | AddProject
 | UpsertProject
 | AddProjects
 | UpsertProjects
 | UpdateProject
 | UpdateProjects
 | DeleteProject
 | DeleteProjects
 | ClearProjects;
