// Excepcion

// Capturar un error

// try-catch

let myObj
try{
    //console.log(myObj.email)
    console.log("Finaliza la ejecución sin errores")
}
catch{
    console.log("Finaliza la ejecución con errores")
}

// capturar el error

try{
    console.log(myObj.email)
    console.log("Finaliza la ejecución sin errores")
}
catch(error) {
    console.log("Finaliza la ejecución con errores ", error.message)
}

// finally

try{
    console.log(myObj.email)
    console.log("Finaliza la ejecución sin errores")
}
catch(error) {
    console.log("Finaliza la ejecución con errores ", error.message)
} finally {
    // se ejecuta siempre7
    console.log("Siempre")

}

// lanzamiento de errores

//throw new Error("hay un error") // error que he lanzado yo


function sumIntegers(a, b) {
    // typeof a === "number" -> es instancia de numero
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros")
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se está intentando sumar cero", a, b)
        //excepcion personalizada mas abajo
    }
    return a + b
}

try {
    console.log(sumIntegers(5, 10))
    //console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
    // console.log(sumIntegers(5, "10"))
    // console.log(sumIntegers("5", "10"))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}


// Capturar varios tipos de errores

try {
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}

// Crear excepciones personalizadas

class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}