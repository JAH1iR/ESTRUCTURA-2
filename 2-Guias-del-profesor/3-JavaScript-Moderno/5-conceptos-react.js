// 5 - Conceptos para React simulados con JavaScript moderno
// Ejecutar con: node 5-conceptos-react.js

const crearEstado = (estadoInicial) => {
    let estadoActual = estadoInicial;
    return {
        leer: () => estadoActual,
        actualizar: (nuevoEstado) => {
            estadoActual = { ...estadoActual, ...nuevoEstado };
            return estadoActual;
        }
    };
};

const crearComponente = ({ titulo, usuarios }) => {
    const lista = usuarios.map(({ nombre }) => `- ${nombre}`).join("\n");
    return `${titulo}\n${lista}`;
};

const estado = crearEstado({ contador: 0, conectado: false });
console.log("Estado inicial:", estado.leer());
console.log("Estado actualizado:", estado.actualizar({ contador: 1, conectado: true }));

const componente = crearComponente({
    titulo: "Estudiantes activos",
    usuarios: [{ nombre: "Ana" }, { nombre: "Luis" }, { nombre: "Sofia" }]
});
console.log(componente);

// Props: argumentos recibidos por crearComponente.
// State: datos internos administrados por crearEstado.
// map: genera la lista que un componente renderizaria.
