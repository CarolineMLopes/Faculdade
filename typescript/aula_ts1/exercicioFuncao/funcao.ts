// Tipagem básica de função
function soma(a: number, b:number): number{
    return a + b;
}

// Parâmetro opcionais
function saudacao(nome: string, titulo?: string): string{
    if(titulo){
        return `Olá, ${titulo} ${nome}!`;
    }

    return `Olá, ${nome}`;
}

console.log(saudacao("Maria"));
console.log(saudacao("Silva", "Dr"));

// Paâmetros padrão
function criarElemento(tipo: string, texto:string, classes: string = ""): string{
    return `<${tipo} class="${classes}"> ${texto}</${tipo}>`
}

console.log(criarElemento("div","Conteúdo")); // <div class="">Conteúdo</div>
console.log(criarElemento("button","Clique","btn")); // <button class="btn">Clique</button> 

// Rest parameters
function somarTodos(...numeros: number[]): number{
    return numeros.reduce((total,n) => total + n, 0);
}

console.log(somarTodos(1, 2, 3, 4, 5));

// Function type
type OperacaoMatematica = (x: number, y:number) => number;

const adicao: OperacaoMatematica = (a,b) => a + b;
const subtracao: OperacaoMatematica = (a,b) => a - b;

console.log(adicao(10,5)); 
console.log(subtracao(10,5));