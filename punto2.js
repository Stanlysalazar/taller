//funcion
function obtenerNombre(codigo){
     let resultado=codigo.split(":")
     return resultado[1]

 }
 let obtenerResultado= obtenerNombre("454:esteban")
 console.log(obtenerResultado)


//funcion flecha
let obtenerNombreFlecha=(codigo)=>codigo.split(":")[1]
console.log(obtenerNombreFlecha("454:esteban"))
