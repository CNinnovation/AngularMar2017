import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

const BOOKS : Book[] = [
  new Book(1, "Professional C#", "Wrox Press"),
  new Book(2, "Programming Angular 2", "Manning"),
  new Book(3, "Professional C# 7.2")
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
