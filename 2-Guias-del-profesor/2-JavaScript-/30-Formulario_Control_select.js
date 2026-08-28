function cambiarcolor(){
            let seleccion = document.getElementById('select1');
            document.getElementById('texto1').value = seleccion.selectedIndex;
            document.getElementById('texto2').value = seleccion.options[seleccion.selectedIndex].text;
            document.getElementById('texto3').value = seleccion.options[seleccion.selectedIndex].value;
        }
