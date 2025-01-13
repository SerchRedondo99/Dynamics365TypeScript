# Implementación de TypeScript para formularios, vistas y Ribbon Workbench utilizando el Cliente API de Dynamics 365

## Descripción
Este documento detalla, paso a paso, cómo implementar y optimizar el uso de TypeScript en un proyecto de Dynamics 365 Customer Engagement.  
Ventajas de utilizar esta implementación para tus proyectos de Dynamics 365.

# Ventajas
- TypeScript proporciona robustez, escalabilidad y detección de errores en tiempo de compilación.
- Al compilar con `--sourceMap`, puedes depurar tu código TypeScript directamente en el navegador.
- TypeScript se compila a JavaScript estándar.
- El paquete `@types/xrm` brinda tipados para la API de Dynamics 365, asegurando que tus llamadas a `Xrm` y `formContext` sean correctas y cuenten con autocompletado.
- Webpack permite empaquetar y optimizar tu aplicación, resultando en un recurso web (o varios archivos) eficiente y fácil de administrar.

## Índice
- [Descarga del proyecto](#descarga)
- [Instalación](#instalación)
- [Compilación](#compilación)
- [Uso](#uso)
- [Notas](#notas)

# Descarga
- Ingrese a **Visual Studio Code** e inicie una nueva terminal. Escriba la siguiente línea de comandos.
- `git clone https://github.com/SerchRedondo99/Dynamics365TypeScript.git`

# Instalación
- `npm install -g npm@latest`

# Compilación
`npm run start`

# Uso
- Cargue el archivo compilado como recurso web en **Power Apps**.

# Notas
Para trabajar en un proyecto que utilice Node.js, npm y TypeScript en tu computadora, primero necesitas instalar Node.js. Este software incluye automáticamente npm (Node Package Manager), que te permitirá gestionar las dependencias de tu proyecto y ejecutar scripts de manera sencilla. Al obtener Node.js, te aseguras de contar con la base fundamental para desarrollar aplicaciones basadas en JavaScript y TypeScript.

Además, es recomendable usar un editor de texto o entorno de desarrollo especializado, como Visual Studio Code, para aprovechar funcionalidades como autocompletado, resaltado de sintaxis y depuración integrada. Visual Studio Code también tiene extensiones para TypeScript que mejoran la experiencia de desarrollo, facilitando la detección temprana de errores y la navegación entre archivos.

Por último, si requieres instalar TypeScript de forma global, puedes hacerlo fácilmente con un comando de npm; sin embargo, es común agregarlo únicamente como dependencia de desarrollo dentro del propio proyecto. De esta manera, cada proyecto puede manejar su propia versión de TypeScript sin interferir con otras aplicaciones. En conjunto, tener Node.js (con npm), un editor adecuado y TypeScript te permitirá arrancar o mantener un proyecto moderno con un flujo de trabajo eficiente y escalable.
