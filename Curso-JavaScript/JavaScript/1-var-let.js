 // --- DIFERENCIAS ENTRE VAR Y LET ---

 // 1. VAR (Ámbito Global/Función)
 // 'var' no respeta los bloques (como los de un 'if'). Si declaras algo con var dentro, se sale.
 var lenguaje = "JavaScript";
 if (true) {
     var lenguaje = "java"; // Esto sobrescribe la variable de afuera
     document.writeln(`Dentro del IF con var: ${lenguaje}`);
     document.writeln('<br>');
 }
 document.writeln(`Fuera del IF con var: ${lenguaje} (¡Cambió el original!)`);
 document.writeln('<br><br>');

 // 2. LET (Ámbito de Bloque) - RECOMENDADO
 // 'let' solo vive dentro de las llaves { } donde fue creado.
 let herramienta = "Martillo";
 if (true) {
     let herramienta = "Destornillador"; // Es una variable DIFERENTE, solo vive aquí adentro
     document.writeln(`Dentro del IF con let: ${herramienta}`);
     document.writeln('<br>');
 }
 document.writeln(`Fuera del IF con let: ${herramienta} (Mantiene su valor original)`);
 document.writeln('<br><br>');

 // Explicación de la sintaxis ${variable} que preguntaste:
 // Se llama INTERPOLACIÓN. 
 // En vez de escribir: "Texto " + variable + " texto"
 // Escribes: `Texto ${variable} texto` (usando las comillas invertidas)

 let usuario = "Eric";
 document.writeln(`Hola ${usuario}, esto es mucho más fácil de leer así.`);