// Agrupar pessoas por faixa etária
// Descrição: Dado um array de pessoas com nome e idade, agrupe-as em um objeto com três categorias: jovens (até 25 anos), adultos (de 26 a 60 anos) e idosos (acima de 60 anos).

// Entrada:
// [
//     { nome: "Ana", idade: 20 },
//     { nome: "Guilherme", idade: 40 },
//     { nome: "Carlos", idade: 65 }
// ]
// Saída esperada:
// {
//     jovens: [{ nome: "Ana", idade: 20 }],
//     adultos: [{ nome: "Guilherme", idade: 40 }],
//     idosos: [{ nome: "Carlos", idade: 65 }]
// }

// Método recomendado: .reduce()

// Criando array
const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Guilherme", idade: 40 },
  { nome: "Carlos", idade: 65 },
];

// Tratando os dados com o metodo .reduce()
const gruposIdade = pessoas.reduce(
  (grupos, pessoa) => {
    pessoa.idade <= 25
      ? grupos.jovens.push(pessoa)
      : pessoa.idade <= 60
      ? grupos.adultos.push(pessoa)
      : grupos.idosos.push(pessoa);
    return grupos;
  },
  {
    jovens: [],
    adultos: [],
    idosos: [],
  }
);

// Imprime no console
console.log(gruposIdade);
