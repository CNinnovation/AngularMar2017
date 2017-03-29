import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-communication-b',
  templateUrl: './parent-communication-b.component.html',
  styleUrls: ['./parent-communication-b.component.css']
})
export class ParentCommunicationBComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public messagefromchild : string;

  public onmessagereceived(m : string) : void {
    this.messagefromchild = m;
    console.log(`received message from child ${m}`);
  }

}
