import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectToggle, selectUserName} from "./state/user/user.selectors";
import {AppState} from "../content/state/countdown/countdown.state";
import * as UserActions from "../header/state/user/user.actions"
import {UserState} from "./state/user/user.state";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showModal$: Observable<boolean> = this.store.select(selectToggle);
  userName$ = this.store.select(selectUserName);
  isShown = false;
  userName = '';

  constructor(private store: Store<{countdown: AppState, user: UserState}>) {
    this.showModal$.subscribe(res => {
      this.isShown = res;
    })
    this.userName$.subscribe(res => {
      this.userName = res;
    })
  }

  ngOnInit(): void {

  }

  toggleModal() {
    this.store.dispatch(UserActions.showModal({showModal: this.isShown}));
  }
}
