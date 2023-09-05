// Función para generar un alimento aleatorio
// const generarAlimentoAleatorio = () => {
//     const tipos = ['vegetal', 'animal', 'insecto'];
//     const nombre = `Alimento ${Math.floor(Math.random() * 300) + 1}`;
//     const tipo = tipos[Math.floor(Math.random() * 3)];
//     const nivelEnergia = Math.floor(Math.random() * 401) + 100; // Números entre 100 y 500
//     return { nombre, tipo, nivelEnergia };
// };


// const filtrarAlimentos = (alimentos) => {
//     const alimentosVegetales = alimentos.filter(alimento => alimento.tipo === 'vegetal' && alimento.nivelEnergia > 200);
//     return alimentosVegetales;
// };


// const calcularSumatoriaEnergia = (alimentosVegetales, callback) => {
//     const sumatoria = alimentosVegetales.reduce((acumulador, alimento) => acumulador + alimento.nivelEnergia, 0);
//     callback(sumatoria);
// };


// const alimentos = [];
// for (let i = 0; i < 300; i++) {
//     alimentos.push(generarAlimentoAleatorio());
// }


// setTimeout(() => {
//     const alimentosFiltrados = filtrarAlimentos(alimentos);
//     console.log("Alimentos vegetales con más de 200 unidades de energía:", alimentosFiltrados);
    
//     calcularSumatoriaEnergia(alimentosFiltrados, (sumatoria) => {
//         console.log("Sumatoria de niveles de energía de alimentos vegetales:", sumatoria);
//     });
// }, 5000);



//funcion de flecha
// Función para generar un alimento aleatorio
const generarAlimentoAleatorio = () => {
    const tipos = ['vegetal', 'animal', 'insecto'];
    const nombre = `Alimento ${Math.floor(Math.random() * 300) + 1}`;
    const tipo = tipos[Math.floor(Math.random() * 3)];
    const nivelEnergia = Math.floor(Math.random() * 401) + 100; // Números entre 100 y 500
    return { nombre, tipo, nivelEnergia };
};

// Función para filtrar alimentos vegetales con más de 200 unidades de energía
const filtrarAlimentos = (alimentos) => alimentos.filter(alimento => alimento.tipo === 'vegetal' && alimento.nivelEnergia > 200);

// Función para calcular la sumatoria de niveles de energía
const calcularSumatoriaEnergia = (alimentosVegetales, callback) => {
    const sumatoria = alimentosVegetales.reduce((acumulador, alimento) => acumulador + alimento.nivelEnergia, 0);
    callback(sumatoria);
};

// Simular la recepción de 300 alimentos (datos de muestra)
const alimentos = Array.from({ length: 300 }, () => generarAlimentoAleatorio());

// Llamar a la función principal después de 5 segundos
setTimeout(() => {
    const alimentosFiltrados = filtrarAlimentos(alimentos);
    console.log("Alimentos vegetales con más de 200 unidades de energía:", alimentosFiltrados);
    
    calcularSumatoriaEnergia(alimentosFiltrados, (sumatoria) => {
        console.log("Sumatoria de niveles de energía de alimentos vegetales:", sumatoria);
    });
}, 5000);

