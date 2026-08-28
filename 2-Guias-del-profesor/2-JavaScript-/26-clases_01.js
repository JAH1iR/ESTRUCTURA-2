class Persona {
            constructor(nombre, edad) {
                this.nombre = nombre;
                this.edad = edad;
            }
            
            presentarse() {
                return "Hola, me llamo " + this.nombre + " y tengo " + this.edad + " años";
            }
        }

        class Auto {
            constructor(marca, modelo, velocidad = 0) {
                this.marca = marca;
                this.modelo = modelo;
                this.velocidad = velocidad;
            }
            
            acelerar() {
                this.velocidad += 10;
            }
            
            frenar() {
                this.velocidad -= 10;
            }
            
            mostrarInfo() {
                return this.marca + " " + this.modelo + " - Velocidad: " + this.velocidad + " km/h";
            }
        }

        class CuentaBancaria {
            constructor(titular, saldoInicial = 0) {
                this.titular = titular;
                this.saldo = saldoInicial;
            }
            
            depositar(cantidad) {
                this.saldo += cantidad;
                return "Deposito de $" + cantidad + ". Nuevo saldo: $" + this.saldo;
            }
            
            retirar(cantidad) {
                if (cantidad <= this.saldo) {
                    this.saldo -= cantidad;
                    return "Retiro de $" + cantidad + ". Nuevo saldo: $" + this.saldo;
                }
                return "Saldo insuficiente";
            }
        }

        class Estudiante {
            constructor(nombre, carrera, semestre) {
                this.nombre = nombre;
                this.carrera = carrera;
                this.semestre = semestre;
                this.calificaciones = [];
            }
            
            agregarCalificacion(cal) {
                this.calificaciones.push(cal);
            }
            
            calcularPromedio() {
                if (this.calificaciones.length === 0) return 0;
                let suma = 0;
                for (let i = 0; i < this.calificaciones.length; i++) {
                    suma += this.calificaciones[i];
                }
                return suma / this.calificaciones.length;
            }
        }

        function ejemplo1() {
            let p1 = new Persona("Juan", 30);
            let p2 = new Persona("María", 25);
            
            let resultado = document.getElementById("resultado1");
            resultado.innerHTML = "✓ " + p1.presentarse() + "<br>";
            resultado.innerHTML += "✓ " + p2.presentarse();
            resultado.style.display = "block";
        }

        function ejemplo2() {
            let miAuto = new Auto("Toyota", "Corolla");
            let resultado = document.getElementById("resultado2");
            
            resultado.innerHTML = "✓ Auto creado: " + miAuto.mostrarInfo() + "<br>";
            miAuto.acelerar();
            resultado.innerHTML += "Acelerando: " + miAuto.mostrarInfo() + "<br>";
            miAuto.acelerar();
            resultado.innerHTML += "Acelerando: " + miAuto.mostrarInfo() + "<br>";
            miAuto.frenar();
            resultado.innerHTML += "Frenando: " + miAuto.mostrarInfo();
            resultado.style.display = "block";
        }

        function ejemplo3() {
            let cuenta = new CuentaBancaria("Pedro", 1000);
            let resultado = document.getElementById("resultado3");
            
            resultado.innerHTML = "✓ Cuenta de: " + cuenta.titular + "<br>";
            resultado.innerHTML += cuenta.depositar(500) + "<br>";
            resultado.innerHTML += cuenta.retirar(200) + "<br>";
            resultado.innerHTML += cuenta.retirar(2000);
            resultado.style.display = "block";
        }

        function ejemplo4() {
            let est = new Estudiante("Ana", "Ingeniería", 3);
            est.agregarCalificacion(85);
            est.agregarCalificacion(90);
            est.agregarCalificacion(88);
            
            let resultado = document.getElementById("resultado4");
            resultado.innerHTML = "✓ Estudiante: " + est.nombre + "<br>";
            resultado.innerHTML += "Carrera: " + est.carrera + "<br>";
            resultado.innerHTML += "Semestre: " + est.semestre + "<br>";
            resultado.innerHTML += "Calificaciones: " + est.calificaciones.join(", ") + "<br>";
            resultado.innerHTML += "Promedio: " + est.calcularPromedio().toFixed(2);
            resultado.style.display = "block";
        }
