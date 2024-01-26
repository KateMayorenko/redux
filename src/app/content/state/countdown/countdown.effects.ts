import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {interval, EMPTY, Subject, switchMap, of} from 'rxjs';
import { map, withLatestFrom, takeUntil } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as countdownActions from './countdown.actions';
import { AppState } from './countdown.state';

@Injectable()
export class CountdownEffects {

  private pauseSubject = new Subject<void>();

  startCountdown$ = createEffect(() => this.actions$.pipe(
    ofType(countdownActions.startCountdown),
    withLatestFrom(this.store.pipe(select('countdown'))),
    map(([action, state]) => countdownActions.resumeCountdown({ timeLeft: state.timeLeft * 60 })),
  ));

  resumeCountdown$ = createEffect(() => this.actions$.pipe(
    ofType(countdownActions.resumeCountdown),
    switchMap(action => {
      return interval(1000).pipe(
        withLatestFrom(this.store.pipe(select('countdown'))),
        takeUntil(this.pauseSubject),
        map(([_, state]) => {
          if (state.timeLeft > 0) {
            return countdownActions.decrementCountdown();
          } else {
            this.pauseSubject.next(); // Stop the interval when timeLeft reaches 0
            return countdownActions.resetCountdown();
          }
        })
      );
    })
  ));

  pauseCountdown$ = createEffect(() => this.actions$.pipe(
    ofType(countdownActions.pauseCountdown),
    switchMap(action => {
      this.pauseSubject.next(); // Signal to stop the interval
      return of(countdownActions.paused()); // Dispatch the paused action
    })
  ));

  constructor(private actions$: Actions, private store: Store<AppState>) {}
}
