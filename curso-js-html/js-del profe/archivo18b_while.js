// uso del while con valor de entrada
let x = 1;
let suma = 0;
let valor;

while (x <= 7) {
    valor = parseInt(prompt('Ingrese un valor'));
    suma = suma + valor;
    x++;
};
document.writeln("La suma es:", suma, '<br>');