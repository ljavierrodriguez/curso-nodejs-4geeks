![express](./assets/express.png)

## What is Express and what it is used for?

Express is a web framework, written in Javascript and hosted within the NodeJS runtime. This module explains some of the key benefits of this framework, how to set up your development environment, and how to perform common tasks in web development and publishing.

## What function does Express have in a web application?

First, let's define what is Express. It is basically a minimalist development framework for Node. JS that allows to structure an application in an agile way, provides us functionality such as routing, options to manage sessions and cookies, etc. Express not only allows us to create *Web Applications*, but also *API's*, this means that in addition to managing our frontend (html, css, images, javascript, etc.), it allows us to create apis witch can be used with any framework or frontend library like: React, Angular, Vue, etc.

## Start an application with Express

To start a project with Express we will create a folder called *test-express*, once it is created we will locate ourselves in the folder from the terminal, or with our favorite IDE we can open a terminal in which we will run the next command:

```bash
$ npm init -y
```

Once executed, we will obtain a basic configuration file called *package.json*. Once created the file to work nodejs with modules, we can modify our ***package.json*** and add the following:

```json
{
    ...
    "type": "modules",
    ...
}
```

By default nodejs works with commonjs to import the modules inside our application.

We will proceed to install Express using the following command:

```bash
$ npm i express --save
```

Once installed Express in our dependencies, we will proceed to create a file called  ***app.js***, in which we will type the following coding lines:

1. Import Express in our file:

```javascript
const express = require('express'); // import express
```
       
2. Start Express

```javascript
const app = express() // create an instance of express 
```

3. Define the port through which our application will be running:

```javascript
const port = 3000; // We define the port that we will use 
```

4. We define a route using the GET method which receives two parameters, a string that will be the way to access to our route and the second is a function that will be executed when accessing the route, which receives and provides us two objects: a request and a response; the request that will allow us to obtain the information that sends the client and the response, which will allow us to deliver a message to the client that is accessing our route

```javascript
app.get('/', (request, response) => {
     response.send('Hola Mundo desde Express');
})
```

5. We define our server by using the *listen* method, which can be access from our Express instance, and receives two arguments. The first one is the port where we want to listen if the client connects to our application, and the second one is a function which we can see accusing to our application

```javascript
app.listen(port, () => {
     console.log("Iniciando el servidor sobre el puerto" + port);
});
```

6. The expected result is the following, to see it you have to access to this route from your browser http://localhost:3000/:

![preview](./assets/express-output.png)

7. To inform what the templates' folder is and what is the extension that these template files have, we are going to add the following lines.

```javascript
...
const path = require('path');        
...
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
...
```

8. To define where our public files will be loaded, such as css, js, images, or downloadable files, we can add the following line.

```javascript
...
app.use(express.static(path.join(__dirname, 'public')));
...
```

9. Once configured the file from a terminal or console, we will proceed to run the following command

```bash
$ node app.js
```




