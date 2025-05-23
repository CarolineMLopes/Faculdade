let nota = [8, 5, 9, 7, 3, 10, 4, 6, 2, 8]

let mediaNota = calcMediaNota(nota)
let aprovNota = calcAprovNota(nota)
let reproNota = calcReproNota(nota)

function calcMediaNota(nota){
    let soma = 0;
    for (let i = 0; i < nota.length; i++){
        soma = soma + nota[i]
    } 
    return soma / nota.length;
}

function calcAprovNota(nota){
    let aprovados = 0;
    for( let i = 0; i < nota.length; i++){
        if(nota[i] >= 6){
            aprovados++
        }
    } return aprovados

}

function calcReproNota(nota){
    let reprovados = 0;
    for( let i = 0; i < nota.length; i++){
        if(nota[i] < 6){
            reprovados++
        }
    } return reprovados

}

console.log(`Media dos alunos é de: ${mediaNota}`)
console.log(`Quantidade de alunos aprovados é de: ${aprovNota}`)
console.log(`Quantidade de alunos reprovados é de: ${reproNota}`)