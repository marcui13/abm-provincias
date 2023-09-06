# Proyecto de ABM de Ciudades y Provincias

Este proyecto es una aplicación web para la gestión de ciudades y provincias. Permite realizar operaciones básicas de creación, lectura, actualización y eliminación (ABM) de ciudades y provincias, utilizando una interfaz de usuario web.

## Funcionalidades

- **Inicio de Sesión y Autenticación:** Los usuarios pueden iniciar sesión con sus credenciales almacenadas y se les genera un token JWT para la autenticación posterior.
- **Gestión de Ciudades:** Agregar, editar, eliminar y ver una lista de ciudades.
- **Gestión de Provincias:** Agregar, editar, eliminar y ver una lista de provincias.
- **Asociación entre Ciudades y Provincias:** Cada ciudad está asociada a una provincia.
- **Diseño Responsive:** La aplicación utiliza Bootstrap 3 para un diseño móvil primero.

## Capturas de Pantalla

![Texto Alternativo](/assets/screenABMprovincias_ciudades.PNG)

## Requisitos Previos

Antes de ejecutar la aplicación, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [npm](https://www.npmjs.com/)

## Configuración

1. Clona este repositorio en tu máquina local.

```bash
git clone https://github.com/marcui13/abm-provincias.git
cd abm-provincias
```

2. Para instalar las dependencias necesarias y levantar el servidor backend, ejecuta en la raíz del proyecto:

```
cd backend
npm i
npm start
```

3. Para instalar las dependencias necesarias e iniciar la aplicación frontend, ejecuta en la raíz del proyecto:

```
cd frontend
npm i
npm start
```

## Acceso a la Aplicación

Puedes acceder a la aplicación utilizando los siguientes usuarios y contraseñas:

```
  username: "John Doe"
  password: "11223344"

  username: "Jose Pepe"
  password: "12345678"

  username: "Sergio Lopez"
  password: "5667788"
```

Se planea implementar la protección de las rutas con un middleware en el backend en futuras versiones del proyecto.
