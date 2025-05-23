let valorGeral = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let vetorPar = [];
let vetorImpar = [];


for (let i = 0; i < valorGeral.length; i++) {
    if (valorGeral[i] % 2 === 0) {
        vetorPar.push(valorGeral[i])
    } else {
        vetorImpar.push(valorGeral[i])
    }
}

console.log("Pares:", vetorPar)
console.log("Ímpares:", vetorImpar)

