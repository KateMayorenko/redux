import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import {initialState} from './user.state'

export const userReducer = createReducer(
  initialState,
  on(UserActions.createUserName, (state, { userName }) => ({
    ...state,
    user: userName
  })),
  on(UserActions.createToken, (state, { isCreated }) => ({
    ...state,
    isCreated: isCreated
  }))
);
