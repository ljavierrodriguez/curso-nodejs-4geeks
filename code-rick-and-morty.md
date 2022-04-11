# Rick & Morty Blog

_La ciencia es importante en este ejercicio...._

Vamos a construir una versión minimalista del [Banco de datos de Rick & Morty](https://rickandmortyapi.com/) con una función React o lista de favoritos.

### !Aquí hay un Demo!

![Starwars Demo](https://github.com/breatheco-de/exercise-starwars-blog-reading-list/blob/master/preview.gif?raw=true)

## 🌱  Cómo iniciar este proyecto

No clones este repositorio. El primer paso para comenzar a codificar es clonar el [react.js+flux boilerplate](https://gitpod.io#https://github.com/4GeeksAcademy/react-hello-webapp) en tu computador local o con Gitpod.

a) Si usas Gitpod (recomendada) puedes clonar el boilerplate [clic aquí](https://gitpod.io#https://github.com/4GeeksAcademy/react-hello-webapp)

b) Si trabajas localmente, escribe el siguiente comando en tu terminal:
 ```sh
 $ git clone https://github.com/4GeeksAcademy/react-hello-webapp`.
````

```
💡 Importante: 
- Recuerda actualizar el `remote` del proyecto con el de tu repositorio usando `git remote set-url origin <your new url>`, y luego guardar tu código en tu nuevo repositorio usando `add`, `commit` y `push`.

```

## 📝 Instrucciones

1. Empieza un nuevo projecto utilizando el template de [4Geeks Academy React Advanced](https://github.com/4GeeksAcademy/react-hello-webapp).
2. Utiliza los componentes de bootstrap (Card, Buttons, etc.), prácticamente no necesitarás casi CSS propio.
3. Tomate un tiempo para entender The Rick And Morty API, esta sera el API que vamos a utilizar para obtener la información.
4. Utiliza la función Fetch para consumir rickandmortyapi.com y obtener los Personajes (character), Planetas (locations) y Episodios y mostrarlos en tu web.
5. Deberás tener un store centralizado con tu información (planetas, personajes).
6. Para resolver la funcionalidad de "favoritos" te recomendamos declarar un arreglo `favorites` en el store y tener alli la lista de todos los planetas o personajes que se van marcando como favoritos.

#### Construyendo la red de personajes y planetas.

- Crear una aplicación web React que enumera _personas_, _vehiculos_ y _planetas_ **entidades** proporcionado por el [SWAPI](https://swapi.tech/documentation).

Nota: por favor utiliza swapi.tech y no swapi.dev porque la segunda esta dando problemas útimamente.

<p align="center">
   <img height="100" src="https://raw.githubusercontent.com/nachovz/projects/master/p/javascript/semi-senior/startwars-blog-reading-list/sw_data.png" />
</p>

#### Construyendo una vista de detalles para el personaje o el planeta

- Cada entidad debe tener una breve descripción (Tarjeta Bootstrap) y una vista de detalles (Componentes Bootstrap):

<p align="center">
   <img height="100" src="https://raw.githubusercontent.com/nachovz/projects/master/p/javascript/semi-senior/startwars-blog-reading-list/sw_data_details.png" />
</p>

***Importante***: El SWAPI no proporciona las imágenes, puedes usar marcadores de posición o evitar las imágenes por completo. El enfoque de este ejercicio es practicar *fetch*, *router* y *context*; puedes enfocarte en un tema del color y diseño simple para que se vea bien.

***Importante 2***: no te preocupes si los datos que obtienes de la SWAPI no coinciden con los datos que ves en starwars.com.

Usa toda la información que entrega la por el SWAPI (verifica los documentos y / o las respuestas de json).

## Leer más tarde o la funcionalidad de favoritos

Implementa una funcionalidad de lectura posterior, es decir, un botón que permita al usuario "guardar" el elemento (personaje, vehículo o planeta) en una lista especial. Esta lista se mostrará en la parte inferior de la página de inicio, se asemeja a la lista principal, pero solo muestra los elementos "guardados".

#### Uso de Context

Para asegurarse de que el usuario pueda "guardar" el elemento, debe implementar una acción a la que se pueda acceder desde cualquier lugar dentro de la aplicación.

## 😎 ¿Te sientes seguro?

Las siguientes funciones no son necesarias para la solución final, pero puede desarrollarlas si te sientes lo suficientemente seguro:

- `+ 1` Evita que el sitio web haga Fetch a la API de Startwars nuevamente si se actualiza (puedes usar el almacenamiento local para guardar la tienda en el navegador local).
- `+ 3` Implementa una barra de búsqueda con "autocompletar" para Personajes y Planetas. Cuando haces clic en autocompletar, debería llevarte a la página Personaje o Planeta.




