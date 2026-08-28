function ejemplo1() {
            let persona = {
                nombre: "Juan",
                edad: 30,
                ciudad: "Madrid"
            };
            
            let resultado = document.getElementById("resultado1");
            resultado.innerHTML = "Object.keys():\n";
            resultado.innerHTML += JSON.stringify(Object.keys(persona)) + "\n\n";
            resultado.innerHTML += "Object.values():\n";
            resultado.innerHTML += JSON.stringify(Object.values(persona)) + "\n\n";
            resultado.innerHTML += "Object.entries():\n";
            resultado.innerHTML += JSON.stringify(Object.entries(persona));
            resultado.style.display = "block";
        }

        function ejemplo2() {
            let obj1 = { a: 1, b: 2 };
            let obj2 = { c: 3, d: 4 };
            let obj3 = { b: 20, e: 5 };
            
            let fusion = Object.assign({}, obj1, obj2, obj3);
            
            let resultado = document.getElementById("resultado2");
            resultado.innerHTML = "obj1: " + JSON.stringify(obj1) + "\n";
            resultado.innerHTML += "obj2: " + JSON.stringify(obj2) + "\n";
            resultado.innerHTML += "obj3: " + JSON.stringify(obj3) + "\n\n";
            resultado.innerHTML += "Fusión: " + JSON.stringify(fusion);
            resultado.style.display = "block";
        }

        function ejemplo3() {
            let auto = {
                marca: "Toyota",
                modelo: "Corolla",
                año: 2022
            };
            
            let resultado = document.getElementById("resultado3");
            resultado.innerHTML = "auto.hasOwnProperty('marca'): " + auto.hasOwnProperty("marca") + "\n";
            resultado.innerHTML += "auto.hasOwnProperty('modelo'): " + auto.hasOwnProperty("modelo") + "\n";
            resultado.innerHTML += "auto.hasOwnProperty('precio'): " + auto.hasOwnProperty("precio") + "\n";
            resultado.innerHTML += "auto.hasOwnProperty('año'): " + auto.hasOwnProperty("año");
            resultado.style.display = "block";
        }

        function ejemplo4() {
            Array.prototype.suma = function() {
                let suma = 0;
                for (let i = 0; i < this.length; i++) {
                    suma += this[i];
                }
                return suma;
            };
            
            let numeros = [1, 2, 3, 4, 5];
            let resultado = document.getElementById("resultado4");
            resultado.innerHTML = "Array: " + JSON.stringify(numeros) + "\n";
            resultado.innerHTML += "Método personalizado suma(): " + numeros.suma();
            resultado.style.display = "block";
        }

        function ejemplo5() {
            function Persona(nombre) {
                this.nombre = nombre;
            }
            
            let persona = new Persona("Juan");
            let resultado = document.getElementById("resultado5");
            resultado.innerHTML = "persona instanceof Persona: " + (persona instanceof Persona) + "\n";
            resultado.innerHTML += "persona instanceof Object: " + (persona instanceof Object) + "\n";
            resultado.innerHTML += "persona instanceof Array: " + (persona instanceof Array) + "\n\n";
            resultado.innerHTML += "typeof persona: " + typeof persona;
            resultado.style.display = "block";
        }
