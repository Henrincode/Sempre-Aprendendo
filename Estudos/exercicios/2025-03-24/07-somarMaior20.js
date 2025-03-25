// Somar todos os preços acima de R$20
// Descrição: Dado um array de preços, some apenas os valores acima de R$20.

// Entrada: [10, 25, 30, 15, 50]
// Saída esperada: 105

// Método recomendado: .filter() + .reduce()

// Criando array
const precos = [10, 25, 30, 15, 50];

// Tratando os dados com .filter() e .reduce()
const somarMaior20 = precos
  .filter((preco) => preco > 20)
  .reduce((soma, preco) => soma + preco);

// Imprimindo no console
console.log(somarMaior20);
