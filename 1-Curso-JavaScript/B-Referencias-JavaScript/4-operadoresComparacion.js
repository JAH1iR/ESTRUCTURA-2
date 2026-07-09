// TEMA 3: OPERADORES DE COMPARACIÓN E IDENTIDAD ESTRICTA

let edadMinima = 18;
let edadUsuario = 18;
let edadTexto = "18";

// 1. Igualdad Simple (==) - Compara solo el valor
let igualdadSimple = (edadUsuario == edadTexto); // Resultado: true

// 2. Identidad Estricta (===) - Compara valor Y tipo de dato ideal para validacion de datos en formularios (RECOMENDADO) 
let identidadEstricta = (edadUsuario === edadTexto); // Resultado: false

// 3. Diferencia Estricta (!==) - Son diferentes en valor o tipo
let esDiferente = (edadUsuario !== 20); // Resultado: true

// 4. Operadores de magnitud
let esMayor = edadUsuario > 15;   // true
let esMenorIgual = edadUsuario <= 18; // true

console.log("--- RESULTADOS TEMA 3 ---");
console.log("¿Igualdad simple (18 == '18')?:", igualdadSimple);
console.log("¿Identidad estricta (18 === '18')?:", identidadEstricta);
console.log("¿Es mayor a 15?:", esMayor);
console.log("¿Es menor o igual a 18?:", esMenorIgual);

/**
 * NOTA : 
 * Siempre usa === y !== para evitar errores silenciosos donde 
 * un texto se comporta como un número sin que te des cuenta.
 */