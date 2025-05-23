/*
- Criar uma variavel para recever o operador()
    receber o operador (+,-,/,*)
- Criar duas variaveis para receber o valor
- Criar a validação do switch case, 
    após terminar o processo, colocar ele em uma estrutura de repetição 
    que deve perguntar se deseja inserir novamente o operador ou sair da operação (while)
*/


    let continuar = prompt("Deseja continuar? (S/N)")
    let calcular = prompt("Informe o operador")
    let valor1 = parseInt(prompt("Informe o valor 1"))
    let valor2 = parseInt(prompt("Informe o valor 2"))
    
    
    while (continuar = "S"){
    switch (calcular) {
        case "+": 
            calcular = valor1 + valor2;
            console.log("Soma:",calcular)
        break
        case "-":
            calcular = valor1 - valor2;
            console.log("Subtração:",calcular)
        break
        case "/":
            calcular = valor1 / valor2;
            console.log("Divisão:",calcular)
        break
        case "*":
            calcular = valor1 * valor2;
            console.log("Multiplicação:",calcular)
        break
        default:
            console.log("Operador inválido. Tente novamente.")
        
    } 
} 

