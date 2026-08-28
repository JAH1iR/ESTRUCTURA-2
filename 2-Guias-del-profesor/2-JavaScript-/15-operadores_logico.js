function verificarVIP() {
            let edad = parseInt(document.getElementById("edad1").value);
            let tieneEntrada = document.getElementById("entrada1").value === "true";
            let resultado = document.getElementById("resultado1");
            
            if (isNaN(edad)) {
                resultado.style.display = "none";
                return;
            }
            
            if (edad >= 18 && tieneEntrada) {
                resultado.innerHTML = "✓ Bienvenido a la zona VIP";
            } else {
                resultado.innerHTML = "✗ No puedes acceder";
            }
            resultado.style.display = "block";
        }

        function verificarSeguridad() {
            let contraseña = document.getElementById("contraseña").value;
            let resultado = document.getElementById("resultado2");
            
            if (contraseña === "") {
                resultado.style.display = "none";
                return;
            }
            
            if (contraseña.length >= 8 && /\d/.test(contraseña)) {
                resultado.innerHTML = "✓ Contraseña segura";
            } else {
                let razon = [];
                if (contraseña.length < 8) razon.push("Menos de 8 caracteres");
                if (!/\d/.test(contraseña)) razon.push("No contiene números");
                resultado.innerHTML = "✗ Contraseña no segura: " + razon.join(", ");
            }
            resultado.style.display = "block";
        }

        function verificarRango() {
            let numero = parseInt(document.getElementById("numero").value);
            let resultado = document.getElementById("resultado3");
            
            if (isNaN(numero)) {
                resultado.style.display = "none";
                return;
            }
            
            if (numero >= 10 && numero <= 100) {
                resultado.innerHTML = "✓ El número " + numero + " está en el rango [10-100]";
            } else {
                resultado.innerHTML = "✗ El número " + numero + " está fuera del rango [10-100]";
            }
            resultado.style.display = "block";
        }

        function aplicarDescuento() {
            let compras = parseInt(document.getElementById("compras").value);
            let gasto = parseInt(document.getElementById("gasto").value);
            let resultado = document.getElementById("resultado4");
            
            if (isNaN(compras) || isNaN(gasto)) {
                resultado.style.display = "none";
                return;
            }
            
            if (compras > 5 && gasto > 100) {
                resultado.innerHTML = "✓ ¡Tienes 20% de descuento! Ahorro: $" + (gasto * 0.2).toFixed(2);
            } else {
                resultado.innerHTML = "✗ No aplica descuento (Necesitas más de 5 compras Y gasto mayor a $100)";
            }
            resultado.style.display = "block";
        }
