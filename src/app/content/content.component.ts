import {Component, OnInit} from '@angular/core';
import {QuoteService} from "../../quote.service";
import {CountdownService} from "../../countdown.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  quote: any;
  timeLeft: any;
  timeLeftFormatted: string = '';
  paused: boolean = false;
  private countdownSubscription: Subscription = new Subscription();

  constructor(public countdownService: CountdownService, public quoteService: QuoteService) { }

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
    } else {
      this.countdownService.pauseCountdown();
    }
    console.log(this.paused);
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

