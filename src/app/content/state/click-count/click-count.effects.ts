import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as ClickCountActions from './click-count.actions';

@Injectable()
export class ClickCountEffects {
  saveClickCount$ = createEffect(() => this.actions$.pipe(
    ofType(ClickCountActions.incrementClickCount),
    tap((action) => {
      const currentCount = JSON.parse(localStorage.getItem('clickCount') || '0');
      localStorage.setItem('clickCount', JSON.stringify(currentCount + 1));
    })
  ), { dispatch: false });

  constructor(private actions$: Actions) {}
}
