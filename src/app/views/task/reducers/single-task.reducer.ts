import {
  LoadSingleTaskFail,
  SingleTaskActions, SingleTaskActionTypes
} from '../actions/single-task.actions';
import { Task } from '../models/task.model';

export interface State {
  loadingTask: boolean;
  loadingTaskSuccess: boolean;
  loadingTaskFail: boolean;
  loadedTask: Task;
}

export const initialState: State = {
  loadingTask: false,
  loadingTaskSuccess: false,
  loadingTaskFail: false,
  loadedTask: null,
};

export function reducer(state = initialState, action: SingleTaskActions): State {
  switch (action.type) {

    case SingleTaskActionTypes.LoadSingleTask:
      return {
        ...state,
        loadingTask: true,
        loadingTaskSuccess: false,
        loadingTaskFail: false,
      };
    case SingleTaskActionTypes.LoadSingleTaskSuccess:
        return {
          ...state,
          loadingTask: false,
          loadingTaskSuccess: true,
          loadingTaskFail: false,
          loadedTask: action.payload.task
        };
    case SingleTaskActionTypes.LoadSingleTaskFail:
      return {
        ...state,
        loadingTask: false,
        loadingTaskSuccess: false,
        loadingTaskFail: true,
      };
    default:
      return state
  }
}
export const getLoadingTask = (state: State) => state.loadingTask;
export const getLoadingTaskSuccess = (state: State) => state.loadingTaskSuccess;
export const getLoadingTaskFail = (state: State) => state.loadingTaskFail;
export const getLoadedTask = (state: State) => state.loadedTask;
