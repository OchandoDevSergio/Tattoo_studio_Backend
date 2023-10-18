# TATTOO STUDIO - Backend App - Estudio de tatuajes.
![image](https://i.ibb.co/jfjnBSq/logo-4.webp)

## Datos generales :paperclip:
**El presente repositorio funciona en conjunto con el repositorio "Tattoo_studio_Frontend"

Acceso administrador: 
Correo: sergmar@mail.com  Contraseña: Bb1234

Acceso cliente:
Correo: alcast@mail.com  Contraseña: Aa1234

Acceso artista:
Correo: cemogi@mail.com  Contraseña: Cc1234

## Tecnologías utilizadas
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![NodeJS](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Web/API/Node) [![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=flat)](https://sequelize.org/) [![ExpressJS](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat)](https://expressjs.com/) [![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat)](https://dev.mysql.com/doc/) [![JWT](https://img.shields.io/badge/JSON%20Web%20Tokens-000?logo=jsonwebtokens&logoColor=fff&style=flat)](https://jwt.io/introduction) [![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Glossary/Git)

## Indice 

- [Descripción general del proyecto :speech_balloon:](#descripción-general-del-proyecto)

- [Diagrama entidad relación :computer:](#diagrama-entidad-relación) 

- [Funcionamiento :arrow_forward:](#funcionamiento) 

- [Endpoints :end:](#endpoints) 

- [Recursos alternativos y fuentes :art:](#recursos-alternativos-y-fuentes)  

#

### Descripción general del proyecto

Propuesto el proyecto de desarrollar una aplicación web para la gestión de una compañía de un estudio de tatuajes, el presente repositorio supone la sección backend del mismo. Esta sección habrá de desarrollarse con un esquema modelo vista controllador, generando una API funcional que permita hacer distintas llamadas, en ocasiones multitabla, discriminando los privilegios de usuario en función de su rol.

### Diagrama entidad relación

<p align="center">
<img src="https://i.ibb.co/whQgx04/esquema-ER.jpg"  width="800" height="400"></p>

### Funcionamiento

A través de las tecnologías Sequelize y MySQL, se genera una base de datos mediante un proceso de migration y seed de los modelos de sus tablas.

Se levanta el servidor de la aplicación a través de las tecnologías Node.JS y Express.

Siguiendo un esquema modelo vista controlador, la aplicación enruta las peticiones que puedan llegar al servidor, para interactuar con las diferentes funciones que contienen los controladores.

La aplicación dispone además, tanto de un controlador que autentifique si la llamada al servidor ha sido hecha por un usuario registrado, como de un middleware que discriminaría el rol asignado al mismo (cliente, administrador o artista), para determinar que clase de interacciones con la base de datos tiene permiso para llevar a cabo y cuales no. Estos elementos de seguridad se han implementado con las tecnologías Bcrypt y JsonWebToken.

### Endpoints

**Generar nuevo usuario:** POST, http://localhost:5000/users

**Inicio de sesión:** POST, http://localhost:5000/auth/login

**Traer todos los usuarios:** GET, http://localhost:5000/users

**Modificar usuario:** PUT, http://localhost:5000/users

**Generar nuevos datos de pago:** POST, http://localhost:5000/paymentdatas

**Modificar datos de pago:** PUT, http://localhost:5000/paymentdatas

**Traer datos de pago de un cliente:** GET, http://localhost:5000/paymentdatas/${customerId}

**Traer todos los artistas:** GET, http://localhost:5000/artists

**Generar nuevo artista:** POST, http://localhost:5000/artists

**Traer todos los diseños con datos de artista:** GET, http://localhost:5000/designs

**Traer diseños por búsqueda:** GET, http://localhost:5000/designs/${criteria}

**Traer diseños con datos de artista según su autor:** GET, http://localhost:5000/artists/${userId}

**Generar nuevo diseño:** POST, http://localhost:5000/designs

**Eliminar diseño:** DELETE, http://localhost:5000/designs/${erase}

**Traer todas las citas:** GET, http://localhost:5000/appointments

**Traer las citas de un cliente:** GET, http://localhost:5000/appointments/${userId}

**Traer las citas de un artista:** GET, http://localhost:5000/appointments/artist/${artistId}

**Generar nueva cita:** POST, http://localhost:5000/appointments

**Eliminar cita:** DELETE, http://localhost:5000/appointments/${erase}

### Recursos alternativos y fuentes

https://tutorialmarkdown.com/emojis

https://badges.pages.dev/

https://imgbb.com/
