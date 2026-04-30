// OPERADOR || (O)
let day, month, year;
month = parseInt(month);
day = prompt('Ingrese el día: ');
month = prompt('Ingrese el mes: ');
year = prompt('Ingrese el año: ');
if (month == 1 || month == 2 || month == 3) {
    document.writeln('Pertenece al 1er trimestre del año '+year);
} else {
    document.writeln('No pertenece al 1er trimestre del año '+year);
}
