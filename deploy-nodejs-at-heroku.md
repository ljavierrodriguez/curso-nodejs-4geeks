<p align="center" style="background: white;">
    <img src="./assets/heroku.png" width="100%" />
</p>

# ¿Qué es heroku?

Heroku es una plataforma como servicio de computación en la Nube que soporta distintos lenguajes de programación. Heroku es propiedad de Salesforce.com.​ 

# Tecnologias Soportadas en Heroku 

Heroku ofrece una gran variedad de lenguajes sobre los que construir las aplicaciones que se ejecutarán en la plataforma. Actualmente soporta los siguientes lenguajes, con documentación personalizada para cada uno de ellos en la página oficial de Heroku:

1. NodeJS
2. Ruby
3. Java
4. PHP
5. Python
6. Go
7. Scala
8. Cloiure

# ¿Cómo utilizar heroku?

Lo primero que debemos hacer es tener una cuenta de heroku creada, tener nodejs and npm instalado localmente.

Luego según el sistema operativo tenemos que tener ***heroku-cli*** instalado en nuestro equipo el cual podemos ver los pasos de instalacion en la misma pagina de [www.heroku.com](https://heroku.com)

# Publicar nuestra aplicación de nodejs en heroku

Lo primero que debemos hacer es iniciar session en heroku dentro de nuestro proyecto:

    $ heroku login

Una vez estemos autenticados debemos crear una app dentro de heroku, las cuales se puede crear de dos formas:

Crear una aplicacion por defecto:

    $ heroku create

Crear una aplicacion con nombre especifico

    $ heroku create myapp

Una vez creada obtendremos la siguiente respuesta 

```bash
$ heroku create myapp
Creating myapp... done, stack is heroku-18
http://myapp.herokuapp.com/ | https://git.heroku.com/myapp.git
Git remote heroku added
```

Lo siguiente sera crear el archivo Procfile que contendra el comando a ejecutar al subir los cambios al repositorio en heroku

```text
web: npm start
```

Por ultimo ejecutar los comando de git para subir los cambios 

1er paso:

    $ git add .

2do paso:

    $ git commit -m "Deploy Heroku"

3er Paso

    $ git push heroku master


Por ultimo podemos abrir la app utilizando el comando

    $ heroku open