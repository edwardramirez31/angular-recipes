import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css'],
})
export class WarningComponent implements OnInit {
  username = '';

  constructor() {}

  ngOnInit(): void {}

  onButtonClicked() {
    this.username = '';
  }
}
