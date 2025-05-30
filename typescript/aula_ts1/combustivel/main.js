function calcularDespesa(distancia, precoLitro, autonomia) {
    if (autonomia <= 0) {
        throw new Error("A autonomia deve ser maior que zero");
    }
    return (distancia / autonomia) * precoLitro;
}
window.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('calcForm');
    var resultadoDiv = document.getElementById('resultado');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var distancia = parseFloat(document.getElementById('distancia').value);
        var preco = parseFloat(document.getElementById('preco').value);
        var autonomia = parseFloat(document.getElementById('autonomia').value);
        try {
            var valor = calcularDespesa(distancia, preco, autonomia);
            resultadoDiv.textContent = "Custo estimado da viagem: R$ ".concat(valor.toFixed(2));
        }
        catch (err) {
            resultadoDiv.textContent = err.message;
        }
    });
});
