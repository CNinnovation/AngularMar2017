import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private booksService : BooksService) { }

  ngOnInit() {
    this.selectedBook = this.booksService.getAllBooks()[0];
  }


  public selectedBook : Book;

}
