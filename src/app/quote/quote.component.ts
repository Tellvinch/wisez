import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    {id:1, name:'"Never, never, never give up." — Winston Churchill.'},
    {id:2, name:'"While there is life, there is hope." — Marcus Tullius .'},
    {id:3, name:'"Failure is success in progress." — Anonymous.'},
    {id:4, name:'"Success demands singleness of purpose." — Vincent .'},
    {id:5, name:'"The shortest answer is doing." — Lord Herbert.'},
    {id:6, name:'"Powerful dreams inspire powerful action." — Jonathan '}
  ]
  // completeGoal(isComplete, index){
  //   if (isComplete) {
  //     this.quotes.splice(index,1);
  //   }
  // }
  
  constructor() { }

  ngOnInit(): void {
  }

}
