## Proyecto Backend - Rick and Morty API

Este proyecto Backend utiliza TypeScript para consumir la API de GraphQL proporcionada por [Rick and Morty API](https://rickandmortyapi.com/). El objetivo principal es obtener información detallada sobre los personajes de la serie de televisión "Rick and Morty" y realizar operaciones específicas en estos datos.

### Tecnologías Utilizadas

- **Node.js:** Plataforma de ejecución de JavaScript.
- **TypeScript:** Librería de JavaScript que agrega tipado estático opcional.
- **Express:** Mini Framework backend para Node.js, con el cual se realizo la API de comunicación entre el Frontend (Next.js) y la API de graphql de Rick and Morty API.
- **Axios:** Cliente HTTP para realizar solicitudes a la API de Rick and Morty.

### Configuración del Proyecto

1. **Clonar el Repositorio:**

   ```bash
   git clone https://github.com/JuanTG08/rick-and-morty-backend.git
   cd rick-and-morty-backend
   ```

2. **Instalar Dependencias:**
   ```bash
   npm install
   ```

3. **Configuración del Entorno:**
Crea o edita un archivo .env y configura las variables de entorno según sea necesario

   ```
   PORT=8000
   URL_API="https://rickandmortyapi.com/graphql"
   ```

### Ejecución del Proyecto

- **Ejecutar el proyecto:**

   ```bash
   npm run build
   npm start
   ```

El servidor se iniciará en el puerto especificado en el archivo .env, en nuestro caso será en el puerto 8000.

### Funciones Principales

1. **Obtención de Personajes:**
        - **No humanos:** Utiliza la API de GraphQL para obtener personajes de "Rick and Morty" los cuales no son Humanos.
        - **Humanos:** Filtra y devuelve únicamente los personajes que son humanos utilizando la API de GraphQL.
2. **Paginación Dinámica:**
         - Implementa una paginación dinámica para manejar grandes conjuntos de datos de la API.

### Estructura del Proyecto

La estructura del proyecto sigue las convenciones de un proyecto típico de Node.js y TypeScript, con carpetas organizadas de manera lógica usando MVC.

- **src/ :** Contiene los archivos fuente del proyecto.
      - **controllers/ :** Controladores que manejan la lógica de las rutas.
      - **interfaces/ :** Interfaces que nos ayudan a dar un tipado a las variables o constantes.
      - **model/ :** Fetching de los datos, a su vez aquí se moldean los datos obtenidos para dar entrega en el controlador.
      - **routes/ :** Definición de las rutas de la aplicación.
      - **utils/ :** Utilidades y funciones de ayuda.
      - **app.ts/ :** El corazón del aplicativo, el cual ejecuta los middlewares, funcionalidades extras y establece las rutas con sus funcionalidades.
      - **index.ts/ :** Punto de entrada del servidor.
- **build/ :** Contiene los archivos transpilados de TypeScript.
