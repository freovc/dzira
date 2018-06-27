import {
  ManageProjectPageActions, ManageProjectPageActionTypes
} from '../actions/manage-project-page.actions';
import { Project } from '../models/project.model';

export interface State {
  updatingProjects: boolean;
  updatingProjectsSuccess: boolean;
  updatingProjectsFail: boolean;
  deletingProjects: boolean;
  deletingProjectsSuccess: boolean;
  deletingProjectsFail: boolean;
  loadingProjects: boolean;
  loadingProjectsSuccess: boolean;
  loadingProjectsFail: boolean;
  loadingProject: boolean;
  loadingProjectSuccess: boolean;
  loadingProjectFail: boolean;
  selectedProject: Project | null;
  formProject: Project | null;
  getProjectSuccess: boolean;
  getProjectFail: boolean;
};
export const ClearProgressState = {
  updatingProjects: false,
  updatingProjectsSuccess: false,
  updatingProjectsFail: false,
  deletingProjects: false,
  deletingProjectsSuccess: false,
  deletingProjectsFail: false,
  loadingProjects: false,
  loadingProjectsSuccess: false,
  loadingProjectsFail: false,
  loadingProject: false,
  loadingProjectSuccess: false,
  loadingProjectFail: false,
  selectedProject: null,
  formProject: null,
  getProjectSuccess: false,
  getProjectFail: false,
};
export const initialState: State = {
  ...ClearProgressState
};

export function reducer(state = initialState, action: ManageProjectPageActions): State {
  switch (action.type) {
    case ManageProjectPageActionTypes.SelectProject:
      return {...state, selectedProject: action.payload.project};

    case ManageProjectPageActionTypes.GetProject:
      return {
        ...state,
        formProject: null,
        loadingProject: true,
        loadingProjectSuccess: false,
        loadingProjectFail: false,
      };
    case ManageProjectPageActionTypes.GetProjectSuccess:
      return {
        ...state,
        loadingProject: false,
        loadingProjectSuccess: true,
        loadingProjectFail: false,
        formProject: {...state.formProject, ...action.payload.formProject},
      };
    case ManageProjectPageActionTypes.GetProjectFail:
      return {
        ...state,
        loadingProject: false,
        loadingProjectSuccess: false,
        loadingProjectFail: true,
      };
    case ManageProjectPageActionTypes.ClearAllState:
      return {
        ...state,
        ...ClearProgressState,
      };
    case ManageProjectPageActionTypes.GetProjects: {
      return {
        ...state,
        loadingProjects: true,
        loadingProjectsSuccess: false,
        loadingProjectsFail: false,
      };
    }
    case ManageProjectPageActionTypes.GetProjectsSuccess: {
      return {
        ...state,
        loadingProjects: false,
        loadingProjectsSuccess: true,
        loadingProjectsFail: false,

      };
    }
    case ManageProjectPageActionTypes.GetProjectsFail: {
      return {
        ...state,
        loadingProjects: false,
        loadingProjectsSuccess: false,
        loadingProjectsFail: true,
      };
    }
    case ManageProjectPageActionTypes.UpdateProject: {
      return {
        ...state,
        updatingProjects: true,
        updatingProjectsSuccess: false,
        updatingProjectsFail: false,

      };
    }
    case ManageProjectPageActionTypes.UpdateProjectSuccess: {
      return {
        ...state,
        updatingProjects: false,
        updatingProjectsSuccess: true,
        updatingProjectsFail: false,
      };
    }
    case ManageProjectPageActionTypes.UpdateProjectFail: {
      return {
        ...state,
        updatingProjects: false,
        updatingProjectsSuccess: false,
        updatingProjectsFail: true,
      };
    }
    case ManageProjectPageActionTypes.DeleteProject: {
      return {
        ...state,
        deletingProjects: true,
        deletingProjectsSuccess: false,
        deletingProjectsFail: false,

      };
    }
    case ManageProjectPageActionTypes.DeleteProjectSuccess: {
      return {
        ...state,
        deletingProjects: false,
        deletingProjectsSuccess: true,
        deletingProjectsFail: false,

      };
    }
    case ManageProjectPageActionTypes.DeleteProjectFail: {
      return {
        ...state,
        deletingProjects: false,
        deletingProjectsSuccess: false,
        deletingProjectsFail: true,

      };
    }
    case ManageProjectPageActionTypes.SynchronizeFormProject: {
        return {
        ...state,
        formProject: {...state.formProject, ...(action.payload.projectForm as Project)}
        };
    }





    default:
      return state;
  }
}

export const getLoadingProjects = (state: State) => state.loadingProjects;
export const getLoadingProjectsSuccess = (state: State) => state.loadingProjectsSuccess;
export const getLoadingProjectsFail = (state: State) => state.loadingProjectsFail;
export const getSelecteProject = (state: State) => state.selectedProject;
export const getFormProject = (state: State) => state.formProject;
export const getloadingProjectSuccess = (state: State) => state.loadingProjectSuccess;
export const getProjectFail = (state: State) => state.getProjectFail;
export const getUpdatingProjects = (state: State) => state.updatingProjects;
export const getUpdatingProjectsSuccess = (state: State) => state.updatingProjectsSuccess;
export const getUpdatingProjectsFail = (state: State) => state.updatingProjectsFail;
export const getDeletingProjects = (state: State) => state.deletingProjects;
export const getDeletingProjectsSuccess = (state: State) => state.deletingProjectsSuccess;
export const getDeletingProjectsFail = (state: State) => state.deletingProjectsFail;



