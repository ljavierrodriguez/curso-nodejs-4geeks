### Qué es node y npm

NPM (node package manager) viene incorporado en NodeJS, es decir, al descargar y instalar nodejs se instalará también npm automáticamente. 
***node*** se utiliza para ejecutar código javascript fuera del navegador, esto me permite iniciar mis aplicaciones.
***npm*** es se gestor de paquetes y librerías.

### Comprobar NodeJS

Una vez instalado nodejs abriremos un terminar o consola e ejecutaremos los siguientes comandos:

    $ node -v
    v16.13.2 

nota: la version observada es al momento de realizar este documento.

    $ npm -v
    8.1.2

nota: la version observada es al momento de realizar este documento.

### Uso de npm

Esta herramienta funciona de dos formas:

- Como un repositorio ampliamente utilizado para la publicación de proyectos Node.js de código abierto. Lo que significa que es una plataforma en línea donde cualquiera puede publicar y compartir herramientas escritas en JavaScript.
- Como una herramienta de línea de comandos que ayuda a interactuar con plataformas en línea, como navegadores y servidores. Esto ayuda a instalar y desinstalar paquetes, gestión de versiones y gestión de dependencias necesarias para ejecutar un proyecto.


### Iniciar un proyecto con npm

Para iniciar un proyecto con npm, primero debemos crear una carpeta donde queramos por ejemplo "test-npm" y abrirla con el terminal luego podremos hacerlo de dos formas la primera es ejecutando el siguiente comando:

    $ npm init

Una vez ejecutado en el terminal o consola procederemos a seguir los pasos e ir contestando las preguntas que iran apareciendo. la segunda es ejecutando el siguiente comando:

    $ npm init -y

Esta es una forma resumida de autogenerar una archivo llamado ***package.json*** el cual sera donde se guardara toda la configuracion de nuestro proyecto y las librerias que vayamos a utilizar en el mismo. el resultado obtenido sera el siguiente:

    {
        "name": "curso-nodejs-4geeks",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
    }

Para instalar una libreria en nuestro proyecto podemos hacerlo ejecutando el siguiente comando en la terminal:

    $ npm install paquete --save 
    $ npm i paquete --save

    $ npm install paquete --save-dev
    $ npm i paquete --save-dev


Siendo "paquete" el nombre de la libreria a instalar por ejemplo:

    $ npm install bootstrap --save

- "--save" indica que el paquete se va a instalar para produccion en las dependencias del proyecto en el atributo identificado con "dependencies".
- "--save-dev" indica que el paquete se va a instalar para desarrollo en las dependencias del proyecto en el atributo identificado con "devDependencies" siendo estas solo utilizadas en el proceso de desarrollo

Ejemplo de una archivo ***package.json*** con dependencias tanto para produccion como para desarrollo:

    {
        "name": "curso-nodejs-4geeks",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "dependencies": {
            "bootstrap": "^5.1.3"
        },
        "devDependencies": {
            "nodemon": "^2.0.15"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
    }