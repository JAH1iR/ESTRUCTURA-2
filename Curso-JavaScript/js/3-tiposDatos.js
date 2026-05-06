 // --- TIPOS DE DATOS EN JAVASCRIPT ---

 // 1. String (Cadena de texto)
 let nombre = 'Pedro';
 document.writeln(`Tipo String (texto): ${nombre} <br>`);

 // 2. Number (Números - JS no distingue entre int y double, todos son Number)
 let cantidad = 257; 
 let precio = 77.77; 
 document.writeln(`Tipo Number (entero): ${cantidad} <br>`);
 document.writeln(`Tipo Number (decimal): ${precio} <br>`);

 // 3. Boolean (Lógica: verdadero o falso)
 let verdad = true;
 document.writeln(`Tipo Boolean (lógico): ${verdad} <br>`);

 // 4. Null (Valor vacío intencional)
 let nulo = null;
 document.writeln(`Tipo Null (nulo): ${nulo} <br>`);

 // 5. Object (Objeto - lo que antes llamábamos arreglo asociativo)
 // Se accede a sus propiedades usando el punto (.)
 let persona = { nombre: 'Sophia', apellido: 'Loren', edad: 38, signo: 'libra' };
 document.writeln(`Tipo Object: ${persona.nombre} tiene ${persona.edad} años y su signo es ${persona.signo} <br>`);