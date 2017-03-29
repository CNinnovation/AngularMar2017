import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute, private booksService : BooksService) { 
    
  }

  ngOnInit() {
    this.navigationParameter = this.route.snapshot.params['id'];
    this.selectedBook = this.booksService.getAllBooks()[0];
  }

  public navigationParameter : string;

  public selectedBook : Book;

}
