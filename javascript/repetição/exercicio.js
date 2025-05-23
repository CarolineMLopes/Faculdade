
/* IMPRIMIR DE 1 A 10
let i = 1
while(i <=10){
   console.log("Contagem:",i)
   i = i + 1
}
/*


/* SOMA DE 1 A 100
let i = 1
let soma = 0
for (i=1; i<=100; i++){
    soma = soma + i
}
console.log("Soma:", soma)
*/


/* QUANTIDADE DE PARES DE 1 A 20
let n = 0;
for (i = 1; i <= 20; i++){
    if (i % 2 === 0){
        n += 1;
    } 
} console.log("Pares:",n)
*/

/* NUMERO DE 1 A 30
SE N FOR DIV POR 3, ESCREVA MULT 3
SE N FOR DIV POR 5, ESCREVA MULT 5
SE N FOR DIV POR 3 E 5, ESCREVA MULT 3 E 5
SENAO ESCREVA O NUMERO */


//SE N FOR DIV POR 3, ESCREVA MULT 3

for (let i=1; i<=30; i++){
    if (i%3 === 0){
        console.log(i,"é multiplo de 3")}
    else {console.log(i)}
}

/* SE N FOR DIV POR 5, ESCREVA MULT 5

for (let i=1; i<=30; i++){
    if (i%5 === 0){
        console.log(i,"é multiplo de 5")}
}*/

/* SE N FOR DIV POR 3 E 5, ESCREVA MULT 3 E 5
for (let i=1; i<=30; i++){
    if (i%3 === 0 && i%5 === 0){
        console.log(i,"é multiplo de 3 e 5")}
} */

