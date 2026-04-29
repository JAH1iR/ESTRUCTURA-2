// Declaramos datos básicos
let nombre = "Eric bocanegra";        // String: Siempre con comillas
let edad = 22;                       // Number: Sin comillas para poder calcular
let esEstudiante = true;             // Boolean: Solo true o false

// Usando document.writeln para mostrar la información directamente en el documento
document.writeln("<h1>Hola, mi nombre es " + nombre + "</h1>");

// Creamos un mensaje combinando texto y el número de la edad
let mensaje = "Tengo " + edad + " años.";

// Si la variable es verdadera, modificamos el mensaje anterior
if (esEstudiante) {
    mensaje = mensaje + " Además, soy estudiante.";
}

document.writeln("<p>" + mensaje + "</p>");
