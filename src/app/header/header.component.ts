import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as ModalActions from "src/app/header/state/modal/modal.actions"
import {Observable} from "rxjs";
import {AppState} from "./state/modal/modal.state";
import {selectToggle} from "./state/modal/modal.selectors";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showModal$: Observable<boolean> = this.store.select(selectToggle);

  constructor(private store: Store<AppState>) {
    this.showModal$.subscribe(res => {
      console.log(res);
    })
  }

  ngOnInit(): void {

  }

  toggleModal() {
    this.store.dispatch(ModalActions.toggleModal());
  }
}
