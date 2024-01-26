export interface AppState {
  countdown: CountdownState;
}

export interface CountdownState {
  duration: number;
  timeLeft: number;
  isPaused: boolean;
}

export const initialState: CountdownState = {
  duration: 0,
  timeLeft: 0,
  isPaused: false
};
