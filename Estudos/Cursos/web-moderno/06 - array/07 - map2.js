// Desafio: converter uma string JSON em um objeto e retornar um array contendo apenas os preços

// Definindo um array de strings JSON, onde cada elemento representa um produto
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
];

// Função para converter uma string JSON em objeto
// JSON.parse() "JSON.analisar" converte a string JSON em um objeto JavaScript
const paraObjeto  = json => JSON.parse(json); 

// Função para extrair o preço de um produto
// A função retorna a propriedade 'preco' do objeto produto
const apenasPreco = produto => produto.preco; 

// Usando o método map() para transformar os elementos do array de strings JSON em objetos e, em seguida, extrair os preços
// O método map() cria um novo array aplicando uma função a cada elemento do array original
const resultado = carrinho.map(paraObjeto).map(apenasPreco);

console.log(resultado); // Exibe o array com os preços: [3.45, 13.90, 41.22, 7.50]