// Exemplo de parâmetros variáveis usando o objeto `arguments`
// A função abaixo soma os valores passados como argumentos. 
// O objeto `arguments` é uma coleção dos argumentos fornecidos à função, 
// mesmo que ela não declare parâmetros explicitamente.
function soma() {
    let soma = 0; // Inicializa a variável soma com zero.
    
    // Percorre o objeto `arguments` usando um laço `for/in`
    // `arguments[i]` acessa cada argumento passado à função.
    for (let i in arguments) { 
        soma += arguments[i]; // Adiciona o valor do argumento atual à variável soma.
    }

    return soma; // Retorna o resultado da soma.
}

// Testando a função com diferentes entradas:
console.log(soma()); // Nenhum argumento fornecido: retorna 0.
console.log(soma(1)); // Um argumento fornecido: retorna 1.
console.log(soma(1.1, 2.2, 3.3)); // Argumentos numéricos: soma os valores e retorna 6.6.
console.log(soma(1.1, 2.2, "Teste")); // Combinação de número e string: soma os números e concatena com a string, retornando '3.3000000000000003Teste'.
console.log(soma('a', 'b', 'c')); // Somente strings: concatena todas as strings, retornando 'abc'.