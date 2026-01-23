// Loops o bucles

// for 

for(let i = 0; i < 3; i++){
    console.log(`Hola ${i}`)
}

const number = [1 ,2 ,3]

for(let i = 0; i < number.length; i++){
    console.log(`Elementos ${number[i]}`);
}

// while
let i = 0
while( i < 3){
    console.log(`Hola ${i}`)
    i++
}

//while(true){} // bucle infinito

// do while

// Mínimo 1 vez lo ejecuto, aun que no sea true
i = 0
do{
    console.log(`Hola ${i}`)
    i++
} while(i < 5)

// for of - recorrer valores de algo que sea iterable (estructura de datos / datos) 

let myArray = [1, "santy", true]
let mySet = new Set(["abc","b","c","d","e", 37, true, 342 ])
let myMap = new Map([
    ["nombre","santy"],
    ["email","santy@"],
    ["age", 6555]
])

const myString = "!hola¡"

for(let valor of myArray){
    console.log(valor)
}

for(let valor of mySet){
    console.log(valor)
}

for(let valor of myMap){
    console.log(valor)
}
for(let valor of myString){
    console.log(valor)
}

// Buenas prácticas

// break y continue

for(let i = 0; i <= 5; i++){
    if( i == 2 ) continue //ignora el 2
    else if ( i == 4){
        break // cierro el bucle
    }
    console.log(`Hola ${i}`)
}