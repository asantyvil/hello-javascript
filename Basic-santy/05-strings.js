// String

let nameS = "Santy"
let saludo = "Hola, " + nameS + " !"
console.log(typeof saludo)
console.log(saludo)

// Longitud
console.log(saludo.length)

// Acceso a caracteres
console.log(saludo[0])
console.log(saludo[12])

// Métodos comunes
console.log(saludo.toUpperCase()) //todo a mayusculas
console.log(saludo.toLowerCase()) //todo a minusculas
console.log(saludo.indexOf("Santy")) // el indice donde ha encontrado santy, si no lo encuentra  (-1)
console.log(saludo.includes("Hola")) // existe hola dentro de la cadena: true or false
console.log(saludo.slice(0,5)) //corto la cadena de texto inicio,final
console.log(saludo.replace("Hola", "Adios")) // Remplazar hola con adios
let b3 = " a b c bf f"
console.log(b3.replaceAll(" ","-")) // reemplazar mas de 1 

//Templates literales (plantillas literales)

let mensage = `Hola, este es mi
curso de javascript` // cuiaddo que si importa los tabs del principio de esta linea
console.log(mensage)

console.log(`Hola, ${nameS}!`)
let email = "santy@g.com"
console.log(`Hola, ${nameS}! Tu email es ${email}`)
