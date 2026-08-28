let count = 0;
        let mostrado = false;
        let colorIndex = 0;
        const colores = ['#e8f5e9', '#e3f2fd', '#fff3e0', '#f3e5f5', '#fce4ec'];

        function saludar() {
            document.getElementById("resultado1").innerHTML = "✓ ¡Hiciste click!";
            document.getElementById("resultado1").style.display = "block";
        }

        function incrementar() {
            count++;
            document.getElementById("contador").innerHTML = count;
        }

        function decrementar() {
            count--;
            document.getElementById("contador").innerHTML = count;
        }

        function resetear() {
            count = 0;
            document.getElementById("contador").innerHTML = count;
        }

        function toggleTexto() {
            let elemento = document.getElementById("texto");
            if (mostrado) {
                elemento.style.display = "none";
                mostrado = false;
            } else {
                elemento.style.display = "block";
                mostrado = true;
            }
        }

        function cambiarColor() {
            colorIndex = (colorIndex + 1) % colores.length;
            document.getElementById("caja").style.backgroundColor = colores[colorIndex];
        }

        function mostrarMensaje(msg) {
            document.getElementById("resultado5").innerHTML = "✓ " + msg;
            document.getElementById("resultado5").style.display = "block";
        }
