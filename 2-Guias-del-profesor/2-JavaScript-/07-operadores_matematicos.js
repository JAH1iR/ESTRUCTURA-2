let a, b, sum, res, mult, div, resid, poten;
        // Ingresar datos a y b
        a = parseInt(prompt('Ingresar el Valor 1: '));
        b = parseInt(prompt('Ingresar el Valor 2: '));
        // suma
        sum = a + b;
        // diferencia
        res = a - b;
        // multiplicación o producto
        mult = a * b;
        // división o cociente
        div = a / b;
        // residuo
        resid = a % b;
        // potenciación
        poten = a ** b;

        document.writeln('La suma es: ', sum);
        document.writeln('<br>');
        document.writeln('La resta es: ', res);
        document.writeln('<br>');
        document.writeln('El Producto es: ', mult);
        document.writeln('<br>');
        document.writeln('El Cociente es: ', div);
        document.writeln('<br>');
        document.writeln('El Residuo es: ', resid);
        document.writeln('<br>');
        document.writeln('La Potenciación es: ', poten);
