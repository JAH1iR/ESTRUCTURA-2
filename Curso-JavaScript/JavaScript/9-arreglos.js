// declaración de un arreglo tipo numéricos
//let arr_num = [];
const numeros = [15, 80, 4.5, 50, 30, -10]; // Usamos 'const' si la referencia al array no cambia
document.writeln(`Arreglo de números inicial: ${numeros}`);
document.writeln('<br>');

// Acceder a un elemento por su índice (los índices comienzan en 0)
document.writeln(`Tercer elemento del arreglo (índice 2): ${numeros[2]}`); // Debería ser 4.5
document.writeln('<br>');
document.writeln(`Cuarto elemento del arreglo (índice 3): ${numeros[3]}`); // Debería ser 50
document.writeln('<br>');

// Modificar un elemento del arreglo
numeros[0] = 14;
document.writeln(`Arreglo de números después de modificar el primer elemento: ${numeros}`);
document.writeln('<br>');

// arreglos tipos textos
const frutas = ['mango', 'manzana', 'pera', 'piña', 'uva'];
document.writeln(`Arreglo de frutas: ${frutas}`);
document.writeln('<br>');

// METODOS DE LOS ARREGLOS

// ver cantidad de elementos
document.writeln(`Cantidad de elementos en el arreglo de números: ${numeros.length}`);
document.writeln('<br>');
document.writeln(`Cantidad de elementos en el arreglo de frutas: ${frutas.length}`);
document.writeln('<br>');

// último elemento del arreglo
document.writeln(`Último elemento del arreglo de números: ${numeros[numeros.length - 1]}`);
document.writeln('<br>');

// Convertir un arreglo a una cadena de texto
document.writeln(`Arreglo de números como string: ${numeros.toString()}`);
document.writeln('<br>');

// unir tipos de arreglos
const letras = ['a', 'b', 'c', 'd', 'e'];
const numeros2 = [1, 2, 3, 4, 5]; // Renombramos para evitar conflicto con 'numeros'

// concat() crea un nuevo arreglo sin modificar los originales
const alfanumerico = letras.concat(numeros2);
document.writeln(`Arreglos alfanuméricos (letras + numeros2): ${alfanumerico}`);
document.writeln('<br>');

// borrar último elemento del arreglo
// pop() modifica el arreglo original
const ultimoElementoEliminado = numeros.pop();
document.writeln(`Arreglo de números después de borrar el último elemento: ${numeros}`);
document.writeln('<br>');
document.writeln(`Elemento eliminado con pop(): ${ultimoElementoEliminado}`);
document.writeln('<br>');

// borrar primer elemento del arreglo
// shift() modifica el arreglo original
const primerElementoEliminado = numeros.shift();
document.writeln(`Arreglo de números después de borrar el primer elemento: ${numeros}`);
document.writeln('<br>');
document.writeln(`Elemento eliminado con shift(): ${primerElementoEliminado}`);
document.writeln('<br>');

// insertar elemento al inicio
// unshift() modifica el arreglo original
numeros.unshift(17);
document.writeln(`Arreglo de números después de agregar un elemento al inicio (17): ${numeros}`);
document.writeln('<br>');

// insertar elemento al final
// push() modifica el arreglo original
numeros.push(77);
document.writeln(`Arreglo de números después de agregar un elemento al final (77): ${numeros}`);
document.writeln('<br>');

// eliminar elemento apartir de un punto
// splice(indiceInicio, cantidadAEliminar) modifica el arreglo original
const elementosEliminadosSplice = numeros.splice(2, 3); // Elimina 3 elementos desde el índice 2
document.writeln(`Arreglo de números después de eliminar elementos con splice: ${numeros}`);
document.writeln('<br>');
document.writeln(`Elementos eliminados con splice: ${elementosEliminadosSplice}`);
document.writeln('<br>');

// como copiar un arreglo
// slice(indiceInicio, indiceFinExclusivo) crea una copia superficial, no modifica el original
const cantidades = [100, 200, 500, 600, 700];
const copiaCantidades = cantidades.slice(1, 4); // Copia desde el índice 1 hasta antes del 4
document.writeln(`Arreglo original de cantidades: ${cantidades}`);
document.writeln('<br>');
document.writeln(`Copia de arreglo de cantidades (slice(1,4)): ${copiaCantidades}`);
document.writeln('<br>');

// ordenar un arreglo en modo alfabetico ascendente
// sort() modifica el arreglo original. Para strings, ordena alfabéticamente.
const objetos = ['carro', 'bicicleta', 'moto', 'avión', 'barco'];
objetos.sort();
document.writeln(`Arreglo de objetos ordenado alfabéticamente (ascendente): ${objetos}`);
document.writeln('<br>');

// ordenar un arreglo en modo alfabetico descendente
// reverse() modifica el arreglo original. Invierte el orden actual.
objetos.reverse();
document.writeln(`Arreglo de objetos ordenado alfabéticamente (descendente): ${objetos}`);
document.writeln('<br>');

// Ejemplo de ordenamiento numérico (importante para números)
const numerosDesordenados = [3, 1, 10, 5, 2];
document.writeln(`Números desordenados: ${numerosDesordenados}`);
document.writeln('<br>');
numerosDesordenados.sort((a, b) => a - b); // Orden ascendente
document.writeln(`Números ordenados ascendentemente: ${numerosDesordenados}`);
document.writeln('<br>');
numerosDesordenados.sort((a, b) => b - a); // Orden descendente
document.writeln(`Números ordenados descendentemente: ${numerosDesordenados}`);
document.writeln('<br>');