//função com tipagem

function calcularTotal(preco: number, quantidade: number): number{
    return preco * quantidade;
}

var res;
console.log("-- testes da função --");
res = calcularTotal(10, 4);
console.log("uso correto: ", res);

// uso incorreto 
// console.log("uso correto: ", calcularTotal("oi", 5));