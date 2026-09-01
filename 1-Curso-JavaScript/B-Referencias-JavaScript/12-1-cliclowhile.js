// TEMA 12-1: EL CICLO WHILE (ejemplo de decremento)

let bateria = 20; // Estado inicial

console.log("--- ejemplo de dcremento ---");

while (bateria > 0) { // 0 seria el estado final de la bateria
    bateria--; //contador de decremento, desde el estado base hasta la condicion final que es 0
    
    console.log(" Batería al: " + bateria + "%");
}

console.log("bateria descargada: " + bateria + "%");