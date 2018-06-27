import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Project } from '../models/project.model';
import { ProjectActions, ProjectActionTypes } from '../actions/project.actions';

export interface State extends EntityState<Project> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Project> = createEntityAdapter<Project>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: ProjectActions
): State {
  switch (action.type) {
    case ProjectActionTypes.AddProject: {
      return adapter.addOne(action.payload.project, state);
    }

    case ProjectActionTypes.UpsertProject: {
      return adapter.upsertOne(action.payload.project, state);
    }

    case ProjectActionTypes.AddProjects: {
      return adapter.addMany(action.payload.projects, state);
    }

    case ProjectActionTypes.UpsertProjects: {
      return adapter.upsertMany(action.payload.projects, state);
    }

    case ProjectActionTypes.UpdateProject: {
      return adapter.updateOne(action.payload.project, state);
    }

    case ProjectActionTypes.UpdateProjects: {
      return adapter.updateMany(action.payload.projects, state);
    }

    case ProjectActionTypes.DeleteProject: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ProjectActionTypes.DeleteProjects: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ProjectActionTypes.LoadProjects: {
      return adapter.addAll(action.payload.projects, state);
    }

    case ProjectActionTypes.ClearProjects: {
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
