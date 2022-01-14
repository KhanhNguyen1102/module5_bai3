import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1 = 0;
  number2 = 0;
  result = '';
  constructor() { }

  ngOnInit(): void {
  }
  sum(): void {
    this.result = this.number1 + this.number2 + '';
  }
  minus(): void {
    this.result = this.number1 - this.number2 + '';
  }
  multi(): void {
    this.result = this.number1 * this.number2 + '';
  }
  divine(): void {
    this.result = this.number1 / this.number2 + '';
  }
}
