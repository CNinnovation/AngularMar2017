import { Component, OnInit, ViewChild } from '@angular/core';
import { TimerComponentComponent} from './timer-component/timer-component.component';

@Component({
  selector: 'app-parent-communication-c',
  templateUrl: './parent-communication-c.component.html',
  styleUrls: ['./parent-communication-c.component.css']
})
export class ParentCommunicationCComponent implements OnInit {

  constructor() { }

  @ViewChild(TimerComponentComponent)
  private childComponent : TimerComponentComponent;

  ngOnInit() {
  }

  public onstart() : void {
    this.childComponent.start();
  }

  public onstop() : void {
    this.childComponent.stop();
  }
}
