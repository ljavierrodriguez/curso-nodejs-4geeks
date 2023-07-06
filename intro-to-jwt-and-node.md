<p align="center" style="background: white;">
    <img src="./assets/jwt-node.jpeg" width="100%" />
</p>

# NodeJS and JWT

JSON web Token is an open standard based on JSON proposed by IETF for the creation of access tokens, that allows the propagation of identity and privileges or claims. 

## Construct an API

In this case, we will configure a very simple API in which we will analyze the method to integrate JWT

Begin our project

```bash 
$ npm init -y
```

Install necessary dependencies

```bash 
 $ npm i --save express jsonwebtoken
```

We create an index.js file and add the following content:

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY || 'secret-key';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('API REST NodeJS');
})

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
```

We initiate our server

```bash 
$ node index.js
```

Add a path for our authentication

```javascript
app.post('/token', (req, res) => {
    const { username, password } = req.body;
    if(!(username && password)) return res.status(400).json({ msg: 'Username/Password are required!'})

    if(username === 'admin' && password === 'admin'){
        const payload = {
            username: username,
        }

        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 1440 });

        return res.status(200).json({
            token: token
        })
    } else {
        return res.status(401).json({ msg: 'Username/password are incorrect!'});
    }
})

```

We should receive a reply similar to this one

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjYyNzYyOTU2LCJleHAiOjE2NjI3NjQzOTZ9.NH9johw1YWdhW5RQTCWpFBNNks7gHauUPDbrVxUyaMA"
}
```

Now we must create a middleware that will be in charge of validating the token during the access of a private endpoint:

```javascript
...
const auth = require('express').Router();

auth.use((req, res, next) => {
    const token = req.headers['x-access-token'];

    if(token){
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if(err) return res.json({ msg: 'Token is invalid!'})
            req.decoded = decoded;
            next();
        })
    }else{
        return res.status(400).json({ msg: 'Token is missing!'});
    }
});

```

Now we add a private path and use our middleware to validate if the token is included with the request.

```javascript

app.get('/datos-privados', auth, (req, res) => {
    const tasks = [
        { task: 'Task 1', done: false },
        { task: 'Task 2', done: false },
        { task: 'Task 3', done: true },
        { task: 'Task 4', done: false },
    ]

    return res.status(200).json(tasks);
})

```

Our index.js file should contain the following:

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const auth = require('express').Router();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY || 'secret-key';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('API REST NodeJS');
})

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

app.post('/token', (req, res) => {
    const { username, password } = req.body;
    if(!(username && password)) return res.status(400).json({ msg: 'Username/Password are required!'})

    if(username === 'admin' && password === 'admin'){
        const payload = {
            username: username,
        }

        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 1440 });

        return res.status(200).json({
            token: token
        })
    } else {
        return res.status(401).json({ msg: 'Username/password are incorrect!'});
    }
})

auth.use((req, res, next) => {
    const token = req.headers['x-access-token'];

    if(token){
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if(err) return res.status(403).json({ msg: 'Token is invalid!'})
            req.decoded = decoded;
            next();
        })
    }else{
        return res.status(400).json({ msg: 'Token is missing!'});
    }
});


app.get('/datos-privados', auth, (req, res) => {
    const tasks = [
        { task: 'Task 1', done: false },
        { task: 'Task 2', done: false },
        { task: 'Task 3', done: true },
        { task: 'Task 4', done: false },
    ]

    return res.status(200).json(tasks);
})
```