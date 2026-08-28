function ejemplo1() {
            let persona = {
                nombre: "Juan",
                edad: 30,
                ciudad: "Madrid",
                
                presentarse: function() {
                    return "Me llamo " + this.nombre + " y tengo " + this.edad + " años. Vivo en " + this.ciudad;
                }
            };
            
            let resultado = document.getElementById("resultado1");
            resultado.innerHTML = "✓ " + persona.presentarse();
            resultado.style.display = "block";
        }

        function ejemplo2() {
            let auto = {
                marca: "Toyota",
                modelo: "Corolla",
                velocidad: 0,
                
                acelerar: function() {
                    this.velocidad += 10;
                },
                
                frenar: function() {
                    this.velocidad -= 10;
                },
                
                mostrarVelocidad: function() {
                    return "Velocidad: " + this.velocidad + " km/h";
                }
            };
            
            let resultado = document.getElementById("resultado2");
            let output = "Auto: " + auto.marca + " " + auto.modelo + "<br>";
            
            auto.acelerar();
            output += "Acelerando... " + auto.mostrarVelocidad() + "<br>";
            
            auto.acelerar();
            output += "Acelerando... " + auto.mostrarVelocidad() + "<br>";
            
            auto.frenar();
            output += "Frenando... " + auto.mostrarVelocidad() + "<br>";
            
            resultado.innerHTML = "✓ " + output;
            resultado.style.display = "block";
        }

        function ejemplo3() {
            let cuenta = {
                titular: "Pedro",
                saldo: 1000,
                
                depositar: function(cantidad) {
                    this.saldo += cantidad;
                    return "Deposito de $" + cantidad + ". Nuevo saldo: $" + this.saldo;
                },
                
                retirar: function(cantidad) {
                    if (cantidad <= this.saldo) {
                        this.saldo -= cantidad;
                        return "Retiro de $" + cantidad + ". Nuevo saldo: $" + this.saldo;
                    } else {
                        return "Saldo insuficiente";
                    }
                },
                
                mostrarSaldo: function() {
                    return "Saldo de " + this.titular + ": $" + this.saldo;
                }
            };
            
            let resultado = document.getElementById("resultado3");
            let output = cuenta.mostrarSaldo() + "<br>";
            output += cuenta.depositar(500) + "<br>";
            output += cuenta.retirar(200) + "<br>";
            output += cuenta.mostrarSaldo();
            
            resultado.innerHTML = "✓ " + output;
            resultado.style.display = "block";
        }

        function ejemplo4() {
            let libro = {
                titulo: "JavaScript Avanzado",
                autor: "Kyle Simpson",
                año: 2014,
                páginas: 512,
                
                información: function() {
                    return this.titulo + " por " + this.autor + " (" + this.año + ")";
                },
                
                resumen: function() {
                    return this.titulo + " tiene " + this.páginas + " páginas";
                }
            };
            
            let resultado = document.getElementById("resultado4");
            let output = libro.información() + "<br>";
            output += libro.resumen();
            
            resultado.innerHTML = "✓ " + output;
            resultado.style.display = "block";
        }
