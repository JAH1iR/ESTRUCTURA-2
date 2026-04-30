// OPERADOR && (Y) 
let continente, edad;
continente = prompt('Ingrese su continente: ');
edad = prompt('Ingrese su edad: ');
edad = parseInt(edad);
if (continente == 'america' && edad>= 18 ) {
    document.writeln('eres un adulto americano');
}else{
    document.writeln('o no eres adulto o no eres americano');
};

