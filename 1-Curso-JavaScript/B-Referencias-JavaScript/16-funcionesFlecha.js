// TEMA 16: FUNCIONES FLECHA
// Son una forma corta de escribir funciones.

function sumarTradicional(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}

const sumar = (primerNumero, segundoNumero) => primerNumero + segundoNumero;
const esPar = numero => numero % 2 === 0;
const saludar = () => "Hola desde una funcion flecha";

console.log("--- TEMA 16: FUNCIONES FLECHA ---");
console.log("Funcion tradicional:", sumarTradicional(2, 3));
console.log("Funcion flecha:", sumar(2, 3));
console.log("8 es par:", esPar(8));
console.log(saludar());

// Son muy utiles como funciones de callback en map, filter y eventos.
