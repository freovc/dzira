import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Task } from '../models/task.model';

export interface State extends EntityState<Task> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
