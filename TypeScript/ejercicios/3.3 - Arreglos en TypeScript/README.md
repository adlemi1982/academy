# TypeScript en detalle

En este ejercicio nos adentramos un poco en los tipos de datos mas complejor de TypeScript para resolver una problemática muy commún demostrando varios de los conceptos que te ayudaran a aterrizar el desarrollo de aplicaciones utilizando este lenguaje.

## Objetivos

Al completar este ejercicio tu deberas ser capas de:

* Reforzar lo visto en el ejercicio inicial (3.1 - Simple TypeScript).
* Mostrar las opciones de configuración de `tsc`.
* Debbugear tu código TypeScript en VSCode.
* Mostrar y entender los arreglos en Typescript.

## Instrucciones

El siguiente ejercicio plantea la siguiente problemática:

***¿Cómo hacer una lista de tareas sencilla en TypeScript?***

Para resolver esta respuesta iremos desglosando cada uno de los objetivos antes planteados para dar una respuesta mas completa y enfocada a un nivel básico.

#### Objetivo 1: Reforzar lo visto en el ejercicio anterior (3.1 - Simple TypeScript)

Ejecuta los siguientes pasos:

Paso 1: Configura tu entorno de trabajo como en el ejercicio inicial, llamado `3.1 - Simple TypeScript`.

#### Objetivo 2: Mostrar las opciones de configuración de `tsc`.

Paso 1: En la terminal ejecuta el siguiente comando.

```bash
tsc --init
```

Paso 3:  Edita el archivo tsconfig.json generado y remplaza su contenido por el siguiente

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */
    "target": "ES2022",
    "lib": ["ES2022", "DOM"],
    "module": "ES2022",
    "outDir": "dist/",
    "rootDir": "./",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "sourceMap": true
  },"exclude": ["node_modules"]
}
```

#### Objetivo 3: Debbugear tu codigo TypeScript en VSCode

Ejecuta los siguientes pasos:

Paso 1: Instala tu debugger desde la seccion de extenciones (*aplica solo para navegadores que no sean chrome/edge*).

Paso 2: Configura un nuevo archivo `launch.json` desde la sección "Run & Debug".

Paso 3: En tu archivo `tsconfig.json` agrega la siguiente opción.

```json
"rootDir": "./",
"sourceMap": true
```

Paso 4: Valida que tu  código sea *debuggeable*.

#### Objetivo 4: Mostrar y entender los arreglos en Typescript

Ejecuta los siguientes pasos:

Paso 1: Edita el archivo `index.html` y coloca el siguiente código.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>TypeScript 101 - TypeScript en detalle</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container">
        <div class="row">
            <h2>Tu lista de tareas</h2>
            <hr/><br/>
            <div class="col-6">              
                <div class="input-group">
                    <input id="txbTaskTitle" type="text" class="form-control" placeholder="Tu siguiente tarea">
                    <button class="btn btn-outline-primary" type="button" id="btnAddTask">Agregar</button>
                    <button class="btn btn-outline-secondary" type="button" id="btnShowTask">Mostrar/Ocultar</button>
                </div>
            </div>
            <div class="col-6">
                <div id="taskListCounter">
                    Tu lista tiene 0 elementos
                </div>
                <ul id="taskListPanel" class="list-group">
                    <!-- Elementos agregados dinamicamente -->
                </ul>
            </div>
        </div>    
    </div>
    <script src="dist/main.js"></script>
    <script src="dist/utils.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

Paso 2: Sigue los pasos del instructor ya que este contenido será actualizado lo mas pronto posible.

## Resumen

En este ejercicio pudiste darte cuenta del uso que se le pueden dar a los arreglos en TypeScript mediante un pequeño ejemplo.
