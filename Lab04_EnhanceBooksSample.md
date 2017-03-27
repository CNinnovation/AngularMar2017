# Lab 4 - Enhance BooksSample

With models, components, templates

## Create a model class *Book*

`ng generate class Book`

and add bookid, title, and publisher information that can be initialized in the constructor. The publisher should be optional.

## Create a Component *BooksListComponent*

`ng generate component BooksList`

Open the generated files books-list.component.css, books-list.component.html, books-list.component.spec.ts, and books-list.component.ts. What changed in *app.module.ts*?

## Add the BooksListComponent to the HTML of the AppComponent

Add the selector for the BooksListComponent, build and run the application to see the results of the component.

## Add a books list to the BooksListComponent

1. Import the Book type from the model definition in the BooksListComponent
2. Create a const array of Book objects, and fill the array with a few books
3. Define a public property books and return the const array from this property
4. In the HTML template define list items to return the book list from the component
5. Build and run the application