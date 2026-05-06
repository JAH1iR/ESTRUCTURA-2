/*Crea una variable indice.

Si el indice es mayor o igual a 1.0, imprime: "Matrícula permitida".

Si es menor a 1.0, imprime: "Debe acudir a consejería académica".

Extra: Usa el operador de identidad estricta (===) para verificar si el promedio es exactamente 3.0 e imprime: "¡Felicidades, promedio perfecto!".*/

const indice = 1.0;
let miIndice = 0.0;
miIndice = parseInt(prompt('ingrese su indice: '));
if (miIndice >= 1.0){
    document.writeln(`<strong>Matrícula permitida</strong>`);
}
else if (miIndice < 1.0){
    document.writeln(`<strong>Debe acudir a consejería académica</strong>`);
}
if (miIndice === 3.0){
    document.writeln(`<strong>¡Felicidades, promedio perfecto!</strong>`);
}