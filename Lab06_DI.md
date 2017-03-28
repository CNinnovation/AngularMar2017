# Lab 6 - Dependency Injection

## Create a Mocking File

Create the file *mock-books.ts* and move the constant containing BOOK objects from the book list component to this file.

## Create a Service

Create the BooksService and return a list of books implementing the method *getallbooks*. Import the BOOK object from the mocking file to make it available with the service.

> What metadata information needs to be added to the service class to allow it to be injected?
> What Angular CLI command can you use to create the service?

## Define Dependency Injection via the constructor

In the BooksListComponent, define a constructor to allow injecting the *BooksService*. 

Fill the public books property to in the implemenation of the OnInit interface by invoking the getallbooks method from the service.

> Try to run the application. What error is shown in the output window in the browser developer tools?

## Provide the service in the DI container

Add the BooksService in the *providers* list of the BooksListComponent.

Try to run the application again. Now the application should run ok.

## Interfaces with the DI Container

With .NET applications, usually an interface is used when injecting services. Let's try this with Angular.

Create the interface BooksServiceInterface, and let the BooksService implement this interface. Change the constructor of the BooksListComponent to use the interface instead of the concrete type. Providing the dependency, change the provider to:

```JavaScript
[{ provide: BooksServiceInterface, useClass: BooksService }]
```

> What issues do you get when injecting a concrete type for an interface? Do you have an idea what's the problem?

Change the functionality back to use the concrete type as before.

## Hierarchical Dependency Injection

Remove the provider from the BooksListComponent. Add the BooksService to the providers of the *AppModule* class.

> Does the application work as before? What's the difference adding the provider to the AppModule instead of to the BooksListComponent?
