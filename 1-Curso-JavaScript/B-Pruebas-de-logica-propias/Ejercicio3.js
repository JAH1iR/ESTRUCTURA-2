/*Crea un arreglo asociativo llamado $producto que contenga: nombre, precio, stock (cantidad disponible) y requiere_receta (booleano true/false).

Imprime una frase que describa el producto usando las llaves del arreglo. Ejemplo: "El producto X cuesta $Y y quedan Z unidades".*/

// En JS, para un "arreglo asociativo" usamos un OBJETO {}
let producto = {
    nombre: "Amoxicilina",
    precio: 12.50,
    stock: 45,
    requiere_receta: true
};
// Accedemos a los datos usando el punto (.) o corchetes ['']
document.writeln(`<strong>Información del Producto:</strong><br>`);
document.writeln(`El producto ${producto.nombre} cuesta $${producto.precio} y quedan ${producto.stock} unidades en existencia.`);
document.writeln('<br>');
document.writeln(`¿Requiere receta médica?: ${producto.requiere_receta ? 'Sí, es obligatorio' : 'No, es de venta libre'}`);