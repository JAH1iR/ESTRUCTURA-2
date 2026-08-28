function ejemplo1() {
            let resultado = document.getElementById("resultado1");
            resultado.innerHTML = "⏳ Procesando...";
            resultado.style.display = "block";
            
            async function demo() {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve("✓ Operación completada");
                    }, 2000);
                });
            }
            
            async function ejecutar() {
                try {
                    const respuesta = await demo();
                    resultado.innerHTML = respuesta;
                } catch (error) {
                    resultado.innerHTML = "✗ Error: " + error;
                }
            }
            
            ejecutar();
        }

        function ejemplo2() {
            let resultado = document.getElementById("resultado2");
            resultado.innerHTML = "⏳ Obteniendo usuario...";
            resultado.style.display = "block";
            
            async function obtenerUsuario() {
                try {
                    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
                    const user = await response.json();
                    
                    resultado.innerHTML = "✓ Usuario obtenido:\n";
                    resultado.innerHTML += "Nombre: " + user.name + "\n";
                    resultado.innerHTML += "Email: " + user.email + "\n";
                    resultado.innerHTML += "Teléfono: " + user.phone;
                } catch (error) {
                    resultado.innerHTML = "✗ Error: " + error.message;
                }
            }
            
            obtenerUsuario();
        }

        function ejemplo3() {
            let resultado = document.getElementById("resultado3");
            resultado.innerHTML = "⏳ Procesando...";
            resultado.style.display = "block";
            
            async function conError() {
                try {
                    // Esto causará un error
                    const response = await fetch('https://url-invalida-xyz.com');
                    const data = await response.json();
                } catch (error) {
                    resultado.innerHTML = "✓ Error capturado con try/catch:\n";
                    resultado.innerHTML += error.message;
                }
            }
            
            conError();
        }
