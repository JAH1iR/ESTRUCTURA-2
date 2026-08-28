function agregarElemento() {
            const elemento = document.createElement("div");
            elemento.innerHTML = "✓ Elemento agregado dinámicamente";
            elemento.className = "resultado";
            document.getElementById("contenedor1").appendChild(elemento);
        }

        function cambiarContenido() {
            const resultado = document.getElementById("resultado2");
            resultado.innerHTML = "✓ Contenido modificado al hacer click";
            resultado.style.display = "block";
        }

        function cambiarAtributos() {
            const div = document.createElement("div");
            div.className = "resultado";
            div.id = "elemento-dinamico";
            div.innerHTML = "✓ ID: " + div.id + "<br>✓ Class: " + div.className;
            document.getElementById("resultado3").appendChild(div);
            document.getElementById("resultado3").style.display = "block";
        }

        function crearLista() {
            const lista = document.getElementById("lista");
            lista.innerHTML = "";
            const items = ["Item 1", "Item 2", "Item 3"];
            
            items.forEach(item => {
                const li = document.createElement("li");
                li.innerHTML = item;
                li.style.padding = "8px";
                li.style.margin = "5px 0";
                li.style.background = "#f0f0f0";
                li.style.borderRadius = "4px";
                lista.appendChild(li);
            });
        }

        function limpiarLista() {
            document.getElementById("lista").innerHTML = "";
        }

        // Event listener para el elemento caja
        document.getElementById("caja").addEventListener("click", cambiarContenido);
