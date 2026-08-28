function ejemplo1() {
            function Persona(nombre, edad) {
                this.nombre = nombre;
                this.edad = edad;
            }

            Persona.prototype.presentarse = function() {
                return "Hola, soy " + this.nombre + " y tengo " + this.edad + " años";
            };

            let persona1 = new Persona("Juan", 30);
            let persona2 = new Persona("María", 25);
            
            let resultado = document.getElementById("resultado1");
            resultado.innerHTML = "✓ " + persona1.presentarse() + "<br>";
            resultado.innerHTML += "✓ " + persona2.presentarse();
            resultado.style.display = "block";
        }

        function ejemplo2() {
            function Animal(nombre) {
                this.nombre = nombre;
            }

            Animal.prototype.hablar = function() {
                return this.nombre + " hace un sonido";
            };

            function Perro(nombre, raza) {
                Animal.call(this, nombre);
                this.raza = raza;
            }

            Perro.prototype = Object.create(Animal.prototype);
            Perro.prototype.constructor = Perro;

            Perro.prototype.hablar = function() {
                return this.nombre + " ladra 🐕";
            };

            let perro = new Perro("Rex", "Labrador");
            let resultado = document.getElementById("resultado2");
            resultado.innerHTML = "✓ Nombre: " + perro.nombre + "<br>";
            resultado.innerHTML += "✓ Raza: " + perro.raza + "<br>";
            resultado.innerHTML += "✓ " + perro.hablar();
            resultado.style.display = "block";
        }

        function ejemplo3() {
            function Vehículo(marca) {
                this.marca = marca;
            }

            Vehículo.prototype.info = function() {
                return "Marca: " + this.marca;
            };

            function Auto(marca, modelo) {
                Vehículo.call(this, marca);
                this.modelo = modelo;
            }

            Auto.prototype = Object.create(Vehículo.prototype);
            Auto.prototype.detalles = function() {
                return this.info() + " - Modelo: " + this.modelo;
            };

            let auto = new Auto("Toyota", "Corolla");
            let resultado = document.getElementById("resultado3");
            resultado.innerHTML = "✓ Cadena de prototipos:<br>";
            resultado.innerHTML += "Auto -> Vehículo -> Object<br>";
            resultado.innerHTML += "✓ " + auto.detalles();
            resultado.style.display = "block";
        }
