 // --- EL OPERADOR && (Y) EXPLICADO FÁCIL ---
 // Imagina que es un guardia de seguridad muy estricto: 
 // Solo te deja pasar si CUMPLES TODO lo que pide.

 let tieneBoleto = prompt('¿Tienes tu boleto? (si/no)').toLowerCase();
 let edad = parseInt(prompt('¿Qué edad tienes?'));

 document.writeln(`Boleto: ${tieneBoleto} | Edad: ${edad} años <br><br>`);

 if (tieneBoleto === 'si' && edad >= 18) {
     // Solo entras si tienes boleto Y eres mayor
     document.writeln('<strong>¡Bienvenido al cine!</strong> Disfruta la película. ');
 } else {
     document.writeln('<strong>No puedes pasar:</strong> Necesitas tener boleto Y ser mayor de edad.');
 }
