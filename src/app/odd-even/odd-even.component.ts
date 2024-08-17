import { Component } from '@angular/core';

@Component({
  selector: 'app-odd-even',
  templateUrl: './odd-even.component.html',
  styleUrls: ['./odd-even.component.css']
})
export class OddEvenComponent {
 num: number = 0;
 result: String = '';

  checkOddEven() {
    if (this.num % 2 === 0) {
      this.result = `${this.num} is even`;
    } else {
      this.result = `${this.num} is odd`;
    }
  }
  reset() {
    
    this.result = '';
  }
}
