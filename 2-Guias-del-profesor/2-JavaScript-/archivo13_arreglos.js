// declaración de un arreglo tipo numéricos
//let arr_num = [];
const numeros = [15, 80, 4.5, 50, 30, -10]; // Usamos 'const' si la referencia al array no cambia
console.log('Arreglo de números inicial:', numeros);

// Acceder a un elemento por su índice (los índices comienzan en 0)
console.log('Tercer elemento del arreglo (índice 2):', numeros[2]); // Debería ser 4.5
console.log('Cuarto elemento del arreglo (índice 3):', numeros[3]); // Debería ser 50

// Modificar un elemento del arreglo
numeros[0] = 14;
console.log('Arreglo de números después de modificar el primer elemento:', numeros);

// arreglos tipos textos
const frutas = ['mango', 'manzana', 'pera', 'piña', 'uva'];
console.log('Arreglo de frutas:', frutas);

// METODOS DE LOS ARREGLOS

// ver cantidad de elementos
console.log('Cantidad de elementos en el arreglo de números:', numeros.length);
console.log('Cantidad de elementos en el arreglo de frutas:', frutas.length);

// último elemento del arreglo
console.log('Último elemento del arreglo de números:', numeros[numeros.length - 1]);

// Convertir un arreglo a una cadena de texto
console.log('Arreglo de números como string:', numeros.toString());

// unir tipos de arreglos
const letras = ['a', 'b', 'c', 'd', 'e'];
const numeros2 = [1, 2, 3, 4, 5]; // Renombramos para evitar conflicto con 'numeros'

// concat() crea un nuevo arreglo sin modificar los originales
const alfanumerico = letras.concat(numeros2);
console.log('Arreglos alfanuméricos (letras + numeros2):', alfanumerico);

// borrar último elemento del arreglo
// pop() modifica el arreglo original
const ultimoElementoEliminado = numeros.pop();
console.log('Arreglo de números después de borrar el último elemento:', numeros);
console.log('Elemento eliminado con pop():', ultimoElementoEliminado);

// borrar primer elemento del arreglo
// shift() modifica el arreglo original
const primerElementoEliminado = numeros.shift();
console.log('Arreglo de números después de borrar el primer elemento:', numeros);
console.log('Elemento eliminado con shift():', primerElementoEliminado);

// insertar elemento al inicio
// unshift() modifica el arreglo original
numeros.unshift(17);
console.log('Arreglo de números después de agregar un elemento al inicio (17):', numeros);

// insertar elemento al final
// push() modifica el arreglo original
numeros.push(77);
console.log('Arreglo de números después de agregar un elemento al final (77):', numeros);

// eliminar elemento apartir de un punto
// splice(indiceInicio, cantidadAEliminar) modifica el arreglo original
const elementosEliminadosSplice = numeros.splice(2, 3); // Elimina 3 elementos desde el índice 2
console.log('Arreglo de números después de eliminar elementos con splice:', numeros);
console.log('Elementos eliminados con splice:', elementosEliminadosSplice);

// como copiar un arreglo
// slice(indiceInicio, indiceFinExclusivo) crea una copia superficial, no modifica el original
const cantidades = [100, 200, 500, 600, 700];
const copiaCantidades = cantidades.slice(1, 4); // Copia desde el índice 1 hasta antes del 4
console.log('Arreglo original de cantidades:', cantidades);
console.log('Copia de arreglo de cantidades (slice(1,4)):', copiaCantidades);

// ordenar un arreglo en modo alfabetico ascendente
// sort() modifica el arreglo original. Para strings, ordena alfabéticamente.
const objetos = ['carro', 'bicicleta', 'moto', 'avión', 'barco'];
objetos.sort();
console.log('Arreglo de objetos ordenado alfabéticamente (ascendente):', objetos);

// ordenar un arreglo en modo alfabetico descendente
// reverse() modifica el arreglo original. Invierte el orden actual.
objetos.reverse();
console.log('Arreglo de objetos ordenado alfabéticamente (descendente):', objetos);

// Ejemplo de ordenamiento numérico (importante para números)
const numerosDesordenados = [3, 1, 10, 5, 2];
console.log('Números desordenados:', numerosDesordenados);
numerosDesordenados.sort((a, b) => a - b); // Orden ascendente
console.log('Números ordenados ascendentemente:', numerosDesordenados);
numerosDesordenados.sort((a, b) => b - a); // Orden descendente
console.log('Números ordenados descendentemente:', numerosDesordenados);