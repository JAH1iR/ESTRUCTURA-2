// TEMA 17: METODOS DE ARREGLOS
// Estos metodos permiten transformar y buscar datos sin escribir todos los ciclos.

const productos = [
    { nombre: "Cuaderno", precio: 5, disponible: true },
    { nombre: "Lapiz", precio: 2, disponible: true },
    { nombre: "Mochila", precio: 30, disponible: false }
];

const nombres = productos.map(producto => producto.nombre);
const disponibles = productos.filter(producto => producto.disponible);
const total = productos.reduce((suma, producto) => suma + producto.precio, 0);
const hayMochila = productos.some(producto => producto.nombre === "Mochila");
const cuaderno = productos.find(producto => producto.nombre === "Cuaderno");

console.log("--- TEMA 17: METODOS DE ARREGLOS ---");
console.log("map - nombres:", nombres);
console.log("filter - disponibles:", disponibles);
console.log("reduce - total:", total);
console.log("some - existe mochila:", hayMochila);
console.log("find - producto:", cuaderno);

// map crea un arreglo nuevo. filter conserva algunos elementos.
// reduce acumula un resultado. some y find ayudan a buscar informacion.
