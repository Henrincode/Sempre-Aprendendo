// Encontrar o produto mais caro com reduce()
// Dado um array de produtos, encontre aquele com o maior preço.

// const produtos = [
//     { nome: "Monitor", preco: 1200 },
//     { nome: "Teclado", preco: 200 },
//     { nome: "Cadeira Gamer", preco: 850 },
//     { nome: "Placa de Vídeo", preco: 3200 },
// ];

// Saída esperada: { nome: "Placa de Vídeo", preco: 3200 }

const produtos = [
  { nome: "Monitor", preco: 1200 },
  { nome: "Teclado", preco: 200 },
  { nome: "Cadeira Gamer", preco: 850 },
  { nome: "Placa de Vídeo", preco: 3200 },
];

const produtoMaisCaro = produtos.reduce(
  (produtoMaisCaro, produto) =>
    produtoMaisCaro.preco > produto.preco ? produtoMaisCaro : produto,
  -Infinity
);

console.log(produtoMaisCaro);
