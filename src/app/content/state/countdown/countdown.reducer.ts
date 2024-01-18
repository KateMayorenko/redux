// countdown.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as countdownActions from './countdown.actions';
import { initialState } from './countdown.state';

export const countdownReducer = createReducer(
  initialState,
  on(countdownActions.startCountdown, (state, { duration }) => ({ ...state, duration, timeLeft: duration, isPaused: false })),
  on(countdownActions.resumeCountdown, (state, { timeLeft }) => ({ ...state, timeLeft, isPaused: false })),
  on(countdownActions.pauseCountdown, (state, { timeLeft }) => ({ ...state, timeLeft, isPaused: true })),
  on(countdownActions.decrementCountdown, (state) => ({ ...state, timeLeft: state.timeLeft - 1 })),
  on(countdownActions.resetCountdown, () => initialState),
  on(countdownActions.paused, (state) => ({ ...state, isPaused: true }))
);
