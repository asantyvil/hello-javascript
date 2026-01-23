// Consola

//log

console.log("Hola javaScript")

//error

console.error("Este es un mensaje de error")
console.error("Error de la BD", new Error("Conexion Fallida"))

//warm

console.warn("Este es un mensaje de advertencia")

//info

console.info("Este es un mensaje de info adicional")

//table
// muestra una tabla
let data = [
    ["Brais", 37],
    ["Sara", 21]
]

console.table(data)

data = [
    { name: "Brais", age: 37 },
    { name: "Sara", age: 21 }
]

console.table(data)

// group

console.group("Usuario:")
console.log("Nombre: Brais")
console.log("Edad: 37")
console.groupEnd()
console.group("Usuario:")
console.log("Nombre: Brais")
console.log("Edad: 37")

// Usuario: -- group
//   Nombre: Brais
//   Edad: 37
// Usuario: --- group
//   Nombre: Brais
//   Edad: 37

//time

console.time("Tiempo de ejecución 2") // el texto ha de coincidir con el final

for (let i = 0; i < 10000; i++) {

}

console.time("Tiempo de ejecución 1") // el texto ha de coincidir con el final

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 2") // final

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 1") // final

//assert

//evalua 

let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad.")

//count

//cuenta cantidad de veces

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")
console.count("Click")

// Click: 1
// Click: 2
// Click: 3
// Click: 1
// Click: 2

//trace
// Seguimiento de la ejecucion



function funcA() { //(2)
    funcB() //(3)
}

function funcB() { //(4)
    console.trace("Seguimiento de la ejecución.") //(5)
}// que ejecuta

funcA() //(1)

//clear

//console.clear() // para limpiar la consola