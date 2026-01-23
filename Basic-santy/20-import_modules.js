// importacion de modulos


import { add, PI,name, circulo} from "./19-exportacion_modulos.js";


import resta from "./19-exportacion_modulos.js"; // al hacer default solo hace caso a la que se exporta por defecto



// funciones
console.log(add(5,10))  // para que funcione necesito el package.json

// propiedades

console.log(PI)
console.log(name)

// clases

let circle = new circulo(10)
console.log(circle)
console.log(circle.area())
console.log(circle.area().toFixed(2)) // 2 decimales
console.log(circle.perimetro().toFixed(2)) // 2 decimales


// importacion por defecto

console.log(resta(5, 10)) // aunque no tenga el mismo nombre que substract

//clase default:
// let claseDef = new resta()
// claseDef.func()



// proyecto modular de otra carpeta

//import { myclas} from "./carpteta/myclas.js"; "./ estamos hablando en la ruta actual en la que estamos"



// modulos que me he descargado - modulos externos

//const os = require("os")

