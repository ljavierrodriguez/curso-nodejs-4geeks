<p align="center">
  <img src="./assets/mongoose.png" width="100%"/>
</p>

# Use Mongodb using the Mongoose ODM

Mongoose is an ODM (Object Data Model) that provides a simple schema-based solution for modeling your application data. It includes built-in type casting, validation, query building, business logic hooks, and more, ready to use.

To start a project, we are going to create a folder and start a project with npm:

```bash
$ mkdir mongoose_app_test && cd mongoose_app_test
```

We start a project with npm

```bash
$ npm init -y
```

Install the Mongoose ODM

```bash
$ npm i --save mongoose
```

Import Mongoose to our project, create a file ***database.js***, and add the following code

```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/example')
```

When we connect to MongoDB using the ***connect*** function, it accepts two optional parameters. The second parameter is an options object, where it can be specified as the username and password, if necessary. Finally, the third parameter is a function that returns the result after trying to connect to the database. It can be used in two ways

Example:  

```javascript

// Nomal
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

Mongoose delivers an incredible amount of functionalities to create and work with schemes. Mongoose currently contains eight SchemaTypes that property keeps, like when you preserve a MongoDB. These are:

1. String
2. Number
3. Date
4. Buffer
5. Boolean
6. Mixed
7. ObjectId
8. Array

## Define a Mongoose Scheme

To create a scheme we will use ***mongoose.Scheme()*** through the object ***mongoose***, which will receive an object as an argument; for example:

We want to create a user with the properties name, email, and phone number; so we need to do the following to create that scheme:

Example 1:

```javascript
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
})
```

Example 2:

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

Example 3:

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

## Create the Mongoose Models

We previously created two schemes which are user and contact, which will help us to create the model's User and Contact respectively, using the ***mongoose.model()*** by means of the mongoose object.

Example 1:

```javascript
const User = mongoose.model('User', userSchema);
const Contact = mongoose.model('Contact', contactSchema);
```

## Save data using the Mongoose Models

We previously created two schemes which are user and contact, which will help us to create users and contacts respectively in the database:

Example 1:

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

## Select data using the Mongoose Models

We have previously inserted documents with the two models User and Contact, now the process to find is similar to create; only that we need to find the element we wish. To achieve that we have different methods like find(), findOne(), findById(), FindByIdAndUpdate():

Example 1:

```javascript
const user = User.find({
    name: 'John Doe'
})
```

Example 2:

```javascript
const contact = Contact.findById({
    _id: '632244bb405329d320cde2ae'
})
```

## Update data using the Mongoose Models

Previously we have located documents with the User and Contact models, now the process to update is similar to create; only that we need to find the element we wish to update. To achieve that we have different methods such as update(), updateOne():

Example 1:

```javascript
const user = User.find({
    name: 'John Doe'
})

user.update({ name: 'John A. Doe'}).exec((err) => {
    console.log("User updated!!!");
    mongoose.disconnect();
});
```

Example 2:
```javascript
const contact = Contact.find({
    name: 'Jane Doe'
})

contact.updateOne({
    name: 'Jane M. Doe'
}).exec()
```

## Delete documents using the Mongoose Models

We have previously updated documents with the User and Contact models, now the process to delete is similar to create or find, only that we need to find the element we wish to delete; or by using the model according to the supplied filter, for which we count with different methods such as deleteOne() deleteMany(); or using the instance of the document and using the delete method:

Ejemplo 1:

```javascript
User.deleteOne({ name: 'John Doe' }, function (err) {
  if (err) throw err;
});
```

Example 2:
```javascript
User.deleteMany({ is_active: false }, function (err) {
  if (err) throw err;
});
```