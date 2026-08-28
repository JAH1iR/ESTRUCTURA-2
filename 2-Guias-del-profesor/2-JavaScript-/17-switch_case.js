function obtenerDia() {
            let dia = parseInt(document.getElementById("dia").value);
            let resultado = document.getElementById("resultado1");
            let nombre;
            
            if (isNaN(dia) || dia < 1 || dia > 7) {
                resultado.style.display = "none";
                return;
            }
            
            switch (dia) {
                case 1:
                    nombre = "Lunes";
                    break;
                case 2:
                    nombre = "Martes";
                    break;
                case 3:
                    nombre = "Miércoles";
                    break;
                case 4:
                    nombre = "Jueves";
                    break;
                case 5:
                    nombre = "Viernes";
                    break;
                case 6:
                    nombre = "Sábado";
                    break;
                case 7:
                    nombre = "Domingo";
                    break;
                default:
                    nombre = "Día inválido";
            }
            resultado.innerHTML = "✓ Día " + dia + ": " + nombre;
            resultado.style.display = "block";
        }

        function clasificarPelicula() {
            let calificacion = document.getElementById("pelicula").value;
            let resultado = document.getElementById("resultado2");
            let clasificacion;
            
            switch (calificacion) {
                case 'G':
                    clasificacion = "✓ Apta para todos los públicos";
                    break;
                case 'PG':
                    clasificacion = "✓ Se recomienda supervisión parental";
                    break;
                case 'PG-13':
                    clasificacion = "✓ Puede no ser apta para menores de 13";
                    break;
                case 'R':
                    clasificacion = "✓ Requiere acompañante mayor de edad";
                    break;
                default:
                    clasificacion = "✗ Calificación desconocida";
            }
            resultado.innerHTML = clasificacion;
            resultado.style.display = "block";
        }

        function calcular() {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);
            let operador = document.getElementById("operador").value;
            let resultado = document.getElementById("resultado3");
            let res;
            
            if (isNaN(num1) || isNaN(num2)) {
                resultado.style.display = "none";
                return;
            }
            
            switch (operador) {
                case '+':
                    res = num1 + num2;
                    break;
                case '-':
                    res = num1 - num2;
                    break;
                case '*':
                    res = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        resultado.innerHTML = "✗ Error: No se puede dividir entre cero";
                        resultado.style.display = "block";
                        return;
                    }
                    res = num1 / num2;
                    break;
                default:
                    res = "Operador no válido";
            }
            resultado.innerHTML = "✓ " + num1 + " " + operador + " " + num2 + " = " + res;
            resultado.style.display = "block";
        }

        function obtenerEstacion() {
            let mes = parseInt(document.getElementById("mes").value);
            let resultado = document.getElementById("resultado4");
            let estacion;
            
            if (isNaN(mes) || mes < 1 || mes > 12) {
                resultado.style.display = "none";
                return;
            }
            
            switch (mes) {
                case 12:
                case 1:
                case 2:
                    estacion = "Invierno";
                    break;
                case 3:
                case 4:
                case 5:
                    estacion = "Primavera";
                    break;
                case 6:
                case 7:
                case 8:
                    estacion = "Verano";
                    break;
                case 9:
                case 10:
                case 11:
                    estacion = "Otoño";
                    break;
            }
            resultado.innerHTML = "✓ Mes " + mes + ": " + estacion;
            resultado.style.display = "block";
        }
