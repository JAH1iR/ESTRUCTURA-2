// TEMA 5: ARREGLOS INDEXADOS (LISTAS SIMPLES)

/**
 * REGLA DE ORO: 
 * Los arreglos en JavaScript empiezan a contar desde el índice 0.
 */

// 1. Declaración de un arreglo de materias
const materias = ["Programación I", "Cálculo", "Base de Datos", "Ética"];

// 2. Acceso a elementos por su índice
let primeraMateria = materias[0]; // "Programación I"
let terceraMateria = materias[2];  // "Base de Datos"

// 3. Modificación de un elemento
materias[3] = "Redes";

// 4. Propiedad .length (Saber cuántos elementos hay)
let totalMaterias = materias.length;

console.log("--- RESULTADOS TEMA 5- arreglos indexados ---");
console.log("Lista completa:", materias);
console.log("Materia en la posición 0:", primeraMateria);
console.log("Materia modificada en la posición 3:", materias[3]);
console.log("Cantidad total de materias:", totalMaterias);

// Aunque el arreglo es 'const', puedes cambiar sus elementos. 
// Lo que no puedes es reasignar la variable 'materias' a otro valor totalmente distinto.