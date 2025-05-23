let saldo = 0;

function realizarOperacao() {
    while (true) {
        const operacao = prompt("Escolha uma operação:\n1. Depósito\n2. Saque\n3. Ver Saldo\n4. Sair");

        // Convertendo a operação para número
        const op = parseInt(operacao);
        
        // Usando switch para determinar a operação
        switch (op) {
            case 1: // Depósito
                const valorDeposito = parseFloat(prompt("Digite o valor para depósito:"));
                /**
                 * Fazer a logica de programação para o valor de deposito
                 * Não pode ser nulo o valor 
                 * Não pode ser menor que Zero o valor
                 * Tem que somar no saldo para depois apresentar no extrato
                 */
                if(valorDeposito <= 0){
                    alert("Deposito deve ser maior e diferente de ZERO")
                } else {
                    saldo = saldo + valorDeposito;
                    alert(`Valor do Deposito foi de: R$ ${valorDeposito.toFixed(2)} \nSaldo atual: R$ ${saldo.toFixed(2)}`)
                }
                break;

            case 2: // Saque
                const valorSaque = parseFloat(prompt("Digite o valor para saque:"));
                  /**
                 * Fazer a logica de programação para o valor de Saque
                 * Se não tiver valor em saldo maior ou igual ao valor do saque não permitir
                 * Não pode ser nulo o valor 
                 * Não pode ser menor que Zero o valor
                 * Tem que somar no saldo para depois apresentar no extrato* 
                 */
                if(valorSaque > 0 && valorSaque <= saldo){
                    saldo = saldo - valorSaque;
                    alert(`Valor do Saque foi de: R$ ${valorSaque.toFixed(2)} \nSaldo atual: R$ ${saldo.toFixed(2)}`)
                } else {
                    alert("Saque deve ser menor que saldo e diferente de ZERO")}
                break;

            case 3: // Ver Saldo
                /**Fazer a função para imprimir o saldo na tela */
                alert(`Seu saldo é de R$ ${saldo.toFixed(2)}`);
                break;

            case 4: // Sair
                /**Fazer a função para sair */
                return
            default: // Opção inválida
                /**Validar uma função inválida */
                alert(`Operação não encontrada!! Tente novamente`)
        }
    }
}