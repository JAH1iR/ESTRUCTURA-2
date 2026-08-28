// 3 - Template Literals
// Ejecutar con: node 3-template-literals.js

const estudiante = "Carlos";
const leccionesCompletadas = 8;
const totalLecciones = 10;
const porcentaje = (leccionesCompletadas / totalLecciones) * 100;

const mensaje = `Hola ${estudiante}. Has completado ${porcentaje}% del curso.`;
const tarjeta = `
<section class="tarjeta">
    <h2>${estudiante}</h2>
    <p>${leccionesCompletadas} de ${totalLecciones} lecciones completadas</p>
</section>`;

console.log(mensaje);
console.log(tarjeta);

// Los template literals facilitan construir textos y representaciones de UI.
