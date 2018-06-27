import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromTask from './task.reducer';
import * as fromNewTask from './new-task.reducer';
import * as fromTasksEntity from './tasks-entity.reducer';

export interface State {

  task: fromTask.State;
  newTask: fromNewTask.State;
}

export const reducers: ActionReducerMap<State> = {

  task: fromTask.reducer,
  newTask: fromNewTask.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getTask = createFeatureSelector('taskState');

export const getSliceTask = createSelector(getTask, (state: State) => state.task);
export const getSliceNewTask = createSelector(getTask, (state: State) => state.newTask);

/* NEW_TASK_SELECTORS */
export const getCreatingTask = createSelector(getSliceNewTask, fromNewTask.getCreatingTask);
export const getCreatingTaskFail = createSelector(getSliceNewTask, fromNewTask.getCreatingTaskFail);
export const getCreatingTaskSuccess = createSelector(getSliceNewTask, fromNewTask.getCreatingTaskSuccess);
export const getNewTask  = createSelector(getSliceNewTask, fromNewTask.getNewTask);
