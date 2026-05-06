/*Crea variables para: nombre, facultad, anualidad (un número) y estaInscrito (booleano).

Usa Template Literals (las comillas invertidas `) para mostrar un mensaje en consola que diga:

"Estudiante: [nombre], de la facultad [facultad]. Año: [anualidad]. ¿Inscrito?: [estaInscrito]".*/
let Datos = {
 nombre : "floky",
 facultad : "industrial",
 semestre : 2026,
 estaInscrito: true
}
document.writeln(`El estudiante ${Datos.nombre}, de la facultad ${Datos.facultad}. Año: ${Datos.semestre}. ¿Inscrito?: ${Datos.estaInscrito ? 'Sí, esta inscrito' : 'No, por favor matricularse lo antes posible'}`);
document.writeln('<br>');