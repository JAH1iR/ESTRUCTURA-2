function ejemploDoWhile() {
            let resultado = document.getElementById("resultado1");
            let output = "Salida Do-While:\n";
            let i = 1;
            do {
                output += i + "\n";
                i++;
            } while (i <= 5);
            resultado.innerHTML = output;
            resultado.style.display = "block";
        }

        function menuSimulado() {
            let iteraciones = parseInt(document.getElementById("iteraciones2").value);
            let resultado = document.getElementById("resultado2");
            let output = "Simulación de menú:\n";
            
            for (let j = 0; j < iteraciones; j++) {
                output += "\n--- Iteración " + (j + 1) + " ---\n";
                output += "Menú mostrado\n";
                output += "Opción seleccionada: " + (j + 1) + "\n";
            }
            output += "\nMenú se ejecutó al menos una vez\n";
            
            resultado.innerHTML = output;
            resultado.style.display = "block";
        }

        function validarNumero() {
            let numero = parseInt(document.getElementById("validar").value);
            let resultado = document.getElementById("resultado3");
            
            if (isNaN(numero) || numero < 1 || numero > 100) {
                resultado.innerHTML = "✗ Número inválido. Debe estar entre 1 y 100";
                resultado.style.background = "#ffebee";
                resultado.style.color = "#c62828";
                resultado.style.borderColor = "#f44336";
            } else {
                resultado.innerHTML = "✓ Número válido: " + numero;
                resultado.style.background = "#e8f5e9";
                resultado.style.color = "#2e7d32";
                resultado.style.borderColor = "#4caf50";
            }
            resultado.style.display = "block";
        }

        function sumarConDoWhile() {
            let hasta = parseInt(document.getElementById("sumarHasta").value);
            let resultado = document.getElementById("resultado4");
            
            if (isNaN(hasta) || hasta < 1) {
                resultado.style.display = "none";
                return;
            }
            
            let suma = 0;
            let i = 1;
            do {
                suma += i;
                i++;
            } while (i <= hasta);
            
            resultado.innerHTML = "Suma de 1 hasta " + hasta + ": " + suma;
            resultado.style.display = "block";
        }

        function compararWhileDoWhile() {
            let resultado = document.getElementById("resultado5");
            let output = "Comparación When(false) vs Do-While(false):\n\n";
            
            // While
            output += "1. While (false):\n";
            output += "   No se ejecuta (la condición es falsa)\n\n";
            
            // Do-While
            output += "2. Do-While (false):\n";
            output += "   Se ejecuta una vez\n";
            output += "   (porque do-while ejecuta primero, verifica después)\n\n";
            
            output += "Conclusión:\n";
            output += "Do-while es mejor para menús y validaciones\n";
            output += "que DEBEN ejecutarse al menos una vez\n";
            
            resultado.innerHTML = output;
            resultado.style.display = "block";
        }
