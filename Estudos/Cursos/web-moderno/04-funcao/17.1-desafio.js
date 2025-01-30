// Desafio proposto pelo professor:
// Criar uma função factory que receba nome e preço como parâmetros e aplique um desconto fixo de 15%.

// Factory function para criar produtos com desconto
const criarProduto = (nome, preco) => {
    // Calcula o preço com desconto de 15%
    const precoComDesconto = preco * 0.85;
    
    // Calcula o valor do desconto aplicado
    const valorDesconto = preco - precoComDesconto;

    // Retorna um objeto com os dados do produto
    return {
        nome, // Nome do produto
        preco, // Preço original
        desconto: 15, // Percentual de desconto aplicado
        precoComDesconto, // Preço final após o desconto
        valorDesconto // Valor do desconto em dinheiro
    };
};

// Array para armazenar os produtos criados
const produtos = [];

// Adiciona produtos ao array usando a função factory
produtos.push(criarProduto('Pera', 10));
produtos.push(criarProduto('Laranja', 3));
produtos.push(criarProduto('Banana', 4.75));
produtos.push(criarProduto('Tomate', 8.75));

// Exibe a lista de produtos no console
console.log(produtos);