// USO DE switch case, valor texto
let color;
color = prompt('Ingrese un color "azul, rojo o verde"');
switch (color) {
    case 'azul':
        document.writeln('Ingresó el color AZUL');
        break;
    case 'rojo':
        document.writeln('Ingresó el color ROJO');
        break;
    case 'verde':
        document.writeln('Ingresó el color VERDE');
        break;
    default:
        document.writeln('Error, ingrese uno de los colores "azul, rojo o verde"');
        break;
};