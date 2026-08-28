let control = 0;
        let contrasena = 'acceso2026';
        function verificar(){
            let varclave = document.getElementById('clave').value;
            if(varclave !=contrasena || varclave == ""){
                alert('ERROR, clave incorrecta o Vacia, intente nuevamente');
                control++
                if(control >= 3){
                    alert('INTENTOS AGOTADOS, Acceso BLOQUEADO - Contactar a Soporte Técnico');
                }
            }else{
                window.open("http://www.google.com");
            }
        }
