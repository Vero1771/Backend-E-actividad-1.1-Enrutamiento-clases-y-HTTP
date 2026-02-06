# Backend-E-actividad-1.1-Enrutamiento-clases-y-HTTP

## Sistema de Gestión de Cine

Proyecto web (Express + EJS) para gestionar un cine con las entidades: Películas, Funciones, Salas, Ventas, Productos y Entradas.

Resumen de las características principales
- Ingresar datos a todas las entidades definidas.
- Mostrar elementos de una determinada entidad por su id. (Películas)
- Mostrar los últimos 5 elementos de algún grupo de una entidad según un criterio de ordenamiento específico. (Las últimas 5 funciones más recientes)
- Mostrar los elementos de una entidad en un rango de fecha. (Mostrar ventas en un rango específico)
- Eliminar elementos de una entidad. (Productos)
- Eliminar la relación entre elementos de dos o más entidades. (Eliminar una película y sus relaciones)
- Modificar datos de una entidad. (Películas y productos)
- Vistas EJS para administración y para usuarios finales.

Estructura importante del proyecto
- `app.js` — punto de entrada (monta rutas y middlewares).
- `routes/` — rutas para `entradas`, `funciones`, `peliculas`, `productos`, `salas`, `ventas`, `ventas de productos` etc.
- `controllers/` — lógica de negocio para cada entidad.
- `models/` — acceso a los datos almacenados en variables.
- `views/` — plantillas EJS (vistas del sistema).
- `db/` — Almacenamiento de datos por medio de variables.

Requisitos
- Node.js (>= 16 recomendado) y `npm`.

Instalación y puesta en marcha (Windows / PowerShell)

1. Clonar el repositorio y entrar en el directorio:

```powershell
git clone <repo-url>
cd 'Backend-E-actividad-1.1-Enrutamiento-clases-y-HTTP'
```

2. Instalar dependencias:

```powershell
npm install
```

3. Iniciar la aplicación (modo desarrollo con `nodemon`):

```powershell
npm run dev
```

4. Simular alguna de las posibles peticiones del frontend utilizando Thunder Client.

- `/peliculas` 
  - `/mostrar` — (GET) Mostrar todas las películas.
  - `/buscar/:id` — (GET) Mostrar películas por su ID.
  - `/ingresar` — (POST) Ingresar películas.
  - `/editar/:id` — (PUT) Editar películas.
  - `/eliminar/:id` — (DELETE) Eliminar películas por su ID.

- `/funciones` 
  - `/mostrar` — (GET) Mostrar todas las funciones.
  - `/funciones_recientes` — (GET) Mostrar las últimas 5 funciones recientes.
  - `/ingresar` — (POST) Ingresar funciones.

- `/salas` 
  - `/mostrar` — (GET) Mostrar todas las salas.
  - `/ingresar` — (POST) Ingresar salas.

- `/ventas` 
  - `/rango` — (GET) Mostrar ventas en un rango de fecha .
  - `/ingresar` — (POST) Ingresar ventas.

- `/productos` 
  - `/mostrar` — (GET) Mostrar todos las productos.
  - `/buscar/:id` — (GET) Mostrar productos por su ID.
  - `/ingresar` — (POST) Ingresar productos.
  - `/editar/:id` — (PUT) Editar productos.
  - `/eliminar/:id` — (DELETE) Eliminar productos por su ID.

- `/ventas_productos` 
  - `/mostrar` — (GET) Mostrar todos las ventas de productos.
  - `/ingresar` — (POST) Ingresar ventas de productos.

- `/entradas` 
  - `/mostrar` — (GET) Mostrar todos las entradas.
  - `/ingresar` — (POST) Ingresar entradas.


5. Acceder en el navegador a `http://localhost:3000/` para interactuar con la interfaz EJS.

---

Licencia
- Este proyecto es un ejercicio/plantilla.