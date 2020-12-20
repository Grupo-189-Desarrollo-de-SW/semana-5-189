# Reto Semana 5

## Proyecto final Sprint V

## Actividad

Ahora, cada equipo cuenta con un aplicativo completo que se encuentra con un módulo backend, un módulo frontend de gestión y una landing page donde se ofrecen los servicios o productos que gestionan desde el backend, es decir el portafolio.

Es el momento de sentirnos orgullosos del trabajo que se ha realizado, es normal que aún se tengan dudas y muchas preguntas, es normal y solo con la práctica y el tiempo se podrán ir solucionando, hasta ahora hemos finalizado el primero de muchos proyectos que esperamos se vengan en el futuro.

Y como la práctica nos ayuda mucho en el tema de desarrollo de software, vamos a realizar la última para el proyecto, hasta ahora tenemos todo un gestor de nuestros servicios pero no hemos agregado un gestor de usuarios, entonces si necesitamos añadir otro usuario que nos apoye con la gestión o queremos registrar nuestros clientes, tendríamos que recurrir a la base de datos y comenzar a añadir registros, ese no sería el comportamiento deseado; entonces vamos a construir nuestro gestor de usuarios.

El proyecto ya cuenta con una tabla en la base de datos para los usuarios y es gracias a ello que podemos autenticarnos, pero no contamos con un gestor visual, como el de las categorías y artículos desarrollado en el proyecto de la semana anterior. Para esta nueva funcionalidad vamos a revisar el modelo, rutas y controladores.

Al final de estos nuevos ajustes vamos a contar, en nuestro proyecto final, con la gestión de usuarios, categorías y artículos. 

En la siguiente sección se encuentran las especificaciones técnicas necesarias para la creación de los nuevos elementos que añadiremos.

### Requisitos Obligatorios Estructura Backend

#### Rutas

#### Usuario Endpoint:

En el proyecto final de la semana 4 se evalúa solamente el login de los endpoint del usuario para este sprint se pide actualizar las rutas del usuario con las siguiente estructura

**lista de usuario:**
```
/api/usuario/login
```
Cuando la solicitud se procesa correctamente el sistema deberá responder con un​ **status 200:**

```
res​.​status​(​200​)
```

**agregar un nuevo usuario:**
```
'/api/usuario/add'
```

Cuando la solicitud se procesa correctamente el sistema deberá responder con un​ **status 200:**
```
res​.​status​(​200​)
```

**update usuario:**
```
'/api/usuario/update'
```

Cuando la solicitud se procesa correctamente el sistema deberá responder con un​ **status 200:**
```
res​.​status​(​200​)
```

**activar estado del usuario:**
```
'/api/usuario/activate'
```

Cuando la solicitud se procesa correctamente el sistema deberá responder con un **status 200:**

```
res​.​status​(​200​)
```

**desactivar estado del usuario:**
```
/api/usuario/deactivate
```

Cuando la solicitud se procesa correctamente el sistema deberá responder con un ​**status 200:**

```
res​.​status​(​200​)
```

### Modelos:

#### Modelo Usuario​:

```
sequelize model:generate --name Usuario --attributes rol:string,nombre:string,password:string,email:string,estado:integer
```

como podemos observar tenemos nuevos atributos uno de ellos es rol , lo utilizaremos para manejar restricciones de usuario según su rol, los roles serán:

- Administrador:con acceso total al sistema
- Vendedor:solo para acceso al módulo de ventas.
- Almacenero:solo acceso al módulo de ingresos ,artículos y categorías.

#### Modelo Categoría:

```
npx sequelize-cli model:generate --name Categoria --attributes nombre:string,descripcion:string,estado:integer
```

Archivos descargador para el proyecto final [link github](https://github.com/Tecnalia-Cilco-3/semana-5).


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Run your tests
```
npm run test
```

## Despliegue en Heroku


## Autores  
- Juan José Neira Cote 
- Gustavo Adolfo Garcia Londoño 
- David Esteban Hernández Garzón 
- Carlos Alfredo Galindez Muñoz 
- Carlos Andrés Gutierrez Cruz
