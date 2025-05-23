let frutas = ['Maça', 'Banana', 'Laranja']
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])

// Modificar o elemento
frutas[1] = 'Manga'
console.log(frutas)

// Adicionando elemento no FINAL
frutas.push('Abacaxi')
console.log(frutas)

// Adicionando elemento no COMEÇO
frutas.unshift('Morango')
console.log(frutas)

// Remove o ULTIMO elemento
frutas.pop()
console.log(frutas)

// Remove o PRIMEIRO elemento
frutas.shift()
console.log(frutas)

// Mostrar o TAMANHO do vetor
console.log(frutas.length)