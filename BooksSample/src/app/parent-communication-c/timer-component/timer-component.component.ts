import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer-component',
  templateUrl: './timer-component.component.html',
  styleUrls: ['./timer-component.component.css']
})
export class TimerComponentComponent implements OnInit, OnDestroy {

  ngOnInit() {
    this.start();
  }

  ngOnDestroy(): void {
      this.clearTimer();
  }

  public start() : void {
    this.countDown();
  }

  public stop() : void {
    this.clearTimer();
    this.message = `stop at ${this.seconds}`;
  }

  public intervalId = 0;
  public message = '';
  public seconds = 11;

  private clearTimer() { clearInterval(this.intervalId); }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Start!';
      } else {
        if (this.seconds < 0) { this.seconds = 10; } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }

}
