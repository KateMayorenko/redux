import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {ModalService} from "../../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnDestroy {
  showModal: boolean = false;
  private subscription: Subscription;

  constructor(public modalService: ModalService) {
    this.subscription = this.modalService.showModal$.subscribe(
      (show: boolean) => {
        this.showModal = show;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
