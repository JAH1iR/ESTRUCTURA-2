let idInterval = null;
        let idReloj = null;

        function ejemplo1() {
            let resultado = document.getElementById("resultado1");
            resultado.innerHTML = "⏳ Esperando 3 segundos...";
            resultado.style.display = "block";
            
            setTimeout(function() {
                resultado.innerHTML = "✓ ¡Pasaron 3 segundos!";
            }, 3000);
        }

        function ejemplo2() {
            let contador = 0;
            let resultado = document.getElementById("resultado2");
            
            idInterval = setInterval(function() {
                contador++;
                resultado.innerHTML = "Contador: " + contador;
                resultado.style.display = "block";
            }, 1000);
        }

        function detenerContador() {
            clearInterval(idInterval);
            document.getElementById("resultado2").innerHTML = "✓ Contador detenido";
        }

        function cuentaRegresiva() {
            let tiempo = 3;
            let resultado = document.getElementById("resultado3");
            
            resultado.innerHTML = tiempo;
            resultado.style.display = "block";
            
            let id = setInterval(function() {
                tiempo--;
                if (tiempo >= 0) {
                    resultado.innerHTML = tiempo;
                } else {
                    resultado.innerHTML = "¡Tiempo! 🎉";
                    clearInterval(id);
                }
            }, 1000);
        }

        function mostrarReloj() {
            let resultado = document.getElementById("resultado4");
            
            idReloj = setInterval(function() {
                let ahora = new Date();
                let horas = ahora.getHours();
                let minutos = ahora.getMinutes();
                let segundos = ahora.getSeconds();
                
                resultado.innerHTML = 
                    (horas < 10 ? "0" : "") + horas + ":" +
                    (minutos < 10 ? "0" : "") + minutos + ":" +
                    (segundos < 10 ? "0" : "") + segundos;
                resultado.style.display = "block";
            }, 1000);
        }

        function detenerReloj() {
            clearInterval(idReloj);
            document.getElementById("resultado4").innerHTML = "✓ Reloj detenido";
        }
