// Uso de la CLASE DATE O FECHA
// crear una objeto (fecha) a partir de la clase DATE
const fechactual = new Date();
document.writeln(fechactual);
document.writeln('<br>');
let fecha = new Date();
document.writeln('Hoy es ', fecha.getDate());
document.writeln('<br>');
document.writeln('El mes es ', fecha.getMonth()+1);
document.writeln('<br>');
document.writeln('El año es ', fecha.getFullYear());
document.writeln('<br>');
document.writeln('La hora es ', fecha.getHours(), ':', fecha.getMinutes(), ':', fecha.getSeconds());
document.writeln('<br>');
document.writeln('<br>');


