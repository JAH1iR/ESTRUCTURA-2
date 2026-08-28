function fun_focus(){
            document.getElementById('nombre').value = "";
            document.getElementById('nombre').style.background = '';
        }

        function fun_blur(){
            if(document.getElementById('nombre').value ==''){
                 document.getElementById('nombre').style.background = 'yellow';
                alert('DEBE INGRESAR DATOS');
            }

        }
