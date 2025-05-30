// Tipagem básica de função
function soma(a, b) {
    return a + b;
}
// Parâmetro opcionais
function saudacao(nome, titulo) {
    if (titulo) {
        return "Ol\u00E1, ".concat(titulo, " ").concat(nome, "!");
    }
    return "Ol\u00E1, ".concat(nome);
}
console.log(saudacao("Maria"));
console.log(saudacao("Silva", "Dr"));
// Paâmetros padrão
function criarElemento(tipo, texto, classes) {
    if (classes === void 0) { classes = ""; }
    return "<".concat(tipo, " class=\"").concat(classes, "\"> ").concat(texto, "</").concat(tipo, ">");
}
console.log(criarElemento("div", "Conteúdo")); // <div class="">Conteúdo</div>
console.log(criarElemento("button", "Clique", "btn")); // <button class="btn">Clique</button> 
// Rest parameters
function somarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (total, n) { return total + n; }, 0);
}
console.log(somarTodos(1, 2, 3, 4, 5));
var adicao = function (a, b) { return a + b; };
var subtracao = function (a, b) { return a - b; };
console.log(adicao(10, 5));
console.log(subtracao(10, 5));
