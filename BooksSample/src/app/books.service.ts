import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Book } from './book';
import { BOOKS } from './mock-books';
import { LoggerService } from './logger.service';

@Injectable()
export class BooksService {

  private books : Book[] = BOOKS;

  constructor(private logger: LoggerService) { }

  public getbooks(): Observable<Book[]> {
    console.log("getbooks from booksservice");
    return Observable.create(observer => {
      observer.next(this.books);
      observer.complete();
    });
  }

  public createbook(book: Book): Observable<Book> {
    console.log("createbook booksservice");
    this.books.push(book);
    return Observable.create(observer => {
        observer.next(book);
        observer.complete();
    });
  }

}
