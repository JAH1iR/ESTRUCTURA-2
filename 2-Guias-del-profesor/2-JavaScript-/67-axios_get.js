function ejemplo1() {
            const resultado = document.getElementById("resultado1");
            resultado.innerHTML = "⏳ Obteniendo usuario con Axios...";
            resultado.style.display = "block";
            
            if (typeof axios === 'undefined') {
                resultado.innerHTML = "ℹ️ Axios no está disponible. Para usar, incluye en HTML:<br>&lt;script src='https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'&gt;&lt;/script&gt;";
                resultado.className = "resultado";
                return;
            }
            
            axios.get('https://jsonplaceholder.typicode.com/users/1')
                .then(response => {
                    const user = response.data;
                    resultado.innerHTML = "✓ Usuario obtenido:\n";
                    resultado.innerHTML += "Nombre: " + user.name + "\n";
                    resultado.innerHTML += "Email: " + user.email + "\n";
                    resultado.innerHTML += "Teléfono: " + user.phone;
                })
                .catch(error => {
                    resultado.innerHTML = "✗ Error: " + error.message;
                });
        }
