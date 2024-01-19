//funciones

function sumar(num1, num2) {
    return num1 + num2 
}

console.log(sumar(20,20))



//callback

function sumacb(a, b, cb) {
    let r = a + b
    cb(r)
}

function callback(resultado) {
    console.log('resultado', resultado);
}

sumacb(2, 3, callback)

//fat arrow function

let fatarrowfunction = (a,b) =>  a + b

console.log(fatarrowfunction(5,10))

let otrafaf= (a,b) => {
    return a+b
}

console.log(otrafaf(2,6))


// anonimas
//no tienen ningun nombre, ejecutada por una funcion
