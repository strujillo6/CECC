[< Volver a la sección anterior](https://github.com/strujillo6/CECC)

# Indice

 1. [Introducción](#1-introducción)
    1. [Proposito](#11-propósito)
    2. [Ámbito del sistema](#12-Ámbito-del-sistema)
    3. [Definiciones acrónimos y abreviaturas](#13-definiciones-acrónimos-y-abreviaturas)

# CULTURA ÉTICA Y CONVIVENCIA CIUDADANA
Documento de Especificación de Requerimientos de Software

### Integrantes:
- Lizeth Quiñones
- Andrés Julián Mendigaña
- Sergio Trujillo

Version: 1.0 Fecha: 27/Julio/2018

# 1. Introducción

En el presente documento se explicarán y analizarán los requisitos del proyecto “Cultura Ética y Cultura Ciudadana”, desarrollado para la solución de una de las problemáticas de la localidad “Chapinero”. Se adopta la guía de requerimientos de software de la IEEE (Std. 830-1993).

## 1.1 Propósito

Este documentos tiene como propósito dar a conocer el funcionamiento general del proyecto CECC (Cultura Ética y Cultura Ciudadana) que está dirigido al equipo desarrollador, a la empresa “Piensa Digital” y al usuario final.

## 1.2 Ámbito del Sistema.

Nombre del Sistema: CECC, “Cultura Ética y Cultura Ciudadana”

El sistema gestionará los procesos de interacción entre la comunidad que habita la Localidad de chapinero y las actividades que dicha localidad ofrece y programa regularmente, adicionalmente incluirá una sección el la cual podrá conocer de forma lúdica como tener buenos hábitos de convivencia ciudadana y otro módulo para hacer Peticiones Quejas o Reclamos, como forma de crear conciencia y que cada persona se apropie del espacio público, permitiendo que los líderes de cada barrio que conforma la localidad, la policía y demás entes competentes, estén enterados de posibles daños en la malla vial, o en la infraestructura de la localidad, riñas, problemas entre vecinos, faltas al código de polícia y puedan saber las principales necesidades que presenta la ciudadanía y poder actuar de forma efectiva. 

Los principales beneficiados con la aplicación serán los habitantes de la Localidad chapinero quienes manifiestan abandono institucional e indiferencia social; mediante la aplicación podrán ver de que forma sus reclamos y peticiones son manejadas por las diferentes instituciones  y como su voz es escuchada para resolver sus necesidades.
• La otra parte beneficiada son las mismas instituciones que conforman la localidad de chapinero, al poder manejar los reportes de los usuarios  podrán saber que tipo de habitantes conforman la localidad, que necesidades deben ser atendidas y de esta forma crear un ambiente de convivencia óptimo que ayude a la mejora social.

## 1.3 Definiciones, Acrónimos y Abreviaturas.
- CECC – Cultura Ética y Cultura Ciudadana
- BD – Bases de datos
- UML– Lenguaje de Modelado Unificado
- PQR– Peticiones Quejas y Reclamos
- JAC– Junta de Acción Comunal

## 1.4 Referencias
-----
## 1.5 Visión General del Documento

El documento está dividido en 4 secciones:

* La sección 1 se enfoca en la explicación, objetivos, metas y descripción del documento.

* La sección 2 está orientada, como su nombre lo indica, a la descripción general del sistema, donde la información está orientada al cliente/usuario potencial.

* La sección 3 trata sobre los requisitos específicos. Se emplean términos técnicos orientados principalmente a los desarrolladores y programadores.

* La sección 4 son los apéndices, contiene ligas directas al Wiki, foro y podcast de la entrevista, además de una imagen ilustrativa de los componentes del sistema en general.

# 2. Descripción General

Existen factores generales que afectan al producto y sus requerimientos. En esta sección se identifican estos factores como el contexto al desarrollo del sistema. Algunos de estos factores  el tiempo (de cada fase del desarrollo) y la disponibilidad del cliente.

## 2.1 Perspectiva del Producto

La aplicación permitirá la gestión de los datos personales de los habitantes de la localidad chapinero(situación socioeconómica), así como los PQR que generen, mostrará información relevante a las actividades de los barrios de la localidad y una forma de aprendizaje de las normas de convivencia de forma lúdica.

## 2.2 Funciones del Producto

* Creación de usuarios admin/normal

* Visualización de actividades de los barrios de la localidad Chapinero.

* Creación y gestión de PQR.

* Creación y gestión de cursos lúdicos para la enseñanza de buenos hábitos de comportamiento.

## 2.3 Características de los Usuarios

El sistema cuenta con dos tipos de usuario final:

* El primero es el personal que administra la información de cada barrio de la localidad; estará integrado por los miembros de la JAC; podrán subir a información de las actividades de la localidad gestionar los PQR de los usuarios y escalar de ser necesario a las instituciones correspondientes de atender a la solicitud de los usuarios (por ejemplo en caso de daño en los postes de la luz o en la malla vial pasarlo al área encargada)

* El siguiente se conforma por el usuario final de la aplicación, el cual podrá visualizar las actividades de la localidad, crear y gestionar PQR y acceder a  cursos lúdicos para la enseñanza de buenos hábitos de comportamiento.

## 2.4 Restricciones

Se debe manejar un sistema de autenticación por token JWT, para el intercambio de información entre la app y la api, especificar límites de acceso a usuarios dependiendo el rol, optimizar la aplicación para que funcione con uso de datos reducido.

## 2.5 Suposiciones y dependencias

Para el funcionamiento del sistema se requiere de una conexión estable a internet, por lo menos durante el primer uso, y fundamental para crear PQR, se necesita acceso a una computadora con minimo w7 y google chrome o firefox o edge actualizados, smartphone o iphone para instalar la app desde la tienda de aplicaciones.

## 2.6 Requerimientos futuros
--------------------

# 3. Requerimientos Específicos

## 3.1 Interfaz

La interfaz gráfica con la que el usuario final interactúa deberá ser intuitiva de manera que, sin un manual de uso, el usuario identifique rápidamente los componentes y las secciones del sistema. 

La interfaz además deberá contar con colores agradables a la vista para que el usuario pueda trabajar por horas con el mismo sin problemas.

Es indispensable que la computadora donde se abra la aplicación cuente con al menos uno de los siguientes navegadores web para su correcto funcionamiento:

- Google Chrome: versión 63 o superior. 
- Firefox: versión 63 o superior. 
- Safari: versión 11.1 o superior. 
- Edge: versión 17 o superior. 

Si la aplicación se abre desde el celular:

- Google Chrome: versión 67 o superior. 
- UC Android Browser: versión 11.8 o superior.
- Firefox: versión 63 o superior. 
- IOS Safari: versión 10.3 o superior.

Para instalar la aplicación móvil:

- Android Ice Cream Sandwich 4.0 o superior
- IOS 4.2.1 o superior

### Mensaje de Bienvenida

En la pantalla principal, se mostrará un mensaje aleatorio con una frase de “Sabias Que” aleatoria referente a los cursos que contendrá la aplicación, junto con un botón directo a más información del tema.

### Menú

En la versión para desktop, el menú se ubicará en la parte superior derecha y contendrá los siguientes enlaces: 

- Actividades
- Reporte
- Juegos 
- Usuario: el nombre del usuario y al hacer clic mostrará un submenú donde el usuario podrá ir configuraciones, edición y ayuda.

### Encabezado

En el encabezado de la página parte superior izquierda mostrará el logo de CECC.

## 3.2 Requisitos Funcionales

Requisitos funcionales del sistema por tipos de usuario.

### Usuario

- Manejo de la autenticación de los usuarios (Sesion)
- Visualizar actividades del Barrio y la localidad
- Consultar, gestionar y modificar lista PQR
- Generar reportes de todo lo mencionado anteriormente

### Administrativo

- Manejo de la autenticación de los usuarios (Sesion)
- Cargar, gestionar y modificar, información de las actividades del Barrio
- Consultar, gestionar y modificar lista PQR
- Generar reportes de todo lo mencionado anteriormente

## 3.3 Requerimientos No Funcionales




