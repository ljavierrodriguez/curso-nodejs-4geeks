# Autenticación JWT con Node, Express y MongoDB

Casi todos los sitios web en el mundo tienen autenticación de usuarios, en este proyecto debes realizar una REST API implementando la autenticación de usuarios usando javascript y el framework NodeJS con express y deberas implementar los cambios necesarios para almacenar los datos en la base datos y utilizar MongoDB.

El uso del code anterior de la api de tareas es recomendada para comenzar el desarrollo, ya que esta cumple con todos los endpoints necesarios y solo debera agregar dos endpoint adicionales y crear un middleware que deberá validar que el usuario sea válido dentro de nuestra REST API.

## 🗒️ Instrucciones

Implementa un sistema de autenticación en las siguientes partes:

1. **Registro**: El usuario deberá poder colocar un correo, cualquier contraseña y enviar el formulario, un nuevo usuario debe ser creado en la base de datos y el usuario debe ser redireccionado al inicio de sesión luego de esto.
2. **Inicio de Sesión**: El usuario debe llenar su correo y contraseña y debe ser redirigido a un menu privado luego de que la autenticación sea éxitosa.
3. **Validación**: Cualquier página considerada "privada" siempre debe estar validando que el usuario actual es válido mediante middleware, si no, debera devolver un mesaje de error que ese endpoint es privado.

Al menos las siguientes páginas y componentes de react deben ser implementados en el proyecto:

| Ruta          | Metodo      | Funcionalidad                                                            | 
| ------------- | ----------- | -----------------------------------------------------------------------  |
| `/signup`.    | `POST`      | Ruta que me permite registrarme en la REST                             |
| `/signin`.    | `POST`      | Ruta que me permite iniciar sesión en la REST API                      |
| `/todos`      | `GET`       | Listado de tareas  (publica)                                             |
| `/todos`      | `POST`      | Ruta que me permite crear una tarea en la REST API  (privada)          |
| `/todos/:id`  | `PUT`       | Ruta que me permite actualizar una tarea en la REST API  (privada)     |
| `/todos/:id`  | `DELETE`    | Ruta que me permite eliminar una tarea en la REST API  (privada)       |

## Mas detalles sobre la autenticación:

Usualmente un sistema de autenticación es implementado en 4 partes:

![Diagrama de Autenticación](https://github.com/breatheco-de/jwt-authentication-with-flask-react/blob/main/.learn/login_diagram.jpeg?raw=true)
