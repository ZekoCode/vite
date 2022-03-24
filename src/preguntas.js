const preguntas = [
    {
        titulo: "¿Cual es el mejor lenguaje de programacion?",
        opciones: [
            { textoRespuesta: "JavaScript", isCorrect: true },
            { textoRespuesta: "PHP", isCorrect: false },
            { textoRespuesta: "C++", isCorrect: false },
            { textoRespuesta: "Kotlin", isCorrect: false },
        ],
    },
    {
        titulo: "Con lasfito aprendes de tutoriales...?",
        opciones: [
            { textoRespuesta: "sin contenido", isCorrect: false },
            { textoRespuesta: "sin relleno", isCorrect: true },
            { textoRespuesta: "sin grcia :v", isCorrect: false },
            { textoRespuesta: "sin codigo", isCorrect: false },
        ],
    },
    {
        titulo: "Cuanto es `11`+ 1 en JavaCcript?",
        opciones: [
            { textoRespuesta: "111", isCorrect: true },
            { textoRespuesta: "12", isCorrect: false },
            { textoRespuesta: "Syntax Error", isCorrect: false },
            { textoRespuesta: "`11`1", isCorrect: false },
        ],
    },
    {
        titulo: "¿En que año fue creado JavaScript?",
        opciones: [
            { textoRespuesta: "1997", isCorrect: false },
            { textoRespuesta: "2001", isCorrect: false },
            { textoRespuesta: "1987", isCorrect: false },
            { textoRespuesta: "1995", isCorrect: true },
        ],
    },
];

export default preguntas;