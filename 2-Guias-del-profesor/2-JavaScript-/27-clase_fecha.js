function ejemplo1() {
            let fecha = new Date();
            let resultado = document.getElementById("resultado1");
            resultado.innerHTML = "✓ Fecha actual: " + fecha.toLocaleString("es-ES");
            resultado.style.display = "block";
        }

        function ejemplo2() {
            let fecha = new Date();
            let resultado = document.getElementById("resultado2");
            
            let output = "Año: " + fecha.getFullYear() + "<br>";
            output += "Mes: " + (fecha.getMonth() + 1) + " (1=enero, 12=diciembre)<br>";
            output += "Día: " + fecha.getDate() + "<br>";
            output += "Día de semana: " + fecha.getDay() + " (0=domingo, 6=sábado)<br>";
            output += "Hora: " + fecha.getHours() + "<br>";
            output += "Minutos: " + fecha.getMinutes() + "<br>";
            output += "Segundos: " + fecha.getSeconds();
            
            resultado.innerHTML = "✓ " + output;
            resultado.style.display = "block";
        }

        function ejemplo3() {
            let fechaNacimiento = new Date(1995, 5, 15);
            let hoy = new Date();
            
            let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
            let resultado = document.getElementById("resultado3");
            
            resultado.innerHTML = "✓ Fecha de nacimiento: 15/06/1995<br>";
            resultado.innerHTML += "Hoy: " + hoy.toLocaleDateString("es-ES") + "<br>";
            resultado.innerHTML += "Edad: " + edad + " años";
            resultado.style.display = "block";
        }

        function ejemplo4() {
            let fecha1 = new Date(2024, 0, 1);
            let fecha2 = new Date(2024, 0, 15);
            
            let diferencia = fecha2 - fecha1;
            let días = diferencia / (1000 * 60 * 60 * 24);
            
            let resultado = document.getElementById("resultado4");
            resultado.innerHTML = "✓ Fecha 1: " + fecha1.toLocaleDateString("es-ES") + "<br>";
            resultado.innerHTML += "Fecha 2: " + fecha2.toLocaleDateString("es-ES") + "<br>";
            resultado.innerHTML += "Diferencia: " + días + " días";
            resultado.style.display = "block";
        }

        function ejemplo5() {
            let fecha = new Date();
            let resultado = document.getElementById("resultado5");
            
            let output = "Formato completo: " + fecha.toLocaleString("es-ES") + "<br>";
            output += "Solo fecha: " + fecha.toLocaleDateString("es-ES") + "<br>";
            output += "Solo hora: " + fecha.toLocaleTimeString("es-ES");
            
            resultado.innerHTML = "✓ " + output;
            resultado.style.display = "block";
        }
