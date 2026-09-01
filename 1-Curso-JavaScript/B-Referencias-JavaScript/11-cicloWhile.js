// TEMA 11: EL CICLO WHILE (AUTOMATIZACION)

let bateria = 15; // Estado inicial

console.log("--- incremento ---");

while (bateria > 100) {
    bateria++; // -- operador de decremento, desde el estado base hasta la condicion final que es 0
    console.log("Batería al: " + bateria + "%");
}
console.log("Carga completa. Batería al: " + bateria + "%");
