# Rick & Morty Blog

_La ciencia es importante en este ejercicio...._

Vamos a construir una versión minimalista del [Banco de datos de Rick & Morty](https://rickandmortyapi.com/) con una lista de favoritos.

### !Aquí hay un demo parecido a lo que se busca!

![Starwars Demo](https://github.com/breatheco-de/exercise-starwars-blog-reading-list/blob/master/preview.gif?raw=true)

## 🌱  Cómo iniciar este proyecto

No clones este repositorio. El primer paso para comenzar a codificar este code es configurar express desde cero o usar express-generator

a) Si usas Gitpod (recomendada) puedes crear primero tu repositorio y luego abrirlo en gitpod y modificarlo

b) Si trabajas localmente, configura primero tu proyecto y luego vincular a tu repositorio remoto de git

## 📝 Instrucciones

1. Empieza un nuevo projecto utilizando utilizando expres o express-generator
2. Utiliza los componentes de bootstrap (Card, Buttons, etc.), prácticamente no necesitarás casi CSS propio.
3. Tomate un tiempo para entender The Rick And Morty API, esta sera el API que vamos a utilizar para obtener la información.
4. Utiliza la función Fetch para consumir rickandmortyapi.com y obtener los Personajes (characters), Ubicaciones (locations) y Episodios (episodes) y mostrarlos en tu web.
5. Deberás tener un store centralizado con tu información (planetas, personajes).
6. Para resolver la funcionalidad de "favoritos" te recomendamos declarar un arreglo `favorites` global dentro de la aplicacion y crear las rutas necesarias para modificar el arreglo de favoritos.

#### Construyendo la red de personajes y locaciones.

Nota: por favor para poder utilizar fetch dentro de node es necesario hacer una instalacion de node-fetch.


#### Construyendo una vista de detalles para el personaje o el planeta

- Cada entidad debe tener una breve descripción (Tarjeta Bootstrap) y una vista de detalles (Componentes Bootstrap):

***Importante***: La API proporciona las imágenes. El enfoque de este ejercicio es practicar *fetch*; puedes enfocarte en un tema del color y diseño simple para que se vea bien.

Usa toda la información que entrega la API (verifica los documentos y / o las respuestas de json).

## Leer más tarde o la funcionalidad de favoritos

Implementa una funcionalidad de lectura posterior, es decir, un botón que permita al usuario "guardar" el elemento (personaje, locacion o episode) en una lista especial. Esta lista se mostrará en la parte inferior de la página de inicio, se asemeja a la lista principal, pero solo muestra los elementos "guardados".


## 😎 ¿Te sientes seguro?

Las siguientes funciones no son necesarias para la solución final, pero puede desarrollarlas si te sientes lo suficientemente seguro:

- `+ 1` Evita que el sitio web haga Fetch a la API de Startwars nuevamente si se actualiza (puedes usar el almacenamiento local para guardar la tienda en el navegador local).

- `+ 3` Implementa una barra de búsqueda con "autocompletar" para Personajes y Locaciones. Cuando haces clic en autocompletar, debería llevarte a la página Personaje o Locacion.




