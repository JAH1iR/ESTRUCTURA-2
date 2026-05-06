let nombre, edad;
nombre = prompt('Ingrese su nombre: ');
edad = prompt('Ingrese su edad: ');
edad = parseInt(edad);

if (edad>=18) {
    document.writeln('Bienvenido! '+nombre);
    
}else{
    if (edad<18) {
        document.writeln(nombre+' eres un menor de edad')
    } else {
        document.writeln('Ingrese los datos requeridos');
    }
};