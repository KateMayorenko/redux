import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickCountService {
  private countKey: string = 'clickCount';
  private dateKey: string = 'clickDate';

/*  incrementClickCount() {
    const today = new Date().toDateString();
    const lastClickDate = localStorage.getItem(this.dateKey);
    let clickCount = 0;

    if (lastClickDate === today) {
      clickCount = Number(localStorage.getItem(this.countKey)) || 0;
    }
    console.log()
    clickCount++;
    localStorage.setItem(this.countKey, clickCount.toString());
    localStorage.setItem(this.dateKey, today);
  }*/

  getTodayClickCount(): number {
    const today = new Date().toDateString();
    const lastClickDate = localStorage.getItem(this.dateKey);

    if (lastClickDate === today) {
      return Number(localStorage.getItem(this.countKey)) || 0;
    }

    return 0;
  }
}
