let nombre = 'Juan';
        let apellido = 'Perez';
        let precio = 500.00;
        
        document.writeln(nombre + ' ' + apellido);
        document.writeln('<br>');
        document.writeln(nombre,' ',apellido);
        document.writeln('<br>');
        document.writeln('Nombre: ' + nombre + ' '+apellido);
        document.writeln('<br>');
        let datos = nombre.concat(apellido);
        document.writeln(datos);
        document.writeln('<br>');
        document.writeln('El precio es: ' + precio);
        document.writeln('<br>');
        document.writeln('El precio es: ',precio);
