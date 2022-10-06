![express-middleware-nodejs](./assets/nodejs.jpeg)

NodeJS and Express nos permite también crear sitios web totalmente funcionales utilizando solo nodejs, ya que nos permite configurar nuestro proyecto y permitirnos usar archivos estaticos asi como generar vistas en html css y javascript. Así como a su vez también nos permite usar motores de plantillas como ejs, pug/jade, etc.

En esta seccion aprenderemos a crear un sitio web usando bootstrap y luego aprenderemos lo basico para utilizar un motor de plantillas el cual utilizaremos pug pero primero tenermos que entender que son los middleware

Express es una infraestructura web de direccionamiento y middleware que tiene una funcionalidad mínima propia: una aplicación Express es fundamentalmente una serie de llamadas a funciones de middleware.

Las funciones de middleware son funciones que tienen acceso al objeto de solicitud (req), al objeto de respuesta (res) y a la siguiente función de middleware en el ciclo de solicitud/respuestas de la aplicación. La siguiente función de middleware se denota normalmente con una variable denominada next.

Las funciones de middleware pueden realizar las siguientes tareas:

- Ejecutar cualquier código.
- Realizar cambios en la solicitud y los objetos de respuesta.
- Finalizar el ciclo de solicitud/respuestas.
- Invocar la siguiente función de middleware en la pila.

Si la función de middleware actual no finaliza el ciclo de solicitud/respuestas, debe invocar next() para pasar el control a la siguiente función de middleware. De lo contrario, la solicitud quedará colgada.

Una aplicación Express puede utilizar los siguientes tipos de middleware:

1. Middleware de nivel de aplicación
2. Middleware de nivel de direccionador
3. Middleware de manejo de errores
4. Middleware incorporado
5. Middleware de terceros

Puede cargar middleware de nivel de aplicación y de nivel de direccionador con una vía de acceso de montaje opcional. También puede cargar una serie de funciones de middleware a la vez, lo que crea una subpila del sistema de middleware en un punto de montaje.

Para cargar la función de middleware, llame a app.use(), especificando la función de middleware. Por ejemplo, el siguiente código carga la función de middleware myLogger antes de la ruta a la vía de acceso raíz (/).

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

### Middleware de nivel de aplicación

Enlace el middleware de nivel de aplicación a una instancia del objeto de aplicación utilizando las funciones *app.use()* y *app.METHOD()*, donde *METHOD* es el método HTTP de la solicitud que maneja la función de middleware (por ejemplo, GET, POST, PUT o DELETE) en minúsculas.

Este ejemplo muestra una función de middleware sin ninguna vía de acceso de montaje. La función se ejecuta cada vez que la aplicación recibe una solicitud.

```javascript
let app = express();

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});
```

Este ejemplo muestra una función de middleware montada en la vía de acceso /user/:id. La función se ejecuta para cualquier tipo de solicitud HTTP en la vía de acceso /user/:id.

```javascript
app.get('/user/:id', function (req, res, next) {
    res.send('USER');
});
```

### Middleware de nivel de direccionador

El middleware de nivel de direccionador funciona de la misma manera que el middleware de nivel de aplicación, excepto que está enlazado a una instancia de express.Router().

```javascript
let router = express.Router();
```

### Middleware de manejo de errores

Defina las funciones de middleware de manejo de errores de la misma forma que otras funciones de middleware, excepto con cuatro argumentos en lugar de tres, específicamente con la firma (err, req, res, next):

```javascript
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
```

### Middleware incorporado

Desde la versión 4.x, Express ya no depende de Connect. Excepto express.static, todas las funciones de middleware que se incluían previamente con Express están ahora en módulos diferentes. Consulte la lista de funciones de middleware.

express.static(root, [options])
La única función de middleware incorporado en Express es express.static. Esta función se basa en serve-static y es responsable del servicio de activos estáticos de una aplicación Express.

El argumento root especifica el directorio raíz desde el que se realiza el servicio de activos estáticos.

### Middleware de terceros

Utilice el middleware de terceros para añadir funcionalidad a las aplicaciones Express.

Instale el módulo Node.js para la funcionalidad necesaria y cárguelo en la aplicación a nivel de aplicación o a nivel de direccionador.

El siguiente ejemplo ilustra la instalación y carga de la función de middleware de análisis de cookies cookie-parser.

```bash
$ npm install cookie-parser
```

Codigo Ejemplo:

```javascript
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

// load the cookie-parsing middleware
app.use(cookieParser());
```