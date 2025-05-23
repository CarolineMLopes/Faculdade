// pegar a idade da pessoa
// se idade maior igual a 0 e menor que 15
//     |-> nao pode votar
// senão se idade maior ou igual a 16 e menor que 50
//     |-> pode votar fila normal
// senão se idade maior ou igual a 50 e menor 70
//     |-> pode votar em fila preferencial
// senão se idade maior ou igual a 70
//     |-> nao precisa votar

// alert('Pagina com JavaScript')

let idade = parseInt(prompt('Informe a idade'))
console.log("Idade informada: ", idade)

if(idade >=0 && idade <15){
    console.log('Não pode votar');
} 
else if(idade >=16 && idade <50){
    console.log('Pode votar em fila normal')
}
else if(idade >=50 && idade < 70){
    console.log('Pode votar em fila preferencial')
}
else if(idade >=70){
    console.log('Não precisa votar')
}
else {
    console.log('Idade inválida')}
