function contarFor() {
            let numero = parseInt(document.getElementById("contar").value);
            let resultado = document.getElementById("resultado1");
            
            if (isNaN(numero) || numero < 1) {
                resultado.style.display = "none";
                return;
            }
            
            let output = "";
            for (let i = 1; i <= numero; i++) {
                output += i + "\n";
            }
            resultado.innerHTML = output;
            resultado.style.display = "block";
        }

        function cuentaRegresiva() {
            let numero = parseInt(document.getElementById("regresiva").value);
            let resultado = document.getElementById("resultado2");
            
            if (isNaN(numero) || numero < 1) {
                resultado.style.display = "none";
                return;
            }
            
            let output = "";
            for (let i = numero; i >= 1; i--) {
                output += i + "\n";
            }
            output += "¡Despegue!\n";
            resultado.innerHTML = output;
            resultado.style.display = "block";
        }

        function tablaMultiplicar() {
            let numero = parseInt(document.getElementById("tabla").value);
            let resultado = document.getElementById("resultado3");
            
            if (isNaN(numero)) {
                resultado.style.display = "none";
                return;
            }
            
            let output = "Tabla de " + numero + ":\n";
            for (let i = 1; i <= 12; i++) {
                output += numero + " x " + i + " = " + (numero * i) + "\n";
            }
            resultado.innerHTML = output;
            resultado.style.display = "block";
        }

        function sumarPares() {
            let hasta = parseInt(document.getElementById("parHasta").value);
            let resultado = document.getElementById("resultado4");
            
            if (isNaN(hasta)) {
                resultado.style.display = "none";
                return;
            }
            
            let suma = 0;
            let output = "Números pares sumados:\n";
            for (let i = 2; i <= hasta; i += 2) {
                output += i + " ";
                suma += i;
            }
            output += "\nSuma: " + suma;
            resultado.innerHTML = output;
            resultado.style.display = "block";
        }

        function patronAsteriscos() {
            let filas = parseInt(document.getElementById("filas").value);
            let resultado = document.getElementById("resultado5");
            
            if (isNaN(filas) || filas < 1) {
                resultado.style.display = "none";
                return;
            }
            
            let output = "";
            for (let i = 1; i <= filas; i++) {
                let asteriscos = "";
                for (let j = 1; j <= i; j++) {
                    asteriscos += "* ";
                }
                output += asteriscos + "\n";
            }
            resultado.innerHTML = output;
            resultado.style.display = "block";
        }

        function forConPaso() {
            let inicio = parseInt(document.getElementById("inicio").value);
            let fin = parseInt(document.getElementById("fin").value);
            let paso = parseInt(document.getElementById("paso").value);
            let resultado = document.getElementById("resultado6");
            
            if (isNaN(inicio) || isNaN(fin) || isNaN(paso) || paso === 0) {
                resultado.style.display = "none";
                return;
            }
            
            let output = "Secuencia (" + inicio + " hasta " + fin + " de " + paso + " en " + paso + "):\n";
            for (let i = inicio; i <= fin; i += paso) {
                output += i + "\n";
            }
            resultado.innerHTML = output;
            resultado.style.display = "block";
        }
