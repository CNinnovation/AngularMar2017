import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-communication-b',
  templateUrl: './child-communication-b.component.html',
  styleUrls: ['./child-communication-b.component.css']
})
export class ChildCommunicationBComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() onmessage = new EventEmitter<string>();

  public message : string;

  public sendmessage(m : string) : void {
    console.log(`send message to parent: ${m}`);

    this.onmessage.emit(m);
  }

}
