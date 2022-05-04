import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  display: string = '0s';
  startTime!: number;
  stopTime!: number;
  interval!: any;

  @Output()
  changed = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  clear() {
    this.display = '0s';
    this.startTime = undefined!;
    this.stopTime = undefined!;
    this.interval = undefined!;
  }

  start() {
    // this.start = new Date();
    this.startTime = Date.now();
    this.display = '0s';
    this.interval = setInterval(() => {
      this.display = `${Math.round((Date.now() - this.startTime) / 1000)}s`;
    }, 1000);
  }

  stop() {
    this.stopTime = Date.now();
    // this.display = Math.round((this.stopTime - this.startTime) / 1000);
    this.display = `${Math.round((this.stopTime - this.startTime) / 1000)}s`;
    clearInterval(this.interval);
  }
}
