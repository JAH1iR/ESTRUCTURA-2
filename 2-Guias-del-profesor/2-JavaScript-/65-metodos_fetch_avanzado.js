function ejemplo1() {
            const resultado = document.getElementById("resultado1");
            resultado.innerHTML = "⏳ Enviando con headers...";
            resultado.style.display = "block";
            
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Custom-Header': 'Mi Header'
                },
                body: JSON.stringify({
                    title: 'Post con headers',
                    body: 'Esto incluye headers personalizados'
                })
            })
            .then(r => r.json())
            .then(data => {
                resultado.innerHTML = "✓ Respuesta:\n" + JSON.stringify(data, null, 2);
            })
            .catch(e => {
                resultado.innerHTML = "✗ Error: " + e.message;
            });
        }

        function ejemplo2() {
            const resultado = document.getElementById("resultado2");
            resultado.innerHTML = "⏳ Obteniendo 3 usuarios en paralelo...";
            resultado.style.display = "block";
            
            Promise.all([
                fetch('https://jsonplaceholder.typicode.com/users/1').then(r => r.json()),
                fetch('https://jsonplaceholder.typicode.com/users/2').then(r => r.json()),
                fetch('https://jsonplaceholder.typicode.com/users/3').then(r => r.json())
            ])
            .then(usuarios => {
                resultado.innerHTML = "✓ Usuarios obtenidos:\n";
                usuarios.forEach(u => {
                    resultado.innerHTML += u.id + ". " + u.name + "\n";
                });
            })
            .catch(e => {
                resultado.innerHTML = "✗ Error: " + e.message;
            });
        }

        function ejemplo3() {
            const resultado = document.getElementById("resultado3");
            resultado.innerHTML = "⏳ Solicitando... (se cancelará en 2s)";
            resultado.style.display = "block";
            
            const controller = new AbortController();
            const signal = controller.signal;
            
            setTimeout(() => {
                controller.abort();
                resultado.innerHTML = "✓ Petición cancelada con AbortController";
            }, 2000);
            
            fetch('https://jsonplaceholder.typicode.com/users/1', { signal })
                .then(r => r.json())
                .then(data => {
                    resultado.innerHTML = "✓ Completado: " + data.name;
                })
                .catch(e => {
                    if (e.name === 'AbortError') {
                        resultado.innerHTML = "✓ Petición abortada correctamente";
                    } else {
                        resultado.innerHTML = "✗ Error: " + e.message;
                    }
                });
        }

        function ejemplo4() {
            const resultado = document.getElementById("resultado4");
            resultado.innerHTML = "⏳ Usando async/await...";
            resultado.style.display = "block";
            
            async function obtenerDatos() {
                try {
                    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
                    const data = await response.json();
                    resultado.innerHTML = "✓ Usuario obtenido:\n";
                    resultado.innerHTML += "Nombre: " + data.name + "\n";
                    resultado.innerHTML += "Email: " + data.email + "\n";
                    resultado.innerHTML += "Teléfono: " + data.phone;
                } catch (error) {
                    resultado.innerHTML = "✗ Error: " + error.message;
                }
            }
            
            obtenerDatos();
        }
