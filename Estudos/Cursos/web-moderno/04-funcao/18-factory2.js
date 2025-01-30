// Desafio resolvido versão do professor

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1 // no caso 10%
    };
};

console.log(criarProduto('Notebook', 2199.49));
console.log(criarProduto('iPad', 1199.49));