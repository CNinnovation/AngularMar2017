import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';
import { LoggerService } from './logger.service';

@Injectable()
export class BooksService {

  constructor(private logger: LoggerService) { }

  public getAllBooks() : Book[] {
    this.logger.log("getAllBooks started");
    return BOOKS;
  }

}
