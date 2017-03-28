# Lab 5 - Routing

The application should have a top level part with title and logo, a left part with menus, a bottom part with extra information and a copyright, and the main part should be replaced dynamically.

## Create Fixed Components

Create a **TitleComponent**, a **MenuComponent**, and a **CopyrightComponent** using the Angular CLI. Add these components to the HTML template of the *AppComponent*.
Run the application.

Create a **EditBookComponent**. This component as well as the previously created **BooksListComponent** will be routed to.

## Create the Router

1. Ensure the index.html contains the HTML base element.
2. Import the *RouterModule* in *app.module.ts*.  

```TypeScript
import { RouterModule } from '@angular/router';
```

3. Define the routes with the *imports* section of *NgRoute*

```TypeScript
    RouterModule.forRoot([
      {
        path: 'list',
        component: BooksListComponent
      },
      {
        path: 'edit',
        component: EditBookComponent
      }
    ])
```

## Define the Router Outlet

Define the router outlet in the *AppComponent*

```html
<router-outlet></router-outlet>
```

## Implement Router Links

Define the navigation within the *MenuComponent*

```html
<nav>
  <ul>
    <li><a routerLink="edit">Edit</a></li>
    <li><a routerLink="list">List</a></li>
  </ul>
</nav>
```
