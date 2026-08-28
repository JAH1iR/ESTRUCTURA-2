// TEMA 22: EVENTOS Y FORMULARIOS
// Los eventos conectan una accion del usuario con una funcion.

const formulario = document.querySelector("#formularioRegistro");

if (formulario) {
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const datos = new FormData(formulario);
        const nombre = datos.get("nombre");
        const correo = datos.get("correo");

        if (!nombre || !correo) {
            console.log("Completa todos los campos");
            return;
        }

        console.log("Registro valido:", { nombre, correo });
    });
}

// submit se ejecuta al enviar el formulario.
// preventDefault evita que la pagina se recargue.
// FormData permite leer los campos usando su atributo name.
