// Agrupar nomes por inicial com reduce()
// Dado um array de nomes, agrupe-os por sua primeira letra.

// const nomes = ["Alice", "Amanda", "Bruno", "Carlos", "César", "Daniel"];

// Saída esperada:
// {
//     A: ["Alice", "Amanda"],
//     B: ["Bruno"],
//     C: ["Carlos", "César"],
//     D: ["Daniel"]
// }

const nomes = ["Alice", "Amanda", "Bruno", "Carlos", "César", "Daniel"];

const grupoNomes = nomes.reduce((grupo, nome) => {
  let letra = nome[0].toUpperCase();
  grupo[letra] = grupo[letra] || [];
  grupo[letra].push(nome);
  return grupo;
}, {});

console.log(grupoNomes);
