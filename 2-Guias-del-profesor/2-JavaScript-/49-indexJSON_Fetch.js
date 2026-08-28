function obtenerUsuarios() {
            let resultado = document.getElementById("resultado1");
            resultado.innerHTML = "⏳ Cargando usuarios...";
            resultado.style.display = "block";
            
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => {
                    let output = "Usuarios obtenidos:\n\n";
                    data.slice(0, 3).forEach(user => {
                        output += user.id + ". " + user.name + " (" + user.email + ")\n";
                    });
                    resultado.innerHTML = "✓ " + output;
                })
                .catch(error => {
                    resultado.innerHTML = "✗ Error: " + error.message;
                });
        }

        function obtenerUsuario() {
            let resultado = document.getElementById("resultado2");
            resultado.innerHTML = "⏳ Cargando usuario...";
            resultado.style.display = "block";
            
            fetch('https://jsonplaceholder.typicode.com/users/1')
                .then(response => response.json())
                .then(user => {
                    let output = "Usuario:\n";
                    output += "Nombre: " + user.name + "\n";
                    output += "Email: " + user.email + "\n";
                    output += "Teléfono: " + user.phone + "\n";
                    output += "Sitio: " + user.website;
                    resultado.innerHTML = "✓ " + output;
                })
                .catch(error => {
                    resultado.innerHTML = "✗ Error: " + error.message;
                });
        }

        function obtenerConError() {
            let resultado = document.getElementById("resultado3");
            resultado.innerHTML = "⏳ Probando...";
            resultado.style.display = "block";
            
            fetch('https://url-invalida.com/datos')
                .then(response => response.json())
                .then(data => {
                    resultado.innerHTML = "✓ Datos: " + JSON.stringify(data);
                })
                .catch(error => {
                    resultado.innerHTML = "✗ Error capturado: " + error.message;
                });
        }
