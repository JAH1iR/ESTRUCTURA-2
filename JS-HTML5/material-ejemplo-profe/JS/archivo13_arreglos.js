// declaración de un arreglo tipo numéricos
//let arr_num = [];
let arr_num = [15, 80, 4.5, 50, 30, -10];
document.writeln('Elementos: ', arr_num);
document.writeln('<br>');
document.writeln('Ver elementos del arreglo: ', arr_num[3]);
document.writeln('<br>');
arr_num[0] = 14;
document.writeln('Elementos: ', arr_num);
document.writeln('<br>');

// arreglos tipos textos
let arr_fruta = ['mango', 'manzana', 'pera', 'piña', 'uva'];
document.writeln('elementos de frutas: ', arr_fruta);
document.writeln('<br>');

// METODOS DE LOS ARREGLOS

// ver cantidad de elementos
document.writeln('cantidad elementos numeros: ', arr_num.length);
document.writeln('<br>');
document.writeln('<br>');
document.writeln('cantidad elementos frutas: ', arr_fruta.length);
document.writeln('<br>');

// último elemento del arreglo
document.writeln('último elemento del arreglo: ', arr_num[arr_num.length-1]);
document.writeln('<br>');

// arreglos tipos textos
document.writeln('tipo string: ', arr_num.toString());
document.writeln('<br>');
// unir tipos de arreglos
let letras = ['a','b','c','d','e'];
let numeros = [1,2,3,4,5];
document.writeln('arreglos alfanumericos: ', letras.concat(numeros));
document.writeln('<br>');

// borrar último elemento del arreglo
arr_num.pop();
document.writeln('borrar el último elemento: ', arr_num);
document.writeln('<br>');

// borrar primer elemento del arreglo
arr_num.shift();
document.writeln('borrar el primer elemento: ', arr_num);
document.writeln('<br>');

// insertar elemento al inicio
arr_num.unshift(17);
document.writeln('agregar elemento al inicio: ', arr_num);
document.writeln('<br>');

// insertar elemento al final
arr_num.push(77);
document.writeln('agregar elemento al final: ', arr_num);
document.writeln('<br>');

// eliminar elemento apartir de un punto
arr_num.splice(2,3);
document.writeln('eliminar elemento: ', arr_num);
document.writeln('<br>');

// como copiar un arreglo
let arr_cantid = [100, 200, 500, 600, 700]
let copia = arr_cantid.slice(1,4);
document.writeln('copia de arreglo: ', copia);
document.writeln('<br>');

// ordenar un arreglo en modo alfabetico ascendente
let arr_objet = ['carro', 'bicicleta', 'moto','avión', 'barco']
document.writeln(arr_objet.sort());
document.writeln('<br>');

// ordenar un arreglo en modo alfabetico descendente
document.writeln(arr_objet.reverse());
document.writeln('<br>');
document.writeln('<br>');