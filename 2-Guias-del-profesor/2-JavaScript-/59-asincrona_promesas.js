function ejemplo1() {
            let resultado = document.getElementById("resultado1");
            
            let promesa = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("✓ Promesa resuelta después de 2 segundos");
                }, 2000);
            });
            
            resultado.innerHTML = "⏳ Esperando promesa...";
            resultado.style.display = "block";
            
            promesa.then(mensaje => {
                resultado.innerHTML = mensaje;
            });
        }

        function ejemplo2Exito() {
            let resultado = document.getElementById("resultado2");
            
            let promesa = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("✓ Operación exitosa");
                }, 1000);
            });
            
            resultado.innerHTML = "⏳ Procesando...";
            resultado.style.display = "block";
            
            promesa
                .then(mensaje => {
                    resultado.innerHTML = mensaje;
                })
                .catch(error => {
                    resultado.innerHTML = "✗ Error: " + error;
                });
        }

        function ejemplo2Error() {
            let resultado = document.getElementById("resultado2");
            
            let promesa = new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject("✗ Ocurrió un error");
                }, 1000);
            });
            
            resultado.innerHTML = "⏳ Procesando...";
            resultado.style.display = "block";
            
            promesa
                .then(mensaje => {
                    resultado.innerHTML = mensaje;
                })
                .catch(error => {
                    resultado.innerHTML = error;
                });
        }

        function ejemplo3() {
            let resultado = document.getElementById("resultado3");
            resultado.innerHTML = "⏳ Ejecutando cadena de promesas...";
            resultado.style.display = "block";
            
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Paso 1: Conectado a DB");
                }, 1000);
            })
            .then(msg => {
                resultado.innerHTML = "✓ " + msg + "\n";
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve("Paso 2: Datos obtenidos");
                    }, 1000);
                });
            })
            .then(msg => {
                resultado.innerHTML += "✓ " + msg + "\n";
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve("Paso 3: Procesado");
                    }, 1000);
                });
            })
            .then(msg => {
                resultado.innerHTML += "✓ " + msg + "\n✓ ¡Completado!";
            });
        }
