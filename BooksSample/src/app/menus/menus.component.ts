import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    this.bookid = "42";
  }

  
  private _bookid : string;
  public get bookid() : string {
    return this._bookid;
  }
  public set bookid(value : string) {
    this._bookid = value;
  }
  
  public onnavigate() : void {
    this.router.navigate(['/book', this.bookid] );
  }

}
