// function calcularDistancia(x1, y1, x2, y2) {
//     const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//     return distancia;
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question("Ingrese la coordenada X del primer punto: ", x1 => {
//     readline.question("Ingrese la coordenada Y del primer punto: ", y1 => {
//         readline.question("Ingrese la coordenada X del segundo punto: ", x2 => {
//             readline.question("Ingrese la coordenada Y del segundo punto: ", y2 => {
//                 const distancia = calcularDistancia(
//                     parseFloat(x1), parseFloat(y1), parseFloat(x2), parseFloat(y2)
//                 );
//                 console.log("La distancia entre los puntos es:", distancia);
//                 readline.close();
//             });
//         });
//     });
// });


//funcion de flecha

const calcularDistancia = (x1, y1, x2, y2) => {
    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distancia;
};

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese la coordenada X del primer punto: ", x1 => {
    readline.question("Ingrese la coordenada Y del primer punto: ", y1 => {
        readline.question("Ingrese la coordenada X del segundo punto: ", x2 => {
            readline.question("Ingrese la coordenada Y del segundo punto: ", y2 => {
                const distancia = calcularDistancia(
                    parseFloat(x1), parseFloat(y1), parseFloat(x2), parseFloat(y2)
                );
                console.log("La distancia entre los puntos es:", distancia);
                readline.close();
            });
        });
    });
});


