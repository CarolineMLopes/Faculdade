function calcularTotalJS(preco, quantidade){
    return preco * quantidade;
}

document.getElementById("jsBtn").addEventListener('click', function(){
    const preco = document.getElementById('jsPreco').value;
    const quantidade = document.getElementById('jsQtd').value;
    const resultado = calcularTotalJS(preco, quantidade);
    document.getElementById('jsResultado').textContent = 'Resultado: ' + resultado;
});