import {
  UserFormPageActions,
  UserFormPageActionTypes,
} from '../actions/user-form-page.actions';

export interface State {
  loading: boolean;
  loadingSuccess: boolean;
  loadingFail: boolean; // additional entities state properties
  errorMsg: string; // additional entities state properties
}

export const initialState: State = {
  loading: false,
  loadingSuccess: false,
  loadingFail: false,
  errorMsg: null,
};

export function reducer(
  state = initialState,
  action: UserFormPageActions,
): State {
  switch (action.type) {
    case UserFormPageActionTypes.CreateUser: {
      return {
        ...state,
        loading: true,
        loadingSuccess: false,
        loadingFail: false,
      };
    }
    case UserFormPageActionTypes.CreatingUserSuccess: {
      return {
        ...state,
        loading: false,
        loadingSuccess: true,
        loadingFail: false,
      };
    }
    case UserFormPageActionTypes.CreatingUserFail: {
      return {
        ...state,
        loading: false,
        loadingSuccess: false,
        loadingFail: true,
        errorMsg: action.payload.message,
      };
    }

    default:
      return state;
  }
}

export const getIsCreatingUser = (state: State) => state.loading;
export const getIsCreatingUserSucces = (state: State) => state.loadingSuccess;
export const getIsCreatingUserFail = (state: State) => state.loadingFail;
export const getErrorMsg = (state: State) => state.errorMsg;
