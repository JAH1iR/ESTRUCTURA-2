 let a, b, sum, res, mult, div, resid, poten;

 // Ingresar datos a y b
 a = parseInt(prompt('Ingresar el Valor 1: '));
 b = parseInt(prompt('Ingresar el Valor 2: '));

 // Operaciones
 sum = a + b;   // suma
 res = a - b;   // diferencia
 mult = a * b;  // multiplicación o producto
 div = a / b;   // división o cociente
 resid = a % b; // residuo
 poten = a ** b;// potenciación

 // Mostrar resultados en el documento
 document.writeln(`<strong>Valores ingresados:</strong> a = ${a}, b = ${b}`);
 document.writeln('<br><br>');

 document.writeln(`La suma es: ${sum}`);
 document.writeln('<br>');
 document.writeln(`La resta es: ${res}`);
 document.writeln('<br>');
 document.writeln(`El Producto es: ${mult}`);
 document.writeln('<br>');
 document.writeln(`El Cociente es: ${div}`);
 document.writeln('<br>');
 document.writeln(`El Residuo es: ${resid}`);
 document.writeln('<br>');
 document.writeln(`La Potenciación es: ${poten}`);
 document.writeln('<br>');