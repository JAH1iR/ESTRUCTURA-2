 let nombre = 'Eric';
 let apellido = 'Bocanegra';
 let edad = 22;
 let precio = 500.00;

 // 1. Usando el operador "+" (La forma más común)
 // Es importante agregar un espacio manual ' ' entre las variables
 let nombreCompleto = nombre + ' ' + apellido;
 document.writeln('Concatenación con operador "+": ' + nombreCompleto);
 document.writeln('<br>');

 // 2. Usando el método .concat()
 // Permite pasar varios argumentos para unir
 let datosConcat = nombre.concat(' ', apellido, ' tiene ', edad, ' años');
 document.writeln('Concatenación con método .concat(): ' + datosConcat);
 document.writeln('<br>');

 // 3. Usando Template Literals (Backticks ``) - RECOMENDADO
 // Es la forma más moderna y legible. Permite insertar variables directamente con ${}
 let mensajeLiteral = `Template Literal: Hola, soy ${nombre} ${apellido} y mi producto cuesta $${precio}`;
 document.writeln(mensajeLiteral);
 document.writeln('<br>');
 document.writeln('<br>');
 document.writeln('Nota: Los Template Literals son mejores para textos largos y complejos.');