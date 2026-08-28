function ejemplo1() {
            const resultado = document.getElementById("resultado1");
            
            function saludar(nombre, callback) {
                resultado.innerHTML = "Procesando...\n";
                callback("Hola " + nombre);
            }
            
            saludar("Juan", function(mensaje) {
                resultado.innerHTML = "✓ " + mensaje;
                resultado.style.display = "block";
            });
        }

        function ejemplo2() {
            const resultado = document.getElementById("resultado2");
            resultado.innerHTML = "⏳ Esperando 2 segundos...";
            resultado.style.display = "block";
            
            function tareaLarga(callback) {
                setTimeout(function() {
                    callback("✓ Tarea completada después de 2 segundos");
                }, 2000);
            }
            
            tareaLarga(function(respuesta) {
                resultado.innerHTML = respuesta;
            });
        }

        function ejemplo3() {
            const resultado = document.getElementById("resultado3");
            resultado.innerHTML = "⏳ Tarea 1/3...\n";
            resultado.style.display = "block";
            
            function tarea1(callback) {
                setTimeout(() => {
                    resultado.innerHTML = "✓ Tarea 1 completada\n⏳ Tarea 2/3...\n";
                    callback();
                }, 1000);
            }
            
            function tarea2(callback) {
                setTimeout(() => {
                    resultado.innerHTML += "✓ Tarea 2 completada\n⏳ Tarea 3/3...\n";
                    callback();
                }, 1000);
            }
            
            function tarea3(callback) {
                setTimeout(() => {
                    resultado.innerHTML += "✓ Tarea 3 completada";
                    callback();
                }, 1000);
            }
            
            tarea1(function() {
                tarea2(function() {
                    tarea3(function() {
                        resultado.innerHTML += "\n✓ ¡Todas completadas!";
                    });
                });
            });
        }
