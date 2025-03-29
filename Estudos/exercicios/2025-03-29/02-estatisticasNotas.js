// Criar estatísticas de notas com reduce()
// Dado um array de notas de alunos, retorne um objeto com:

// A média das notas
// A maior nota
// A menor nota

// const notas = [7.5, 8.2, 6.9, 9.1, 5.4, 8.8, 10];

// Saída esperada:
// {
//     media: 7.99,
//     maiorNota: 10,
//     menorNota: 5.4
// }

const notas = [7.5, 8.2, 6.9, 9.1, 5.4, 8.8, 10];

let estatisticasNotas = notas.reduce(
  (grupo, nota) => {
    grupo.soma += nota;
    grupo.maiorNota = Math.max(grupo.maiorNota, nota);
    grupo.menorNota = Math.min(grupo.menorNota, nota);
    return grupo;
  },
  { soma: 0, maiorNota: -Infinity, menorNota: Infinity }
);

estatisticasNotas.media = (estatisticasNotas.soma / notas.length).toFixed(2);
delete estatisticasNotas.soma;

console.log(estatisticasNotas);
