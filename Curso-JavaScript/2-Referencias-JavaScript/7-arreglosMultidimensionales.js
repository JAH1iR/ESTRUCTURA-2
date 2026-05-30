// TEMA 6: ARREGLOS MULTIDIMENSIONALES (ARREGLOS DENTRO DE ARREGLOS)

const horario = [
    ["Lunes", "Programación"], // Índice 0
    ["Martes", "Cálculo"],      // Índice 1
    ["Miércoles", "Física"]     // Índice 2
];

console.log("--- TEMA 6: MULTIDIMENSIONALES ---");

// Acceder a "Martes" (Fila 1, Columna 0)
console.log("Día:", horario[1][0]);

// Acceder a "Programación" (Fila 0, Columna 1)
console.log("Materia:", horario[0][1]);

console.table(horario); // Tip: console.table muestra arreglos complejos de forma visual