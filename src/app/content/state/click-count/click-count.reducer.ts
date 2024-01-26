import { createReducer, on } from '@ngrx/store';
import * as ClickCountActions from './click-count.actions';
import {ClickCountState, initialState} from "./click-count.state";

export const clickCountReducer = createReducer(
  initialState,
  on(ClickCountActions.loadClickCount, (state, { count, lastUpdated }) => ({ count, lastUpdated })),
  on(ClickCountActions.incrementClickCount, (state): ClickCountState => ({ ...state, count: state.count + 1 }))
);
