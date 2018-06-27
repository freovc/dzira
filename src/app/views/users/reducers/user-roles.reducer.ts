import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
  UserRolesActions,
  UserRolesActionTypes,
} from '../actions/user-roles.actions';
import { UserRole } from '../models/user-roles.model';

export interface State extends EntityState<UserRole> {
  loading: boolean;
  loadingSuccess: boolean;
  loadingFail: boolean; // additional entities state properties
  errorMsg: string; // additional entities state properties
}

export const adapter: EntityAdapter<UserRole> = createEntityAdapter<UserRole>();

export const initialState: State = adapter.getInitialState({
  loading: false,
  loadingSuccess: false,
  loadingFail: false,
  errorMsg: null,
});

export function reducer(state = initialState, action: UserRolesActions): State {
  switch (action.type) {
    case UserRolesActionTypes.LoadUserRoles: {
      return {
        ...state,
        loading: true,
        loadingSuccess: false,
        loadingFail: false,
      };
    }

    case UserRolesActionTypes.LoadUserRolesSuccess: {
      return adapter.addAll(action.payload, {
        ...state,
        loading: false,
        loadingSuccess: true,
      });
    }

    case UserRolesActionTypes.LoadUserRolesFail: {
      return {
        ...state,
        errorMsg: action.payload.error,
        loading: false,
        loadingSuccess: false,
        loadingFail: true,
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

export const getIsLoadingSuccess = (state: State) => state.loadingSuccess;
export const geterrorMsg = (state: State) => state.errorMsg;
