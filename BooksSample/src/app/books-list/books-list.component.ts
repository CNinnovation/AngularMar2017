import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';



@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
  providers: [ BooksService ]
})
export class BooksListComponent implements OnInit {

  constructor(private booksService : BooksService) { }

  public books : Book[];

  ngOnInit() {
    this.books = this.booksService.getAllBooks();
  }

}
