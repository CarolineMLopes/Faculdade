// union types - permite que uma variavel aceite múltiplos tipos
let codigo: string | number;
codigo = "ABC123"; // válido
codigo = 123456; //também válido
// codigo = true; --> este vai dar error

// type aliases = criar nomes para tipos complexos
type Identificador = string | number;
type Coordenada = {x:number; y:number};

let id: Identificador = "user_123";
let posicao: Coordenada = {x:10, y:20};

// outro exemplo útil
type StatusHttp = 200 | 404 | 500;
let resposta: StatusHttp = 200;
// let respostaInvalida: StatusHttp = 302; --> Vai ocorrer error