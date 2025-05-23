Algoritmo "semnome"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 2/9/2024
Var
// Seção de Declarações das variáveis 
num1, num2, total: real
operador: caracter

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval ("informe um valor1:")
leia(num1)
escreval ("informe um valor2:")
leia(num2)
escreval ("informe operador:")
leia(operador)

se operador = "+" entao
   total:= num1 + num2
   escreva("Somar:",total)
   senao
        se operador = "-" entao
           total:= num1 - num2
           escreva("Subtrair:",total)

      senao
           se operador = "*" entao
           total:= num1 * num2
           escreva("Multiplicar:",total)


         senao
              se operador = "/" entao
              se num2 > 0 entao
              total := num1 / num2
              escreva("Dividir:",total)

            senao
                 escreva("Operador nao informado")
fimse
fimse
fimse
fimse
fimse
Fimalgoritmo
