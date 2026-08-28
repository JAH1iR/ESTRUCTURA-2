function sumarConRetorno() {
            let a = parseFloat(document.getElementById("a1").value);
            let b = parseFloat(document.getElementById("b1").value);
            let resultado = document.getElementById("resultado1");
            
            if (isNaN(a) || isNaN(b)) {
                resultado.style.display = "none";
                return;
            }
            
            function sumar(x, y) {
                return x + y;
            }
            
            let suma = sumar(a, b);
            resultado.innerHTML = "✓ " + a + " + " + b + " = " + suma;
            resultado.style.display = "block";
        }

        function multiplicarConRetorno() {
            let a = parseFloat(document.getElementById("a2").value);
            let b = parseFloat(document.getElementById("b2").value);
            let resultado = document.getElementById("resultado2");
            
            if (isNaN(a) || isNaN(b)) {
                resultado.style.display = "none";
                return;
            }
            
            function multiplicar(x, y) {
                return x * y;
            }
            
            let producto = multiplicar(a, b);
            resultado.innerHTML = "✓ " + a + " x " + b + " = " + producto;
            resultado.style.display = "block";
        }

        function calcularPromedioNotas() {
            let nota1 = parseFloat(document.getElementById("nota1").value);
            let nota2 = parseFloat(document.getElementById("nota2").value);
            let nota3 = parseFloat(document.getElementById("nota3").value);
            let resultado = document.getElementById("resultado3");
            
            if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
                resultado.style.display = "none";
                return;
            }
            
            function calcularPromedio(a, b, c) {
                return (a + b + c) / 3;
            }
            
            let promedio = calcularPromedio(nota1, nota2, nota3);
            resultado.innerHTML = "✓ Promedio: " + promedio.toFixed(2);
            resultado.style.display = "block";
        }

        function verificarAdulto() {
            let edad = parseInt(document.getElementById("edad4").value);
            let resultado = document.getElementById("resultado4");
            
            if (isNaN(edad)) {
                resultado.style.display = "none";
                return;
            }
            
            function esAdulto(e) {
                return e >= 18;
            }
            
            let esAdultoResult = esAdulto(edad);
            let mensaje = esAdultoResult ? "✓ Eres mayor de edad" : "✗ Eres menor de edad";
            resultado.innerHTML = mensaje;
            resultado.style.display = "block";
        }

        function crearNombreCompleto() {
            let nombre = document.getElementById("nombre5").value;
            let apellido = document.getElementById("apellido5").value;
            let resultado = document.getElementById("resultado5");
            
            if (nombre === "" || apellido === "") {
                resultado.style.display = "none";
                return;
            }
            
            function crearNombre(n, a) {
                return n + " " + a;
            }
            
            let nombreCompleto = crearNombre(nombre, apellido);
            resultado.innerHTML = "✓ Nombre completo: " + nombreCompleto;
            resultado.style.display = "block";
        }
