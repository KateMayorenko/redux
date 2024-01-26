import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { Observable, take} from 'rxjs';
import { Store } from '@ngrx/store';
import { ClickCountState } from './state/click-count/click-count.state';
import * as ClickCountActions from '../content/state/click-count/click-count.actions';
import * as CountdownActions from './state/countdown/countdown.actions';
import { CountdownState } from './state/countdown/countdown.state';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  quote: any;
  timeLeft: number = 0;
  countdown$: Observable<number> = this.store.select((state) => state.countdown.timeLeft);
  toggleButtonText = 'Pause';
  count = 0;

  todayClickCount$: Observable<number> = this.store.select((state) => state.clickCount.count);
  isPaused$: Observable<boolean> = this.store.select((state) => state.countdown.isPaused);

  constructor(
    public quoteService: QuoteService,
    private store: Store<{ clickCount: ClickCountState; countdown: CountdownState }>
  ) {

    this.countdown$.subscribe((timeLeft) => {
      this.timeLeft = timeLeft;
    });
  }

  ngOnInit() {
    this.quoteService.getQuote().subscribe((quote) => {
      this.quote = quote;
    });
  }

  startCountdown(duration: number) {
    this.store.dispatch(CountdownActions.startCountdown({ duration }));
  }

  togglePause() {
    this.toggleButtonText = 'Pause';
    this.isPaused$.pipe(take(1)).subscribe((isPaused) => {
      if (isPaused) {
        this.store.dispatch(CountdownActions.resumeCountdown({ timeLeft: this.timeLeft }));
        this.toggleButtonText = 'Pause';
      } else {
        this.store.dispatch(CountdownActions.pauseCountdown({ timeLeft: this.timeLeft }));
        this.toggleButtonText = 'Resume';
      }
    });
  }

  getFormattedTimeLeft(): string {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  handleClick(event: Event | undefined) {
    if (event) {
      event.stopPropagation();
    }
    this.store.dispatch(ClickCountActions.incrementClickCount());
  }

  protected readonly event = event;
}
