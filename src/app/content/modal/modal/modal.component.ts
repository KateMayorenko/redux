import {Component} from '@angular/core';
import {Observable, take} from 'rxjs';
import {Store} from "@ngrx/store";
import {AppState} from "../../../header/state/user/user.state";
import {selectIsCreated, selectToggle, selectUserName} from "../../../header/state/user/user.selectors";
import * as UserActions from "../../../header/state/user/user.actions"
import {Router} from "@angular/router";


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  isModalShown$: Observable<boolean> = new Observable<boolean>();
  userName$: Observable<string> = new Observable<string>();
  isCreated$: Observable<boolean> = new Observable<boolean>();

  isShown = false;
  isCreated = true;

  constructor(private store: Store<AppState>, private router: Router) {
    this.isModalShown$ = this.store.select(selectToggle);
    this.userName$ = this.store.select(selectUserName);
    this.isCreated$ = this.store.select(selectIsCreated);

    this.isModalShown$.subscribe(isShown => {
      this.isShown = isShown;
    })
  }

  toggleModal() {
    this.store.dispatch(UserActions.isModalShown({isModalShown: this.isShown}));
  }

  userIsCreated() {
    this.isCreated$.pipe(take(1)).subscribe(isCreated => {
      this.isCreated = isCreated;
      this.store.dispatch(UserActions.isCreatedUser({isCreated: isCreated}));
      if (isCreated) {
       void this.router.navigate(['/modal']);
        this.toggleModal();
      } else {
       void this.router.navigate(['/']);
      }
    });
  }
}
