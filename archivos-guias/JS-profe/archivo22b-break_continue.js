// uso del break y continue
let palabra = 'JavaScript';
let resultado = '';
for (let f  in palabra) {
    if (palabra[f]== 'a'){
        continue;
    }else{
        resultado += palabra[f];
    };  
    };
    document.writeln(resultado);