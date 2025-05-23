let nome = "Matheus"
let idade = 17
let peso = 52
let altura = 1.71
let IMC = peso / (altura * altura)

console.log("\nNOME:", nome, "|", "IDADE:", idade, "\nPESO:", peso, "|", "ALTURA", altura, "\nVALOR DO IMC:", IMC)

if(IMC <= 18.5){
    console.log("\nCONDIÇÃO:", "ABAIXO DO NORMAL")
}else if(IMC <= 24.9){
    console.log("\nCONDIÇÃO", "NORMAL")
}else if(IMC <= 29.9){
    console.log("\nCONDIÇÃO","SOBREPESO")
}else if(IMC <= 34.9){
    console.log("\nCONDIÇÃO","GRAU 1")
}else if(IMC <= 39.9){
    console.log("\nCONDIÇÃO","GRAU 2")
}else if(IMC >= 40){
    console.log("\nCONDIÇÃO","MELHOR IR PRA ACADEMIA")
}

