<p align="center">
    <img src="./assets/api_rest.png" />
</p>

# Que es una API REST

Una API RESTful, también conocida como API REST, se basa en la transferencia de estado representacional (REST), que es un estilo arquitectónico y un enfoque de comunicación comúnmente utilizado en el desarrollo de servicios web.

En general, se prefiere la tecnología REST a otras tecnologías similares. Esto se debe a que REST consume menos ancho de banda, lo que lo hace más adecuado para un uso eficiente de Internet. Las API RESTful también se pueden diseñar utilizando lenguajes de programación como JavaScript o Python, Etc.

Si bien REST se puede usar sobre casi cualquier protocolo, se usa más comúnmente para las API web sobre el protocolo HTTP. Esto significa que los desarrolladores no necesitan instalar ninguna biblioteca o software adicional para aprovechar un diseño de API REST.

REST tiene la capacidad de manejar múltiples tipos de llamadas, devolver diferentes formatos de datos e incluso cambiar estructuralmente con la implementación adecuada de hipermedia, ya que los datos no están vinculados a métodos y recursos. Al aprovechar la libertad y la flexibilidad inherentes al diseño de la API REST, puede crear una API que satisfaga sus necesidades y, al mismo tiempo, satisfaga las necesidades de una amplia gama de clientes.


# Crear rutas en nodejs

Responde con ¡Hola mundo! en la página de inicio:

    app.get('/', (req, res) => {
        res.send('¡Hola mundo!')
    })

Responda a la solicitud POST en la ruta raíz (/), la página de inicio de la aplicación:

    app.post('/', (req, res) => {
        res.send('Recibí una solicitud POST')
    })

Responda a una solicitud PUT a la ruta /usuario:

    app.put('/usuario', (req, res) => {
        res.send('Recibí una solicitud PUT en /usuario')
    })

Responda a una solicitud DELETE a la ruta /usuario:

    app.delete('/usuario', (req, res) => {
        res.send('Recibí una solicitud de DELETE en /usuario')
    })