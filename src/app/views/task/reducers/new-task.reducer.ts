import { Action } from '@ngrx/store';
import {
  CreateTask, CreatingTask, CreatingTaskFail, CreatingTaskSuccess,
  NewTaskActions, NewTaskActionTypes, StartNewTaskForm, SyncForm
} from '../actions/new-task.actions';
import { TaskForm } from '../types/task-form';

export interface State {
  creatingTask : boolean;
  creatingTaskFail : boolean;
  creatingTaskSuccess : boolean;
  newTask: TaskForm;
}

export const initialState: State = {
  creatingTask: false,
  creatingTaskFail: false,
  creatingTaskSuccess: false,
  newTask: null,
};

export function reducer(state = initialState, action: NewTaskActions): State {
  switch (action.type) {

    case NewTaskActionTypes.CreateTask:
      return {
        ...state,
        creatingTask: true,
        creatingTaskSuccess: false,
        creatingTaskFail: false,
      };
    case NewTaskActionTypes.SyncForm:
      return {
        ...state,
        newTask: action.payload.newTask,

      };
    case NewTaskActionTypes.CreatingTaskFail:
      return {
        ...state,
        creatingTask: false,
        creatingTaskSuccess: false,
        creatingTaskFail: true,
      };
    case NewTaskActionTypes.CreatingTaskSuccess:
      return {
        ...state,
        creatingTask: false,
        creatingTaskSuccess: true,
        creatingTaskFail: false,
      };
    case NewTaskActionTypes.StartNewTaskForm:
      return {
        ...state,
        creatingTask: false,
        creatingTaskSuccess: false,
        creatingTaskFail: false,
      };


    default:
      return state;
  }
}
export const getCreatingTask = (state: State) => state.creatingTask;
export const getCreatingTaskFail = (state: State) => state.creatingTaskFail;
export const getCreatingTaskSuccess = (state: State) => state.creatingTaskSuccess;
export const getNewTask = (state: State) => state.newTask;
