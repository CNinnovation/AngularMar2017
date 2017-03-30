import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BooksService } from '../books.service';
import { SampleSelectionService } from '../sample-selection.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute, private booksService : BooksService, private selectionService : SampleSelectionService) { 
    this.selection2 = "init";
  }

  ngOnInit() {
    this.navigationParameter = this.route.snapshot.params['id'];
//    this.selectedBook = this.booksService.getAllBooks()[0];

   // this.selectionService.subscibe = this.selectionChanged;
      this.selectionService.subscibe = s => {
        this.selection2 = s;
        console.log(`...received selection ${s}`);
      }
  }

/*
  private selectionChanged(s : string) : void {
    this.selection2 = s;
    this.selection2 = s;
    console.log(`...received selection ${s}`);
  }
*/
  public navigationParameter : string;

  public selectedBook : Book;

  
  private _selection2 : string;
  public get selection2() : string {
    return this._selection2;
  }
  public set selection2(v : string) {
    this._selection2 = v;
  }

  public onchange1() : void {
    this.selection2 = "changed";
  }

}
