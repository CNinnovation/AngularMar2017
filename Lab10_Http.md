# Lab 10 - HTTP

## ASP.NET Web API

Create an ASP.NET Web API services with access to the database using ADO.NET Entity Framework - returning, creating, and updating Book objects.

## HTTP

1. With the Angular client application, create a BooksHttpService making HTTP GET and HTTP POST requests to the API service. Use the API with Observable.

> Helpful information: [Tour of Heroes](https://embed.plnkr.co/?show=preview)

2. Change the BooksService to offer the same Observable methods as the BooksHttpService

3. Change the components using the BooksService (or the services using the BooksService) to use the new API

4. Deploy the Angular Application to the ASP.NET Web API project

5. Test and run the application

> To invoke the ASP.NET Web API service from a client not coming from the same web site (e.g the Angular application hosted on a different port), CORS must be enabled: [Enable CORS with ASP.NET Web API](https://docs.microsoft.com/en-us/aspnet/web-api/overview/security/enabling-cross-origin-requests-in-web-api)