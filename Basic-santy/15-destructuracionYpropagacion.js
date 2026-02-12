// Destructuración

let myArray = [1, "santy", true] 
// o sin el let tambien funciona en general
let person = {
    name: "Santy",
    age: 25,
    alias: "santuco"
}

// extraer valores de array o objetos y guardarlo en variables
// de forma consisa(breve y preciso)
//prueba
//sintaxys array

let [myValue0, myValue1] = myArray
//guardo por orden de los valores

console.log(myValue0) // 1
console.log(myValue1) // santy

//en el caso de no haber valor para el myValueN pues sera undef

// Sintaxis arrays con valores predeterminados


let [myValue3, myValue4,myValue5 ,myValue6 = 0] = myArray
// value5 = 0 // si no existe la creo

console.log(myValue3) // 1
console.log(myValue4) // santy
console.log(myValue5) // true
console.log(myValue6) // 0

let [a,,b] = myArray
//desestructuro pero ignorando posiciones
console.log(a) // santy
console.log(b) // true

// Sintaxis de objetos

let {name, age, alias} = person
//el nombre de las variables han de coincidir con el que hay en el objeto

console.log(name)  
console.log(age)
console.log(alias) 

console.log("----------")

// Sintaxis arrays con valores predeterminados

//Error:

/*let {name2, age2, alias2, email = "santy@"} = person

console.log(name2)  // no exite
console.log(age2)   //no existe
console.log(alias2) //no existe
console.log(email)
*/

// Solucion - Sintaxis objectcs con nuevos nombres de variables

let {name: name3, age: age3, alias: alias3} = person
console.log(name3)  
console.log(age3)   
console.log(alias3) 



let person3 = {
    name: "dany",
    age: 25,
    alias: "santuco",
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name: "programador",
        exp: 15,
        work: function(){
            console.log("La persona trabaja")
        }
    }
}
console.log("----------")

let{name:name4, job: {name: job_name} } = person3

console.log(name4)
console.log(job_name)

// Propagación (...)
// expandir elemntos de un array o un objeto a otros array u objetos

let myArray2 = [...myArray]//copia

console.log("----------")

console.log(myArray2)

let myArray3 = [...myArray, 5, 6]//copia + nuevos datos

console.log(myArray3)

let myArray4 = [...myArray2, ...myArray3]//copia + copia

console.log(myArray4)

// Sintaxis objetos

console.log("----------")

let person4 = {...person, email: "santy@" } //copia

console.log(person4)

let person5 = {...person} //copia

console.log(person4)


let person6 = {...person, ...person4} //copia

console.log(person4)