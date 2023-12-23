import {createReducer, on} from "@ngrx/store";
import {initialState} from "./click-count.state"
import {incrementClicks} from "./click-count.actions"
export const clickCountReducer = createReducer(
  initialState,
  on(incrementClicks, (state) => ({
    ...state,
    clicksCount: state.clicksCount + 1
  }))
);

