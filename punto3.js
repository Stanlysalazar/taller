
function calcularTemperaturaMedia(temperaturaMaxima, temperaturaMinima) {
    const temperaturaMedia = (temperaturaMaxima + temperaturaMinima) / 2;
    return temperaturaMedia;
}

function calcularTemperaturaLuna(temperaturaMaxima, temperaturaMinima) {
    const temperaturaMedia = calcularTemperaturaMedia(temperaturaMaxima, temperaturaMinima);
    console.log(`La temperatura media es: ${temperaturaMedia} grados Celsius`);
}

calcularTemperaturaLuna(28, 14); 






//funcion de flecha
const calcularTemperaturaMedia = (temperaturaMaxima, temperaturaMinima) => {
    const temperaturaMedia = (temperaturaMaxima + temperaturaMinima) / 2;
    return temperaturaMedia;
};

// Ejemplo de uso
const temperaturaMaxima = 28; 
const temperaturaMinima = 14; 

const temperaturaMedia = calcularTemperaturaMedia(temperaturaMaxima, temperaturaMinima);
console.log(`La temperatura media es: ${temperaturaMedia} grados Celsius`);
