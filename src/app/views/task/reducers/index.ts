import {
  ActionReducerMap, createFeatureSelector, createSelector, MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromNewTask from './new-task.reducer';
import * as fromTasksEntity from './tasks-entity.reducer';
import { Task } from '../models/task.model';
import * as fromSingleTask from './single-task.reducer';

export interface State {
  tasksEntity: fromTasksEntity.State;
  newTask: fromNewTask.State;
  singleTask: fromSingleTask.State;
}

export const reducers: ActionReducerMap<State> = {
  tasksEntity: fromTasksEntity.reducer,
  newTask: fromNewTask.reducer,
  singleTask: fromSingleTask.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getTask = createFeatureSelector('taskState');


export const getSliceTasks = createSelector(getTask, (state: State) => state.tasksEntity);
export const getSliceNewTask = createSelector(getTask, (state: State) => state.newTask);
export const getSliceSingleTask = createSelector(getTask, (state: State) => state.singleTask);

/* NEW_TASK_SELECTORS */
export const getCreatingTask = createSelector(getSliceNewTask, fromNewTask.getCreatingTask);
export const getCreatingTaskFail = createSelector(getSliceNewTask, fromNewTask.getCreatingTaskFail);
export const getCreatingTaskSuccess = createSelector(getSliceNewTask, fromNewTask.getCreatingTaskSuccess);
export const getNewTask  = createSelector(getSliceNewTask, fromNewTask.getNewTask);

/* TASKS_ENTITY */
export const getTasks = createSelector(getSliceTasks, fromTasksEntity.selectAll);
export const getTasksSuccess = createSelector(getSliceTasks, fromTasksEntity.getGetTasksSuccess);
export const getGetTasksFail = createSelector(getSliceTasks, fromTasksEntity.getGetTasksFail );
export const getGetTasksFailMsg = createSelector(getSliceTasks, fromTasksEntity.getGetTasksFailMsg );
export const getGettingTasks = createSelector(getSliceTasks, fromTasksEntity.getGettingTasks );
export const getSelectedTask = createSelector(getSliceTasks, fromTasksEntity.getSelectTask );
export const getGetDeltingTask = createSelector(getSliceTasks, fromTasksEntity.getDeltingTask);
export const getGetDeltingTaskSuccess = createSelector(getSliceTasks, fromTasksEntity.getDeltingTaskSuccess);
export const getGetDeltingTaskFail = createSelector(getSliceTasks, fromTasksEntity.getDeltingTaskFail);
export const getUpdatingTask = createSelector(getSliceTasks, fromTasksEntity.getUpdatingTask);
export const getUpdatingTaskSuccess = createSelector(getSliceTasks, fromTasksEntity.getUpdatingTaskSuccess);
export const getUpdatingTaskFail = createSelector(getSliceTasks, fromTasksEntity.getUpdatingTaskFail);

/* SINGLE TASK */
export const getLoadingTask = createSelector(getSliceSingleTask, fromSingleTask.getLoadingTask);
export const getLoadingTaskSuccess = createSelector(getSliceSingleTask, fromSingleTask.getLoadingTaskSuccess);
export const getLoadingTaskFail = createSelector(getSliceSingleTask, fromSingleTask.getLoadingTaskFail);
export const getLoadedTask = createSelector(getSliceSingleTask, fromSingleTask.getLoadedTask);
