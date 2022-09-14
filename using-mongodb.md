<p align="center" style="background: white;">
    <img src="./assets/mongodb.png" width="100%"/>
</p>

# Comandos Basicos MongoDB

Aqui están los comandos basicos que como programadores o administradores de base de datos debemos saber sobre mongodb 

### Verificar de la Version:

Sintaxis:

    $ mongod --version

Respuesta:

```bash
$ mongod --version
db version v6.0.0
Build Info: {
    "version": "6.0.0",
    "gitVersion": "e61bf27c2f6a83fed36e5a13c008a32d563babe2",
    "modules": [],
    "allocator": "system",
    "environment": {
        "distarch": "aarch64",
        "target_arch": "aarch64"
    }
}
$
```

### Conectar a mongodb:

Para conectar a la base de datos deberemos ejecutar el comando:

Sintaxis:

    $ mongosh mongodb://localhost:27017

Las respuesta seria la siguiente salida:

```bash
test>
```

### Listar las base de datos existentes:

Sintaxis:

    test> show dbs

Resultado esperado:

```bash
test> show dbs
admin    40.00 KiB
config  108.00 KiB
local    72.00 KiB
test>
```

### Crear una base de datos o cambiar a una existente en mongodb:

Para crear una base de datos usaremos el comando use <db-name> donde <db-name> será el nombre de la base de datos:

Sintaxis:

    test> use example

Las respuesta seria la siguiente salida:

```bash
test> use example
switched to db example
```

### Eliminar una base de datos en mongodb:

Para eliminar una base de datos ya existente ejecutaremos el siguiente comando una vez seleccionada la base de datos que queremos eliminar:

Sintaxis:

    example> db.dropDatabase()

Obteniendo el siguiente resultado:

```bash
example> { ok: 1, dropped: 'example' }
```

### Mostrar las colecciones existentes en la base de datos:

Sintaxis:

    example> show collections

Respuesta:
```bash
example> show collections
users
example> 
```

### Crear una coleccion en la base de datos seleccionada:

Para crear una coleccion que es equivalente a una tabla en una base de datos relacional, donde indicaremos el nombre de la colección y las opcionaes en caso de querer hacerlo:

Sintaxis:

    example> db.createCollection('users', options)
    
Respuesta:
```bash
example> db.createCollection('users')
{ ok: 1 }
example> 
```

# Operaciones Relacionadas (CRUD)

Para crear un documento, el insert() se utiliza el método. El método insert () crea uno o varios documentos en la colección existente. 

## Insert

Para ***insertar*** un registro se puede utilizar el método insertOne() o insertMany().

Sintaxis:

    example> db.collectionName.insert({ document })

Ejemplo 1:

    example> db.users.insertOne({ name: 'John Doe', email: 'john.doe@email.com', phone: '1-555-55-55'})

Respuesta:
```bash
example> db.users.insertOne({ name: 'John Doe', email: 'john.doe@email.com', phone: '1-555-55-55'})
{
  acknowledged: true,
  insertedId: ObjectId("631f83b9b81e90fb01c3130d")
}
example> 
```

Ejemplo 2:

    example> db.users.insertMany([
        { name: 'John Doe', email: 'john.doe@email.com', phone: '1-555-55-55'},
        { name: 'Jane Doe', email: 'jane.doe@email.com', phone: '1-555-55-55'}
    ])

Respuesta:
```bash
example> db.users.insertMany([ { name: 'John Doe', email: 'john.doe@email.com', phone: '1-555-55-55' }, { name: 'Jane Doe', email: 'jane.doe@email.com', phone: '1-555-55-55' }])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("631f84d3b81e90fb01c3130e"),
    '1': ObjectId("631f84d3b81e90fb01c3130f")
  }
}
example> 
```
## Select

Para ***recuperar*** documentos de una colección podemos utilizar el comando find().

Sintaxis:

    example> db.coleccionName.find()

Respuesta
```bash
example> db.users.find()
[
  {
    _id: ObjectId("631f84d3b81e90fb01c3130e"),
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '1-555-55-55'
  },
  {
    _id: ObjectId("631f84d3b81e90fb01c3130f"),
    name: 'Jane Doe',
    email: 'jane.doe@email.com',
    phone: '1-555-55-55'
  }
]
example> 
```

## Update

Para actualizar un solo documento utilizamos el método updateOne()

Sintaxis:

    example> db.collectionName.updateOne({SingleKeyToUpdate},{Set Command})

Ejemplo 1:

    example> db.users.updateOne({ _id: ObjectId("631f84d3b81e90fb01c3130f")}, {$set : { phone: '+56 9 3030 1111'}})

Respuesta:
```bash
example> db.users.updateOne({ _id: ObjectId("631f84d3b81e90fb01c3130f")}, {$set : { phone: '+56 9 3030 1111'}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
example>
``` 

## Delete

Para eliminar un documento o más podemos utilizar el método deleteOne() o deleteMany()

Sintaxis:

    example> db.collectionName.deleteOne({ condition })

Ejemplo 1:

    example> db.users.deleteOne({ _id: ObjectId("631f84d3b81e90fb01c3130f")})

Respuesta:
```bash
example> db.users.deleteOne({ _id: ObjectId("631f84d3b81e90fb01c3130f")})
{ acknowledged: true, deletedCount: 1 }
example>
``` 

## Recuperar Distintos

Para obtener registros unicos podemos utilizar el comando distinct()

Sintaxis:

    example> db.collectionName.distint(field)

Ejemplo 1:

    example> db.users.distinct("email")


Respuesta:
```bash
example> db.users.distinct("email")
[ 'john.doe@email.com' ]
example>
``` 