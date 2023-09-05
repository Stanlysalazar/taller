
// Función para generar un número aleatorio entre un rango dado
// const generarNumeroAleatorio = (min, max) => Math.random() * (max - min) + min;

// // Función para generar datos aleatorios de un planeta
// const generarPlanetaAleatorio = () => {
//     const nombrePlaneta = "Planeta " + Math.floor(Math.random() * 1000);
//     const latitud = generarNumeroAleatorio(-90, 90);
//     const longitud = generarNumeroAleatorio(-180, 180);
//     const nivelOxigeno = generarNumeroAleatorio(-10, 30);
//     const volumenAgua = generarNumeroAleatorio(0, 5000);
    
//     return {
//         nombrePlaneta,
//         latitud,
//         longitud,
//         nivelOxigeno,
//         volumenAgua,
//     };
// };

// // Generar automáticamente los datos de 15 planetas
// const planetas = [];

// for (let i = 0; i < 15; i++) {
//     const planeta = generarPlanetaAleatorio();
//     planetas.push(planeta);
// }

// // Función para sumar el total de agua de los planetas
// const sumarTotalAgua = () => {
//     const totalAgua = planetas.reduce((acumulador, planeta) => acumulador + planeta.volumenAgua, 0);
//     return totalAgua;
// };

// // Función para sumar y multiplicar por 100 el total de oxigeno de los planetas
// const calcularTotalOxigeno = () => {
//     const totalOxigeno = planetas.reduce((acumulador, planeta) => acumulador + planeta.nivelOxigeno, 0);
//     const totalOxigenoMultiplicado = totalOxigeno * 100;
//     return totalOxigenoMultiplicado;
// };

// // Función para encontrar planetas con nivel de oxígeno negativo y sin agua
// const encontrarPlanetasProblematicos = () => {
//     const planetasConOxigenoNegativo = planetas.filter(planeta => planeta.nivelOxigeno < 0);
//     const planetasSinAgua = planetas.filter(planeta => planeta.volumenAgua === 0);

//     return {
//         planetasConOxigenoNegativo,
//         planetasSinAgua,
//     };
// };

// // Llamar a las funciones y mostrar los resultados
// const totalAgua = sumarTotalAgua();
// console.log(`La cantidad total de agua de los 15 planetas es: ${totalAgua} unidades de volumen.`);

// const totalOxigenoMultiplicado = calcularTotalOxigeno();
// console.log(`El total de oxígeno de los 15 planetas multiplicado por 100 es: ${totalOxigenoMultiplicado}`);

// const planetasProblematicos = encontrarPlanetasProblematicos();
// console.log("Planetas con nivel de oxígeno negativo:", planetasProblematicos.planetasConOxigenoNegativo);
// console.log("Planetas sin agua:", planetasProblematicos.planetasSinAgua);


//funcion de flecha
// Función para generar un número aleatorio entre un rango dado
const generarNumeroAleatorio = (min, max) => Math.random() * (max - min) + min;

// Función para generar datos aleatorios de un planeta
const generarPlanetaAleatorio = () => {
    const nombrePlaneta = "Planeta " + Math.floor(Math.random() * 1000);
    const latitud = generarNumeroAleatorio(-90, 90);
    const longitud = generarNumeroAleatorio(-180, 180);
    const nivelOxigeno = generarNumeroAleatorio(-10, 30);
    const volumenAgua = generarNumeroAleatorio(0, 5000);
    
    return {
        nombrePlaneta,
        latitud,
        longitud,
        nivelOxigeno,
        volumenAgua,
    };
};

// Generar automáticamente los datos de 15 planetas
const planetas = Array.from({ length: 15 }, () => generarPlanetaAleatorio());

// Función para sumar el total de agua de los planetas
const sumarTotalAgua = () => planetas.reduce((acumulador, planeta) => acumulador + planeta.volumenAgua, 0);

// Función para sumar y multiplicar por 100 el total de oxigeno de los planetas
const calcularTotalOxigeno = () => {
    const totalOxigeno = planetas.reduce((acumulador, planeta) => acumulador + planeta.nivelOxigeno, 0);
    return totalOxigeno * 100;
};

// Función para encontrar planetas con nivel de oxígeno negativo y sin agua
const encontrarPlanetasProblematicos = () => ({
    planetasConOxigenoNegativo: planetas.filter(planeta => planeta.nivelOxigeno < 0),
    planetasSinAgua: planetas.filter(planeta => planeta.volumenAgua === 0),
});

// Llamar a las funciones y mostrar los resultados
const totalAgua = sumarTotalAgua();
console.log(`La cantidad total de agua de los 15 planetas es: ${totalAgua} unidades de volumen.`);

const totalOxigenoMultiplicado = calcularTotalOxigeno();
console.log(`El total de oxígeno de los 15 planetas multiplicado por 100 es: ${totalOxigenoMultiplicado}`);

const planetasProblematicos = encontrarPlanetasProblematicos();
console.log("Planetas con nivel de oxígeno negativo:", planetasProblematicos.planetasConOxigenoNegativo);
console.log("Planetas sin agua:", planetasProblematicos.planetasSinAgua);







