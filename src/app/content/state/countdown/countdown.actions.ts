// countdown.actions.ts
import { createAction, props } from '@ngrx/store';

export const startCountdown = createAction('[Countdown] Start Countdown', props<{ duration: number }>());
export const resumeCountdown = createAction('[Countdown] Resume Countdown', props<{ timeLeft: number }>());
export const pauseCountdown = createAction('[Countdown] Pause Countdown', props<{ timeLeft: number }>());
export const decrementCountdown = createAction('[Countdown] Decrement Countdown');
export const resetCountdown = createAction('[Countdown] Reset Countdown');
export const paused = createAction('[Countdown] Paused');
