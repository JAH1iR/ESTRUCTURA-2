 // --- ESTRUCTURAS CONDICIONALES (IF / ELSE) ---
 // Permiten que el programa tome decisiones: "Si pasa esto, haz aquello; si no, haz esto otro".

 let nombre = prompt('Ingrese su nombre: ');
 let edadInput = prompt('Ingrese su edad: ');
 let edad = parseInt(edadInput);

 // Mostramos la información inicial para saber qué datos procesamos
 document.writeln(`<strong>Usuario:</strong> ${nombre} | <strong>Edad:</strong> ${edad} <br><br>`);

 // 1. La condición principal: ¿Es mayor o igual a 18?
 if (edad >= 18) {
     // Este bloque se ejecuta solo si la condición es VERDADERA (true)
     document.writeln(`¡Bienvenido ${nombre}! Acceso concedido por ser mayor de edad. <br>`);
 } 
 // 2. "else if" sirve para evaluar una segunda opción si la primera falló
 else if (edad < 18) {
     // Se ejecuta solo si la primera fue falsa Y esta es verdadera
     document.writeln(`Lo siento ${nombre}, eres menor de edad. Acceso restringido. <br>`);
 } 
 // 3. El "else" final es el plan de emergencia (si no se cumple nada de lo anterior)
 else {
     document.writeln('Error: Por favor, asegúrate de ingresar un número válido en la edad. <br>');
 }

 document.writeln('<br><em>Fin del ejercicio de validación.</em>');