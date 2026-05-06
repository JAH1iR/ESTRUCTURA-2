// operadores de asignación, incremento y decremento
let a = 1;
document.writeln(`Valor inicial de a: ${a}`);
document.writeln('<br>');
// Incremento: aumenta el valor de a en 1
a++; 
document.writeln(`Después de a++ (incremento 1): ${a}`);
document.writeln('<br>');
// Asignación con suma: aumenta el valor en la cantidad indicada
a += 5; 
document.writeln(`Después de a += 5 (suma 5): ${a}`);
document.writeln('<br>');
// Decremento: resta 1 al valor actual
a--; 
document.writeln(`Después de a-- (decremento 1): ${a}`);
document.writeln('<br>');
// Asignación con resta: resta la cantidad indicada
a -= 3; 
document.writeln(`Después de a -= 3 (resta 3): ${a}`);
document.writeln('<br>');
// Asignación con multiplicación
a *= 5; 
document.writeln(`Después de a *= 5 (multiplica por 5): ${a}`);
document.writeln('<br>');
// Asignación con división y exponenciación
a /= 3; 
document.writeln(`Después de a /= 3 (divide por 3): ${a}`);
document.writeln('<br>');
a **= 2; // Eleva al cuadrado (potencia 2)
document.writeln(`Después de a **= 2 (potencia de 2): ${a}`);