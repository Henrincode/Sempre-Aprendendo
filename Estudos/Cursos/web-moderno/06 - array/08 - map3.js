// Recriando o método map para entender seu funcionamento
// O método map cria um novo array com os resultados da aplicação de uma função em cada elemento do array original

Array.prototype.map2 = function(callback) {
    const arrayTemp = []; // Criando um array temporário para armazenar os resultados
    // Percorrendo todos os elementos do array
    for (let i = 0; i < this.length; i++) {
        // Aplicando a função callback em cada elemento e armazenando o resultado no arrayTemp
        // Passando como parâmetros:
        // this[i] → o elemento atual
        // i → o índice atual
        // this → o próprio array
        arrayTemp.push(callback(this[i], i, this));
    }
    return arrayTemp; // Retornando o array com os resultados
};

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
];

// Função que converte uma string JSON para um objeto
const paraObjeto = json => JSON.parse(json);

// Função que retorna apenas o preço do produto
const apenasPreco = produto => produto.preco; 

// Utilizando o método map2 para converter as strings JSON em objetos e, em seguida, extrair apenas os preços
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);

// Exibindo o resultado no console: um array com os preços dos produtos
console.log(resultado);