import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-communication-a',
  templateUrl: './child-communication-a.component.html',
  styleUrls: ['./child-communication-a.component.css']
})
export class ChildCommunicationAComponent implements OnInit, OnChanges {



  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes));
  }


  @Input() message : string;

/*
private _message : string;
public get message() : string {
  return this._message;
}

@Input() public set message(v : string) {
  this._message = v;
  console.log(`message from the parent: ${this._message}`)
}

*/


}
