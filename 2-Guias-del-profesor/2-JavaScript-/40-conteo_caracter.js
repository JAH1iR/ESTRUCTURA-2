function contar() {
            let texto = document.getElementById("texto").value;
            let caracteres = texto.length;
            let palabras = texto.trim() === "" ? 0 : texto.trim().split(/\s+/).length;
            let lineas = texto === "" ? 0 : texto.split("\n").length;
            
            document.getElementById("resultado").innerHTML = 
                "<strong>Caracteres:</strong> " + caracteres + " | " +
                "<strong>Palabras:</strong> " + palabras + " | " +
                "<strong>Líneas:</strong> " + lineas;
        }

        function limitarCaracteres(max) {
            let textarea = document.getElementById("texto2");
            let caracteres = textarea.value.length;
            
            if (caracteres > max) {
                textarea.value = textarea.value.substring(0, max);
                caracteres = max;
            }
            
            document.getElementById("resultado2").innerHTML = 
                "<strong>Caracteres:</strong> " + caracteres + " / " + max;
        }

        function validarContraseña() {
            let contraseña = document.getElementById("contraseña").value;
            let resultado = document.getElementById("resultado3");
            
            let output = "Validación:<br>";
            output += (contraseña.length >= 8 ? "✓" : "✗") + " Mínimo 8 caracteres<br>";
            output += (/\d/.test(contraseña) ? "✓" : "✗") + " Contiene números<br>";
            output += (/[A-Z]/.test(contraseña) ? "✓" : "✗") + " Contiene mayúsculas<br>";
            output += (/[a-z]/.test(contraseña) ? "✓" : "✗") + " Contiene minúsculas";
            
            resultado.innerHTML = output;
            resultado.style.display = "block";
        }
