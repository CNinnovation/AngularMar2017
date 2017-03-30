import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';
import { BooksHttpService} from '../books-http.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor(private booksService : BooksService) { }

  public books : Book[];
  public errorMessage: string;

  ngOnInit() {

  }


  public getbooks() {
    this.booksService.getbooks()
                     .subscribe(                       
                        books => this.books = books,
                        error =>  this.errorMessage = <any>error);
    }

  addbook(book: Book) {
    if (!book) { return; }  
    this.booksService.createbook(book)
                     .subscribe(
                       book  => this.books.push(book),
                       error =>  this.errorMessage = <any>error);
  }
}
