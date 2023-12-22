import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  constructor(private http: HttpClient) { }

  getQuote() {
    return this.http.get<string[]>('http://localhost:3000/api/random-quote');
  }
}

