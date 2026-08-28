// 2 - Desestructuracion
// Ejecutar con: node 2-desestructuracion.js

const usuario = {
    nombre: "Maria",
    edad: 25,
    perfil: { rol: "estudiante", ciudad: "Bogota" }
};

const { nombre, edad, perfil: { rol, ciudad } } = usuario;
const cursos = ["HTML", "CSS", "JavaScript"];
const [primerCurso, segundoCurso, ...cursosRestantes] = cursos;

function mostrarUsuario({ nombre: nombreUsuario, edad: edadUsuario }) {
    return `${nombreUsuario} tiene ${edadUsuario} anos`;
}

console.log(nombre, edad, rol, ciudad);
console.log(primerCurso, segundoCurso, cursosRestantes);
console.log(mostrarUsuario(usuario));

// En React se usa para extraer props de los componentes.
