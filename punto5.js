function calcularSalarioMensual(licenciasVendidas) {
    const salarioBase = 3500000; // Salario base mensual
    const comisionPorLicencia = 1500000; // Comisión por cada licencia vendida
    const porcentajeDeducciones = 0.05; // Porcentaje de deducciones por impuestos

    const comisionTotal = comisionPorLicencia * licenciasVendidas;

    const salarioBruto = salarioBase + comisionTotal;

   
    const deducciones = salarioBruto * porcentajeDeducciones;

    
    const salarioNeto = salarioBruto - deducciones;

    return salarioNeto;
}


const licenciasVendida = 5; 
const salarioMensua = calcularSalarioMensual(licenciasVendida);
console.log(`El salario mensual del vendedor es: ${salarioMensua}`);



//funcion de flecha
const calcularSalarioMensual = (licenciasVendidas) => {
    const salarioBase = 3500000; // Salario base mensual
    const comisionPorLicencia = 1500000; // Comisión por cada licencia vendida
    const porcentajeDeducciones = 0.05; // Porcentaje de deducciones por impuestos

    
    const comisionTotal = comisionPorLicencia * licenciasVendidas;

   
    const salarioBruto = salarioBase + comisionTotal;

    
    const deducciones = salarioBruto * porcentajeDeducciones;

   
    const salarioNeto = salarioBruto - deducciones;

    return salarioNeto;
};


const licenciasVendidas = 5; 
const salarioMensual = calcularSalarioMensual(licenciasVendidas);
console.log(`El salario mensual del vendedor es: ${salarioMensual}`);

