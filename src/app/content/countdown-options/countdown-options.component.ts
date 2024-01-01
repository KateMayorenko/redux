import {Component} from '@angular/core';
import {Subscription} from "rxjs";
import {CountdownService} from "../../services/countdown.service";

@Component({
  selector: 'app-countdown-options',
  templateUrl: './countdown-options.component.html',
  styleUrls: ['./countdown-options.component.css']
})
export class CountdownOptionsComponent {

  timeLeftFormatted = '';
  private countdownSubscription: Subscription = new Subscription();

  constructor(public countdownService: CountdownService) {
  }

  startCountdown(minutes: number) {
    this.countdownSubscription = this.countdownService.startCountdown(minutes).subscribe(time => {
      this.timeLeftFormatted = this.formatTime(time);
    });
  }

  formatTime(timeInSeconds: number): string {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = (timeInSeconds % 60).toFixed(1); // Keeping one decimal place for seconds
    return `${minutes}:${seconds.padStart(4, '0')}`; // Ensures seconds are always two digits
  }

  ngOnDestroy() {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
    this.countdownService.pauseCountdown();
  }

  protected readonly event = event;
}
