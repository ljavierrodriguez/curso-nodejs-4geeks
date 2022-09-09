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
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencode({ extended: false }));

app.get('/', (req, res) => {
    res.send('API REST NodeJS');
})

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

```

Iniciamos nuestro servidor

    $ node index.js
