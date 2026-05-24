// TEMA 8: CONDICIONALES ANIDADOS (FILTROS POR CAPAS)

let esEstudiante = true;
let tieneCarnet = false;

console.log("--- TEMA 8: CONDICIONALES ANIDADOS ---");

if (esEstudiante) {
    console.log("Acceso al campus: Permitido.");

    if (tieneCarnet) {
        console.log("Acceso a la biblioteca: Permitido.");
    } else {
        console.log("Acceso a la biblioteca: Denegado. No tienes carnet.");
    }

} else {
    console.log("Acceso al campus: Denegado.");
}