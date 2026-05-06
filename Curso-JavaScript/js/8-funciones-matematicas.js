 // --- FUNCIONES MATEMÁTICAS (OBJETO Math) ---

 // 1. REDONDEO
 // Math.round(): Redondeo normal (si es .5 o más, sube; si es menos, baja)
 let redondeoNormal = Math.round(399.59);
 document.writeln(`Math.round(399.59) - Redondeo estándar: ${redondeoNormal} <br>`);

 // Math.ceil(): Redondeo hacia ARRIBA (techo), sin importar el decimal
 let redondeoArriba = Math.ceil(299.1);
 document.writeln(`Math.ceil(299.1) - Siempre hacia arriba: ${redondeoArriba} <br>`);

 // Math.floor(): Redondeo hacia ABAJO (piso), sin importar el decimal
 let redondeoAbajo = Math.floor(540.9);
 document.writeln(`Math.floor(540.9) - Siempre hacia abajo: ${redondeoAbajo} <br><br>`);

 // 2. ESTADÍSTICA Y COMPARACIÓN
 // Math.max() y Math.min(): Encuentran el mayor y el menor de una lista
 let maximo = Math.max(100, 700, 500, 80, 400);
 let minimo = Math.min(100, 700, 500, 80, 400);
 document.writeln(`El valor máximo de la lista es: ${maximo} <br>`);
 document.writeln(`El valor mínimo de la lista es: ${minimo} <br><br>`);

 // 3. TRIGONOMETRÍA Y CÁLCULOS AVANZADOS
 // Math.abs(): Valor absoluto (convierte negativos en positivos)
 let absoluto = Math.abs(-10);
 document.writeln(`Valor absoluto de -10: ${absoluto} <br>`);

 // Math.sin(): Seno de un número (se calcula en radianes)
 let seno = Math.sin(45);
 document.writeln(`El seno de 45 (en radianes): ${seno} <br>`);

 // Math.exp() y Math.log(): Exponencial y Logaritmo natural
 document.writeln(`Exponencial de 2: ${Math.exp(2)} <br>`);
 document.writeln(`Logaritmo de 5: ${Math.log(5)} <br><br>`);

 // 4. POTENCIAS Y RAÍCES
 // Math.sqrt(): Raíz cuadrada
 let raiz = Math.sqrt(81);
 document.writeln(`La raíz cuadrada de 81 es: ${raiz} <br>`);

 // Math.pow(base, exponente): Eleva un número a una potencia
 let potencia = Math.pow(4, 2);
 document.writeln(`4 elevado a la potencia de 2 es: ${potencia} <br><br>`);

 // 5. NÚMEROS ALEATORIOS
 // Math.random(): Genera un número decimal entre 0 y 1 (ej: 0.12345)
 let aleatorio = Math.random();
 document.writeln(`Valor aleatorio entre 0 y 1: ${aleatorio} <br>`);

 // Ejemplo común: Aleatorio entre 1 y 100
 let aleatorio100 = Math.floor(Math.random() * 100) + 1;
 document.writeln(`Número aleatorio entre 1 y 100: ${aleatorio100} <br>`);