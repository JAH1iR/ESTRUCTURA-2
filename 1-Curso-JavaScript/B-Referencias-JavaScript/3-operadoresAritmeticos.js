// TEMA 2: OPERADORES ARITMÉTICOS

// 1. Datos iniciales
let precioLibro = 25;
let cantidad = 3;
let dineroDisponible = 100;

// 2. [RETO] Calcula el costo total (multiplicación)
let costoTotal = precioLibro * cantidad; // Resultado: 75

// 3. [RETO] Calcula cuánto dinero te sobra (resta)
let presupuestoRestante = dineroDisponible - costoTotal; // Resultado: 25

// 4. [RETO] El uso del Módulo (%)
// Queremos saber si el número de tu semestre (ej: 1) es par o impar.
let miSemestre = 1;
let residuo = miSemestre % 2; // El resultado será 1 (impar)

console.log("Costo Total de Libros:", costoTotal);
console.log("Dinero que me queda:", presupuestoRestante);
console.log("Residuo de mi semestre dividido 2:", residuo);