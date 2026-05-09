// uso de la CLASES en Javascript
class persona{
    nombre = 'Homero';
    apellido = 'simpson';
    direccion = 'ave siempreviva 742, Springfield';
    telefono = 6365553472;
    correo = 'chunkylover53@aol.com';
    
    trabajar(){
        return 'Trabaja en la planta nuclear';
    }
    estudiar(){
        return 'Escuela primaria Springfield';
    }
}
// difino un objeto (homero) a partir de la instancia o clase (persona), es decir estara disponoble los atributo y métodos (trabajar y estudiar).
const homero = new persona();
const bart = new persona();
const lenny = new persona();
document.writeln('1. Nombre: '+homero.nombre+' '+homero.apellido);
document.writeln('<br>');
document.writeln('<br>');
document.writeln('2. Lugar de Trabajo: '+homero.trabajar());
document.writeln('<br>');
document.writeln('<br>');
document.writeln('1. Apellido de Bart : ', bart.apellido);
document.writeln('<br>');
document.writeln('2. Donde Estudia en la: ',bart.estudiar());
document.writeln('<br>');
document.writeln('<br>');
document.writeln('1. Donde Labora Lenny: ', lenny.trabajar());
document.writeln('<br>');