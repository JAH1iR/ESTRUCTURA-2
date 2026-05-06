 // --- OPERADOR LÓGICO || (OR / O) ---
 // Este operador da como resultado 'true' si CUALQUIERA de las condiciones se cumple.

 let esSocio = prompt('¿Es usted socio de la tienda? (si/no)').toLowerCase();
 let montoCompra = parseFloat(prompt('¿Cuál es el monto de su compra?'));

 // Mostramos los datos ingresados
 document.writeln(`<strong>Estado de Socio:</strong> ${esSocio} | <strong>Compra:</strong> $${montoCompra} <br><br>`);

 /* 
    LÓGICA DE ENVÍO GRATIS:
    Se otorga si:
    1. El usuario es socio (esSocio === 'si')
    O
    2. La compra supera los $50 (montoCompra > 50)
 */

 if (esSocio === 'si' || montoCompra > 50) {
     // Basta con que una de las dos sea cierta para entrar aquí
     document.writeln('<strong>¡Felicidades!</strong> Usted califica para <strong>Envío Gratis</strong>. <br>');
 } else {
     // Solo llega aquí si AMBAS son falsas
     document.writeln('Para obtener envío gratis debe ser socio o comprar más de $50. <br>');
 }

 document.writeln('<br><em>Nota: Con el operador ||, si la primera condición es verdadera, ya ni siquiera revisa la segunda.</em>');
 document.writeln('<br><em>Fin del ejercicio de envío gratis.</em>');
 document.writeln('<br><br>');