![express-middleware-nodejs](./assets/nodejs.jpeg)

Node.js and Express also allow us to create totally functional websites using only node.js since it lets us configure our project and allows us to use static files, as well as generate views in html, css and javascript. It also allows us to use template engines like ejs, pug/jade, etc.

In this section, we will learn how to create a website using bootstrap, and then we will learn the basics in order to use a template engine, which we will be using pug, but first, we need to understand what middleware is.

Express is an addressing web infrastructure and middleware that has its own minimum functionality: an Express application is basically a series of calls to middleware functions.

The middleware functions have access to the request object (req), to the response object (res), and to the next middleware function in the request/response cycle of the application. The next middleware function is denoted generally with a variable called next.

Middleware functions can perform the following tasks:

- Execute any code.
- Perform changes in the request and the response objects.
- End the request/response cycle.
- Invoke the next middleware function in the stack.

If the current middleware function does not end the request/response cycle, it should invoke next() to pass control to the next middleware function. Otherwise, the request would remain hung.

An Express application can use the following types of middleware:

1. Application-level Middleware
2. Addressing level Middleware
3. Error management Middleware
4. Incorporated Middleware
5. 3rd party Middleware

You can load the application and address-level middleware with an optional mounting access path. You can also load a series of middleware functions at once, which creates a middleware system sub-stack in a mounting point. 

To load the middleware function, call app.use(), specifying the middleware function. For example, the following code loads the myLogger middleware function before the route to the root access path (/).

```javascript
let express = require('express');
let app = express();

let myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
};

app.use(myLogger);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000);
```

### Application Level Middleware

Link the application-level middleware to an instance of the application object using the function's *app.use()* and *app.METHOD()*, where *METHOD* is the HTTP method of the request that the middleware function uses (for example, GET, POST, PUT, or DELETE) in lowercase. 

This example shows a middleware function without any mounting access path. The function executes each time the application receives a request.

```javascript
let app = express();

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});
```

This example shows a middleware function mounted on the access path /user/:id. The function executes with any type of HTTP request on the access path /user/:id.

```javascript
app.get('/user/:id', function (req, res, next) {
    res.send('USER');
});
```

### Addressing Level Middleware

The addressing level middleware works in the same way, the application level middleware does, except that it is linked to an instance of express.Router().

```javascript
let router = express.Router();
```

### Error Management Middleware

Define the error management middleware functions the same way as other middleware functions, except with four arguments instead of three, specifically with the signature (err, req, res, next):

```javascript
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
```

### Incorporated Middleware

Since version 4.x, Express no longer depends on Connect. Except express.static, all middleware functions previously included with Express are now in different modules. Check the middleware functions list.

express.static(root, [options])
The only middleware function included in Express is express.static. This function is based on serve-static and is responsible for the static assets service of an Express application.
The argument root specifies the root directory from where the static assets service is running.

### 3rd Party Middleware

Use the 3rd party middleware to add functionality to the Express applications

Install the Node.js module for the required functionality and load it on the application at the application level or addressing level.

The following example shows the installation and loading of the middleware cookies analysis function, cookie-parser.

```bash
$ npm install cookie-parser
```

Codigo Example:

```javascript
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

// load the cookie-parsing middleware
app.use(cookieParser());
```




