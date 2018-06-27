import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromNewProject from './new-project.reducer';
import * as fromProject from './project.reducer';
import * as fromManageProjectPage from './manage-project-page.reducer';

export interface ProjectState   {

  newProject: fromNewProject.State;
  project: fromProject.State;
  manageProjectPage: fromManageProjectPage.State;
}

export const reducers: ActionReducerMap<ProjectState> = {

  newProject: fromNewProject.reducer,
  project: fromProject.reducer,
  manageProjectPage: fromManageProjectPage.reducer,
};


export const metaReducers: MetaReducer<ProjectState>[] = !environment.production ? [] : [];

export const getProject = createFeatureSelector('project');

export const getSliceNewProject = createSelector(getProject, (state: ProjectState) => state.newProject);
export const getSliceProjects = createSelector(getProject, (state: ProjectState) => state.project);
export const getSliceManageProjectPage = createSelector(getProject, (state: ProjectState) => state.manageProjectPage);

/* New project slice */
export const getNewProject = createSelector(getSliceNewProject, fromNewProject.getNewProject);
export const getCreatingProject = createSelector(getSliceNewProject, fromNewProject.getCreatingProject);
export const getCreatingProjectFail = createSelector(getSliceNewProject, fromNewProject.getcCreatingProjectFail);

/* ProjectManage slice */
export const getLoadingProjects = createSelector(getSliceManageProjectPage, fromManageProjectPage.getLoadingProjects );
export const getLoadingProjectsSuccess = createSelector(getSliceManageProjectPage, fromManageProjectPage.getLoadingProjectsSuccess );
export const getLoadingProjectsFail = createSelector(getSliceManageProjectPage, fromManageProjectPage.getLoadingProjectsFail );
export const getSelecteProject = createSelector(getSliceManageProjectPage, fromManageProjectPage.getSelecteProject );
export const getformProject= createSelector(getSliceManageProjectPage, fromManageProjectPage.getFormProject);
export const getLoadingProjectSuccess= createSelector(getSliceManageProjectPage, fromManageProjectPage.getloadingProjectSuccess);
export const getUpdatingProjects= createSelector(getSliceManageProjectPage, fromManageProjectPage.getUpdatingProjects);
export const getUpdatingProjectsSuccess= createSelector(getSliceManageProjectPage, fromManageProjectPage.getUpdatingProjectsSuccess);
export const getUpdatingProjectsFail= createSelector(getSliceManageProjectPage, fromManageProjectPage.getUpdatingProjectsFail);
export const getDeletingProjects= createSelector(getSliceManageProjectPage, fromManageProjectPage.getDeletingProjects);
export const getDeletingProjectsSuccess= createSelector(getSliceManageProjectPage, fromManageProjectPage.getDeletingProjectsSuccess);
export const getDeletingProjectsFail= createSelector(getSliceManageProjectPage, fromManageProjectPage.getDeletingProjectsFail);

/* Project entities */
export const getProjects = createSelector(getSliceProjects, fromProject.selectAll);
export const getProjectsEntities = createSelector(getSliceProjects, fromProject.selectEntities);
