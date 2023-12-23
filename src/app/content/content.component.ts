import {Component, OnInit} from '@angular/core';
import {QuoteService} from "../services/quote.service";
import {CountdownService} from "../services/countdown.service";
import {Subscription} from "rxjs";
import {ModalService} from "../services/modal.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  quote: any;

  timeLeft: any;
  timeLeftFormatted = '';
  paused = false;
  private countdownSubscription: Subscription = new Subscription();
  toggleButtonText = 'Pause';

  constructor(public countdownService: CountdownService, public quoteService: QuoteService) {
  }

  ngOnInit() {
    this.quoteService.getQuote().subscribe(quote => {
      this.quote = quote;
    });
    this.countdownSubscription = this.countdownService.getTime().subscribe(time => {
      this.timeLeftFormatted = this.formatTime(time);
    });
  }
  startCountdown(minutes: number) {
    this.countdownSubscription = this.countdownService.startCountdown(minutes).subscribe(time => {
      this.timeLeft = time;
      this.timeLeftFormatted = this.formatTime(time);
    });
  }

  togglePause() {
    if (this.paused) {
      this.countdownService.resumeCountdown();
      this.toggleButtonText = 'Pause';
    } else {
      this.countdownService.pauseCountdown();
      this.toggleButtonText = 'Resume';
    }
    this.paused = !this.paused;
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
}

