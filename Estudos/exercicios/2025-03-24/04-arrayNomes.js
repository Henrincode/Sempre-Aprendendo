// Criar um array de nomes
// Descrição: Dado um array de objetos representando pessoas, retorne um array contendo apenas os nomes.

// Entrada:
// [
// { nome: "Ana", idade: 25 },
// { nome: "Guilherme", idade: 30 },
// { nome: "Carlos", idade: 35 }
// ]

// Saída esperada: ["Ana", "Guilherme", "Carlos"]

// Método recomendado: .map()

// Criando array
const pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "Guilherme", idade: 30 },
  { nome: "Carlos", idade: 35 },
];
// Tratando os dados com o metodo .map()
const arrayNomes = pessoas.map((pessoa) => pessoa.nome);
// Imprimindo no console
console.log(arrayNomes);
