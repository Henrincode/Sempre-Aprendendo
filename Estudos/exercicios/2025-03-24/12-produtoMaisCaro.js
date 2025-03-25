// Encontrar o produto mais caro
// Descrição: Dado um array de produtos com nome e preço, retorne o objeto do produto mais caro.

// Entrada:
// [
//     { nome: "Teclado", preco: 100 },
//     { nome: "Mouse", preco: 50 },
//     { nome: "Monitor", preco: 700 }
// ]
// Saída esperada: { nome: "Monitor", preco: 700 }

// Método recomendado: .reduce()

// Criando array
const produtos = [
  { nome: "Teclado", preco: 100 },
  { nome: "Mouse", preco: 50 },
  { nome: "Monitor", preco: 700 },
];

// Tratando dados com metodo .reduce()
const produtoMaisCaro = produtos.reduce(
  (maisCaro, produto) => (maisCaro.preco > produto.preco ? maisCaro : produto),
  {}
);

// Imprime no console
console.log(produtoMaisCaro);
