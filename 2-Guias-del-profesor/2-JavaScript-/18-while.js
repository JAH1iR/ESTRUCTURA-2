let contador = 0;
        let precios = [];

        function contarHasta() {
            let hasta = parseInt(document.getElementById("hasta1").value);
            let resultado = document.getElementById("resultado1");
            
            if (isNaN(hasta) || hasta < 1) {
                resultado.style.display = "none";
                return;
            }
            
            let output = "";
            let i = 1;
            while (i <= hasta) {
                output += i + "\n";
                i++;
            }
            resultado.innerHTML = "Contando hasta " + hasta + ":\n" + output;
            resultado.style.display = "block";
        }

        function restarHastaCero() {
            let desde = parseInt(document.getElementById("desde").value);
            let resultado = document.getElementById("resultado2");
            
            if (isNaN(desde) || desde < 1) {
                resultado.style.display = "none";
                return;
            }
            
            let output = "";
            while (desde > 0) {
                output += desde + "\n";
                desde--;
            }
            output += "¡Despegue!\n";
            resultado.innerHTML = output;
            resultado.style.display = "block";
        }

        function sumarNumeros() {
            let hasta = parseInt(document.getElementById("sumarHasta").value);
            let resultado = document.getElementById("resultado3");
            
            if (isNaN(hasta) || hasta < 1) {
                resultado.style.display = "none";
                return;
            }
            
            let suma = 0;
            let i = 1;
            while (i <= hasta) {
                suma += i;
                i++;
            }
            resultado.innerHTML = "Suma de 1 hasta " + hasta + ": " + suma;
            resultado.style.display = "block";
        }

        function tablaMultiplicar() {
            let numero = parseInt(document.getElementById("tablaNum").value);
            let resultado = document.getElementById("resultado4");
            
            if (isNaN(numero)) {
                resultado.style.display = "none";
                return;
            }
            
            let output = "Tabla de " + numero + ":\n";
            let multiplicador = 1;
            while (multiplicador <= 12) {
                output += numero + " x " + multiplicador + " = " + (numero * multiplicador) + "\n";
                multiplicador++;
            }
            resultado.innerHTML = output;
            resultado.style.display = "block";
        }

        function agregarPrecio() {
            contador++;
            let inputDiv = document.getElementById("preciosInput");
            let nuevoInput = '<input type="number" id="precio' + contador + '" placeholder="Precio" step="0.01">';
            inputDiv.innerHTML += nuevoInput + '<br>';
        }

        function terminarCarrito() {
            let resultado = document.getElementById("resultado5");
            let total = 0;
            let output = "Precios ingresados:\n";
            
            for (let j = 1; j <= contador; j++) {
                let valor = document.getElementById("precio" + j);
                if (valor && valor.value) {
                    let precio = parseFloat(valor.value);
                    output += "Producto " + j + ": $" + precio + "\n";
                    total += precio;
                }
            }
            output += "\nTotal carrito: $" + total.toFixed(2);
            resultado.innerHTML = output;
            resultado.style.display = "block";
        }
