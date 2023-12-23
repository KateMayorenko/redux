import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable, Subscription } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  private countdownTimer$: BehaviorSubject<number>;
  private intervalSubscription: Subscription = new Subscription();

  constructor() {
    this.countdownTimer$ = new BehaviorSubject<number>(0);
  }

  startCountdown(minutes: number): Observable<number> {
    this.pauseCountdown(); // Ensure any existing countdown is stopped
    const initialTime = minutes * 60;
    this.countdownTimer$.next(initialTime);

    this.intervalSubscription = interval(1000).pipe(
      takeWhile(() => this.countdownTimer$.value > 0)
    ).subscribe(() => {
      const currentTime = this.countdownTimer$.value;
      this.countdownTimer$.next(currentTime - 1);
    });

    return this.countdownTimer$.asObservable();
  }


  getTime(): Observable<number> {
    return this.countdownTimer$.asObservable();
  }

  pauseCountdown(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  resumeCountdown(): void {
    this.startCountdown(this.countdownTimer$.value / 60);
  }
}
