import {Component, Input} from '@angular/core';
import {ModalService} from "../../../services/modal.service";
import {Subscription, take} from "rxjs";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() modalState: string = '';

  constructor(public modalService: ModalService) {
  }

  closeModal() {
    this.modalState === 'close';
    this.modalService.close();
    this.modalService.watch().pipe(take(1)).subscribe();
  }

  submitAction() {
    console.log('submit user');
  }
}
