function ejemploBreak() {
            let numeros = [2, 4, 6, 7, 8, 9];
            let output = "Búsqueda con Break:\n";
            
            for (let i = 0; i < numeros.length; i++) {
                output += "Revisando índice " + i + ": " + numeros[i] + "\n";
                if (numeros[i] === 7) {
                    output += "¡Encontrado en índice " + i + "!\n";
                    output += "Break ejecutado - ciclo termina\n";
                    break;
                }
            }
            
            document.getElementById("resultado1").innerHTML = output;
            document.getElementById("resultado1").style.display = "block";
        }

        function ejemploContinue() {
            let output = "Solo números impares (continue salta pares):\n";
            
            for (let i = 1; i <= 10; i++) {
                if (i % 2 === 0) continue;  // Salta pares
                output += i + " ";
            }
            
            document.getElementById("resultado2").innerHTML = output;
            document.getElementById("resultado2").style.display = "block";
        }

        function ejemploEmails() {
            let emails = ["juan@mail.com", "invalido", "ana@gmail.com", "nomail", "bob@yahoo.com"];
            let output = "Procesando emails (continue omite inválidos):\n";
            
            for (let i = 0; i < emails.length; i++) {
                if (!emails[i].includes("@")) {
                    output += "✗ " + emails[i] + " - Omitido (no tiene @)\n";
                    continue;
                }
                output += "✓ " + emails[i] + " - Procesado\n";
            }
            
            document.getElementById("resultado3").innerHTML = output;
            document.getElementById("resultado3").style.display = "block";
        }

        function ejemploContraseña() {
            let output = "Simulación - 3 intentos para contraseña:\n\n";
            let intentos = ["1111", "2222", "1234"];
            let contraseña = "1234";
            let maxIntentos = 3;
            
            for (let i = 0; i < 5; i++) {
                let ingresada = intentos[i] || "vacío";
                output += "Intento " + (i + 1) + ": " + ingresada;
                
                if (ingresada === contraseña) {
                    output += " → ✓ ¡Correcto! Break ejecutado\n";
                    break;
                } else if (i + 1 === maxIntentos) {
                    output += " → ✗ Demasiados intentos. Break ejecutado\n";
                    break;
                } else {
                    output += " → ✗ Incorrecto, continúa...\n";
                }
            }
            
            document.getElementById("resultado4").innerHTML = output;
            document.getElementById("resultado4").style.display = "block";
        }
