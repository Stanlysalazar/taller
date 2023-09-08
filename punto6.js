function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function encontrarEdadMayorYContarRepeticiones(edade, codigo) {
    if (edade.length !== codigo.length || edade.length === 0) {
        return "Los arreglos de edades y códigos deben tener la misma longitud y no estar vacíos.";
    }

    let edadMayor = edades[0];
    let repeticionesEdadMayor = 1;

    for (let i = 1; i < edade.length; i++) {
        if (edades[i] > edadMayor) {
            edadMayor = edade[i];
            repeticionesEdadMayor = 1;
        } else if (edade[i] === edadMayor) {
            repeticionesEdadMayor++;
        }
    }

    return `La edad mayor es ${edadMayor}, y se repite ${repeticionesEdadMayor} veces.`;
}


const edade = [];
const codigo = [];

for (let i = 0; i < 20; i++) {
    edades.push(generarNumeroAleatorio(1, 100));
    codigo.push(generarNumeroAleatorio(1, 100)); 
}

console.log("Edades generadas aleatoriamente:", edade);
console.log("Códigos generados aleatoriamente:", codigo);

const resultados = encontrarEdadMayorYContarRepeticiones(edade, codigo);
console.log(resultados);




//funcion de flecha
const generarNumeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const encontrarEdadMayorYContarRepeticiones = (edades, codigos) => {
    if (edades.length !== codigos.length || edades.length === 0) {
        return "Los arreglos de edades y códigos deben tener la misma longitud y no estar vacíos.";
    }

    let edadMayor = edades[0];
    let repeticionesEdadMayor = 1;

    for (let i = 1; i < edades.length; i++) {
        if (edades[i] > edadMayor) {
            edadMayor = edades[i];
            repeticionesEdadMayor = 1;
        } else if (edades[i] === edadMayor) {
            repeticionesEdadMayor++;
        }
    }

    return `La edad mayor es ${edadMayor}, y se repite ${repeticionesEdadMayor} veces.`;
};


const edades = [];
const codigos = [];

for (let i = 0; i < 20; i++) {
    edades.push(generarNumeroAleatorio(1, 100)); 
    codigos.push(generarNumeroAleatorio(1, 100)); 
}

console.log("Edades generadas aleatoriamente:", edades);
console.log("Códigos generados aleatoriamente:", codigos);

const resultado = encontrarEdadMayorYContarRepeticiones(edades, codigos);
console.log(resultado);
