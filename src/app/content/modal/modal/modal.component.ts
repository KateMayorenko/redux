import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import * as ModalActions from "../../../header/state/modal/modal.actions"
import {AppState} from "../../../header/state/modal/modal.state";
import {selectToggle} from "../../../header/state/modal/modal.selectors";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  showModal$: Observable<boolean> = new Observable<boolean>();

  userName = '';
  generatedToken = '';

  constructor(private store: Store<AppState>) {
    this.showModal$ = this.store.select(selectToggle);
  }

  toggleModal() {
    this.store.dispatch(ModalActions.toggleModal());
  }
}
