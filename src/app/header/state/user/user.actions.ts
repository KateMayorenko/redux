import {createAction, props} from '@ngrx/store';

export const createUserName = createAction(
  '[User] Create User Name',
  props<{ userName: string }>()
);

export const isCreatedUser = createAction(
  '[User] Check if User is created',
  props<{ isCreated: boolean }>());

export const isModalShown = createAction(
  '[Modal] Show Modal',
  props<{ isModalShown: boolean }>()
);
