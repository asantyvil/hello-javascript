// Operadores, hacer operaciones con variables

// Operadores aritméticos

console.log(1 + 2)
let a = 2
let b = 3

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

console.log(a % b)
console.log(a ** b) // El exponente

a++
console.log(a)
b--
console.log(b)

// Operadores de asignación

let myV = 2
myV += 2
myV -= 2
myV /= 2
myV *= 2
myV %= 2
myV **= 2

// Operadores de comparación

let a2 = 5
let b2 = 19

console.log(a2 > b2)
console.log(a2 < b2)
console.log(a2 >= b2)
console.log(a2 <= b2)
console.log(a2 == b2)
console.log(a2 == 5)
console.log(a2 == "5")//funciona
console.log(a2 === "5") //igualdad por identidad (por tipo y valor)
console.log(a2 != 5) 
console.log(a2 !== 5)
console.log(0 == false) //true
console.log(1 == false) // False
console.log(0 == "") // True
console.log(0 == " ") // True
console.log(0 == '') // True
console.log(0 == "cx") // False
console.log(0 === "") // false
console.log(undefined == null) // True
console.log(undefined === null) // False

//Truthy values (valores verdaderos)
//todos los numeros positivos y negativos menos el 0
// Todas las cadenas de texto menos las vacias
//Todos los boolean true

// Falsy values (valores falsos)
//0, 0n, null, undefinied, Nan,boolean false cadenas de texto vacias

// Operadores lógicos

// and (&&)

console.log( 5 > 10 && 15 > 20)

// or (||)

console.log( 5 > 10 || 25 > 20)

// Mix

console.log(5 > 10 && 15 > 20 || 30 < 40)

//not (!)

console.log( !(5 > 10 || 15 > 20) )

// Operadores ternarios

//permiten escribir condiciones

const irRaining = false
//si es true imprime el primer log y si es false imprime el segundo log
irRaining ? console.log("esta lloviendo") : console.log("no esta lloviendo")
