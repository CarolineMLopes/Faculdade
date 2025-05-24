function calcularTotalTS(preco: number, quantidade: number): number{
    return preco * quantidade;
}

document.getElementById('tsBtn')?.addEventListener('click', function(){
    try{
        const precoInput = document.getElementById('tsPreco') as HTMLInputElement;
        const qtdInput = document.getElementById('tsQtd') as HTMLInputElement;

        const preco = Number(precoInput.value);
        const quantidade = Number(qtdInput.value);

        if((isNaN(preco)) || isNaN(quantidade)){
            throw new Error("Erro de tipo: os valores devem ser números!");
        }
        
        const resultado = calcularTotalTS(preco, quantidade);

        const resultadoElement = document.getElementById('tsResultado');
        const erroElement = document.getElementById('tsErro');

        if (resultadoElement && erroElement){
            resultadoElement.textContent = 'Resultado: ' + resultado;
            erroElement.textContent = "";
        }
    } catch (error){
        const erroElement = document.getElementById('tsErro');
        if(erroElement && error instanceof Error){
            erroElement.textContent = error.message;
        }
    }
});