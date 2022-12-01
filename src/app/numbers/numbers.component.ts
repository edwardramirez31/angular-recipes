import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent implements OnInit {
  numbers: number[] = [];
  constructor() {}

  ngOnInit(): void {}

  numberAdded(number: number) {
    this.numbers.push(number);
  }
}
