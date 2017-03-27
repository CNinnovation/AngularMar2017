import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

const BOOKS: Book[] = [
  new Book(1, "Professional C#", "Wrox Press"),
  new Book(2, "Angular 2 Development", "Manning")
];

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor() { }

  public books : Book[] = BOOKS;

  ngOnInit() {
  }

}
