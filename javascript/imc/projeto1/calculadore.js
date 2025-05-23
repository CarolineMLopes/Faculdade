/**
 * Criar uma calculadora
 * solicitar o OPERADOR
 * em seguida o valor1
 * em seguida o valor2
 * o sistema deve verificar
 * -- qual é seu OPERADOR (SE SENÃO)
 * em seguida validar a conta
 * usar os operadores
 * ( + - / *)
 */

let operador = prompt("Informe o operador")
let valor1 = parseInt(prompt("Informe o valor 1"))
let valor2 = parseInt(prompt("Informe o valor 2"))

if(operador === "+"){
    console.log("Soma:",valor1 + valor2)
} else if (operador === "-"){
    console.log("Subtração:", valor1 - valor2)
} else{
    console.log("Operador não encontrado")
}

