![jwt-node](assets/jwt-node.jpeg)
# NodeJS y JWT

JSON Web Token es un estándar abierto basado en JSON propuesto por IETF para la creación de tokens de acceso que permiten la propagación de identidad y privilegios o claims en inglés

## Contruir una API 

En este caso configuramos una api muy simple en la cual se analizara la forma de integrar jwt

Iniciar nuestro proyecto 

    $ npm init -y

Instalar las dependencias necesarias 

    $ npm i --save express jsonwebtoken

Creamos un archivo index.js y agregamos el siguiente contenido:

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

Iniciamos nuestro servidor

    $ node index.js


Agregar una ruta para nuestra autenticación

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

Debemos obtener una respuesta similar a esta

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjYyNzYyOTU2LCJleHAiOjE2NjI3NjQzOTZ9.NH9johw1YWdhW5RQTCWpFBNNks7gHauUPDbrVxUyaMA"
}
```

Ahora debemos crear un middleware que se encargara de validar el token al momento de acceder a un endpoint privado:

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


Ahora agregamos una ruta privada y utilizamos nuestro middleware que valida si viene el token en el request.

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

Nuestro archivo index.js deberia contener lo siguiente:

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