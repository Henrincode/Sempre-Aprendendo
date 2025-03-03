// Criando um array de objetos chamado produtos, representando produtos com nome, preço e se são frágeis ou não
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
];

// Função que verifica se o produto é caro (preço maior ou igual a 500)
const caro = produto => produto.preco >= 500;
// Função que verifica se o produto é frágil (propriedade fragil é verdadeira)
const fragil = produto => produto.fragil;

// Usando o método filter para filtrar produtos caros e frágeis
// Primeiro filtra os produtos caros, depois os frágeis
console.log(produtos.filter(caro).filter(fragil));

// O método filter() cria um novo array contendo apenas os elementos que passam no teste da função de callback
// No primeiro filter(caro), ele retorna apenas os produtos com preço maior ou igual a 500
// No segundo filter(fragil), ele retorna apenas os produtos que têm a propriedade fragil como true