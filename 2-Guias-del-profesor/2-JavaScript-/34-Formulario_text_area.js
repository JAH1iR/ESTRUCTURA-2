let area = document.getElementById('comentarios');
        area.style.resize = "none";

        function comentar() {
            if(document.getElementById('comentarios').value.length >100){
                swal('el comentario es muy largos.')
            }else{
                swal('muchas gracias!!')
            }
            
        }
