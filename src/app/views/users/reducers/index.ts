import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromUserEntity from './user-entity.reducer';
import * as fromUserFormPage from './user-form-page.reducer';
import * as fromUserRoles from './user-roles.reducer';
import * as fromUsers from './users-manage-page.reducer';
import * as fromUserPassword from './user-password.reducer';

export interface State {
  usersManagePage: fromUsers.State;
  userEntity: fromUserEntity.State;
  userFormPage: fromUserFormPage.State;
  userRoles: fromUserRoles.State;
  userPassword: fromUserPassword.State;
}

export const reducers: ActionReducerMap<State> = {
  usersManagePage: fromUsers.reducer,
  userEntity: fromUserEntity.reducer,
  userFormPage: fromUserFormPage.reducer,
  userRoles: fromUserRoles.reducer,
  userPassword: fromUserPassword.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const getUsersState = createFeatureSelector('usersState');

export const getSliceUserPassword = createSelector(getUsersState, (state: State) => state.userPassword);

export const getSliceUsers = createSelector(
  getUsersState,
  (state: State) => state.usersManagePage,
);
export const getSliceUsersEnity = createSelector(
  getUsersState,
  (state: State) => state.userEntity,
);
export const getSliceUserRoles = createSelector(
  getUsersState,
  (state: State) => state.userRoles,
);
export const getSliceUserFormPage = createSelector(
  getUsersState,
  (state: State) => state.userFormPage,
);

/*  USERS ENTITIS */
export const getIsLoading = createSelector(
  getSliceUsers,
  fromUsers.getIsLoading,
);
export const getIsLoadingSuccess = createSelector(
  getSliceUsers,
  fromUsers.getIsLoadingSuccess,
);
export const getIsLoadingFail = createSelector(
  getSliceUsers,
  fromUsers.getIsLoadingFail,
);
export const getIsDeleteUserModalVisible = createSelector(
  getSliceUsers,
  fromUsers.getIsDeleteUserModalVisible,
);
export const getSelectedUser = createSelector(
  getSliceUsers,
  fromUsers.getSelectedUser,
);
export const getIsEditUserModalVisible = createSelector(
  getSliceUsers,
  fromUsers.getIsEditUserModalVisible,
);
export const getIsdeletingUser = createSelector(
  getSliceUsers,
  fromUsers.getIsdeletingUser,
);
export const getIsDeletingUserSuccess = createSelector(
  getSliceUsers,
  fromUsers.getIsDeletingUserSuccess,
);
export const getIsuUpdatingPassword = createSelector(
  getSliceUsers,
  fromUsers.getIsUpdatingPassword,
);
export const getIsuUpdatingPasswordSuccess = createSelector(
  getSliceUsers,
  fromUsers.getIsUpdatingPasswordSuccess,
);
export const getIsuUpdatingPasswordFail = createSelector(
  getSliceUsers,
  fromUsers.getIsUpdatingPasswordFail,
);

/* USER ROLES */
export const getUserRoles = createSelector(
  getSliceUserRoles,
  fromUserRoles.selectAll,
);
export const getUsers = createSelector(
  getSliceUsersEnity,
  fromUserEntity.selectAll,
);
export const getTotal = createSelector(
  getSliceUserRoles,
  fromUserRoles.selectTotal,
);
export const isCachedUserRoles = createSelector(getTotal, total => total > 0);

/* USERFORMPAGE */

export const getIsCreatingUser = createSelector(
  getSliceUserFormPage,
  fromUserFormPage.getIsCreatingUser,
);
export const getIsCreatingUserSucces = createSelector(
  getSliceUserFormPage,
  fromUserFormPage.getIsCreatingUserSucces,
);
export const getIsCreatingUserFail = createSelector(
  getSliceUserFormPage,
  fromUserFormPage.getIsCreatingUserFail,
);
export const getErrorMsg = createSelector(
  getSliceUserFormPage,
  fromUserFormPage.getErrorMsg,
);

/* user password */

export const getnewPassword  = createSelector(getSliceUserPassword, fromUserPassword.getnewPassword  );
export const getoldPassword  = createSelector(getSliceUserPassword, fromUserPassword.getoldPassword  );
