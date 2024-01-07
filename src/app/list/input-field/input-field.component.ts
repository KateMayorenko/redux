import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  inputValue = '';
  @Output() newElement = new EventEmitter<string>();

  addNewElement() {
    if (this.inputValue.trim()) {
      this.newElement.emit(this.inputValue.trim());
      this.inputValue = '';
    }
  }
}
