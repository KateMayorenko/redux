import {createReducer, on} from "@ngrx/store";
import {initialState} from './user.state'
import {startCountdown} from "./user.actions";

export function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'CREATE_USER_NAME':
      return {
        ...state,
        user: state.user
      };
    case 'CREATE_TOKEN':
      return {
        ...state,
        token: state.token
      };
    default:
      return state;
  }
}
