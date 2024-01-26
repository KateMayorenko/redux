import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import {initialState} from './user.state'

export const userReducer = createReducer(
  initialState,
  on(UserActions.createUserName, (state, { userName }) => ({
    ...state,
    user: userName
  })),
  on(UserActions.isCreatedUser, (state, { isCreated }) => ({
    ...state,
    isCreated: isCreated,
    isModalShown: isCreated ? !state.isModalShown : state.isModalShown
  })),
  on(UserActions.isModalShown, (state, { isModalShown }) => ({
    ...state,
    isModalShown: !isModalShown
  }))
);
