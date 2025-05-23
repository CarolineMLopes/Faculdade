let numero = 10

// o numero deve ser maior que 5
// e menor que 10
// SE o numero > 5 E numero < 10
if (numero >5 && numero <10){
    console.log('numero entre 6 - 9')
// SENÃO SE numero >= 1 E numero <= 5
} else if(numero >=1 && numero <=5){
    console.log('numero entre 1 - 5')
// SENÃO SE numero >=10 E numero <20
// SENÃO SE numero >=20 E numero <30
} else if(numero >=10 && numero <20){
    console.log('numero entre 10 - 19')
} else if(numero >=20 && numero <30){
    console.log('numero entre 20 - 29')
} else{
    console.log('fora do informador')
}
