// TEMA 20: ALCANCE Y VALIDACION
// El alcance determina donde se puede usar una variable.

const notaMinima = 3.0;

function evaluarNota(nota) {
    if (typeof nota !== "number" || Number.isNaN(nota)) {
        return "La nota debe ser un numero";
    }

    if (nota < 0 || nota > 5) {
        return "La nota debe estar entre 0 y 5";
    }

    return nota >= notaMinima ? "Aprobado" : "Pendiente";
}

console.log("--- TEMA 20: ALCANCE Y VALIDACION ---");
console.log(evaluarNota(4.2));
console.log(evaluarNota(2.5));
console.log(evaluarNota(8));
console.log(evaluarNota("4"));

// Las variables declaradas dentro de una funcion solo viven alli.
// Validar antes de calcular evita errores con datos de formularios.
