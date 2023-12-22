import {Component, OnInit} from '@angular/core';
import {QuoteService} from "../../quote.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  quote: any;

  time: number = 300;
  display: any;
  interval: any;

  constructor(private quoteService: QuoteService) {
  }

  ngOnInit() {
    this.quoteService.getQuote().subscribe(quote => {
      this.quote = quote;
    });
  }

  startTimer() {
    console.log("=====>");
    this.interval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
      } else {
        this.time++;
      }
      this.display=this.transform( this.time)
    }, 1000);
  }
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes + ':' + (value - minutes * 60);
  }
  pauseTimer() {
    clearInterval(this.interval);
  }
}
