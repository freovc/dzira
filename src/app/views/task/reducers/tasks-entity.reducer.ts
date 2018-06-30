import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
  SelectTask,
  TasksEntityActions,
  TasksEntityActionTypes,
} from '../actions/tasks-entity.actions';
import { Task } from '../models/task.model';

export interface State extends EntityState<Task> {
  gettingTask: boolean;
  getTasksSuccess: boolean;
  getTasksFail: boolean;
  getTasksFailMsg: string;
  selectedTask: Task;
  deltingTask: boolean;
  deltingTaskSuccess: boolean;
  deltingTaskFail: boolean;
  updatingTask: boolean;
  updatingTaskSuccess: boolean;
  updatingTaskFail: boolean;
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: State = adapter.getInitialState({
  gettingTask: false,
  getTasksSuccess: false,
  getTasksFail: false,
  getTasksFailMsg: null,
  selectedTask: null,
  deltingTask: false,
  deltingTaskSuccess: false,
  deltingTaskFail: false,
  updatingTask: false,
  updatingTaskSuccess: false,
  updatingTaskFail: false,

  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: TasksEntityActions,
): State {
  switch (action.type) {
    case TasksEntityActionTypes.RequestUpdateTask: {
        return {
        ...state,
          updatingTask: true,
          updatingTaskSuccess: false,
          updatingTaskFail: false,

        };
    }
    case TasksEntityActionTypes.RequestUpdateTaskFail: {
      return {
        ...state,
        updatingTask: false,
        updatingTaskSuccess: false,
        updatingTaskFail: true,

      };
    }
    case TasksEntityActionTypes.RequestDeleteTask:
      return {
        ...state,
        deltingTask: true,
        deltingTaskFail: false,
        deltingTaskSuccess: false,
      };
    case TasksEntityActionTypes.RequestDeleteTaskFail:
      return {
        ...state,
        deltingTask: false,
        deltingTaskFail: true,
        deltingTaskSuccess: false,
      };
    case TasksEntityActionTypes.DeleteTasksEntity: {
      return adapter.removeOne(action.payload.id, {
        ...state,
        deltingTask: false,
        deltingTaskFail: false,
        deltingTaskSuccess: true,
      });
    }
    case TasksEntityActionTypes.GetBacklogTask: {
      return {
        ...state,
        gettingTask: true,
        getTasksSuccess: false,
        getTasksFail: false,
        getTasksFailMsg: null,
      };
    }
    case TasksEntityActionTypes.AddTasksEntity: {
      return adapter.addOne(action.payload.tasksEntity, state);
    }
    case TasksEntityActionTypes.UpsertTasksEntity: {
      return adapter.upsertOne(action.payload.tasksEntity, {
        ...state,
        updatingTask: false,
        updatingTaskSuccess: true,
        updatingTaskFail: false,
      });
    }
    case TasksEntityActionTypes.AddTasksEntitys: {
      return adapter.addMany(action.payload.tasksEntitys, state);
    }
    case TasksEntityActionTypes.UpsertTasksEntitys: {
      return adapter.upsertMany(action.payload.tasksEntitys, state);
    }
    case TasksEntityActionTypes.UpdateTasksEntity: {
      return adapter.updateOne(action.payload.tasksEntity, state);
    }
    case TasksEntityActionTypes.UpdateTasksEntitys: {
      return adapter.updateMany(action.payload.tasksEntitys, state);
    }

    case TasksEntityActionTypes.DeleteTasksEntitys: {
      return adapter.removeMany(action.payload.ids, state);
    }
    case TasksEntityActionTypes.LoadTasksEntitysSuccess: {
      return adapter.addAll(action.payload.tasksEntitys, {
        ...state,
        gettingTask: false,
        getTasksSuccess: true,
        getTasksFail: false,
        getTasksFailMsg: null,
      });
    }
    case TasksEntityActionTypes.LoadTasksEntitysFail: {
      return {
        ...state,
        gettingTask: false,
        getTasksSuccess: false,
        getTasksFail: true,
        getTasksFailMsg: action.payload.error.message,
      };
    }
    case TasksEntityActionTypes.ClearTasksEntitys: {
      return adapter.removeAll({
        ...initialState,
      });
    }
    case TasksEntityActionTypes.ClearPendingState:
      return {
        ...state,
        selectedTask: null,
        deltingTask: false,
        deltingTaskSuccess: false,
        deltingTaskFail: false,
        updatingTask: false,
        updatingTaskSuccess: false,
        updatingTaskFail: false,
      };
    case TasksEntityActionTypes.SelectTask: {
      return {
        ...state,
        selectedTask: action.payload.selectedTask,
      };
    }
    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const getGetTasksSuccess = (state: State) => state.getTasksSuccess;
export const getGetTasksFail = (state: State) => state.getTasksFail;
export const getGetTasksFailMsg = (state: State) => state.getTasksFailMsg;
export const getGettingTasks = (state: State) => state.gettingTask;
export const getSelectTask = (state: State) => state.selectedTask;
export const getDeltingTask = (state: State) => state.deltingTask;
export const getDeltingTaskSuccess = (state: State) => state.deltingTaskSuccess;
export const getDeltingTaskFail = (state: State) => state.deltingTaskFail;
export const getUpdatingTask = (state: State) => state.updatingTask;
export const getUpdatingTaskSuccess = (state: State) => state.updatingTaskSuccess;
export const getUpdatingTaskFail = (state: State) => state.updatingTaskFail;
