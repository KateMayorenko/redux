import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import * as TaskActions from "./list.actions"
import {tap} from "rxjs/operators";
import {selectTasks} from "./list.selectors";
import {Store} from "@ngrx/store";
import {Task} from "./list.state";

@Injectable()
export class ListEffects {
  saveToSessionStorage$ = createEffect(() => this.actions$.pipe(
    ofType(TaskActions.addTask, TaskActions.removeTask, TaskActions.checked),
    tap(() => {
      this.store.select(selectTasks).subscribe(tasks => {
        sessionStorage.setItem('tasks', JSON.stringify(tasks));
      });
    })
  ), { dispatch: false });

  constructor(private actions$: Actions, private store: Store<{ list: Task[] }>) {}
}
