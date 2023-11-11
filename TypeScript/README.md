# ACADEMIA - TYPESCIPT 101

Este repositorio está dedicado a comprender más básico elemental de este asombroso lenguaje, de tal suerte que tengas un _quick start_ a este lenguaje y comprendas los conceptos y sentencias básicas.

Ten en cuenta que todo el material depositado en este repositorio es un **_COMPLEMENTO_** y no un riguroso curso. Esto significa que los ejercicios están pensados para que complementes ese conocimiento que tú ya estás revisando por algún otro medio (un curso en línea, un libro, etc.).

## TEMARIO

El siguiente mini curso contempla los siguientes temas:

* Introducción
* Instalación
  * Extensiones para VS Code.
* Tipos base
* Funciones
* Clases & Interfaces
* Genéricos

## #1 - INTRODUCCIÓN

JavaScript (también conocido como ECMAScript) comenzó su vida como un lenguaje de programación simple para navegadores. En el momento en que se inventó, se esperaba que se usara para fragmentos cortos de código incrustados en una página web; escribir más de unas pocas docenas de líneas de código habría sido algo inusual. Debido a esto, los primeros navegadores web ejecutaban dicho código con bastante lentitud. Sin embargo, con el tiempo, JS se hizo cada vez más popular y los desarrolladores web comenzaron a utilizarlo para crear experiencias interactivas.

Más que esto, JS se ha vuelto lo suficientemente popular como para usarse fuera del contexto de los navegadores, como la implementación de servidores JS usando node.js. La naturaleza de "ejecutar en cualquier lugar" de JS lo convierte en una opción atractiva para el desarrollo multiplataforma.

TypeScript tiene una relación inusual con JavaScript. TypeScript ofrece todas las funciones de JavaScript y una capa adicional además de ellas: el sistema de tipos de TypeScript. Por ejemplo, JavaScript proporciona datos primitivos de lenguaje como _string_ y _number_, pero este no verifica que se hayan asignado de manera consistente, TypeScript si lo hace.

Esto significa que tu código JavaScript en funcionamiento existente también es código TypeScript. El principal beneficio de TypeScript es que puede resaltar comportamientos inesperados en su código, lo que reduce la posibilidad de errores.

Este tutorial proporciona una breve descripción general de TypeScript, centrándose en su sistema de tipos.

## #2 - INSTALACIÓN

Tener un ambiente de desarrollo para Typescript implica tener instalado los siguientes componentes de software de manera obligatoria:

* [NodeJS](https://nodejs.org/en) - La versión LTS más reciente.

Se recomienda que se instalen los siguientes componentes de software de manera opcional _(o en su defecto alguno parecido)_:

* [Visual Studio Code](https://code.visualstudio.com/) - La versión más reciente.

Teniendo una vez ambos componentes de software instalados en tu pc, ejecuta los siguientes comandos para instalar de manera global TypeScript.

```bash
   foo@bar:~$ npm install -g typescript
   foo@bar:~$ tsc -version
```

O si lo prefieres, también puedes instalar de manera local Typescript.

```bash
   foo@bar:~$ npm install typescript --save-dev
   foo@bar:~$ npx tsc -version
```

### #2.1 - EXTENSIONES PARA VS CODE

Las siguientes extensiones te pueden ser muy útiles para tus futuros desarrollos en TypeScript:

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
* [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
* [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [Office Viewer(Markdown Editor)](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-office)
* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

# 3 - EJERCICIOS

### # 3.1 - Simple Typescript

### # 3.2 - JS vs TypeScript
