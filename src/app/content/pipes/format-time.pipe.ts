import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formattedTime'
})
export class FormattedTimePipe implements PipeTransform {
  transform(timeLeft: number): string {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
