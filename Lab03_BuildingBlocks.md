# Lab 3 - Building Blocks

1. Create a new Angular application using the Angular CLI

`ng new BooksSample`

2. Build and test the application

`ng build`
`ng lint`
`ng test`
`ng e2e`

3. Run the application

`ng serve`

Navigate to [http://localhost:4200/](http://localhost:4200/) and check the output of the application.

4. Check the generated source code.

Open `index.html`. 

> What is Angular-specific in this file?

Open `main.ts`.

> Which modules are imported from the local file system?

Open `environment.ts` from the environments folder.

> What's the content of environment.ts?

Open `app.module.ts` from the app folder.

> Which modules are imported from the app? Which component is used as bootstrapper?

Open `app.component.ts` from the app folder. Check the selector and the template.

> Where can the selector be found? 

Open `app.component.html` from the app folder.

> Where is the {{title}} coming from?

Change the **app works!** result to an output for **Books Sample**
