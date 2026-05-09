// Uso de FUNCIONES con retorno
function sumar(valor1, valor2){
    return valor1 + valor2;
};
document.writeln(sumar(20,25));
document.writeln('<br>');

function saludar(){
    return 'Hola a todos, PROHIBIDO FUGARSE';
}
var mensaje = saludar();
document.writeln(mensaje);