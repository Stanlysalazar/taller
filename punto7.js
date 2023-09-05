function encontrarNumeroMasCercanoAZero(numeros) {
    if (numeros.length === 0) {
        return "No se proporcionaron números.";
    }

    let numeroMasCercano = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        const valorAbsoluto = Math.abs(numeros[i]);
        const valorAbsolutoMasCercano = Math.abs(numeroMasCercano);

        if (valorAbsoluto < valorAbsolutoMasCercano) {
            numeroMasCercano = numeros[i];
        } else if (valorAbsoluto === valorAbsolutoMasCercano && numeros[i] > 0) {
            // En caso de empate, se prefiere el número positivo
            numeroMasCercano = numeros[i];
        }
    }

    return numeroMasCercano;
}


const numeros = [];

for (let i = 0; i < 50; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 201) - 100; 
    numeros.push(numeroAleatorio);
}

console.log("Números generados aleatoriamente:", numeros);

const masCercanoAZero = encontrarNumeroMasCercanoAZero(numeros);
console.log(`El número más cercano a cero es: ${masCercanoAZero}`);



//funcion de flecha
const encontrarNumeroMasCercanoAZero = (numero) => {
    if (numero.length === 0) {
        return "No se proporcionaron números.";
    }

    let numeroMasCercano = numero[0];

    for (let i = 1; i < numero.length; i++) {
        const valorAbsoluto = Math.abs(numero[i]);
        const valorAbsolutoMasCercano = Math.abs(numeroMasCercano);

        if (valorAbsoluto < valorAbsolutoMasCercano) {
            numeroMasCercano = numero[i];
        } else if (valorAbsoluto === valorAbsolutoMasCercano && numero[i] > 0) {
            // En caso de empate, se prefiere el número positivo
            numeroMasCercano = numero[i];
        }
    }

    return numeroMasCercano;
};

// Ejemplo de uso: recibir 50 números (en este caso, números aleatorios entre -100 y 100)
const numero = [];

for (let i = 0; i < 50; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 201) - 100; // Números entre -100 y 100
    numero.push(numeroAleatorio);
}

console.log("Números generados aleatoriamente:", numero);

const MasCercanoAZero = encontrarNumeroMasCercanoAZero(numero);
console.log(`El número más cercano a cero es: ${MasCercanoAZero}`);
