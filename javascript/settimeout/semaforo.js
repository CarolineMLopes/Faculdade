function semaforo(estado){
    switch(estado){
        case 'VERMELHO':
            statusCor('VERMELHO')
            setTimeout(()=> {
                semaforo('VERDE')
            },4000)            
            break;
        
        case 'AMARELO':
            statusCor('AMARELO')
            setTimeout(() => {
                semaforo('VERMELHO')
            },2000)
            break;
        
        case 'VERDE':
            statusCor('VERDE')
            setTimeout(() => {
                semaforo('AMARELO')
            },6000)
            break;
        
        default:
            console.log('COR NÃO ENCONTRADA')
            break;
    }
} 

function statusCor(cor){
    if(cor === 'VERMELHO'){
        console.log('VERMELHO - ATIVO')
        console.log('AMARELO  - ******')
        console.log('VERDE    - ******')
        console.log('*****************')
    }
    
    else if(cor === 'AMARELO'){
        console.log('VERMELHO - ******')
            console.log('AMARELO  -  ATIVO')
            console.log('VERDE    - ******')
            console.log('*****************')
    }

    else if(cor === 'VERDE'){
        console.log('VERMELHO - ******')
        console.log('AMARELO  - ******')
        console.log('VERDE    -  ATIVO')
        console.log('*****************')
    }
}

semaforo('VERMELHO')
