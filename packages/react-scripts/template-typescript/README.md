[![Latest Version](https://img.shields.io/badge/Version-0.0.1-blue.svg)](https://lightpay-pagador-develop.now.sh)

<img src="https://www.aluxion.com/img/logo-black.svg" align="right" width="35" height="35" />

# LigthPay - Pagador

A continuación se detalla un poco la estructura del proyecto, explicando brevemente las carpetas mas importantes que conforman al mismo.

## División princpal de carpeta.

Es recomendable evitar, en lo posible, editar la estructura principal que se presenta a continuación

### Root.

- `/public` : Contiene los archivos públicos que utiliza el navegador al hacer el boostrap de la apliación.
- `/src` : Contiene el core (archivos principales) de la aplicación.
- `/node_modules` : Contiene los paquetes de terceros instalados a través del gestor de paquetes NPM. No viene incluida por defecto en el repositorio, requiere de la ejecuación del comando `npm i` para su creación.

### carpeta /src

- `/assets` : Contiene recursos estéticos e imágenes, los cuales son usados a través de toda la aplicación. Es aquí donde se debe coloclar cualquier contenido multimedia.
- `/containers` : Otra de las carpetas principales, contiene cada una de las vistas que conforma la aplicación. Dividiendose principalmente en rutas privadas y públicas.
- `/context` : Aquí se tiene cada uno de los contexts que se usan en la aplicación. El context es un concepto propio de React, para más información visitar la documentación oficial.
- `/hooks` : Contiene todos los hooks que se utilizan globalmente en toda la aplicación con aplicaciones externas.
- `/utils` : Contiene funciones y otras utilidades desarrolladas para realizar tareas repetitivas y concretas a lo largo de toda la aplicación.

## FAQ

- No sé qué hacer para correr la app.

Te recomendamos que abras el archivo package.json. El atributo script es un objecto que contiene cada una de las posibles acciones que puedes hacer para ejecutar la aplicacion, usando el comando `npm run-script {action}`. Un ejemplo sería `npm run-script build`.

- _Hago `npm run-script start` pero no me corre la aplicación_

Recuerda que debes hacer `npm i` y asegurarte que la instalación fue correcta

- _Hago `npm i` pero no me dice que npm no fue encontrado_

Recuerda que debes tener instalado Node en su versión actual LTS (2019)

Para más información, por favor contactar a aguerrero@aluxion.com
