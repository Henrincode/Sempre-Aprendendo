// Criando um método personalizado chamado forEach2 para o objeto Array usando prototype
// Prototype permite adicionar novos métodos a objetos já existentes no JavaScript

Array.prototype.forEach2 = function(callback) {
    // Percorrendo todos os elementos do array usando um laço for
    for (let i = 0; i < this.length; i++) {
        // Chamando a função callback para cada elemento do array
        // Passando como parâmetros:
        // this[i] → o elemento atual
        // i → o índice atual
        // this → o próprio array
        callback(this[i], i, this);
    }
};

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

// Usando o método personalizado forEach2 para percorrer o array aprovados
aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`); // Exibindo o índice + 1 e o nome
});