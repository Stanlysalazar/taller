 function contarSablesNegativos(sables) {
     let cantidadSablesNegativos = 0;
    
     for (let i = 0; i < sables.length; i++) {
        if (sables[i] < 0) {
             cantidadSablesNegativos++;
         }
     }
    
     return cantidadSablesNegativos;
}

 const sables = [2, 4, -8, 5, -6];
 const cantidadSablesDefectuosos = contarSablesNegativos(sables);
 console.log(`La cantidad de sables defectuosos con energía negativa es: ${cantidadSablesDefectuosos}`);

//funcion de flecha
const contarSablesNegativos = (sables1) => {
    let cantidadSablesNegativos = 0;

    for (let i = 0; i < sables1.length; i++) {
        if (sables1[i] < 0) {
            cantidadSablesNegativos++;
        }
    }

    return cantidadSablesNegativos;
};

// Ejemplo de uso
const sables1 = [2, 4, -8, 5, -6];
const cantidadSablesDefectuosos1 = contarSablesNegativos(sables);
console.log(`La cantidad de sables defectuosos con energía negativa es: ${cantidadSablesDefectuosos1}`);

