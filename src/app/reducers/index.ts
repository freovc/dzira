import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAuth from '../store/auth/auth.reducer';

export interface State {
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const getAuthState = createFeatureSelector('auth');
export const getIsAuthenticated = createSelector(
  getAuthState,
  fromAuth.getIsAuthenticated,
);
export const getAuthenticatedUser = createSelector(
  getAuthState,
  fromAuth.getAuthenticatedUser,
);
export const getIsLoadint = createSelector(getAuthState, fromAuth.getIsLoadint);
export const getIsSuccess = createSelector(getAuthState, fromAuth.getIsSuccess);
export const getIsFail = createSelector(getAuthState, fromAuth.getIsFail);
