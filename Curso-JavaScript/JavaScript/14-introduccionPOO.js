// TEMA 13: PROGRAMACIÓN ORIENTADA A OBJETOS (POO)

/**
 * Basado en la Guía 36 (Validación) y 38 (Redirección).
 * En lugar de funciones sueltas, creamos un "Gestor".
 */

class GestorUsuario {
    // El constructor inicializa los datos (como en el Tema 1 y 5)
    constructor(nombre, esEstudiante) {
        this.nombre = nombre;
        this.esEstudiante = esEstudiante;
    }

    // Un método es una "función" que pertenece a la clase
    validarAcceso() {
        if (this.nombre === "") {
            return "Error: El nombre no puede estar vacío (Lógica onblur)";
        }
        return this.esEstudiante ? "Acceso Permitido" : "Acceso Denegado";
    }

    // Método para simular la Guía 38 (Redirección)
    irAPerfil() {
        console.log(`Redirigiendo a la página de: ${this.nombre}...`);
    }
}

// 1. Instanciar la clase (Crear el objeto usando el molde)
const usuario1 = new GestorUsuario("Erick", true);
const usuario2 = new GestorUsuario("", false);

console.log("--- TEMA 13: POO ---");
console.log(usuario1.validarAcceso()); // Resultado: Acceso Permitido
console.log(usuario2.validarAcceso()); // Resultado: Error de validación

usuario1.irAPerfil(); 