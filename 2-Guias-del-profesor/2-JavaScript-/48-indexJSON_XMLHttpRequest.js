let mipersona = {
"nombre":"Pedro Pablo Sánchez",
"edad":25,
"estudiante": "false",
"dirección":{
"calle":"Santiago Barraza, 278-14",
"ciudad": "La Chorrera, Panamá oeste"
},
"telefonos":[
"507-346-0159",
"507-253-3201"
]
};
let elementotexto = document.getElementById('nombre');
elementotexto.textContent = mipersona.nombre;

let datosjson;
// el objeto XMLHttpRequest sirve para solicitar a un objeto jason que no de su
información
let xhr = new XMLHttpRequest();
xhr.open('GET','persona.json',true);
xhr.responseType = 'json';
xhr.onload = function(){
if(xhr.status === 200){
datosjson = xhr.response;
let elementotexto = document.getElementById("nombre");
elementotexto.textContent = datosjson.nombre;
}else{
// manejar el error
}
}
xhr.send();
