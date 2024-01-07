import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import * as TaskActions from './list.actions';
import {selectTasks} from "./list.selectors";

@Injectable()
export class ListEffects {
  saveToSessionStorage$ = createEffect(() => this.actions$.pipe(
    ofType(TaskActions.addTask, TaskActions.removeTask),
    tap(() => {
      this.store.select(selectTasks).subscribe(tasks => {
        sessionStorage.setItem('tasks', JSON.stringify(tasks));
      });
    })
  ), { dispatch: false });

  constructor(private actions$: Actions, private store: Store<{ list: string[] }>) {}
}
