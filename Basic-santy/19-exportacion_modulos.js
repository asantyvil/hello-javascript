// un modulo es dividir nuestro codigo en piezas
// que podemos reutilizar, nos permite organizar nuestro codigo
//en archivos separados

//usar codigo de otra .js

export function add(a,b){
    return a + b
}

//propiedades

export const PI = 3.14

export let name = "santy"

// clase

export class circulo {
    constructor(radio){
        this.radio = radio
    }
    area() {
        return Math.PI * Math.pow(this.radio, 2)
    }
    perimetro(){
        return 2 * Math.PI * this.radio
    }
}

// Exportacion por defecto

export default function substract( a,b){
    return a - b
} 
// solo puede haber 1 funcion default para "export default"
//son funciones las que exportamos en default y no variables

//export const mail = {email: "santy"} 
// 
// esto si ya que es una funcion


// export default class MyClass {
//     func() {
//         console.log("Mi clase")
//     }
// }