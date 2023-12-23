import {createReducer, on} from "@ngrx/store";
import {initialState} from './content.state'
import {updateTimeLeft} from "./content.actions";

export const contentReducer = createReducer(
  initialState,
  on(updateTimeLeft, (state, action) => ({
    ...state,
    timeLeftFormatted: 'no time input'
  })),
);

