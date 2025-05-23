console.log('Iniciando...')
setTimeout(()=>{
    console.log('Mensagem após 5 segundos')
},
    5000
)

setTimeout(()=>{
    console.log('Mensagem após 3 segundos')
},
    3000
)

setTimeout(() => {
   console.log('Mensagem após 7 segundos') 
}, 
    7000
)

console.log('Finalizando...')

/*
()=>{} é igual a

function teste(){
    console.log('Mensagem após 5 segundos')
}
*/

/* 
seTimeout('o que voce quer', 'por quanto tempo')
*/
