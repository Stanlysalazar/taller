// Definir una lista de planetas con su información
const planetas = [
    { nombrePlaneta: "Tatooine", latitud: 23.456, longitud: -45.789, oxigeno: 15, agua: 500 },
    { nombrePlaneta: "Alderaan", latitud: -12.345, longitud: 67.890, oxigeno: 35, agua: 800 },
    { nombrePlaneta: "Hoth", latitud: 45.678, longitud: -12.345, oxigeno: -5, agua: 0 },
    // Agregar los datos de los otros planetas aquí
  ];
  
  // Inicializar variables para las sumas
  let totalAgua = 0;
  let totalOxigeno = 0;
  
  // Inicializar variables para almacenar información de planetas especiales
  let planetaConOxigenoNegativo = null;
  let planetaSinAgua = null;
  
  // Iterar a través de la lista de planetas
  for (const planeta of planetas) {
    // Sumar la cantidad total de agua de los planetas
    totalAgua += planeta.agua;
  
    // Sumar el oxígeno y multiplicar por 100
    totalOxigeno += planeta.oxigeno * 100;
  
    // Verificar si el planeta tiene oxígeno negativo
    if (planeta.oxigeno < 0) {
      planetaConOxigenoNegativo = planeta;
    }
  
    // Verificar si el planeta no tiene agua
    if (planeta.agua === 0) {
      planetaSinAgua = planeta;
    }
  }
  
  // Imprimir los resultados
  console.log(`Total de agua en los 15 planetas: ${totalAgua} unidades`);
  console.log(`Total de oxígeno en los 15 planetas multiplicado por 100: ${totalOxigeno} unidades`);
  
  if (planetaConOxigenoNegativo) {
    console.log(`Planeta con oxígeno negativo: ${planetaConOxigenoNegativo.nombrePlaneta}`);
  }
  
  if (planetaSinAgua) {
    console.log(`Planeta sin agua: ${planetaSinAgua.nombrePlaneta}`);
    
  }




  //funcion de flecha

  // Definir una lista de planetas con su información
// const planetas = [
//     { nombrePlaneta: "Tatooine", latitud: 23.456, longitud: -45.789, oxigeno: 15, agua: 500 },
//     { nombrePlaneta: "Alderaan", latitud: -12.345, longitud: 67.890, oxigeno: 35, agua: 800 },
//     { nombrePlaneta: "Hoth", latitud: 45.678, longitud: -12.345, oxigeno: -5, agua: 0 },
//     // Agregar los datos de los otros planetas aquí
//   ];
  
//   // Función para calcular la cantidad total de agua en los planetas
//   const calcularTotalAgua = () => planetas.reduce((total, planeta) => total + planeta.agua, 0);
  
//   // Función para calcular el total de oxígeno multiplicado por 100 en los planetas
//   const calcularTotalOxigeno = () => planetas.reduce((total, planeta) => total + planeta.oxigeno * 100, 0);
  
//   // Función para encontrar un planeta con oxígeno negativo
//   const encontrarPlanetaConOxigenoNegativo = () => planetas.find(planeta => planeta.oxigeno < 0);
  
//   // Función para encontrar un planeta sin agua
//   const encontrarPlanetaSinAgua = () => planetas.find(planeta => planeta.agua === 0);
  
//   // Imprimir los resultados
//   console.log(`Total de agua en los 15 planetas: ${calcularTotalAgua()} unidades`);
//   console.log(`Total de oxígeno en los 15 planetas multiplicado por 100: ${calcularTotalOxigeno()} unidades`);
  
//   const planetaOxigenoNegativo = encontrarPlanetaConOxigenoNegativo();
//   if (planetaOxigenoNegativo) {
//     console.log(`Planeta con oxígeno negativo: ${planetaOxigenoNegativo.nombrePlaneta}`);
//   }
  
//   const planetaSinAgua = encontrarPlanetaSinAgua();
//   if (planetaSinAgua) {
//     console.log(`Planeta sin agua: ${planetaSinAgua.nombrePlaneta}`);
//   }
  
  