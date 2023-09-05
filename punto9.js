function crearPadawan(nombre,planeta,edad,estatura,clasificacionPadawan){

    setTimeout(function(){
        //logica de la funcion principal
        let padawan = {
            nombreEstudiante:nombre,
            planetaEstudiante:planeta,
            edadEstudiante:edad,
            estaturaEstudiante:estatura
        }
        clasificacionPadawan(padawan)
    },2000)

}
//llamar a la funcion principal
crearPadawan("Grogu","yodora",500 ,"30 cm",function(padawan){
    if(padawan.edadEstudiante<15){
        console.log(`${padawan.nombreEstudiante} tienes ${padawan.edadEstudiante} vas a la clase de la fuerza`)
    }else{
        console.log(`${padawan.nombreEstudiante} tienes ${padawan.edadEstudiante} vas a la clase del manejo de sable de luz`)
    }
})



//Funcion de flecha
const crearPadawan = (nombre, planeta, edad, estatura, clasificacionPadawan) => {
    setTimeout(() => {
        // Lógica de la función principal
        const padawan = {
            nombreEstudiante: nombre,
            planetaEstudiante: planeta,
            edadEstudiante: edad,
            estaturaEstudiante: estatura
        };
        clasificacionPadawan(padawan);
    }, 2000);
};

// Llamar a la función principal
crearPadawan("Grogu", "yodora", 500, "30 cm", (padawan) => {
    if (padawan.edadEstudiante < 15) {
        console.log(`${padawan.nombreEstudiante} tienes ${padawan.edadEstudiante} vas a la clase de la fuerza`);
    } else {
        console.log(`${padawan.nombreEstudiante} tienes ${padawan.edadEstudiante} vas a la clase del manejo de sable de luz`);
    }
});
