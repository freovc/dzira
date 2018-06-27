import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
  UserEntityActions,
  UserEntityActionTypes,
} from '../actions/user-entity.actions';
import { UserEntity } from '../models/user-entity.model';

export interface State extends EntityState<UserEntity> {
  // additional entities state properties
}

export const adapter: EntityAdapter<UserEntity> = createEntityAdapter<
  UserEntity
>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: UserEntityActions,
): State {
  switch (action.type) {
    case UserEntityActionTypes.AddUserEntity: {
      return adapter.addOne(action.payload.userEntity, state);
    }

    case UserEntityActionTypes.UpsertUserEntity: {
      return adapter.upsertOne(action.payload.userEntity, state);
    }

    case UserEntityActionTypes.AddUserEntitys: {
      return adapter.addMany(action.payload.userEntitys, state);
    }

    case UserEntityActionTypes.UpsertUserEntitys: {
      return adapter.upsertMany(action.payload.userEntitys, state);
    }

    case UserEntityActionTypes.UpdateUserEntity: {
      return adapter.updateOne(action.payload.userEntity, state);
    }

    case UserEntityActionTypes.UpdateUserEntitys: {
      return adapter.updateMany(action.payload.userEntitys, state);
    }

    case UserEntityActionTypes.DeleteUserEntity: {
      return adapter.removeOne(action.payload.id, state);
    }

    case UserEntityActionTypes.DeleteUserEntitys: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case UserEntityActionTypes.LoadUserEntitys: {
      return adapter.addAll(action.payload.userEntitys, state);
    }

    case UserEntityActionTypes.ClearUserEntitys: {
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
