//control de flujo
let edad = 18
if(edad >= 18){
    console.log('mayor')
}


//while
let cont = 0;
while (cont <= 5) {
    console.log(cont)
    cont++
}

//switch
let mes = 'enero'
switch (mes) {
    case 'enero':
        console.log('es enero')
        break;
    case 'febrero':
        console.log('es febrero')
        break;

    default:
        break;
}

let array = [1,4,6,8,10]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}