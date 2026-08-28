function recorrerObjeto() {
            let persona = {
                nombre: "Juan",
                edad: 30,
                ciudad: "Madrid",
                profesion: "Ingeniero"
            };
            
            let output = "Propiedades de Persona:\n";
            for (let propiedad in persona) {
                output += propiedad + ": " + persona[propiedad] + "\n";
            }
            
            document.getElementById("resultado1").innerHTML = output;
            document.getElementById("resultado1").style.display = "block";
        }

        function recorrerArreglo() {
            let colores = ["rojo", "azul", "verde", "amarillo", "naranja"];
            
            let output = "Colores con índices:\n";
            for (let indice in colores) {
                output += "Índice " + indice + ": " + colores[indice] + "\n";
            }
            
            document.getElementById("resultado2").innerHTML = output;
            document.getElementById("resultado2").style.display = "block";
        }

        function recorrerAuto() {
            let auto = {
                marca: "Toyota",
                modelo: "Corolla",
                año: 2022,
                color: "gris",
                velocidadMaxima: 180,
                tipo: "Sedán"
            };
            
            let output = "Especificaciones del Auto:\n";
            for (let atributo in auto) {
                output += atributo + ": " + auto[atributo] + "\n";
            }
            
            document.getElementById("resultado3").innerHTML = output;
            document.getElementById("resultado3").style.display = "block";
        }

        function recorrerEstudiantes() {
            let estudiantes = [
                { nombre: "Ana", nota: 85, clase: "10A" },
                { nombre: "Bob", nota: 90, clase: "10A" },
                { nombre: "Carlos", nota: 78, clase: "10B" }
            ];
            
            let output = "Información de Estudiantes:\n";
            for (let i = 0; i < estudiantes.length; i++) {
                output += "\nEstudiante " + (i + 1) + ":\n";
                for (let propiedad in estudiantes[i]) {
                    output += "  " + propiedad + ": " + estudiantes[i][propiedad] + "\n";
                }
            }
            
            document.getElementById("resultado4").innerHTML = output;
            document.getElementById("resultado4").style.display = "block";
        }
