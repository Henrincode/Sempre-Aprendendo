// Calcular a média ponderada das notas de alunos
// Descrição: Dado um array de alunos com nota e peso, retorne a média ponderada.

// Entrada:
// [
//     { nota: 8, peso: 2 },
//     { nota: 6, peso: 1 },
//     { nota: 9, peso: 3 }
// ]
// Saída esperada: 8.1667 (arredondado para quatro casas decimais)

// Método recomendado: .reduce()

// Criando array
const notas = [
  { nota: 8, peso: 2 },
  { nota: 6, peso: 1 },
  { nota: 9, peso: 3 },
];

// Tratando os dados com o metodo .reduce()
const mediaPonderada = (
  notas.reduce((media, notas) => media + notas.nota * notas.peso, 0) /
  notas.reduce((soma, notas) => soma + notas.peso, 0)
).toFixed(4);
// Imprime no console
console.log(mediaPonderada);
