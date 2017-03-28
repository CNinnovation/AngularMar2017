import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debouncetime';

@Component({
  selector: 'app-observer-sample',
  templateUrl: './observer-sample.component.html',
  styleUrls: ['./observer-sample.component.css']
})
export class ObserverSampleComponent implements OnInit {

  public searchInput : FormControl = new FormControl();

  constructor() { 
     this.searchInput.valueChanges
      .debounceTime(500)
      .subscribe(item => this.onchange(item));

  }

  ngOnInit() {
  }

  onchange(s : string) {
    console.log("string entered: " + s);
  }

}
