// Criar uma lista formatada de nomes e idades
// Descrição: Dado um array de objetos com nome e idade, retorne um array com strings formatadas no estilo "Nome tem X anos".

// Entrada:
// [
//     { nome: "Ana", idade: 25 },
//     { nome: "Guilherme", idade: 30 }
// ]
// Saída esperada: ["Ana tem 25 anos", "Guilherme tem 30 anos"]

// Método recomendado: .map()

// Criando array
const pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "Guilherme", idade: 30 },
];

// Tratando os dados com o metodo .map()
const listaFormatada = pessoas.map(
  (pessoa) => `${pessoa.nome} tem ${pessoa.idade} anos`
);

// Imprimindo no console
console.log(listaFormatada);
