// redondear al siguiente entero en decimal .5
var precio = Math.round(399.59);
document.writeln('Precio redondea al siguiente entero 399.59: ', precio);
document.writeln('<br>');
// redondear sin importar decimal hacia arriba
var precio = Math.ceil(299.3);
document.writeln('Precio Redondea hacia arriba 299.3: ', precio);
document.writeln('<br>');
// redondear sin importar decimal hacia abajo
var precio = Math.floor(540.9);
document.writeln('Precio Redondea hacia abajo 540.9: ', precio);
document.writeln('<br>');

// calcular el seno de un angulo
var seno = Math.sin(45);
document.writeln('El seno de 45: ', seno);
document.writeln('<br>');
// calcular el exponencial de un número
var expo = Math.exp(2);
document.writeln('Exponencial de 2: ', expo);
document.writeln('<br>');
// calcular el logaritmo de un número
var loga = Math.log(5);
document.writeln('logaritmo de 5: ', loga);
document.writeln('<br>');
// calcula el valor absoluto
var absoluto = Math.abs(-10);
document.writeln('Valor absoluto de -10: ', absoluto);

// calcular valor maximo de secuencia
var maximo = Math.max(100, 700, 500, 80,400);
document.writeln('Valor máximo es : ', maximo);
document.writeln('<br>');

// calcular valor minimo de secuencia
var minimo = Math.min(100, 700, 500, 80,400);
document.writeln('Valor mínimo es : ', minimo);
document.writeln('<br>');

// traer en pantalla valor aleatorio
var aleatorio = Math.random();
document.writeln('Valor aleatorio: ', aleatorio);
document.writeln('<br>');

var aleatorio2 = Math.round(Math.random());
document.writeln('Valor aleatorio2: ', aleatorio2);
document.writeln('<br>');

// raíz cuadrada de un número
var raiz = Math.sqrt(81);
document.writeln('Raíz cuadrada de 81: ', raiz);
document.writeln('<br>');

// calcular el exponente de un número
var exponente = Math.pow(4,2);
document.writeln('valor de 4 elevado a la 2: ', exponente);