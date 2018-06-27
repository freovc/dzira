import { Action } from '@ngrx/store';
import { NewTaskActions, NewTaskActionTypes } from '../actions/new-task.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: NewTaskActions): State {
  switch (action.type) {

    case NewTaskActionTypes.LoadNewTasks:
      return state;


    default:
      return state;
  }
}
