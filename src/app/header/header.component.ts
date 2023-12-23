import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../services/modal.service";
import {Subscription, take} from "rxjs";
import {Input} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  @Input() modalState: string = 'close';
  private modalStateSubscription: Subscription = new Subscription();

  constructor(public modalService: ModalService) {
  }

  toggleModal() {
    if (this.modalState === 'close') {
      this.modalService.open();
    } else (this.modalService.close());
    this.modalStateSubscription = this.modalService.watch().pipe(take(1)).subscribe(state => {
      this.modalState = state;
    });
  }

  ngOnDestroy() {
    if (this.modalStateSubscription) {
      this.modalStateSubscription.unsubscribe();
    }
  }
}
