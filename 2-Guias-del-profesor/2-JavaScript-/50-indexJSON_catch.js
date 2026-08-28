function ejemplo1() {
            let resultado = document.getElementById("resultado1");
            resultado.className = "resultado";
            resultado.innerHTML = "⏳ Probando...";
            resultado.style.display = "block";
            
            fetch('https://jsonplaceholder.typicode.com/users/99999')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('HTTP Error: ' + response.status);
                    }
                    return response.json();
                })
                .then(data => {
                    resultado.innerHTML = "✓ " + JSON.stringify(data);
                })
                .catch(error => {
                    resultado.className = "resultado error";
                    resultado.innerHTML = "✗ Error capturado:\n" + error.message;
                });
        }

        function ejemplo2() {
            let resultado = document.getElementById("resultado2");
            resultado.className = "resultado";
            resultado.innerHTML = "⏳ Probando conexión...";
            resultado.style.display = "block";
            
            fetch('https://url-inexistente-xyz.com/api')
                .then(response => response.json())
                .then(data => {
                    resultado.innerHTML = "✓ " + JSON.stringify(data);
                })
                .catch(error => {
                    resultado.className = "resultado error";
                    resultado.innerHTML = "✗ Error de red:\n" + error.message;
                });
        }

        function ejemplo3() {
            let resultado = document.getElementById("resultado3");
            resultado.className = "resultado";
            resultado.innerHTML = "⏳ Procesando...";
            resultado.style.display = "block";
            
            setTimeout(() => {
                try {
                    const jsonInvalido = "{esto no es: JSON válido}";
                    JSON.parse(jsonInvalido);
                } catch (error) {
                    resultado.className = "resultado error";
                    resultado.innerHTML = "✗ JSON Inválido:\n" + error.message;
                }
            }, 500);
        }

        function ejemplo4() {
            let resultado = document.getElementById("resultado4");
            resultado.className = "resultado";
            resultado.innerHTML = "⏳ Ejecutando...";
            resultado.style.display = "block";
            
            fetch('https://jsonplaceholder.typicode.com/users/1')
                .then(response => response.json())
                .then(data => {
                    resultado.innerHTML = "✓ Éxito: " + data.name;
                })
                .catch(error => {
                    resultado.className = "resultado error";
                    resultado.innerHTML = "✗ Error: " + error.message;
                })
                .finally(() => {
                    resultado.innerHTML += "\n\n✓ Bloque finally ejecutado (siempre se ejecuta)";
                    resultado.className = "resultado";
                });
        }
