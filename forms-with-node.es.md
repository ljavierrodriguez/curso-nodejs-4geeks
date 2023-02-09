# Formularios with NodeJS

**¿Qué son formularios web?**

Los formularios web son uno de los principales puntos de interacción entre un usuario y un sitio web o aplicación. Los formularios permiten a los usuarios la introducción de datos, que generalmente se envían a un servidor web para su procesamiento y almacenamiento


### Utilizando express

Definimos una ruta utiliando el metodo GET el cual retornara nuestra vista del formulario 

```js
	app.get('/registro', (request, response) => {
			response.send('form');
	})
```

Definimos una ruta utiliando el metodo POST el cual recibira toda la informacion sumistrada a través del formulario. Esta informacion es recibida en el objeto request el cual tiene un atributo body que es donde estan todos los campos que vienen de nuestro formulario.

```js
    app.post('/registro', (request, response) => {
        console.log(request.body)
        console.log(request.files)
    })
```

1. ***request.body***: trae toda la informacion de nuestros inputs excepto de tipo "files".
2. ***request.files***: trae toda la informacion de archivos adjuntados en nuestro formulario. For ejemplo; pdf, imagenes, documentos

> Nota: es importante resaltar que todos nuestros campos obligatoriamente tienen que tener el atributo ***name*** defindo en la etiqueta. Ejemplo: `<input type="text" name="name" placeholder="Insert name">`