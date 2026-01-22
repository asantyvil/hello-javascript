/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let a = "a"
let b = "b"

a = a + b

console.log(a)

// 2. Muestra la longitud de una cadena de texto

let a2 = "hola me llamo santy"
console.log(a2.length)

// 3. Muestra el primer y último carácter de un string

let b2 = "aa.b"
console.log(b2[0] + " " + b2[b2.length -1])


// 4. Convierte a mayúsculas y minúsculas un string

// 5. Crea una cadena de texto en varias líneas

// 6. Interpola el valor de una variable en un string

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let b3 = " a b c bf f"
console.log(b3.replaceAll(" ","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

// 9. Comprueba si dos strings son iguales

let f = "s2"
let g = "ds2"

let irRaining = f == g

irRaining ? console.log("esta lloviendo") : console.log("no esta lloviendo")


// 10. Comprueba si dos strings tienen la misma longitud

