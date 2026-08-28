function ejemplo1() {
            const nombre = document.getElementById("nombre").value || "Usuario";
            const email = document.getElementById("email").value || "usuario@example.com";
            
            const resultado = document.getElementById("resultado1");
            resultado.innerHTML = "⏳ Enviando...";
            resultado.style.display = "block";
            
            fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: nombre,
                    email: email
                })
            })
            .then(response => response.json())
            .then(data => {
                resultado.innerHTML = "✓ Respuesta del servidor:\n";
                resultado.innerHTML += "ID asignado: " + data.id + "\n";
                resultado.innerHTML += "Nombre: " + data.name + "\n";
                resultado.innerHTML += "Email: " + data.email;
            })
            .catch(error => {
                resultado.innerHTML = "✗ Error: " + error.message;
            });
        }

        function ejemplo2() {
            const resultado = document.getElementById("resultado2");
            resultado.innerHTML = "⏳ Enviando comentario...";
            resultado.style.display = "block";
            
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: 'Mi primer post',
                    body: 'Este es mi primer comentario enviado con POST',
                    userId: 1
                })
            })
            .then(response => response.json())
            .then(data => {
                resultado.innerHTML = "✓ Post creado:\n";
                resultado.innerHTML += "ID: " + data.id + "\n";
                resultado.innerHTML += "Título: " + data.title + "\n";
                resultado.innerHTML += "Contenido: " + data.body;
            })
            .catch(error => {
                resultado.innerHTML = "✗ Error: " + error.message;
            });
        }
