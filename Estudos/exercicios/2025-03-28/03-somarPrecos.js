// Somar preços de produtos com reduce()
// Dado um array de produtos com nome e preço, calcule o total dos preços.

// const produtos = [
//   { nome: "Celular", preco: 1500 },
//   { nome: "Notebook", preco: 3500 },
//   { nome: "Mouse", preco: 150 },
// ];

// Saída esperada: 5150

const produtos = [
  { nome: "Celular", preco: 1500 },
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 150 },
];

const somarPrecos = produtos.reduce((soma, { preco }) => soma + preco, 0);

console.log(somarPrecos);
