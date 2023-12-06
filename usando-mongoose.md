<p align="center">
  <img src="./assets/mongoose.png" width="100%"/>
</p>

# Usar mongodb utilizando el ODM Mongoose

Mongoose es un ODM (Object Data Model) que proporciona una solución sencilla basada en esquemas para modelar los datos de su aplicación. Incluye conversión de tipo incorporada, validación, creación de consultas, enlaces de lógica de negocios y más, listos para usar.

Para iniciar un proyecto vamos a crear una carpeta e iniciar un proyecto con npm:

```bash
$ mkdir mongoose_app_test && cd mongoose_app_test
```

Iniciamos un proyecto con npm

```bash
$ npm init -y
```

Instalar el ODM Mongoose

```bash
$ npm i --save mongoose
```

Importar mongoose a nuestro proyecto, creamos un archivo ***database.js*** y añadimos el siguiente código

```javascript

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/example')
```

Cuando nos conectamos a MongoDB usando la función ***connect*** acepta dos parámetros opcionales. El segundo parámetro es un objeto de opciones donde se puede especificar cómo el usuario y la contraseña, en caso de que sea necesario. Por último, el tercer parámetro es una función que retorna el resultado después de intentar conectarse a la base de datos. La misma puede utilizarse de dos formas

Ejemplo:

```javascript

// Normal
mongoose.connect(url, options, (err) => {
    if (err) throw err;
    console.log('Database Connected!');
});

// Promises

mongoose.connect(url, options).then(
    () => {/* Database Connected! */ },
    (err) => {/* Database Connection Error */}
});

```

Mongoose proporciona una increíble cantidad de funcionalidades para crear y trabajar con esquemas. Mongoose actualmente contiene ocho SchemaTypes que una propiedad se guarda como cuando se conserva a MongoDB. Son:

1. String (Cadena)
2. Number (Número)
3. Date (Fecha)
4. Buffer
5. Boolean (Booleano)
6. Mixed (Mixto)
7. ObjectId
8. Array (Matriz)

## Definir un esquema de Mongoose

Para crear un esquema utilizaremos ***mongoose.Schema()*** a través del objeto ***mongoose***, el cual recibirá un objeto como argumento, por ejemplo:

Queremos crear un usuario que tenga las propiedades nombre, email, teléfono, entonces para crear ese esquema haremos lo siguiente:

Ejemplo 1:

```javascript
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
})
```

Ejemplo 2:

```javascript
const userSchema = mongoose.Schema({
    _id: mongosee.Schema.Types.ObjectId,
    name: String,
    email: String,
    phone: String,
    created_at: {
        type: Date,
        default: Date.now
    }
})
```

Ejemplo 3:

```javascript
const contactSchema = mongoose.Schema({
    _id: mongosee.Schema.Types.ObjectId,
    name: String,
    phone: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})
```

## Crear los modelos de Mongoose

Hemos anteriormente creado dos esquemas los cuales son user y contact, los cuales nos ayudarán a crear los modelos User y Contact respectivamente usando el ***mongoose.model()*** a través del objecto mongoose.

Ejemplo 1:

```javascript
const User = mongoose.model('User', userSchema);
const Contact = mongoose.model('Contact', contactSchema);
```

## Guardar datos usando los modelos de Mongoose

Hemos anteriormente creado dos modelos los cuales son User y Contact, los cuales nos ayudarán a crear usuarios y contactos respectivamente en la base de datos:

Ejemplo 1:

```javascript
const user = new User({
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 555 555 55 55'
})

user.save((err) => {
    if(err) throw err;
    console.log('User created successfully!');
})
```

## Seleccionar datos usando los modelos de Mongoose

Hemos anteriormente insertado documentos con los dos modelos User y Contact, ahora el proceso de buscar es similar al crear solo que debemos conseguir el elemento que queremos, para ellos tenemos diferentes metodos tales como find(), findOne(), findById(), findByIdAndUpdate():

Ejemplo 1:

```javascript
const user = User.find({
    name: 'John Doe'
})
```

Ejemplo 2:
```javascript
const contact = Contact.findById({
    _id: '632244bb405329d320cde2ae'
})
```

## Actualizar datos usando los modelos de Mongoose

Hemos anteriormente localizado documentos con los dos modelos User y Contact, ahora el proceso de actualizar es similar al crear solo que debemos conseguir el elemento que queremos actualizar, para ellos tenemos diferentes metodos tales como update(), updateOne():

Ejemplo 1:

```javascript
const user = User.find({
    name: 'John Doe'
})

user.update({ name: 'John A. Doe'}).exec((err) => {
    console.log("User updated!!!");
    mongoose.disconnect();
});
```

Ejemplo 2:
```javascript
const contact = Contact.find({
    name: 'Jane Doe'
})

contact.updateOne({
    name: 'Jane M. Doe'
}).exec()
```

## Eliminar documentos usando los modelos de Mongoose

Hemos anteriormente actualizado documentos con los dos modelos User y Contact, ahora el proceso de eliminar es similar al crear o buscar solo que debemos conseguir el elemento que queremos eliminar o usando el modelo segun el filtro suministrado, para lo cual contamos con diferentes metodos tales como deleteOne(), deleteMany() o usando la instancia del documento y usar el metodo delete:

Ejemplo 1:

```javascript
User.deleteOne({ name: 'John Doe' }, function (err) {
  if (err) throw err;
});
```

Ejemplo 2:
```javascript
User.deleteMany({ is_active: false }, function (err) {
  if (err) throw err;
});
```



