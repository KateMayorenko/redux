import {createAction, props} from "@ngrx/store";

export const loadClickCount = createAction(
  '[Click Count] Load Today Count',
  props<{ count: any, lastUpdated: string }>()
);

export const incrementClickCount = createAction('[Click Count] Increment');

export const initializeClickCount = createAction('[Click Count] Initialize');
