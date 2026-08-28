// TEMA 6: ARREGLOS ASOCIATIVOS (OBJETOS EN JS)

const estudiante = {
    nombre: "Erick",
    apellido: "Bocanegra",
    semestre: 1,
    estaActivo: true
};

// Acceso a los datos mediante la "llave" (key)
console.log("--- TEMA 6: OBJETOS ---");
console.log("Nombre del estudiante:", estudiante.nombre);
console.log("Estado de actividad:", estudiante["estaActivo"]); // Otra forma de acceder

// Modificar un valor
estudiante.semestre = 2;
console.log("Semestre actualizado:", estudiante.semestre);