import { Action } from '@ngrx/store';
import {
  UserPasswordActions,
  UserPasswordActionTypes,
} from '../actions/user-password.actions';

export interface State {
  newPassword: string;
  oldPassword: string;
}

export const initialState: State = {
  newPassword: '',
  oldPassword: '',
};

export function reducer(
  state = initialState,
  action: UserPasswordActions,
): State {
  switch (action.type) {
    case UserPasswordActionTypes.SetNewPassword:
      return {
        ...state,
        newPassword: action.payload.newPassword
      };
    case UserPasswordActionTypes.SetOldPassword: {
        return {
        ...state,
        oldPassword: action.payload.oldPassword,
        };
    }
    default:
      return state;
  }
}
export const getnewPassword = (state: State) => state.newPassword;
export const getoldPassword = (state: State) => state.oldPassword;



