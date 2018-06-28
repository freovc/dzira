import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TasksEntityActions, TasksEntityActionTypes } from '../actions/tasks-entity.actions';
import { Task } from '../models/task.model';

export interface State extends EntityState<Task> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: TasksEntityActions
): State {
  switch (action.type) {
    case TasksEntityActionTypes.GetBacklogTaskSuccess: {
      return adapter.addAll(action.payload.tasks, state);
    }
    case TasksEntityActionTypes.AddTasksEntity: {
      return adapter.addOne(action.payload.tasksEntity, state);
    }

    case TasksEntityActionTypes.UpsertTasksEntity: {
      return adapter.upsertOne(action.payload.tasksEntity, state);
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

    case TasksEntityActionTypes.DeleteTasksEntity: {
      return adapter.removeOne(action.payload.id, state);
    }

    case TasksEntityActionTypes.DeleteTasksEntitys: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case TasksEntityActionTypes.LoadTasksEntitys: {
      return adapter.addAll(action.payload.tasksEntitys, state);
    }

    case TasksEntityActionTypes.ClearTasksEntitys: {
      return adapter.removeAll(state);
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
