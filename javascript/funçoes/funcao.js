let v1 = 10
let v2 = 15
let v3 = 30

console.log(somar(v2, v1, v3))
console.log(subtrair(v2, v3))
console.log(multiplicar(v1, v2))
console.log(dividir(v3, v1))
console.log(porcentual(v1, v2, v3))

function somar(x, y, w){
    return x + y + w
}

function subtrair(x, y){
    return x - y
}

function multiplicar(x, y){
    return x * y
}

function dividir(x, y){
    return x / y
}

function porcentual(x, y, w){
    return (w/100) * (x + y) + (x + y)
}