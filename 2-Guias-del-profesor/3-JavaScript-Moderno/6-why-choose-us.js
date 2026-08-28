// 6 - Proyecto: Por que elegirnos
// Simulacion de una seccion UX con JavaScript moderno.
// Ejecutar con: node 6-why-choose-us.js

const pilares = [
    {
        icono: "Icono de libro abierto",
        titulo: "Aprendizaje claro",
        beneficio: "Entiende cada concepto con ejemplos directos y una progresion sin saltos innecesarios."
    },
    {
        icono: "Icono de herramientas",
        titulo: "Practica aplicable",
        beneficio: "Convierte la teoria en ejercicios que puedes probar y reutilizar en tus proyectos."
    },
    {
        icono: "Icono de cohete",
        titulo: "Progreso visible",
        beneficio: "Avanza desde los fundamentos hasta crear interfaces modernas con mas confianza."
    },
    {
        icono: "Icono de brujula",
        titulo: "Acompanamiento cercano",
        beneficio: "Encuentra referencias claras para resolver dudas sin quedarte bloqueado."
    }
];

const crearPilar = ({ icono, titulo, beneficio }) => ({
    etiquetaVisual: icono,
    titulo,
    texto: beneficio
});

const crearSeccion = (datos) => ({
    titulo: "Aprende con una ruta que si avanza contigo",
    subtitulo: "Practica guiada, ejemplos claros y herramientas para convertir cada concepto en una habilidad util.",
    pilares: datos.map(crearPilar),
    cta: "Comenzar ahora"
});

const seccionWhyChooseUs = crearSeccion(pilares);
console.log(JSON.stringify(seccionWhyChooseUs, null, 2));

// CTA: "Comenzar ahora"
// El objeto resultante puede convertirse en HTML, JSX o datos para una API.
