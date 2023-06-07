![express](./assets/express.png)

## ¿Qué es Express y para qué sirve?

Express es un framework web, escrito en JavaScript y alojado dentro del entorno de ejecución NodeJS. El módulo explica algunos de los beneficios clave de este framework, como configurar tu entorno de desarrollo y como realizar tareas comunes en desarrollo y publicación web.

## ¿Qué función cumple Express en una aplicación web?

Primeramente, definamos qué es Express. Básicamente, es un marco de desarrollo minimalista para Node.js que permite estructurar una aplicación de una manera ágil, nos proporciona funcionalidades como el enrutamiento, opciones para gestionar sesiones y cookies, etc. Express nos permite crear no solo *Aplicaciones Web*, sino tambíen *API's*, esto quiere decir que además de gestionar nuestro frontend (html, css, imagenes, javascript, etc.), nos permite crear apis las cuales podrán ser utilizadas con cualquier framework o librería de frontend como por ejemplo: React, Angular, Vue, etc.

## Iniciar una aplicación con Express

Para iniciar un proyecto con Express crearemos una carpeta llamada *test-express*, una vez creada nos ubicaremos en la carpeta desde un terminal o con nuestro IDE favorito abriremos un terminal en el cual ejecutaremos el siguiente comando:

```bash
$ npm init -y
```

Una vez ejecutado obtendremos un archivo básico de configuración llamado *package.json*, una vez creado el archivo para trabajar Node.js como módulos podemos modificar nuestro ***package.json*** y agregar lo siguiente:

```json
{
    ...
    "type": "modules",
    ...
}
```

Por defecto nodejs trabaja con commonjs para importar los modulos dentro de nuestra aplicaciòn.

Procederemos a instalar express usando el siguiente comando:

```bash
$ npm i express --save
```

Ya instalado express en nuestras dependencias, procederemos a crear una archivo llamado ***app.js***, en el cual escribiremos las siguientes lineas de codigo:

1. Importamos express en nuestro archivo:

```javascript
const express = require('express'); // importando Express
```
       
2. Instanciamos express.

```javascript
const app = express() // creando una instancia de Express
```

3. Definimos el puerto por el cual se estara ejecutando nuestra aplicacion:

```javascript
const port = 3000; // definimos nuestro puerto a utilizar
```

4. Definimos una ruta mediante el método GET el cual recibe dos parámetros, un string que será la forma de acceder a nuestra ruta y el segundo es una función que se ejecutará al acceder a la ruta, la cual recibe y nos proporciona dos objetos: un request y un response; el request nos permitirá obtener la información que envía el cliente y el response, nos permitirá entregar un mensaje al cliente que está accediendo a nuestra ruta.

```javascript
app.get('/', (request, response) => {
     response.send('Hola Mundo desde Express');
})
```

5. Definimos nuestro servidor utilizando el método *listen* el cual podremos acceder desde nuestra instancia de Express, el cual recibe dos argumentos, el primero es el puerto por el cual queremos estar atentos si el cliente se conecta a nuestra aplicación y el segundo es una función la cual podremos observar al momento de acceder a nuestra aplicación.

```javascript
app.listen(port, () => {
     console.log("Iniciando el servidor sobre el puerto" + port);
});
```

6. El resultado esperado es el siguiente, para verlo debes acceder a la siguiente ruta desde un navegador http://localhost:3000/:

![preview](./assets/express-output.png)

7. Para informar de cuál es la carpeta de plantillas y cuál es la extensión que tienen estos archivos de plantilla vamos a añadir las siguientes líneas.

```javascript
...
const path = require('path');        
...
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
...
```

8. Para definir donde se cargaran nuestros archivos publicos como por ejemplos css, js, imagenes, o archivos descargables podemos definir la siguiente línea:

```javascript
...
app.use(express.static(path.join(__dirname, 'public')));
...
```

9. Una vez configurado el archivo desde un terminal o consola procederemos a ejecutar el siguiente comando.

```bash
$ node app.js
```




