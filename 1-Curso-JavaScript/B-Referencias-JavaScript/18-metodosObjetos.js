// TEMA 18: METODOS DE OBJETOS
// Los objetos representan entidades con propiedades y valores.

const estudiante = {
    nombre: "Ana",
    edad: 20,
    curso: "Frontend"
};

const claves = Object.keys(estudiante);
const valores = Object.values(estudiante);
const entradas = Object.entries(estudiante);
const copia = { ...estudiante, nivel: "inicial" };
const tieneEdad = Object.hasOwn(estudiante, "edad");

console.log("--- TEMA 18: METODOS DE OBJETOS ---");
console.log("Claves:", claves);
console.log("Valores:", valores);
console.log("Entradas:", entradas);
console.log("Copia ampliada:", copia);
console.log("Tiene edad:", tieneEdad);

// Object.keys y Object.values son utiles para recorrer datos.
// El spread crea una copia y permite agregar o reemplazar propiedades.
