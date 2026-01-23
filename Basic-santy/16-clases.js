// es una plantilla con sus metodos, los valores
// se las daremos cuando se llamen
// Clases

class Person{
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// Sintaxis

let person2 = new Person("santuco",25,"santuqui")

console.log(person2)

class defaultPerson{
    constructor(name = "Sin nombre", age = 0, alias = "Sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new defaultPerson("dany",15,"danila")// los valores en orden del constructor

console.log(person3)

// Acesso a propiedades

console.log(person3.alias) // dany
console.log(person3["alias"]) // Sin nombre (el valor por default del contructor)

// Nuevo valor

person3.alias = "KAKAROTO"
console.log(person3.alias) // KAKAROTO

// Funciones

class Persona2{
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
    walk(){
        console.log("la persona camina")
    }
}

let person4 = new Persona2("dany",15,"danila")// los valores en orden del constructor
person4.walk() // accedo a la funcion

// Propiedades privadas

class PersonaPrivada{

    #bank

    constructor(name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank // ---- para el privado #
    }
    pay(){
        this.#bank
    }
}

let person5 = new PersonaPrivada("dany",15,"danila","IBAN123698574")
//modificar el atributo banco? No ni para modificar ni consultar
person5.bank = "saddad"
 console.log(person5) // ejeuta y sale un atributo con bank pero no sera 
// el privada sera una nueva que no tiene nada que ver con la privada

// Getter y setter

class GetSetPersona{
    #name
    #age
    #alias
    #bank
    constructor(name, age, alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() { //solo lee pero no modifica
        return this.#name
    }
    get bank() { //solo lee pero no modifica
        return this.#bank
    }
    set bank(newBank){
        this.#bank = newBank
    }
}

let person7 = new GetSetPersona("dany",15,"danila","IBAN321658749")
console.log("-----------------") // no accede 

//console.log(person7) // no imprime ningun valor 
//pero 
console.log(person7.name)  // get

console.log(person7.bank)  // get antes de modificar
person7.bank = "new IBAN3456" //set
console.log(person7.bank)  // get despues de modificar

// Herencia
//comportamiento generico
class Animal{

    constructor(name){
        this.name = name
    }
    sound() {
        console.log("Hace un sonido")
    }


}
//comportamiento específico
class Dog  extends Animal{ // !!!! el extends + la clase generico son imporantes ponerlos

    run(){
        console.log("El perro corre")
    }
}

console.log("-----------------")

let myDog = new Dog("Valentin")

myDog.run()
myDog.sound()



//comportamiento específico
class Fish extends Animal{ // !!!! el extends + la clase generico son imporantes ponerlos

// quiero que mi pez en concreto le quiero definir un constructor
// es decir un constructor para fish

    constructor(name,size){
        super(name) //mantengo las variables de la clase generica
        this.size = size
    }

    swim(){
        console.log("El pez nada")
    }

    //puedo modificar la funcion sound para mi pescado de la clase generica
    sound(){
        //super.sound() // no es obligatorio solo es para hacer que haga la funcion que ya hacia en la clase
        //general
        console.log("prprprprpr") // redefino el comportamiento de la funcion generica 

    }

}

console.log("-----------------")

let myFish = new Fish("Valentin",12)

myFish.swim()
myFish.sound()

console.log(myFish)

// Métodos estaticos

class MatesOperatios{ // es una instancia única
//paquete con operaciones
    static sum(a,b) {
        return a + b
    }
}

console.log(MatesOperatios.sum(5,10))
// entramos directamente
// creamos un paquete con operaciones

