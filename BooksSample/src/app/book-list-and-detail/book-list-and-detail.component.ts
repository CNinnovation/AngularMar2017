import { Component, OnInit } from '@angular/core';
import { SampleSelectionService } from '../sample-selection.service';

@Component({
  selector: 'app-book-list-and-detail',
  templateUrl: './book-list-and-detail.component.html',
  styleUrls: ['./book-list-and-detail.component.css'],
  providers: [ SampleSelectionService ]
})
export class BookListAndDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
