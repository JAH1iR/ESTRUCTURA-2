# Documentación de Organización - fundamentos frontend

Este documento describe la organización actual del proyecto tras la reorganización general de la carpeta principal.

## 📁 Estructura Principal

### 1. **1-Curso-JavaScript**
Carpeta dedicada al aprendizaje práctico de JavaScript y su conexión con HTML:

* **A-Html-conector**: Archivos HTML usados como punto de enlace para ejecutar scripts de JavaScript.
* **B-Referencias-JavaScript**: Material de referencia con ejercicios y conceptos básicos sobre variables, operadores, arreglos, condicionales, ciclos y funciones.
	También incluye los temas 15 al 22: operadores lógicos, funciones flecha, métodos de arreglos y objetos, métodos de cadenas, validación, selectores del DOM, eventos y formularios.
	Los ejemplos mantienen una numeración progresiva para servir como base de futuros ejercicios de lógica frontend.
* **C-Pruebas-de-logica-propias**: Ejercicios propios para practicar la lógica de programación.

### 2. **2-Guias-del-profesor**
Material de apoyo y recursos proporcionados por el profesor:

* **1-html-semantico**: Guías sobre el uso de etiquetas semánticas en HTML.
* **2-html-conectores-JavaScript**: HTML de referencia, separado de la lógica JavaScript.
* **2-JavaScript-**: Scripts de los ejemplos, con la misma numeración y nombre base que su HTML.
* **4-archivos-JSON**: Archivos de datos en formato JSON para ejercicios y pruebas.
* **PDFs**: Documentos de apoyo en formato PDF.

### 3. **3-Arquitecturas-css**
Módulos enfocados en la explicación de arquitectura CSS, diseño visual y maquetación:

* **css-box-model**: Modelo de caja, contenido, padding, borde, margen y `box-sizing`.
* **css-flexbox**: Distribución en una dimensión, ejes, alineación, separación y ajuste de elementos.
* **css-grid**: Distribución en dos dimensiones, filas, columnas, áreas nombradas y diseño responsive.
* **INDEX.html**: Índice navegable de las tres arquitecturas.
* **README.md**: Orden recomendado y comparación entre Box Model, Flexbox y Grid.

Bootstrap queda reservado para una sección posterior y no forma parte del recorrido actual.

#### Cambios recientes en Arquitecturas CSS

Se mejoraron los ejemplos existentes para que funcionen como material de referencia:

1. **Box Model** ahora incluye un diagrama visual de las capas de una caja y una comparación entre `content-box` y `border-box`.
2. **Flexbox** ahora muestra un menú, elementos flexibles y tarjetas adaptables, junto con la función de `display: flex`, `justify-content`, `align-items`, `gap` y `flex-wrap`.
3. **CSS Grid** ahora explica las áreas nombradas, filas, columnas y la reorganización del layout mediante una media query para pantallas pequeñas.
4. Los tres ejemplos tienen textos en español, estructura responsive y archivos CSS separados para facilitar la experimentación.

Archivos principales:

* [Índice de Arquitecturas CSS](3-Arquitecturas-css/INDEX.html)
* [Ejemplo de Box Model](3-Arquitecturas-css/css-box-model/box.html)
* [Ejemplo de Flexbox](3-Arquitecturas-css/css-flexbox/flex.html)
* [Ejemplo de CSS Grid](3-Arquitecturas-css/css-grid/grid.html)
* [Guía de Arquitecturas CSS](3-Arquitecturas-css/README.md)

#### Separación de HTML y JavaScript

En la sección de conectores del profesor, la estructura queda organizada así:

```text
2-Guias-del-profesor/
├── 2-html-conectores-JavaScript/
│   └── 14-if_then_else.html
└── 2-JavaScript-/
	└── 14-if_then_else.js
```

Cada HTML carga su JavaScript mediante una ruta relativa:

```html
<script src="../2-JavaScript-/14-if_then_else.js"></script>
```

La lógica propia fue extraída de los HTML. Los scripts externos de librerías, como Axios o SweetAlert, se mantienen como dependencias separadas. Se eliminaron los scripts antiguos `archivo...js` porque repetían temas ya cubiertos por los archivos numerados recientes; la carpeta queda con una única versión activa por tema.

## ✅ Resumen
La estructura del proyecto se reorganizó para separar mejor los contenidos por temática: JavaScript, guías del profesor y arquitectura CSS.

