import { createAction, props } from '@ngrx/store';

export const createUserName = createAction(
  '[User] Create User Name',
  props<{ userName: string }>()
);

export const createToken = createAction(
  '[User] Check if User is created',
  props<{ isCreated: boolean }>()
);
