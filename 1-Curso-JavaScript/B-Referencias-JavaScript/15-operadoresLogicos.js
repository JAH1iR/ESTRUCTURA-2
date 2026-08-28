// TEMA 15: OPERADORES LOGICOS
// Sirven para combinar varias condiciones.

const usuarioRegistrado = true;
const tienePermiso = true;
const esFinDeSemana = false;

const puedeEntrar = usuarioRegistrado && tienePermiso;
const puedeDescansar = esFinDeSemana || tienePermiso;
const noEsFinDeSemana = !esFinDeSemana;

console.log("--- TEMA 15: OPERADORES LOGICOS ---");
console.log("Puede entrar:", puedeEntrar);
console.log("Puede descansar:", puedeDescansar);
console.log("No es fin de semana:", noEsFinDeSemana);

// && necesita que todas las condiciones sean verdaderas.
// || necesita que al menos una condicion sea verdadera.
// ! cambia true por false y false por true.
