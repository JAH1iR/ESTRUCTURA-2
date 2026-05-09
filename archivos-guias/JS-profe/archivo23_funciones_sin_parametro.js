// uso de FUNCIONES sin parametros
function saludar(){
    document.writeln('HOLA A TODOS!!!');
    document.writeln('<br>');
    //alert('SALUDOS A TODOS');
    despedir();
};
function despedir(){
    document.writeln('A DIOS A TODOS...!!');
};

function cuidado(){
    let mensaje = prompt('Ingrese un ALERTA..');
    alert(mensaje);
}
saludar();
cuidado();
