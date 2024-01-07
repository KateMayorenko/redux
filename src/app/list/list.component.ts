import {Component} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  taskArray: string[] = [];

  addElement(newElement: string) {
    this.taskArray.push(newElement);
  }

  removeElement(index: number) {
    this.taskArray.splice(index, 1);
  }

}
