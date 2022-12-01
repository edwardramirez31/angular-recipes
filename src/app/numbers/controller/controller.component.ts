import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css'],
})
export class ControllerComponent implements OnInit {
  @Output() numberEmitted = new EventEmitter<number>();
  interval: NodeJS.Timer;
  constructor() {}

  ngOnInit(): void {}

  onGameStarted() {
    this.interval = setInterval(() => {
      const number = Math.floor(Math.random() * 100);
      this.numberEmitted.emit(number);
    }, 2000);
  }

  onGameStopped() {
    clearInterval(this.interval);
  }
}
