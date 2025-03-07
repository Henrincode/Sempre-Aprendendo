// Você está trabalhando numa aplicação pessoal de controle de despesas.
// Na tela principal dessa aplicação, é possível adicionar produtos ou serviços,
// informando nome, categoria e preço. Uma funcionalidade que você está
// desenvolvendo no momento é a de somar o total das despesas.

// Crie uma função que receba um array de produtos e retorne o total das despesas.

// Exemplos:

// despesasTotais([
//   {nome: "Jornal online", categoria: "Informação", preco: 89.99},
//   {nome: "Cinema", categoria: "Entretenimento", preco: 150}
// ]) // retornará 239.99

// despesasTotais([
//   {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 359.99},
//   {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 3099.99}
// ]) // retornará 3459.98

const despesasTotais = soma => {
    console.log(soma.map(soma => soma.preco)
    .reduce((acumulador, atual) => acumulador + atual, 0).toFixed(2))
}

despesasTotais([
  {nome: "Jornal online", categoria: "Informação", preco: 89.99},
  {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) // retornará 239.99

despesasTotais([
  {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 359.99},
  {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 3099.99}
]) // retornará 3459.98