function saludar() {
            let resultado = document.getElementById("resultado1");
            resultado.innerHTML = "✓ ¡Hola!";
            resultado.style.display = "block";
        }

        function mostrarFecha() {
            let resultado = document.getElementById("resultado2");
            let fecha = new Date();
            resultado.innerHTML = "✓ Fecha actual: " + fecha.toLocaleString();
            resultado.style.display = "block";
        }

        function presentarse() {
            let resultado = document.getElementById("resultado3");
            let output = "Mi nombre es Pedro<br>";
            output += "Tengo 25 años<br>";
            output += "Soy programador";
            resultado.innerHTML = "✓ " + output;
            resultado.style.display = "block";
        }

        function mostrarMenu() {
            let resultado = document.getElementById("resultado4");
            let output = "===== MENÚ =====<br>";
            output += "1. Inicio<br>";
            output += "2. Galería<br>";
            output += "3. Contacto<br>";
            output += "4. Salir<br>";
            output += "================";
            resultado.innerHTML = "✓ " + output;
            resultado.style.display = "block";
        }

        function mostrarInfoNavegador() {
            let resultado = document.getElementById("resultado5");
            let output = "Navegador: " + navigator.userAgent.substring(0, 50) + "...<br>";
            output += "Idioma: " + navigator.language + "<br>";
            output += "Plataforma: " + navigator.platform;
            resultado.innerHTML = "✓ " + output;
            resultado.style.display = "block";
        }
