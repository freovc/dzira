import { Action } from '@ngrx/store';
import { NewProjectActions, NewProjectActionTypes } from '../actions/new-project.actions';
import { Project } from '../models/project.model';

export interface State {
  startNewProjectForm: boolean;
  newProject : Project;
  creatingProject : boolean;
  creatingProjectFail : boolean;
  creatingProjectSuccess : boolean;

}

export const initialState: State = {
  startNewProjectForm: false,
  newProject: null,
  creatingProject: false,
  creatingProjectFail: false,
  creatingProjectSuccess: false,

};

export function reducer(state = initialState, action: NewProjectActions): State {
  switch (action.type) {

    case NewProjectActionTypes.StartNewProjectForm:
      return {...state, startNewProjectForm: true};

    case NewProjectActionTypes.SyncForm:
      return {
        ...state,
        newProject: {...state.newProject, ...action.payload.project}
      };
    case NewProjectActionTypes.CreateProject:
      return {
        ...state,
        creatingProject: true,
        creatingProjectFail: false,
        creatingProjectSuccess: false,
      }
        ;
    case NewProjectActionTypes.CreatingProjectFail:
      return {
        ...state,
        creatingProject: false,
        creatingProjectFail: true,
        creatingProjectSuccess: false,}
        ;
    case NewProjectActionTypes.CreatingProjectSuccess:
      return {
        ...state,
        creatingProject: false,
        creatingProjectFail: false,
        creatingProjectSuccess: true,}
        ;

    default:
      return state;
  }
}


export const getNewProject = (state: State) => state.newProject;
export const getCreatingProject = (state: State) => state.creatingProject;
export const getcCreatingProjectFail = (state: State) => state.creatingProjectFail;
