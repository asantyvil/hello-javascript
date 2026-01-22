//estrucutura de datos
//manejar listados de datos

// Declaración
// 2 formas
let  myArray = [] //esta es la mejor forma
let myArray2 = new Array()

//direfencias en las dos formas
myArray = [1, "santy", true] //meto dato - Inicialización

myArray2 = new Array(1,"dany",false) // inicializa los datos

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3) // reserva huecos
myArray2[1] = "hola"
//myArray2[0] = "adios" // si no pongo dato seguira el hueco reservado
myArray2[2] = "jejje"

console.log(myArray2)

myArray2[5] = "prueba0" // se redimensiona si ve que le falta huecos y pone el dato

console.log(myArray2)

//push y pop

//lo inserta detras de lo que hay alfinal del array
myArray.push("santy")
myArray.push("vil")
myArray.push("vin")
console.log(myArray)

console.log(myArray.pop()) //imprimo el elemento que voy a eliminar sin eliminarlo

myArray.pop() //elimina el ultimo elemento
console.log(myArray)


//shift y unshift

//shift elimina el primer elemento

console.log(myArray.shift()) //imprimo el primer elemento que voy a eliminar 
// y  lo elimino
console.log(myArray) 

// unshift

myArray.unshift("a", "b") //añado al principio del array en ese orden
console.log(myArray) 


//length 

console.log(myArray.length) //.nb()

//clear

myArray = []
//o myArray.length = 0 // no es tan elegante

//slice - devolver una copia del array pero de una parte
myArray.push("santy")
myArray.push("vil")
myArray.push("vin")
myArray.push("cais")

let porcion = myArray.slice(0,3)

console.log(myArray)
console.log(porcion)

//splice

myArray.splice(1,3)// desde que indice quiero empezar - cuantos elementos quieres eliminar
console.log(myArray)

myArray.push("santy")
myArray.push("vil")
myArray.push("vin")
myArray.push("cais")
myArray.splice(1,3,"new")// desde que posicion - cuantos elementos quieres eliminar - el valor que voy a añadir
console.log(myArray)