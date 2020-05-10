import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayCount'
})
export class DayCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime) //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var dayDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
    var dayCounter = dayDifferenceSeconds/secondsInDay;

    if (dayCounter >= 1 && value > todayWithNoTime){
      return dayCounter;
    }else{
      return 0;
    }
  }
}
