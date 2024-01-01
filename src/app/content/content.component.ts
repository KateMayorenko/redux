import {Component, OnInit} from '@angular/core';
import {QuoteService} from "../services/quote.service";
import {CountdownService} from "../services/countdown.service";
import {Subscription, Observable, take} from "rxjs";
import {ModalService} from "../services/modal.service";
import {Store} from "@ngrx/store";
import {tap} from 'rxjs/operators';
import {ClickCountState, initialState} from "./state/click-count/click-count.state";
import * as ClickCountActions from "../content/state/click-count/click-count.actions"
import {Actions, ofType, createEffect} from '@ngrx/effects';

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

  todayClickCount$: Observable<number> = new Observable<number>();

  constructor(
    public countdownService: CountdownService,
    public quoteService: QuoteService,
    private store: Store<{ clickCount: ClickCountState }>
  ) {
    this.todayClickCount$ = this.store.select(state => state.clickCount.count);
  }

  ngOnInit() {
    this.initializeTodayClickCount();
    this.quoteService.getQuote().subscribe(quote => {
      this.quote = quote;
    });
    this.countdownSubscription = this.countdownService.getTime().subscribe(time => {
      this.timeLeftFormatted = this.formatTime(time);
    });
  }

  private initializeTodayClickCount() {
    const today = new Date().toDateString();
    const storedCount = localStorage.getItem('clickCount');
    const count = storedCount ? Number(storedCount) : 0;
    const lastUpdated = localStorage.getItem('lastUpdated') || today;

    this.store.dispatch(ClickCountActions.loadClickCount({ count, lastUpdated }));
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

  handleClick(event: Event | undefined) {
    if (event) {
      event.stopPropagation();
    }
    this.store.dispatch(ClickCountActions.incrementClickCount());
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

