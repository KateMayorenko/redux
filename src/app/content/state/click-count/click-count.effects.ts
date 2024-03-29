import { Injectable } from '@angular/core';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {mergeMap, tap} from 'rxjs/operators';
import * as ClickCountActions from './click-count.actions';
import {Action} from "@ngrx/store";
import {of} from "rxjs";

@Injectable()
export class ClickCountEffects{
  saveClickCount$ = createEffect(() => this.actions$.pipe(
    ofType(ClickCountActions.incrementClickCount),
    tap((action) => {
      const currentCount = JSON.parse(localStorage.getItem('count') || '0');
      localStorage.setItem('count', JSON.stringify(currentCount + 1));
    })
  ), { dispatch: false });

  initializeClickCount$ = createEffect(() => this.actions$.pipe(
    ofType(ClickCountActions.initializeClickCount),
    mergeMap(() => {
      const today = new Date().toDateString();
      const storedCount = localStorage.getItem('count');
      let lastUpdated = localStorage.getItem('lastUpdated') || today;
      let count = storedCount ? Number(storedCount) : 0;

      if (lastUpdated !== today) {
        count = 0;
        localStorage.setItem('count', '0');
        localStorage.setItem('lastUpdated', today);
      }

      return of(ClickCountActions.loadClickCount({ count, lastUpdated }));
    })
  ));

  constructor(private actions$: Actions) {}

  ngrxOnInitEffects(): Action {
    return ClickCountActions.initializeClickCount();
  }
}
