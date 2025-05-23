const livro = {
    titulo:" JavaScript: O Guia Definitivo",
    autor:"David Flanagan",
    anoPublicado: 2020,
    emprestado: false,
    emprestar: function(){
        this.emprestado = true;
    },
    devolver: function(){
        this.emprestado = false;
    }
};

console.log(`Livro: ${livro.titulo}, Autor: ${livro.autor}`)
console.log(`Status:`, livro.emprestado)