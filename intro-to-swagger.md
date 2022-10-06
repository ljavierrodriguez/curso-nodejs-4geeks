<p align="center">
    <img src="./assets/swagger.png" width="100%" />
</p>

# ¿Qué es Swagger y para qué sirve?

Swagger es una especificación abierta para definir las API REST. Un documento Swagger es el equivalente de la API REST de un documento WSDL para un servicio web basado en SOAP.

## ¿Qué es la documentacion de la API?
La documentación de API, como su propio nombre indica, abarca la redacción del contenido informativo sobre el uso de API. La guía se presenta, normalmente, bajo una serie de referencias y tutoriales acompañados de ejemplos que ayudan a los desarrolladores a entender la Interfaz de Programación de Aplicaciones API.

# Como utilizar Swagger

## Instalacion de Swaggwe

Para instalar swagger en nuestro proyecto de node con express debemos utilizar el siguiente modulo:

    $ npm i swagger-ui-express --save

Una vez instalado debemos configurar nuestro proyecto agregando el siguiente codigo para anexar nuestro archivo de swagger:

```javascript
...
const swaggerUI = require('swagger-ui-express');
const swagggerDocument = require('./swagger.json');
...
```

Una vez agregado crearemos una ruta para acceder a la documentacion generada por swagger desde el middleware:

```javascript
...
const options = {
    explorer: true
}
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument, options));
...
```

Una vez configurado todo nuestro proyecto para acceder a nuestra documentacion con swagger pasaremos a configurar nuestro archivo ***swagger.json***

### Informacion Básica

Esta seccion contiene de las especificaciones de swagger los datos basicos de nuestro proyecto:


```json

{
    "openapi": "3.0.3",
    "info": {
        "title": "REST API Documentation",
        "description": "example of a REST API Documentation",
        "version": "1.0.0",
        "contact": {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "url": "www.johndoe.com"
        }
    }
}

```

Resuldado:

<p align="center">
    <img src="./assets/swagger-docs/result_1.png" width="100%" />
</p>

### Servidores

```json
{
    ...
    "servers": [
        {
            "url": "http://localhost:3000/v1",
            "description": "Local Server v1"
        }
    ],
    ...
}

```

Resultado:

<p align="center">
    <img src="./assets/swagger-docs/result_2.png" width="100%" />
</p>

Para poder seguir configurando nuestro archivo ***swagger.json*** podemos seguir las expecificaciones de la documentacion de [OpenAPI](https://swagger.io/specification/) en la seccion de "schema"

<p align="center">
    <img src="./assets/swagger-docs/openapi_especification.png" width="100%" />
</p>