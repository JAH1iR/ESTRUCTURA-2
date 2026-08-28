// TEMA 21: SELECTORES DEL DOM
// Este ejemplo se ejecuta en un HTML que tenga los elementos indicados.

const titulo = document.querySelector("h1");
const boton = document.querySelector("#btnMostrar");
const resultado = document.querySelector(".resultado");

if (titulo && boton && resultado) {
    boton.addEventListener("click", () => {
        resultado.textContent = `El titulo dice: ${titulo.textContent}`;
        resultado.classList.add("visible");
    });
}

// querySelector busca el primer elemento que coincide con un selector CSS.
// textContent cambia texto de forma segura y classList cambia clases CSS.
