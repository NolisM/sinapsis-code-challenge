# Code Challenge: Thumbnail Generator UI

## Goal
Build a simple UI/UX for a thumbnail generator.

## Requirements
* The UI let's you upload files through HTTP protocol.
* You should mock the required endpoints (or solve and integrate with thumbnail-generator-api).
* It should preview the image that is going to be processed.
* It should give the users the URLs of the new thumbnails and preview them.

## Grading Guidelines

### MVP (50 points)
* Every requirement is met.
* The solution runs on our environment. Ideally after following a simple README (for instance: npm install, npm start).
* Commit your changes regularly.
* Tech Stack: latest versions of React and Typescript.
* It leverages some design framework, for instance, Material UI (https://mui.com/).
* It uses a global state management system (preferably TanStack Query: https://tanstack.com/query/latest/docs/react/overview).
* Includes a simple login or permission-based logic (for instance: AWS Cognito, Auth0, etc).
* The solution includes some unit tests.
* It includes transitions, loaders, progress status as required.
* It's responsive and works well with desktops, phones and tablets.
* Any ENV specific value should be configurable and documented.
* The code should be clear and easy to read, debug and maintain.

### Nice moves (5 points each)
* It uses Styled Components or Styled (https://mui.com/system/styled/), for the styling of the components instead of using css or scss, including the general css properties such as resets, font-family, etc in the index.css file.
* It includes drag-and-drop functionality + visual cues to help the user.
* It includes a cropping area / resizes helper.
* It uses vitejs as build tool (https://vitejs.dev/guide/).

### Wait, WHAT?! (10 points each)
* The solution is deployed in some cloud hosting service (for instance: vercel, firebase hosting, GitHub pages, etc).
* The app logic is covered with at least 70% of tests.

##### NOTE:
* Feel free to add anything to sum value to the final solution (libraries, design patterns, good practices, etc).
* If you think that any of the above points can be better implemented with a new technology or tool (always using React and Typescript), feel free to do so as long as you have good arguments.

# Thumbnail-generator

Este proyecto es un generador de miniaturas que permite a los usuarios cargar imágenes o arrastrarlas y soltarlas. Además, cuenta con autenticación utilizando Auth0 para gestionar el inicio de sesión de los usuarios.

## Instalación

Para instalar las dependencias, ejecuta: npm install

## Configuración

Antes de ejecutar el proyecto, asegúrate de configurar las siguientes variables de entorno en un archivo `.env` en la raíz del proyecto. Puedes utilizar el archivo `.env.example` como referencia:

1. Crea un archivo `.env` en la raíz del proyecto.
2. Copia el contenido del archivo `.env.example` y pega en el archivo `.env`.
3. Completa las variables de entorno con los valores correspondientes.

A continuación, se muestra un ejemplo de cómo podría ser el contenido del archivo `.env`:

```plaintext
# Archivo .env

# Variables de entorno para Auth0
AUTH0_DOMAIN=your-auth0-domain
AUTH0_CLIENT_ID=your-client-id
AUTH0_CLIENT_SECRET=your-client-secret
```

## Ejecución

Para ejecutar el proyecto, utiliza el siguiente comando: npm run dev

Esto iniciará la aplicación en modo de desarrollo.

## Pruebas

### Ejecutar Pruebas

Para ejecutar las pruebas, primero asegúrate de que las dependencias estén instaladas utilizando el siguiente comando:

```bash
npm install
```
Una vez que las dependencias estén instaladas, puedes ejecutar las pruebas con el siguiente comando:

```bash
npm test
```

## Uso

Una vez que la aplicación esté en funcionamiento, los usuarios pueden acceder a ella a través de un navegador web. Pueden cargar una imagen haciendo clic en el botón de carga o arrastrando y soltando una imagen en el área designada. Después de cargar la imagen, se generarán automáticamente tres miniaturas en diferentes tamaños.

## Casos de Prueba
A continuación se muestran algunos casos de prueba que cubren diferentes aspectos de la aplicación:

`LoginLogout Component`
El componente LoginLogout debe renderizarse: Verifica que el componente se renderice correctamente.
Debe mostrar el botón de inicio de sesión cuando el usuario no está autenticado: Verifica que el botón de inicio de sesión esté presente cuando el usuario no está autenticado.
Debe mostrar el botón de cierre de sesión cuando el usuario está autenticado: Verifica que el botón de cierre de sesión esté presente cuando el usuario está autenticado.
`Generator Component`
El componente Generator debe renderizarse: Verifica que el componente se renderice correctamente.
Debe permitir solo imágenes PNG y JPEG: Verifica que solo se permitan cargar imágenes PNG y JPEG en el área de carga de archivos.
Debe mostrar el área de carga de archivos: Verifica que el área de carga de archivos esté presente en la interfaz.
El estado de "dragging" debe cambiar al arrastrar archivos: Verifica que el estado "dragging" cambie cuando se arrastren archivos sobre el área de carga de archivos.
La descarga de miniaturas debe funcionar correctamente: Verifica que la descarga de miniaturas funcione correctamente después de cargar una imagen.

## link deploy 

https://sinapsis-code-challenge-u71d.vercel.app