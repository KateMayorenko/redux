import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {ModalService} from "../../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnDestroy {
  showModal = false;
  private subscription: Subscription;

  userName = '';
  generatedToken = '';

  constructor(public modalService: ModalService) {
    this.subscription = this.modalService.showModal$.subscribe(
      (show: boolean) => {
        this.showModal = show;
      }
    );
  }

  generateToken() {
    console.log('token is generated');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
