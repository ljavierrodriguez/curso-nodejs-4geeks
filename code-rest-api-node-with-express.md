# Crear REST API en node js con ***express***

```
🔥 Este ejercicio está diseñado para realizarse de 1 persona.
```

<!-- <p align="center">
  <img height="200" src="assets/form.png" />
</p> -->

Tecnologías: Node, express, express-generator

Vamos a crear una REST API que en la misma podamos administrar un array de tareas desde node/express.

La idea es crear con node y express los diferentes endpoints o rutas para realizar un CRUD (Crear, Listar, Actualizar, Eliminar) sobre un array de tareas.

## 🌱  Cómo iniciar este proyecto

a) Configura express desde cero.

b) Crear el proyecto usando express-generator.

💡 Importante: guardar tu código en tu nuevo repositorio usando `add`, `commit` y `push`.

## Estrategia

Tomate unos minutos para analizar 🤯 tu estrategia sobre ella, identifica los elemntos que vas a utilizar de express:

Una vez terminada la estrategia puedes empezar a codificar, 
¡Empieza a programar 🎊!


## Acerca del proyecto que vamos a construir

En este proyecto debemos construir una REST API que exponga las siguientes 4 rutas a internet:

```txt
GET /todos
POST /todos
PUT /todos/:position
DELETE /todos/:position
```

### GET /todos

Debe devolver las tareas existentes en el array

```javascript
[
    {
        "done": false,
        "label": "Sample Todo 1"
    },
    {
        "done": false,
        "label": "Sample Todo 2"
    }
]
```

### POST /todos

Debemos poder enviar los siguientes datos al endpoint y poder agregar dichos datos al array de tareas.

```javascript
{
    "done": false,
    "label": "Sample Todo 1"
}
```

### PUT /todos/:position

Debemos poder enviar los siguientes datos al endpoint y poder actualizar dichos datos en el array de tareas segun su posición.

```javascript
{
    "done": true,
    "label": "Sample Todo 1"
}
```

And return the updated list of todos.

### DELETE /todos/:position

Debera eliminar de nuestro array la tarea según la posición dada al endpoint en el url y retornar el listado de tareas actualizado.