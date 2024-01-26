// modal.selectors.ts

import { createFeatureSelector, createSelector } from '@ngrx/store';
import {UserState} from "./user.state";


export const selectUserState = createFeatureSelector<UserState>('user');

export const selectToggle = createSelector(
  selectUserState,
  (state: UserState) => state.isModalShown
);

export const selectUserName = createSelector(
  selectUserState,
  (state: UserState) => state.user
);

export const selectIsCreated = createSelector(
  selectUserState,
  (state: UserState) => state.isCreated
);
