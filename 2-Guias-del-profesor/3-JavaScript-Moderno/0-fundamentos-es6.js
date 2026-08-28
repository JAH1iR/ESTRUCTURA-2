// 0 - Fundamentos de JavaScript Moderno
// Ejecutar con: node 0-fundamentos-es6.js

const curso = "JavaScript Moderno";
let progreso = 0;
const temas = ["variables", "tipos", "funciones"];

function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}

progreso = progreso + 1;
console.log("Curso:", curso);
console.log("Temas:", temas.join(", "));
console.log("Progreso:", progreso, "de", temas.length);
console.log("Resultado de sumar(2, 3):", sumar(2, 3));

// En los siguientes ejemplos reemplazaremos funciones y estructuras tradicionales
// por las características modernas que se usan al construir componentes React.
