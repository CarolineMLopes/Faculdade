function soma(a: number, b:number): number{
    return a + b;
}

function saudacao(nome: string, titulo?: string): string{
    if(titulo){
        return `Olá, ${titulo} ${nome}!`;
    }

    return `Olá, ${nome}`;
}

console.log(saudacao("Maria"));
console.log(saudacao("Silva", "Dr"));

function criarElemento(tipo: string, texto:string, classes: string = ""): string{
    return `<${tipo} class="${classes}"> ${texto}</${tipo}>`
}

