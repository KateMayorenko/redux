import {Component, OnDestroy} from '@angular/core';
import {ModalService} from "../services/modal.service";
import {Subscription, take} from "rxjs";
import {Input} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  @Input() showModal: boolean = false;
  private modalStateSubscription: Subscription = new Subscription();

  constructor(public modalService: ModalService) {
  }

  toggleModal() {
    if (this.showModal === false) {
      this.modalService.openModal();
    } else (this.modalService.closeModal());
    this.modalStateSubscription = this.modalService.showModal$.subscribe(
      (show: boolean) => {
        this.showModal = show;
      }
    );
  }

  ngOnDestroy() {
    if (this.modalStateSubscription) {
      this.modalStateSubscription.unsubscribe();
    }
  }
}
