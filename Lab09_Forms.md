# Lab 9 - Forms

## Template Forms

Create a template based form to edit a book.

1. Create or use a model for the Book.
2. Create a BookEditComponent for the editor.
3. Define a list of publishers to be shown in a select element.
4. Define a onsubmit method that should be invoked when the form is submitted.
5. Create an HTML template containing items for the form.
6. Create a select element with options and bind the selected.
7. Use labels together with input elements. Use two-way binding to bind the input elements to the model.
8. Define a button to invoke the onsubmit method in the component.
9. Refactor the BooksService to a BooksQueryService, a BooksEditService, and a BooksRepository. The BooksEditService and the BooksQueryService both should use the same repository via dependency injection.
10. Use the services from the list, edit, and detail components.


## Reactive Forms

Create a reactive form to edit a book.

1. Create a model with initialized data. The model information will not be changed.
2. Create a ReactiveBookEditComponent.
3. Define a HTML form with formControl binding.


