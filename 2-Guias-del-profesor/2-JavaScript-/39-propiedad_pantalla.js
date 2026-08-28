function info() {
            let output = "=== Información de Pantalla ===<br>";
            output += "Ancho: " + screen.width + "px<br>";
            output += "Altura: " + screen.height + "px<br>";
            output += "Ancho disponible: " + screen.availWidth + "px<br>";
            output += "Altura disponible: " + screen.availHeight + "px<br>";
            output += "Profundidad de color: " + screen.colorDepth + " bits<br>";
            output += "Resolución: " + screen.width + "x" + screen.height;
            
            document.getElementById("resultado1").innerHTML = "✓ " + output;
            document.getElementById("resultado1").style.display = "block";
        }

        function detectarTipo() {
            let tipo;
            if (screen.width < 768) {
                tipo = "📱 Teléfono móvil";
            } else if (screen.width < 1024) {
                tipo = "📱 Tablet";
            } else {
                tipo = "💻 Computadora de escritorio";
            }
            
            let output = "Resolución: " + screen.width + "x" + screen.height + "<br>";
            output += "Tipo: " + tipo;
            
            document.getElementById("resultado2").innerHTML = "✓ " + output;
            document.getElementById("resultado2").style.display = "block";
        }

        function orientacion() {
            let ancho = screen.width;
            let alto = screen.height;
            let orientacion = ancho > alto ? "🔀 Horizontal (Landscape)" : "📏 Vertical (Portrait)";
            
            document.getElementById("resultado3").innerHTML = "✓ " + orientacion + "<br>Dimensiones: " + ancho + "x" + alto;
            document.getElementById("resultado3").style.display = "block";
        }
