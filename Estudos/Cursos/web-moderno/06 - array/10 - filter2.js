// Criando um método personalizado chamado filter2 para o objeto Array usando prototype
// Prototype permite adicionar novos métodos a objetos já existentes no JavaScript

Array.prototype.filter2 = function(callback) {
    // Criando um novo array para armazenar os elementos que satisfazem a condição
    const novoArray = [];

    // Percorrendo todos os elementos do array usando um laço for
    for (let i = 0; i < this.length; i++) {
        // Chamando a função callback para verificar se o elemento deve ser incluído no novo array
        // Passando como parâmetros:
        // this[i] → o elemento atual
        // i → o índice atual
        // this → o próprio array
        if (callback(this[i], i, this)) {
            // Adicionando o elemento atual ao novo array se a função callback retornar true
            novoArray.push(this[i]);
        }
    }

    // Retornando o novo array contendo apenas os elementos filtrados
    return novoArray;
};

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
];

// Função para verificar se o produto é caro (preço maior ou igual a 500)
const caro = produto => produto.preco >= 500;

// Função para verificar se o produto é frágil
const fragil = produto => produto.fragil;

// Usando o método personalizado filter2 para filtrar produtos caros e frágeis
console.log(produtos.filter2(caro).filter2(fragil)); // Exibe os produtos que são caros e frágeis