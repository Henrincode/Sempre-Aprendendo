// Calcular a média das idades
// Descrição: Dado um array de objetos com nome e idade, retorne a média das idades.

// Entrada:
// [
//     { nome: "Ana", idade: 20 },
//     { nome: "Bruno", idade: 40 },
//     { nome: "Carlos", idade: 30 }
// ]
// Saída esperada: 30

// Método recomendado: .reduce()

// Criando array
const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Bruno", idade: 40 },
  { nome: "Carlos", idade: 30 },
];

// Tratando dados com o metodo .reduce()
const mediaIdade =
  pessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0) / pessoas.length;

// Imprimindo no console
console.log(mediaIdade);
