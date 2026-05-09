let palabra = 'murcielago';
let vocal = 0;
for (let f in palabra){
    if (palabra[f]== 'a'||palabra[f]== 'e'||palabra[f]== 'i'||palabra[f]== 'o'||palabra[f]== 'u'){
        vocal++;
    };
};
document.writeln('cantidad de vocales: ',vocal);