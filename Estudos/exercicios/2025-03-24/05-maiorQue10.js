// Contar elementos maiores que 10
// Descrição: Dado um array de números, retorne a quantidade de números maiores que 10.

// Entrada: [5, 12, 8, 20, 30, 4]
// Saída esperada: 3

// Método recomendado: .filter() e .length

// Criando array
const numeros = [5, 12, 8, 20, 30, 4];
// Tratando os dados com o metodo .filter() e propriedade .length
const maiorQue10 = numeros.filter((n) => n > 10).length;
// Imprimindo no console
console.log(maiorQue10);
