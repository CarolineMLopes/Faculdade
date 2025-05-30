function calcularDespesa(distancia: number, precoLitro: number, autonomia: number): number {
    if (autonomia <= 0) {
        throw new Error("A autonomia deve ser maior que zero");
    }
    return (distancia / autonomia) * precoLitro;
}

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calcForm') as HTMLFormElement;
    const resultadoDiv = document.getElementById('resultado') as HTMLDivElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const distancia = parseFloat((document.getElementById('distancia') as HTMLInputElement).value);
        const preco = parseFloat((document.getElementById('preco') as HTMLInputElement).value);
        const autonomia = parseFloat((document.getElementById('autonomia') as HTMLInputElement).value);

        try {
            const valor = calcularDespesa(distancia, preco, autonomia);
            resultadoDiv.textContent = `Custo estimado da viagem: R$ ${valor.toFixed(2)}`;
        } catch (err) {
            resultadoDiv.textContent = (err as Error).message;
        }
    });
});