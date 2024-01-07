import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as TaskActions from "./state/list/list.actions";
import {Observable} from "rxjs";
import {selectTasks} from "./state/list/list.selectors";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  list$: Observable<string[]> = this.store.select(selectTasks);

  constructor(private store: Store<{ list: string[] }>) {}

  addElement(newElement: string) {
    this.store.dispatch(TaskActions.addTask({task: newElement}));
  }

  removeElement(index: number) {
    this.store.dispatch(TaskActions.removeTask({index}));
  }

}
