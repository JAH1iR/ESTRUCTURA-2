// TEMA 19: METODOS DE CADENAS
// Se usan para limpiar, buscar y transformar texto de formularios.

const entrada = "  JavaScript para Frontend  ";
const textoLimpio = entrada.trim();
const textoMayusculas = textoLimpio.toUpperCase();
const contieneFrontend = textoLimpio.includes("Frontend");
const palabras = textoLimpio.split(" ");
const textoReemplazado = textoLimpio.replace("Frontend", "web");

console.log("--- TEMA 19: METODOS DE CADENAS ---");
console.log("Texto limpio:", textoLimpio);
console.log("Mayusculas:", textoMayusculas);
console.log("Contiene Frontend:", contieneFrontend);
console.log("Palabras:", palabras);
console.log("Texto reemplazado:", textoReemplazado);

// trim quita espacios externos. includes busca texto.
// split separa una cadena y replace cambia una parte del texto.
