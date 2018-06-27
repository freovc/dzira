import {
  UsersManagePageActions,
  UsersManagePageActionTypes,
} from '../actions/users-manage-page.actions';
import { User } from '../models/User.model';

export interface State {
  loading: boolean;
  success: boolean;
  fail: boolean;
  deleteUserModalVisible: boolean;
  selectedUser: User;
  editUserModalVisible: boolean;
  deletingUser: boolean;
  deletingUserSuccess: boolean;
  updatingPassword: boolean;
  updatingPasswordSuccess: boolean;
  updatingPasswordFail: boolean;
}

export const initialState: State = {
  loading: false,
  success: false,
  fail: false,
  deleteUserModalVisible: false,
  selectedUser: null,
  editUserModalVisible: false,
  deletingUser: true,
  deletingUserSuccess: false,
  updatingPassword: false,
  updatingPasswordSuccess: false,
  updatingPasswordFail: false,
};



export function reducer(
  state = initialState,
  action: UsersManagePageActions,
): State {
  switch (action.type) {
    case UsersManagePageActionTypes.UpdateUser:
    case UsersManagePageActionTypes.LoadUsers:
      return {
        ...state,
        loading: true,
        fail: false,
        success: false,
      };
    case UsersManagePageActionTypes.LoadUsersSuccesss:
    case UsersManagePageActionTypes.UpdateUserSuccess:
      return {
        ...state,
        loading: false,
        fail: false,
        success: true,
      };
    case UsersManagePageActionTypes.LoadUsersFail:
    case UsersManagePageActionTypes.UpdateUserFail: {
      return {
        ...state,
        loading: false,
        fail: true,
        success: false,
      };
    }
    case UsersManagePageActionTypes.ShowUserDeleteDialog:
      return {
        ...state,
        deleteUserModalVisible: true,
      };
    case UsersManagePageActionTypes.HideUserDeleteDialog:
      return {
        ...state,
        deleteUserModalVisible: false,
      };
    case UsersManagePageActionTypes.SelectUser:
      return {
        ...state,
        selectedUser: action.payload,
      };
    case UsersManagePageActionTypes.ShowUserEditModalDialog: {
      return {
        ...state,
        editUserModalVisible: true,
      };
    }
    case UsersManagePageActionTypes.HideUserEditModalDialog: {
      return {
        ...state,
        editUserModalVisible: false,
        loading: false,
        success: false,
        fail: false,
        deletingUser: false,
        deletingUserSuccess: false,
      };
    }

    case UsersManagePageActionTypes.DeleteUser: {
      return {
        ...state,
        deletingUser: true,
        deletingUserSuccess: false,
      };
    }
    case UsersManagePageActionTypes.DeleteUserSuccess: {
      return {
        ...state,
        deletingUser: false,
        deletingUserSuccess: true,
      };
    }
    case UsersManagePageActionTypes.SynchronizeFormWithStore: {
      return {
        ...state,
        selectedUser: { ...state.selectedUser, ...action.payload },
      };
    }
    case UsersManagePageActionTypes.ClearLoadingState: {
      return {
        ...state,
        updatingPassword: false,
        updatingPasswordSuccess: false,
        updatingPasswordFail: false,
        loading: false,
        success: false,
        fail: false,
        deletingUser: false,
        deletingUserSuccess: false,
      };
    }
    case UsersManagePageActionTypes.UpdatePassword: {
      return {
        ...state,
        updatingPassword: true,
        updatingPasswordSuccess: false,
        updatingPasswordFail: false,
      };
    }
    case UsersManagePageActionTypes.UpdatePasswordSuccess: {
      return {
        ...state,
        updatingPassword: false,
        updatingPasswordSuccess: true,
        updatingPasswordFail: false,
      };
    }
    case UsersManagePageActionTypes.UpdatePasswordFail: {
      return {
        ...state,
        updatingPassword: false,
        updatingPasswordSuccess: false,
        updatingPasswordFail: true,
      };
    }
    default:
      return state;
  }
}

export const getIsLoading = (state: State) => state.loading;
export const getIsLoadingSuccess = (state: State) => state.success;
export const getIsLoadingFail = (state: State) => state.fail;
export const getIsDeleteUserModalVisible = (state: State) =>
  state.deleteUserModalVisible;
export const getSelectedUser = (state: State) => state.selectedUser;
export const getIsEditUserModalVisible = (state: State) =>
  state.editUserModalVisible;
export const getIsdeletingUser = (state: State) => state.deletingUser;
export const getIsDeletingUserSuccess = (state: State) =>
  state.deletingUserSuccess;
export const getIsUpdatingPassword = (state: State) => state.updatingPassword;
export const getIsUpdatingPasswordSuccess = (state: State) => state.updatingPasswordSuccess;
export const getIsUpdatingPasswordFail = (state: State) => state.updatingPasswordFail;
