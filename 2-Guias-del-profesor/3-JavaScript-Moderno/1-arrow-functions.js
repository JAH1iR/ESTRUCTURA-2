// 1 - Arrow Functions
// Ejecutar con: node 1-arrow-functions.js

const saludar = (nombre) => `Hola, ${nombre}`;
const sumar = (primerNumero, segundoNumero) => primerNumero + segundoNumero;
const duplicarNumeros = (numeros) => numeros.map((numero) => numero * 2);

const numeros = [1, 2, 3, 4];
console.log(saludar("Ana"));
console.log("5 + 3 =", sumar(5, 3));
console.log("Duplicados:", duplicarNumeros(numeros));

// Las funciones flecha son habituales en componentes y callbacks de React
