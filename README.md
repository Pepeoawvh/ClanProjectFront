# Clan: Comparte o recibe cuentas de servicios de suscripción

ClanS es una plataforma web que te permite compartir o recibir cuentas de servicios de suscripción, como Spotify, Netflix, Disney+ y muchos más. Con Clan, puedes ahorrar dinero y acceder a servicios que no puedes costear, de una forma fácil y segura. Solo tienes que registrarte, crear o unirte a un clan, compartir tus credenciales y recibir el pago de los cupos restantes. O si prefieres, puedes buscar un clan que ofrezca el servicio que quieres y pagar una fracción del precio original. Clan se encarga de proteger tus datos y de facilitar el proceso de pago.

![Clan](https://devclanproject.netlify.app)

## Instalación y uso

Para instalar y usar este proyecto, necesitas tener instalado Node.js, npm y MongoDB en tu computadora. Luego, sigue estos pasos:

1. Clona este repositorio en tu máquina local usando el comando git clone https://github.com/your_username/clanshare.git.
2. Entra a la carpeta del proyecto usando el comando cd clanshare.
3. Instala las dependencias del proyecto usando el comando npm install.
4. Crea un archivo .env en la raíz del proyecto y añade las siguientes variables de entorno:


PORT=3000
DB_URI=mongodb://localhost/clan
JWT_SECRET=your_secret_key
MP_ACCESS_TOKEN=your_mercadopago_access_token

5. Ejecuta el servidor usando el comando npm run dev.
6. Ejecuta el front utilizando el comando npm run dev
7. Abre tu navegador y visita la dirección http://localhost:3000 para ver la aplicación en funcionamiento.

También puedes ver una demostración en vivo de este proyecto en este enlace: [https://devclanproject.netlify.app](https://devclanproject.netlify.app).

## Tecnologías y conocimientos

Para desarrollar este proyecto, usamos las siguientes dependencias:

- *Front-end*: El front-end del proyecto se realizó con React-vite, una libreria moderna y rápida para crear aplicaciones web con React. Usamos las siguientes dependencias:

  - react-router-dom: Para la creación de rutas dinámicas y la navegación entre componentes.
  - toastify: Para la implementación de notificaciones atractivas y poco invasivas.
  - mercadopago: Para la implementación de la pasarela de pago y la integración con el back-end.

- *Back-end*: El back-end del proyecto se realizó con Node.js y Express.js, un entorno de ejecución y un framework para crear servidores web con JavaScript. Usamos las siguientes dependencias:

  - bcryptjs: Para la encriptación segura de datos y contraseñas.
  - cors: Para habilitar el intercambio de recursos entre el front-end y el back-end.
  - dotenv: Para cargar las variables de entorno desde el archivo .env.
  - jsonwebtoken: Para el login de usuarios y la generación de tokens de autenticación.
  - mercadopago: Para la validación de datos y la comunicación con la pasarela de pago.
  - mongoose: Para la comunicación con el front-end mediante middlewares y la definición de los modelos de usuario, clan y cuenta.

- *Base de datos*: La base de datos del proyecto se realizó con MongoDB, una base de datos no relacional orientada a documentos. Usamos MongoDB Atlas para alojar la base de datos en la nube y MongoDB Compass para visualizar y administrar los datos.

- *Otros recursos*: Para aprender o resolver problemas durante el desarrollo del proyecto, usamos los siguientes recursos:

  - La documentación oficial de las tecnologías y dependencias que usamos..

## Proceso de trabajo grupal

Para trabajar en grupo, seguimos una estructura básica de metodología ágil, basada en los principios del manifiesto ágil y las prácticas de Scrum. Estos fueron los pasos que seguimos:

1. Definimos el producto que queríamos crear, el problema que queríamos resolver, el público objetivo al que queríamos llegar y el valor que queríamos aportar.
2. Planificamos las tareas que debíamos realizar, estimamos el tiempo y los recursos que requerían, priorizamos las más importantes y las dividimos en pequeños entregables.
3. Asignamos los roles y las responsabilidades de cada integrante del equipo, según sus habilidades y preferencias. Estos fueron los roles que definimos:

  - Sebastian: Product Owner. Se encargó de definir el alcance y los objetivos del producto, de validar los requisitos y las funcionalidades, y de comunicarse con los stakeholders y los usuarios.
  - Paulina: Back-end Developer. Se encargó de desarrollar el servidor, la base de datos, la lógica de negocio y la integración con el front-end y la pasarela de pago.
  - Diego: Jefe de equipo técnico. Se encargó de coordinar el trabajo técnico, de resolver los problemas y los conflictos, de supervisar la calidad del código y de hacer el despliegue del proyecto.
  - Jose: Front-end Developer. Se encargó de desarrollar la interfaz de usuario, el diseño y la experiencia de usuario, y la interacción con el back-end y la pasarela de pago.

4. Comunicamos el avance y el estado del proyecto mediante reuniones diarias, herramientas de chat y videoconferencia, y plataformas de gestión de proyectos. Estas fueron las herramientas que usamos:

  - Microsoft Teams: Para la comunicación asincrónica, el intercambio de información y el reporte de incidencias.La comunicación sincrónica, las reuniones de planificación, revisión y retrospectiva, y las sesiones de pair programming.
  - Microsoft Planner: Para la gestión de las tareas, el seguimiento del progreso y la organización de los entregables.

5. Revisamos el resultado y el funcionamiento del proyecto mediante pruebas, feedback y mejoras continuas. Estas fueron las actividades que realizamos:

  - Testing: Realizamos pruebas unitarias, de integración y de aceptación para verificar el correcto funcionamiento del código y la aplicación.
  - Feedback: Solicitamos y recibimos feedback de los instructores, los colaboradores y usuarios potenciales para evaluar la calidad y la utilidad del producto.
  - Mejoras: Implementamos y documentamos las mejoras necesarias para corregir los errores, optimizar el rendimiento y añadir nuevas funcionalidades al producto.


## Conclusión

El desarrollo de este proyecto fue un desafío y una oportunidad de aprendizaje tanto a nivel técnico como a nivel personal. Logramos crear un producto funcional, atractivo y útil, que responde a una necesidad real del mercado y que ofrece una solución innovadora y segura. También enfrentamos varios desafíos, como la integración de diferentes tecnologías, la coordinación del trabajo en equipo y el cumplimiento de los plazos. Sin embargo, gracias al apoyo, la comunicación y la colaboración de todos los integrantes del equipo y el profesor, pudimos superarlos y entregar un proyecto de calidad. Aprendimos mucho sobre las tecnologías y los conocimientos que usamos, sobre la metodología ágil y el trabajo en equipo, y sobre el proceso de desarrollo de software en general. Algunas posibles mejoras que podríamos implementar en el futuro son:

- Añadir más servicios de suscripción disponibles para compartir o recibir.
- Incorporar un sistema de calificación y reputación para los usuarios y los clanes.
- Mejorar la seguridad y la privacidad de los datos y las transacciones.

Queremos agradecer a nuestros instructores, y a todos los que nos apoyaron y nos ayudaron durante el desarrollo de este proyecto. También queremos invitarte a probar nuestro proyecto, a dar tu opinión, a reportar errores o a sugerir nuevas funcionalidades. Puedes contactarnos a través de nuestros perfiles de GitHub. Esperamos que disfrutes de Clan tanto como nosotros. 😊
Link: https://devclanproject.netlify.app/
