import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-communication-a',
  templateUrl: './parent-communication-a.component.html',
  styleUrls: ['./parent-communication-a.component.css']
})
export class ParentCommunicationAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public messagefromtheparent: string;
}
