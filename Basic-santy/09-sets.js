//set

// Declaracion

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["abc","b","c","d","e", 37, true, 342 ])

console.log(mySet) //Set(3) { 'a', 'b', 'c' } sin [] en la linea anterior ("abc","b"...)

// Metodos comunes

// add y delete - no hay indice, hay orden eso si

mySet.add("ww.fdsfd.com") //lo añade al final

console.log(mySet)

//console.log(mySet.delete("ww.fdsfd.com")) // devuelve true y elimina

mySet.delete("ww.fdsfd.com") //eliminar - hay que indicar que quiero eliminar

console.log(mySet)

// Hash

console.log(mySet.has("abc")) // lo encuentra true si no false

// size

console.log(mySet.size)

// Convertir un set a un array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a un set

mySet = new Set(myArray)
console.log(mySet)

//

mySet.add("abc") // no permite duplicados en cambio el array si, 
// cuidado pq si hay mayusculas no cuentan igual sera diferenetes

console.log(mySet)
