
// Este archivo demuestra la declaración y uso de variables en JavaScript.

// En JavaScript moderno, se prefiere 'let' y 'const' sobre 'var'
// debido a su alcance de bloque (block scope), que es más predecible.
// 'let' se usa para variables que pueden cambiar de valor.
// 'const' se usa para variables cuyo valor no cambiará después de la inicialización.

// Para mostrar información en el documento (navegador).
document.writeln('..Buenos días a Todos, este saludo es externo...!!<br>');
document.writeln('Gracias, nos vemos adios a todos...<br><br>');

// Declaración e inicialización de variables usando 'let' y 'const'
let nombreUsuario = 'papin'; // Usamos camelCase y un nombre más descriptivo
const nombrePrincipal = 'Eric'; // Usamos const ya que este nombre no parece cambiar
let nombreInterno = 'floky'; // Usamos let y camelCase
const nombreCompleto = 'Eric Bocanegra'; // Usamos const para algo que no cambia
let idUsuario = 233; // Usamos let y un nombre más descriptivo

// Mostrar los valores de las variables en el documento usando Template Literals
document.writeln(`Nombre principal: ${nombrePrincipal}<br>`);
document.writeln(`Nombre de usuario: ${nombreUsuario}<br>`);
document.writeln(`Nombre interno: ${nombreInterno}<br>`);
document.writeln(`Nombre completo: ${nombreCompleto}<br>`);
document.writeln(`ID de usuario: ${idUsuario}<br><br>`);

// Ejemplo de reasignación de una variable declarada con 'let'
nombreUsuario = 'Pedro';
document.writeln(`Nombre de usuario actualizado: ${nombreUsuario}<br>`);

// Intentar reasignar una variable 'const' resultaría en un error:
// nombrePrincipal = 'Carlos'; // Esto generaría un TypeError: Assignment to constant variable.
