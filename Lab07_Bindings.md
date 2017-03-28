# Lab 7 - Bindings

## Prepare the Model

Change the Book type and add properties for the release date (type Date), and an image URL (type string). With the mocking file for the book list, fill some of the books with these new properties.

## Event Binding

Change the initialization of the books list in the BooksListComponent and implement the public method **getbooks**. In the implementation of this method, invoke the BookService to fill the books.

Add a button with a click event handler in the HTML template to invoke the method to fill the books.

```HTML
<button (click)="getbooks()">Get books</button>
```

## Change the route to pass parameters

Add a new *BookDetailComponent* using `ng generate component`. Define a route and a menu entry to navigate to this component. With the RouterModule.forRoot import, change the link to this route passing the bookid:

```TypeScript
      {
        path: 'detail/:bookid',
        component: BookDetailComponent
      },
```

## Two-way binding

With the MenuComponent, add a new bookId property that will be assigned from an input element with two-way binding.

Define an input element with the HTML template and use two-way binding to bind it to the bookId:

```HTML
<input [(ngModel)]="bookId" />
```

With the MenuComponent, add a new anchor tag to add the bookid. You can either add this directly to the link, or create query parameters:

```HTML
<a [routerLink]="['detail/' + bookId]" [queryParams]='{bookid:bookId}'>Detail</a>
<a [routerLink]="['detail']" [queryParams]='{bookid:bookId}'>Detail</a>
```

## ngSwitch

Use *ngSwitch* to show different links in the menu component, depending if a book id was entered or not.

```HTML
    <li>
      <div [ngSwitch]="bookId">
        <a *ngSwitchCase=undefined [routerLink]="['detail/']">Select a book first</a>
        <a *ngSwitchDefault <!-- add: router link with specific link information -->
      </div>
    </li>
 ```

## Receiving route parameters

In the BookDetailComponent, define a bookid property that will be shown for the selected book.

```TypeScript
  public bookId : number;
```

With the imports of the BookDetailComponent, import the *ActivatedRoute* to read information about the route, and the BooksService to access the books. Read the book id from the parameters of the route:

```TypeScript
    this.bookId = this.route.snapshot.params['bookid'];
```

Also, define a *selectedBook* property of type *Book* and assign the value from a book item retrieved from the book service.

## Binding to Properties

With the HTML template, use this binding expression to bind the book id:

```HTML
  {{bookId}}
```

Create an image element and bind to the image URL using property binding. Show the img element only if the imageURL is not undefined:

```HTML
<img *ngIf="selectedBook?.imageUrl != undefined" [src]="selectedBook.imageUrl">
```


## Pipes

Add uppercase and date pipes to the binding of the publisher and release date in the book detail component:

```HTML
 <br />
  Publisher: {{selectedBook.publisher | uppercase }}
  <br />
  Release date: {{selectedBook.releasedate | date: 'MM/dd/yy'}}
```

## Observers

Experiment with the different RX functions shown at [rxmarbles](http://rxmarbles.com).

Create a new ObserveSample component where every keyboard input to an input element should be observed. For this, to use an reactive form, add the ReactiveFormsModule to the application modules.

> Reactive forms will be discussed in a later chapter.

Add these imports to the ObserveSample component:

```TypeScript
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debouncetime';
```

With the implementation of the component, create a new FormControl named searchInput, and invoke the valueChanges method to subscribe to the change event, and invoke the onchange method with every change after an initial time of 500 ms.

```TypeScript
  public searchInput : FormControl = new FormControl();

  constructor() { 
    this.searchInput.valueChanges
      .debounceTime(500)
      .subscribe(item => this.onchange(item));
  }

  onchange(s : string) {
    console.log("string entered: " + s);
  }
```

Bind to the FormControl using the formControl syntax:

```HTML
<input type="text" placeholder="enter some text" [formControl]="searchInput">
```

