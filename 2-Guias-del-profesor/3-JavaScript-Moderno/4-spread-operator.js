// 4 - Spread Operator
// Ejecutar con: node 4-spread-operator.js

const cursosBase = ["HTML", "CSS"];
const cursosCompletos = [...cursosBase, "JavaScript", "React"];

const usuario = { nombre: "Laura", nivel: "basico" };
const usuarioActualizado = { ...usuario, nivel: "intermedio" };

function sumarTodos(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
}

console.log("Cursos originales:", cursosBase);
console.log("Cursos completos:", cursosCompletos);
console.log("Usuario original:", usuario);
console.log("Usuario actualizado:", usuarioActualizado);
console.log("Suma:", sumarTodos(1, 2, 3, 4));

// En React permite crear nuevos estados sin mutar el objeto anterior.
