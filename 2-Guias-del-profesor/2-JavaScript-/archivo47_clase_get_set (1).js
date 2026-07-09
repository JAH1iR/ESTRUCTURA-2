// Uso del GET es para obtener el valor actual de una propiedad
// SET es para establecer un nuevo valor en la propiedad
// ambas se aplica en una clase pero fuera del constructor, el uso de un (_) es para indicar que una propiedad es privada, solo se accede a través de un GET y SET.
class Deportista{
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        }
    }
class Futbolista extends Deportista{
    constructor(nombre, apellido, goles){
        super(nombre, apellido);
        this._goles = goles; // indica que es privada, solo puede acceder a través de GET y SET
    }
    get goles(){
        return this._goles;
    }

    set goles(nuevogoles){
        this._goles = nuevogoles;
    }
}