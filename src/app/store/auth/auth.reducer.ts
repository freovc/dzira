import { AuthActions, AuthActionTypes } from './auth.actions';

export interface State {
  isAuth: boolean;
  fullName: string;
  userId: number;
  group: string;
  loading: boolean;
  success: boolean;
  fail: boolean;
}

export const initialState: State = {
  isAuth: false,
  fullName: null,
  userId: null,
  group: null,
  loading: false,
  success: false,
  fail: false,
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.Authenticate: {
      return { ...state, loading: true };
    }
    case AuthActionTypes.AuthenticatingSuccess: {
      return {
        ...state,
        success: true,
        loading: false,
        isAuth: true,
        userId: action.payload.id,
        fullName: action.payload.fullName,
      };
    }
    case AuthActionTypes.AuthenticatingFail: {
      return {
        ...state,
        isAuth: false,
        userId: null,
        loading: false,
        fail: true,
        success: false,
      };
    }
    case AuthActionTypes.LogoutUser: {
      return {
        ...state,
        ...initialState,
      };
    }
    default:
      return state;
  }
}

export const getIsAuthenticated = (state: State) => state.isAuth;
export const getAuthenticatedUser = (state: State) => ({
  userId: state.userId,
  fullName: state.fullName,
  group: state.group,
});
export const getIsLoadint = (state: State) => state.loading;
export const getIsSuccess = (state: State) => state.success;
export const getIsFail = (state: State) => state.fail;
