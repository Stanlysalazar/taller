function calcularSalarioMensual(licenciasVendidas) {
    const salarioBase = 3500000; // Salario base mensual
    const comisionPorLicencia = 1500000; // Comisión por cada licencia vendida
    const porcentajeDeducciones = 0.05; // Porcentaje de deducciones por impuestos

    // Calcular la comisión total
    const comisionTotal = comisionPorLicencia * licenciasVendidas;

    // Calcular el salario bruto (sin deducciones)
    const salarioBruto = salarioBase + comisionTotal;

    // Calcular las deducciones por impuestos
    const deducciones = salarioBruto * porcentajeDeducciones;

    // Calcular el salario mensual neto (después de deducciones)
    const salarioNeto = salarioBruto - deducciones;

    return salarioNeto;
}

// Ejemplo de uso
const licenciasVendida = 5; // Cambia esto por la cantidad de licencias vendidas
const salarioMensua = calcularSalarioMensual(licenciasVendida);
console.log(`El salario mensual del vendedor es: ${salarioMensua}`);

//funcion de flecha
const calcularSalarioMensual = (licenciasVendidas) => {
    const salarioBase = 3500000; // Salario base mensual
    const comisionPorLicencia = 1500000; // Comisión por cada licencia vendida
    const porcentajeDeducciones = 0.05; // Porcentaje de deducciones por impuestos

    // Calcular la comisión total
    const comisionTotal = comisionPorLicencia * licenciasVendidas;

    // Calcular el salario bruto (sin deducciones)
    const salarioBruto = salarioBase + comisionTotal;

    // Calcular las deducciones por impuestos
    const deducciones = salarioBruto * porcentajeDeducciones;

    // Calcular el salario mensual neto (después de deducciones)
    const salarioNeto = salarioBruto - deducciones;

    return salarioNeto;
};

// Ejemplo de uso
const licenciasVendidas = 5; // Cambia esto por la cantidad de licencias vendidas
const salarioMensual = calcularSalarioMensual(licenciasVendidas);
console.log(`El salario mensual del vendedor es: ${salarioMensual}`);

