// TEMA 13: FUNCIONES Y EVENTOS (Basado en guía 35 del Profe)

/**
 * ANALOGÍA: La Función es como una "Receta". 
 * No se cocina sola, solo se ejecuta cuando alguien (un Evento) la llama.
 */

// 1. Declaración de una función con parámetros
// Esta función limpia el contenido de un campo (basado en el 'vaciar' del profe)
function limpiarCampo(elemento) {
    elemento.value = "";
    console.log("Campo limpiado");
}

// 2. Función para procesar lógica
function verificarEstado(nombre, promedio) {
    if (promedio >= 3.0) {
        return `Estudiante ${nombre}: Aprobado`;
    } else {
        return `Estudiante ${nombre}: Pendiente`;
    }
}

// 3. Simulación de Eventos
// En el HTML del profe se usa onclick="verificar()". 
// Aquí uso la llamada:
let resultado = verificarEstado("Erick", 3.5);
console.log(resultado);

/**
 * NOTA DE CALIDAD:
 * En lugar de poner código JS dentro del HTML (onfocus="..."), 
 * lo profesional es crear funciones en archivos .js y llamarlas.
 */