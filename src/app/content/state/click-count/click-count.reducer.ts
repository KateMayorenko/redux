import { createReducer, on } from '@ngrx/store';
import * as ClickCountActions from './click-count.actions';
import {initialState} from "./click-count.state";

export const clickCountReducer = createReducer(
  initialState,
  on(ClickCountActions.loadClickCount, (state, { count, lastUpdated }) => ({ count, lastUpdated })),
  on(ClickCountActions.incrementClickCount, state => {
    const newCount = state.lastUpdated === new Date().toDateString() ? state.count + 1 : 1;
    return { ...state, count: newCount, lastUpdated: new Date().toDateString() };
  })
);
