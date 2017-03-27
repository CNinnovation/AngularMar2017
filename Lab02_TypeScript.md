# Lab 2 - TypeScript

## Hello, TypeScript

1. Create a HTML page hello.html that includes the JavaScript file hello.js
2. Create a hello.ts TypeScript file that writes a Hello, World! message
3. Compile the hello.ts TypeScript file using **tsc**
4. Open the HTML page and run the script using `start hello.html`

HTML File:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>TypeScript Sample</title>
</head>
<body>
  <h1>TypeScript Sample</h1>
  <script src="hello.js"></script>
</body>
</html>
```

TypeScript File:

```typescript
alert('Hello, TypeScript!');
```

> Why is a TypeScript file created, but a JavaScript file included with the HTML file?

> How does the generated JavaScript file differ from the TypeScript file?


## Playground

1. Open Playground at TypeScriptLang: [Playground](http://typescriptlang.org/play/index.html "Playground")
2. Add the Hello, World! TypeScript code, check the generated JavaScript code and run the program

## Functions

1. Create and call a named function with the name `greet1` that accepts an optional string parameter and returns a string.
2. Create and call an anonymous function that accepts an optional string parameter and returns a string
3. Create and call a arrow function that accepts an optional string parameter and returns a string
4. Implement a Website where the JavaScript functions are invoked
5. Use the Developer Tools of the Edge/IE/Chrome browser using the F12 key, and debug the function from the browser

# Classes and Interfaces

1. Create a file tsconfig.json. Include all .ts files of the current directory, and specify the ES5 target.
2. Create a class named *Character* with a field *fullname* in the file Character.ts.
3. Define a constructor with *firstname* and *lastname* arguments, and initialize the fullname field
4. Define a *greet* method that accepts an optional parameter name. Use the if/else statement to return a different greeting, such as "Hello, name! My name is fullname."
5. Create an object of the Character type and invoke the greet method, with and without passing a name in the file program.ts.
6. Create an interface LoggerInterface that is implemented by the Logger class in the file logger.ts.
7. Create namespaces for the class Character.
8. Compile the typescript files, and change the target to ES6.

Questions:
How does the class declaration look like with JavaScript?
How does the interface look like in JavaScript?
How is the namespace converted to JavaScript?
How does the output of the tsc compiler differs with the options ES3 and ES6?

1. Create a class Book with properties bookid, title, and publisher. 

