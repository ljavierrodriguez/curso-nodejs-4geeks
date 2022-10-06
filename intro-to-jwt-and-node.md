<p align="center" style="background: white;">
    <img src="./assets/jwt-node.jpeg" width="100%" />
</p>

# NodeJS y JWT

JSON Web Token is an open standard based on JSON proposed by the IETF for the creation of access tokens that allow the propagation of identity and privileges or claims in English

## Build an API

In this case we configure a very simple api in which the way to integrate jwt will be analyzed

Start our project

    $ npm init -y

Install the necessary dependencies

    $ npm i --save express jsonwebtoken

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

We start our server

    $ node index.js

Add a route for our authentication

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

We should get a response similar to this

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjYyNzYyOTU2LCJleHAiOjE2NjI3NjQzOTZ9.NH9johw1YWdhW5RQTCWpFBNNks7gHauUPDbrVxUyaMA"
}
```

Now we must create a middleware that will take care of validating the token when accessing a private endpoint:

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

Now we add a private route and use our middleware that validates if the token is coming in the request.

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
