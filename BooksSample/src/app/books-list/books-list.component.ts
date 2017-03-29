import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BooksService } from '../books.service';
import { SampleSelectionService } from '../sample-selection.service';



@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
  providers: [ BooksService ]
})
export class BooksListComponent implements OnInit {

  constructor(private booksService : BooksService, 
  private selectionService : SampleSelectionService) { }

  public books : Book[];

  ngOnInit() {
    // this.books = this.booksService.getAllBooks();
  }

  public getbooks() : void {
    this.books = this.booksService.getAllBooks();
  }

  
  private _aselection : string;
  public get aselection() : string {
    return this._aselection;
  }
  public set aselection(v : string) {
    this._aselection = v;
    this.selectionService.myselection = v;
    console.log(`selection changed in the list component ${v}`);
  }
  

}
