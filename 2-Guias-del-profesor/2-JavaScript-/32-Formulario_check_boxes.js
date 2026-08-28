function seleccion(){
            let cantidad=0;
            if(document.getElementById('check1').checked){
                cantidad++;
            }
            if(document.getElementById('check2').checked){
                cantidad++;
            }
            if(document.getElementById('check3').checked){
                cantidad++;
            }
            if(document.getElementById('check4').checked){
                cantidad++;
            }
            if(document.getElementById('check5').checked){
                cantidad++;
            }
            
             if(document.getElementById('check1').checked && cantidad <= 1){
                swal('Conoce: '+cantidad,' '+' Lenguaje');
            }else{
                swal('Conoces: '+cantidad,' '+' Lenguajes');
            }
        }
