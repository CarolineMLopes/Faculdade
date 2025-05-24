var _a;
function calcularTotalTS(preco, quantidade) {
    return preco * quantidade;
}
(_a = document.getElementById('tsBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    try {
        var precoInput = document.getElementById('tsPreco');
        var qtdInput = document.getElementById('tsQtd');
        var preco = Number(precoInput.value);
        var quantidade = Number(qtdInput.value);
        if ((isNaN(preco)) || isNaN(quantidade)) {
            throw new Error("Erro de tipo: os valores devem ser números!");
        }
        var resultado = calcularTotalTS(preco, quantidade);
        var resultadoElement = document.getElementById('tsResultado');
        var erroElement = document.getElementById('tsErro');
        if (resultadoElement && erroElement) {
            resultadoElement.textContent = 'Resultado: ' + resultado;
            erroElement.textContent = "";
        }
    }
    catch (error) {
        var erroElement = document.getElementById('tsErro');
        if (erroElement && error instanceof Error) {
            erroElement.textContent = error.message;
        }
    }
});
