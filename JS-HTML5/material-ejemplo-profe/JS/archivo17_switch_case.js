// USO DE switch case, valor númerico
let valor;
valor = parseInt(prompt('Ingrese un valor entre 1 al 5'));
switch (valor) {
    case 1:
        document.writeln('Ingresó el valor uno');
        break;
    case 2:
        document.writeln('Ingresó el valor dos');
        break;
    case 3:
        document.writeln('Ingresó el valor tres');
        break;
    case 4:
        document.writeln('Ingresó el valor cuatro');
        break;
    case 5:
        document.writeln('Ingresó el valor cinco');
        break;
    default:
        document.writeln('Error, ingrese el valor de 1 al 5');
        break;
};