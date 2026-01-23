// Funciones

// Simple

function myFunc() {

    console.log("hola")

}

myFunc()

// Con parametros

function myFuncWithParams(names){
        console.log(`Hola ${names}`)
}

myFuncWithParams("santy")
myFuncWithParams("dany")

// Funciones anónimas

const myFunc2 = function(names) {
    console.log(`Hola ${names}`)
}

myFunc2("santuco")

// Arrow functions - si lo queremos usar en usa sola linea

/*const myFunc3 = (names) => {
    console.log(`Hola ${names}`)
}*/

const myFunc3 = (names) => console.log(`Hola ${names}`)
myFunc3("santuqui")

// Parametros

function sum(a,b) {
    console.log(a + b)
}

sum(1,2)

// Por defecto

function defaultSum(a = 0,b = 0) {
    console.log(a + b)
}

defaultSum(1)
defaultSum( b = 3)

// Retorno de valores

function mult(a,b) {
    return a * b //devuelvo a quien lo llame
}

console.log(mult(5,10))

let result = mult(5 , 10)
console.log(result)

// Funciones anidadas

function extern(){
    console.log("funcion externa")
    function intern(){
        //puede recibir parametros
        console.log("funcion interna")
    }
    intern()
}

extern()
// intern() Error: fuera del scope "{}"

// Funciones de orden superior - funciones que reciben funciones como argumento

function applyFunc(func, param){
    func(param)
}

applyFunc(myFunc3, "santuquito")

// forEach - es una funcion que recorre una estrcutura de datos
// no se detienen en mitad del bucle

let myArray = [1,2,3,4]

myArray.forEach((value) => console.log(value))
// o 
myArray.forEach(function (value){
    console.log(value)
})

