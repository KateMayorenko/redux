import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { debounceTime, filter } from 'rxjs/operators';
import {Subject, take} from 'rxjs';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  inputValue = '';
  @Output() newElement = new EventEmitter<string>();
  inputSubject: Subject<string> = new Subject<string>();

  constructor() {}

  addNewElement(value: string) {
    this.inputSubject.next(value);
    this.inputSubject
      .pipe(take(1),
        debounceTime(500),
        filter(value => !!value)
      )
      .subscribe((value) => {
        this.newElement.emit(value);
        this.inputValue = '';
      });
  }
}
