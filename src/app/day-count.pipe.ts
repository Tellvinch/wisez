import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayCount',
})
export class DayCountPipe implements PipeTransform {
  transform(value: any): number {
    let today: Date = new Date(); //get current date and time
    let todayWithNoTime: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    var dateDifference = Math.abs(value - todayWithNoTime); //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var dayDifferenceSeconds = dateDifference * 0.001; //converts miliseconds to seconds
    var dayDifferenceMinutes = dayDifferenceSeconds * 0.0166666; //converts seconds into minutes
    var dayDifferenceHours = dayDifferenceMinutes * 0.0166666; //converts minutes into hours
    var days = dayDifferenceHours * 0.04166666; //converts minutes into hours

    return parseInt(days.toFixed(0));
  }
}
