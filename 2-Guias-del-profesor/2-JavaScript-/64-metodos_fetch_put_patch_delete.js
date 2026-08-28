function ejemplo1() {
            const resultado = document.getElementById("resultado1");
            resultado.innerHTML = "⏳ Actualizando con PUT...";
            resultado.style.display = "block";
            
            fetch('https://jsonplaceholder.typicode.com/users/1', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: 1,
                    name: 'Nuevo Nombre',
                    email: 'nuevo@example.com',
                    phone: '123-456-7890'
                })
            })
            .then(response => response.json())
            .then(data => {
                resultado.innerHTML = "✓ Actualizado:\n" + JSON.stringify(data, null, 2);
            })
            .catch(error => {
                resultado.innerHTML = "✗ Error: " + error.message;
            });
        }

        function ejemplo2() {
            const resultado = document.getElementById("resultado2");
            resultado.innerHTML = "⏳ Actualizando con PATCH...";
            resultado.style.display = "block";
            
            fetch('https://jsonplaceholder.typicode.com/users/1', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: 'parchado@example.com'
                })
            })
            .then(response => response.json())
            .then(data => {
                resultado.innerHTML = "✓ Parcialmente actualizado:\n" + JSON.stringify(data, null, 2);
            })
            .catch(error => {
                resultado.innerHTML = "✗ Error: " + error.message;
            });
        }

        function ejemplo3() {
            const resultado = document.getElementById("resultado3");
            resultado.innerHTML = "⏳ Eliminando...";
            resultado.style.display = "block";
            
            fetch('https://jsonplaceholder.typicode.com/users/1', {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data => {
                resultado.innerHTML = "✓ Eliminado\n" + JSON.stringify(data);
            })
            .catch(error => {
                resultado.innerHTML = "✗ Error: " + error.message;
            });
        }
