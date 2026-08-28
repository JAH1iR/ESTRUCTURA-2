let idReloj2 = null;

        function mostrarHora() {
            let ahora = new Date();
            let horas = ahora.getHours();
            let minutos = ahora.getMinutes();
            let segundos = ahora.getSeconds();
            
            let hora = (horas < 10 ? "0" : "") + horas + ":" +
                      (minutos < 10 ? "0" : "") + minutos + ":" +
                      (segundos < 10 ? "0" : "") + segundos;
            
            document.getElementById("resultado1").innerHTML = "🕐 " + hora;
            document.getElementById("resultado1").style.display = "block";
        }

        function iniciarReloj() {
            let resultado = document.getElementById("resultado2");
            
            idReloj2 = setInterval(function() {
                let ahora = new Date();
                let horas = ahora.getHours();
                let minutos = ahora.getMinutes();
                let segundos = ahora.getSeconds();
                
                resultado.innerHTML = "🕐 " +
                    (horas < 10 ? "0" : "") + horas + ":" +
                    (minutos < 10 ? "0" : "") + minutos + ":" +
                    (segundos < 10 ? "0" : "") + segundos;
                resultado.style.display = "block";
            }, 1000);
        }

        function detenerReloj2() {
            clearInterval(idReloj2);
            document.getElementById("resultado2").innerHTML = "✓ Reloj detenido";
        }

        function alertaConSonido() {
            alert("¡Esto emite un sonido!");
        }

        function crearAudio() {
            let resultado = document.getElementById("resultado4");
            let html = "<audio controls style='width: 100%; margin-top: 10px;'>" +
                      "<source src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' type='audio/mpeg'>" +
                      "Tu navegador no soporta audio HTML5" +
                      "</audio>";
            resultado.innerHTML = html;
            resultado.style.display = "block";
        }

        function infoTiempo() {
            let ahora = new Date();
            let salida = "📅 Información Temporal:<br>";
            salida += "Hora: " + ahora.getHours() + ":" + 
                     (ahora.getMinutes() < 10 ? "0" : "") + ahora.getMinutes() + "<br>";
            salida += "Fecha: " + ahora.toLocaleDateString("es-ES") + "<br>";
            salida += "Milisegundos desde 1970: " + ahora.getTime();
            
            document.getElementById("resultado5").innerHTML = salida;
            document.getElementById("resultado5").style.display = "block";
        }
