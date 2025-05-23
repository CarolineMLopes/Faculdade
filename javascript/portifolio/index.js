let operador = prompt("Escolha entre: materia ou media geral")

if (operador === "matematica"){
    matematica()
} else if (operador === "portugues"){
    portugues()
} else if (operador === "biologia"){
    biologia()
} else if (operador === "artes"){
    artes()
} else if (operador === "media geral"){
    mediageral()
}

else {
    alert("Matéria não encontrada")
}


function matematica (){
    let mat1 = parseInt(prompt("Informe a nota da Primeira Prova"))
    let mat2 = parseInt(prompt("Informe a nota de Segunda Prova"))
    let media = (mat1 + mat2)/2
    alert ("Média de Matemática é " + media)
}
function portugues() {
    let por1 = parseInt(prompt("Informe a nota da Primeira Prova"))
    let por2 = parseInt(prompt("Informe a nota de Segunda Prova"))
    let media = (por1 + por2)/2
    alert ("Média de Português é " + media)
}
function biologia() {
    let bio1 = parseInt(prompt("Informe a nota da Primeira Prova"))
    let bio2 = parseInt(prompt("Informe a nota de Segunda Prova"))
    let media = (bio1 + bio2)/2
    alert ("Média de Biologia é " + media)
}
function artes() {
    let art1 = parseInt(prompt("Informe a nota da Primeira Prova"))
    let art2 = parseInt(prompt("Informe a nota de Segunda Prova"))
    let media = (art1 + art2)/2
    alert ("Média de Artes é " + media)
}
function mediageral() {
    let mat = parseInt(prompt("Informe a media de Matemática"))
    let por = parseInt(prompt("Informe a media de Português"))
    let bio = parseInt(prompt("Informe a media de Biologia"))
    let art = parseInt(prompt("Informe a nota de Artes"))
    let media = (mat + por + bio + art)/4
    alert ("Média Geral é " + media)
}

