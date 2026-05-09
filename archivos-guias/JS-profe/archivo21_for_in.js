// uso del FOR IN, funciona solo para objeto que contiene una cantidad de elementos (cadenas).
// el sistema ve palabras como un arreglo, es decir: palabras['J','a','v','a','S','c','r','i','p','t']
let palabras = 'JavaScript';
for (let f in palabras){
    document.writeln('Ciclo#: ',f,' = ', palabras[f]);
    document.writeln('<br>');
};