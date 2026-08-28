function abrir(){
            let ventana = open();
            ventana.document.writeln('Soy otra pestaña en la página Web');
        }

        function ventana(){
            let ventana = open('', '',' width=400, height=250');
            ventana.document.writeln('Soy otra ventana de página Web')
        }

        function confirmar(){
            let respuesta = confirm('Desea Salir de la Página Web ?');
            if (respuesta == true){
                window.close();
            }
        }
