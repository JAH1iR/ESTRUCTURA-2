// uso Do while 
let usuario, clave, control;
control = 0;
usuario = prompt('Ingrese su USUARIO: ');
clave = prompt('Ingrese su CLAVE: ');

do {
    if (clave != 'Miacceso33*') {
        clave = prompt('ERROR, Clave Incorrecta\n'+ 'Intente Nuevamente');
        control = 0;
    }else {
        control =1;
    }
} while (control != 1);
document.writeln('ACCESO CORRECTO!!')