// Objetos

// Sintaxis

let person = {
    name: "Santy",
    age: 25,
    alias: "santuco"
}

// Acceso a propiedades

// Notacion punto
console.log(person.name)

// Notacion de corchetes
console.log(person["name"])

// Modificación

person.name = "Santy Vilcacundo"
console.log(person.name)

person.age = "37" // cambio el tipo de dato
console.log(person.age)

delete person.alias

person.email = "santy@" // añado nuevo valor
// o
person["age"] = 20
console.log(person)

// Métodos (funciones)

let person2 = {
    name: "dany",
    age: 25,
    alias: "santuco",
    walk: function(){
        console.log("La persona camina")
    }
}

person2.walk();

// Anidación de objetos

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

console.log(person3)
console.log(person3.name)
console.log(person3.job.name)
person3.job.work()

let empleado = {
    name: "Santy",
    age: 25,
    alias: "santuco"
}

//console.log(person == persona4) // se compara la @ de memoria no la identidad

//console.log(person.name == empleado.name) // se compara el valor
// ahora da false pq person.name lo modifique 

    console.log("------------------")


// Iteración

for(let valor in empleado) {
    console.log(valor + ": " + empleado[valor])
}

console.log("------------------")

let person5 = {
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
            console.log(`su profesion es ${this.name}`)
            //solo conoce lo que hay aqui dentro de job
        }
    }
}

person5.job.work()

console.log("------------------")

// Funciones como objetos

function Person(name, age){ // deberia ser una clase
    this.name = name
    this.age = age
}// un constructor

let persona6 = new Person("danyla", 12)

console.log(persona6) // tipo objeto