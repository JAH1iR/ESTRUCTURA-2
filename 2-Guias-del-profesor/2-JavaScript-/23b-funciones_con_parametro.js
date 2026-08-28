function saludarPersona() {
            let nombre = document.getElementById("nombre").value;
            let resultado = document.getElementById("resultado1");
            
            if (nombre === "") {
                resultado.style.display = "none";
                return;
            }
            
            resultado.innerHTML = "✓ Hola " + nombre;
            resultado.style.display = "block";
        }

        function sumarNumeros() {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);
            let resultado = document.getElementById("resultado2");
            
            if (isNaN(num1) || isNaN(num2)) {
                resultado.style.display = "none";
                return;
            }
            
            resultado.innerHTML = "✓ " + num1 + " + " + num2 + " = " + (num1 + num2);
            resultado.style.display = "block";
        }

        function multiplicarNumeros() {
            let numero = parseFloat(document.getElementById("numero").value);
            let factor = parseFloat(document.getElementById("factor").value);
            let resultado = document.getElementById("resultado3");
            
            if (isNaN(numero) || isNaN(factor)) {
                resultado.style.display = "none";
                return;
            }
            
            resultado.innerHTML = "✓ " + numero + " x " + factor + " = " + (numero * factor);
            resultado.style.display = "block";
        }

        function presentarPersona() {
            let nombre = document.getElementById("nombre2").value;
            let edad = document.getElementById("edad").value;
            let profesion = document.getElementById("profesion").value;
            let resultado = document.getElementById("resultado4");
            
            if (nombre === "" || edad === "" || profesion === "") {
                resultado.style.display = "none";
                return;
            }
            
            let output = "Mi nombre es " + nombre + "<br>";
            output += "Tengo " + edad + " años<br>";
            output += "Soy " + profesion;
            
            resultado.innerHTML = "✓ " + output;
            resultado.style.display = "block";
        }

        function verificarEdad() {
            let edad = parseInt(document.getElementById("edad2").value);
            let resultado = document.getElementById("resultado5");
            
            if (isNaN(edad)) {
                resultado.style.display = "none";
                return;
            }
            
            if (edad >= 18) {
                resultado.innerHTML = "✓ Eres mayor de edad";
            } else {
                resultado.innerHTML = "✗ Eres menor de edad";
            }
            resultado.style.display = "block";
        }
