//Map

// clave - valor

// Declaración

let myMap = new Map()

// Inicialización

myMap = new Map([
    ["nombre","santy"],
    ["email","santy@"],
    ["age", 6555]
])

console.log(myMap)

// Métodos y propiedade

// set - actualizar o añadir un elemente
// en la clave no se repite

myMap.set("alias", "santuco") // añade

console.log(myMap)

myMap.set("alias", "santsuco") //actualiza

console.log(myMap)

// get

console.log(myMap.get("nombre"))

// has

console.log(myMap.has("nombre")) // devuelve un true si existe y false si no existe

// delete

myMap.delete("alias")

console.log(myMap)

// Keys - listado de todas las claves

console.log(myMap.keys()) 

// values - listado de todas los valores

console.log(myMap.values())

//entries - listado completo de clave - valor

console.log(myMap.entries()) 

// size

console.log(myMap.size)

// clear

myMap.clear()

console.log(myMap)

