function ejemplo1() {
            let output = "Ejecución Síncrona:\n";
            output += "1. Inicio\n";
            output += "2. Operación 1\n";
            output += "3. Operación 2\n";
            output += "4. Fin\n";
            
            document.getElementById("resultado1").innerHTML = "✓ " + output;
            document.getElementById("resultado1").style.display = "block";
        }

        function ejemplo2() {
            let resultado = document.getElementById("resultado2");
            resultado.innerHTML = "⏳ Esperando 2 segundos...\n\n";
            resultado.innerHTML += "1. Inicio\n";
            resultado.innerHTML += "2. Fin (no esperó)\n";
            resultado.innerHTML += "⏳ Esperando... (setTimeout en segundo plano)";
            resultado.style.display = "block";
            
            setTimeout(function() {
                resultado.innerHTML = "✓ Ejecución Asincrónica:\n";
                resultado.innerHTML += "1. Inicio\n";
                resultado.innerHTML += "2. Fin (no esperó)\n";
                resultado.innerHTML += "3. Operación (después de 2s)";
            }, 2000);
        }

        function ejemplo3() {
            let output = "";
            
            function saludar(nombre, callback) {
                output += "Hola " + nombre + "\n";
                callback();
            }
            
            saludar("Juan", function() {
                output += "Este es el callback";
            });
            
            document.getElementById("resultado3").innerHTML = "✓ " + output;
            document.getElementById("resultado3").style.display = "block";
        }

        function ejemplo4() {
            let resultado = document.getElementById("resultado4");
            resultado.innerHTML = "⏳ Leyendo archivo...\n";
            resultado.innerHTML += "(La ejecución continúa sin esperar)";
            resultado.style.display = "block";
            
            function leerArchivo(nombre, callback) {
                setTimeout(function() {
                    callback("Contenido de " + nombre);
                }, 2000);
            }
            
            leerArchivo("datos.txt", function(contenido) {
                resultado.innerHTML = "✓ Callback ejecutado después de 2s:\n\n";
                resultado.innerHTML += contenido;
            });
        }
