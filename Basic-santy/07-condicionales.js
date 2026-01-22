// Condicionales

//if, else if ,else

    let age = 8

if(age == 18){
    // Bloque
    console.log(`La edad es ${age}`)
}

else if( age > 18){
    console.log("la edad es mayor de 18")
}

else {
    console.log("es menor de edad")
}

//Operadores Ternarios

let irRaining = age == 18
//si es true imprime el primer log y si es false imprime el segundo log
irRaining ? console.log("es mayor de edad") : console.log("es menor de edad")
// segunda forma
const rainn = age == 18 ? console.log("es mayor de edad2") : console.log("es menor de edad2")

// switch

let day = 0
let dayName

switch(day){
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    default:
        dayName = "Número de dia incorrecto"
}

console.log(dayName)

