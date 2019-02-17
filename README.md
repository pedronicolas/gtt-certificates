# GttCertificates

Este proyecto se basa en una app que gestiona los certificados de una entidad, teniendo la capacidad de leerlos, modificarlos, renovarlos y crear tickets en Jira creando incidencias con cada certificado caducado.

## ¿Cómo lanzarlo?

Ejecuta 'npm-start', navega hasta `http://localhost:4200/`. La app se recargará siempre que modifiques algo en el código.

## Creación de Componentes

Ejecuta `ng generate component component-name` para generar un nuevo componente en el proyecto. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Funcionalidades

En la primera versión (v1), subida para la entrega en la empresa, la app contiene las siguientes funcionalidades:
  -  
 - Login: Login con usuario y contraseña, no se usa correo.
 
 - Registro de Usuarios: Solo los usuarios que además sean administradores podrán registrar usuarios, eligiendo el tipo
 de usurio, su nombre y contraseña.
 
 - Visualización de Certificados: Página principal, donde podemos visualizar todos los certificados, con un pequeño
 resumen. También podremos realizar otras funciones, como editarlos, generar tickets de Jira referenciados a ellos y
 ordenarlos, con un algoritmo sort. Podemos ordenarlos por Alias, Fecha de Caducidad, y Entidad Emisora.
 
 - Detalles del certificado:  En este apartado, podemos ver todos los campos configurados para ser visibles de un certificado.
 
 - Editar Datos Certificado: En este módulo es posible editar algunos datos de los certificados, como puede ser su alias,
 su lista de integraciones.
 
 - Descargar Certificados: En cada certificado tendremos esta opción si somos administrador, clickando sobre un simple botón,
 el consumidor de la app podrá descargar el certificado en el formato en el que fue subido.
 
 - Apartado de opciones de Usuario: En este apartado de la app, podemos configurar nuestros datos, nuestra cuenta de Jira
 y nuestro componente, URL, etc.
 
 - Generar incidencia en Jira: Cuando caduque un certificado, este módulo nos permite crear una incidencia en Jira. Primeramente,el usuario tendrá que hacer loggin en jira introduciendo su contraseña y luego podrá introducir la descripción, el único campo que podrá modificar el usuario.
 
 ## Conexión con otros componentes
Este front en Angular, está conectado a un BackEnd en c#. Para acceder al repositorio y poder conectarlos, aquí te dejo el enlace. Gracias por tu atención y espero que lo disfrutes. LET'S CODE.
 https://github.com/pedronicolas/gtt-backend-csharp
