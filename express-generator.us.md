![express-generator](./assets/node-express-generator.png)

### What is Express Generator?

The express-generator package helps a lot in developing web applications with Node; it generates the application structure. A small disadvantage is that when generating the code, we don't know how to change some basic things, for example, the port on which the app listens (default is port 3000).

### Install Express Generator

To install express generator we can run the following command.

    $ npm i -g express-generator

### Start a project with express generator

To start a new project with express generator we can run the following command, which will generate a project structure:

    $ express --pug webapp

### Express generator directory structure

When we create our app with express generator we get the following directory structure, which contains all the necessary files to start the project, using as pug. templating engine within the other template engines, we have ejs, hts

    - webapp
        - bin
        - public
        - routes
        - views
        - app.js
        - package.json

### Install dependencies

To install all the basic dependencies for the operation of our web, we access the main directory and run the following command:

    $ npm install

### Start our express generator Website 

To start our web project we have to execute the following command:

    $ npm run start



