<p align="center" style="background: white;">
    <img src="./assets/mongodb.png" width="100%"/>
</p>

# Basic MongoDB Commands

Here are the basic Mongodb commands you need to know as a programmer or database administrator

### Verify the Version:

Syntax:

```bash
$ mongod --version
```

Response:

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

### Connect to Mongodb:

To connect to the database, we must execute the command:

Syntax:

```bash
$ mongosh mongodb://localhost:27017
```

The response would be the following:

```bash
test>
```

### List the existing databases:

Syntax:

```bash
test> show dbs
```

Expected response:

```bash
test> show dbs
admin    40.00 KiB
config  108.00 KiB
local    72.00 KiB
test>
```

### Create a database or change to an existing one in Mongodb:

To create a database, we will employ the command use `<db-name>` where `<db-name>` will be the name of the database:

Syntax:

```bash
test> use example
```

The response will be the following output:

```bash
test> use example
switched to db example
```

### Delete a database in Mongodb:

To delete an existing database we will execute the following command, once we have selected the database that we want to delete:

Syntax:

```bash
example> db.dropDatabase()
```

Getting the following result:

```bash
example> { ok: 1, dropped: 'example' }
```

### Display existing connections in the database:

Syntax:

```bash
example> show collections
```

Response:

```bash
example> show collections
users
example>
```

### Create a collection in the selected database:

To create a collection equivalent to a table in a relational database, where we will input the collection name and the options in case we wish to:

Syntax:

```bash
example> db.createCollection('users', options)
```

Response:

```bash
example> db.createCollection('users')
{ ok: 1 }
example>
```

# Related Operations (CRUD)

To create a document, the method insert() is used. The insert() method creates one or several documents in the existing collection.

## Insert

To **insert** a record the method insertOne() or insertMany() can be used.

Syntax:

```bash
example> db.collectionName.insertOne({ document })
```

Example 1:

```bash
example> db.users.insertOne({ name: 'John Doe', email: 'john.doe@email.com', phone: '1-555-55-55'})
```

Response:

```bash
example> db.users.insertOne({ name: 'John Doe', email: 'john.doe@email.com', phone: '1-555-55-55'})
{
  acknowledged: true,
  insertedId: ObjectId("631f83b9b81e90fb01c3130d")
}
example>
```

Example 2:

```bash
example> db.users.insertMany([
    { name: 'John Doe', email: 'john.doe@email.com', phone: '1-555-55-55'},
    { name: 'Jane Doe', email: 'jane.doe@email.com', phone: '1-555-55-55'}
])
```

Response:

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

To ***retrieve*** documents from a collection, we can use the command find().

Syntax:

```bash
example> db.coleccionName.find()
```

Response:

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

To update a single document the method updateOne() is used

Syntax:

```bash
example> db.collectionName.updateOne({SingleKeyToUpdate},{Set Command})
```

Example 1:

```bash
example> db.users.updateOne({ _id: ObjectId("631f84d3b81e90fb01c3130f")}, {$set : { phone: '+56 9 3030 1111'}})
```

Response:

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

To delete one or several documents, we can use deleteOne() or deleteMany() methods

Syntax:

```bash
example> db.collectionName.deleteOne({ condition })
```

Example 1:

```bash
 example> db.users.deleteOne({ _id: ObjectId("631f84d3b81e90fb01c3130f")})
```

Response:

```bash
example> db.users.deleteOne({ _id: ObjectId("631f84d3b81e90fb01c3130f")})
{ acknowledged: true, deletedCount: 1 }
example>
```

## Retrieve Unique

To retrieve unique records, we can use the distinct() command

Syntax:

```bash
example> db.collectionName.distint(field)
```

Example 1:

```bash
example> db.users.distinct("email")
```
Response:

```bash
example> db.users.distinct("email")
[ 'john.doe@email.com' ]
example>
```
