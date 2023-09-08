
function clasificarAlimentos() {
    const alimentos = [];
    
    
    for (let i = 1; i <= 300; i++) {
      const alimento = {
        nombre: `Alimento ${i}`,
        tipo: Math.random() < 0.5 ? 'vegetal' : 'animal', 
        nivelEnergia: Math.floor(Math.random() * (500 - 100 + 1)) + 100, 
      };
      alimentos.push(alimento);
    }
  
    
    function filtrarAlimentos() {
      const alimentosVegetales = alimentos.filter(alimento => alimento.tipo === 'vegetal' && alimento.nivelEnergia > 200);
      return alimentosVegetales;
    }
  
    
    function calcularSumatoria(alimentosVegetales) {
      const sumatoria = alimentosVegetales.reduce((total, alimento) => total + alimento.nivelEnergia, 0);
      return sumatoria;
    }
  
    setTimeout(() => {
      const alimentosVegetales = filtrarAlimentos();
      const sumatoriaEnergia = calcularSumatoria(alimentosVegetales);
      console.log("Alimentos vegetales con más de 200 unidades de energía:", alimentosVegetales);
      console.log("Sumatoria de niveles de energía de alimentos vegetales:", sumatoriaEnergia);
    }, 5000); //  5 segundos
  
    console.log("Clasificando alimentos...");
  }
  
  // función principal
  clasificarAlimentos();
  

