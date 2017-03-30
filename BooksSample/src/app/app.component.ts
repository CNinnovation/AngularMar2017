import { Component } from '@angular/core';
import { BooksHttpService} from './books-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    BooksHttpService
  ]
})
export class AppComponent {
  title = 'Books Sample App Component';

  
  
}
