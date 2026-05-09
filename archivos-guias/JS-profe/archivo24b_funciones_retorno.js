//  Uso de FUNCTION RETURN, función con retorno
function vercolor(valor){
    valor = parseInt(prompt('Ingrese una opción 1 al 5: '));
    switch (valor) {
        case 1:
            return '... color AZUL';
            break;
        case 2:
            return '... color ROJO';
            break;
        case 3:
            return '... color AMARILLO';
            break;
        case 4:
            return '... color CHOCOLATE';
            break;
        case 5:
            return '... color VERDE';
            break;
        default:
            return 'ERROR, Ingrese una opción del 1 al 5';
    };
};
alert(vercolor());

