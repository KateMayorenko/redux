import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as TaskActions from "./state/list/list.actions";
import {Observable} from "rxjs";
import {selectTasks} from "./state/list/list.selectors";
import {Task} from "./state/list/list.state";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  list$: Observable<Task[]> = this.store.select(selectTasks);

  constructor(private store: Store<{ list: Task[] }>) {
    this.list$.subscribe(res => {})
  }

  addElement(newElement: string) {
    this.store.dispatch(TaskActions.addTask({task: newElement, checked: false}));
  }

  removeElement(index: number) {
    this.store.dispatch(TaskActions.removeTask({index}));
  }

  saveChecked(index: number) {
    this.store.dispatch(TaskActions.checked({ index }));
  }

}
