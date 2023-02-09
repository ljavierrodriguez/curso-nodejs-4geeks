# Forms with NodeJS

**What are the web forms?**

Web forms are one of the main points of interaction between a user and a website or application. Forms allow users to enter data, which is typically sent to a web server for processing and storage.

### Using express

We define a route using the GET method which will return our view of the form

```js
app.get('/registro', (request, response) => {
    response.send('form');
})
```

We define a route using the POST method which will receive all the information supplied through the form. This information is received in the request object which has a body attribute that is where all the fields that come from our form are.

```js
app.post('/registro', (request, response) => {
    console.log(request.body)
    console.log(request.files)
})
```

1. ***request.body***: brings all the information from our inputs except the type "files".
2. ***request.files***: brings all the information of files attached to our form. For example; pdf, images, documents.

> Note: It is important to highlight that all our fields must have the attribute ***name*** defined in the label. Example: `<input type="text" name="name" placeholder="Insert name">`


    

