// Somar todos os números
// Descrição: Dado um array de números, retorne a soma de todos os números.

// Entrada: [1, 2, 3, 4, 5]
// Saída esperada: 15

// Método recomendado: .reduce()

// Criando array
const numeros = [1, 2, 3, 4, 5];

// Tratando os dados com o metodo .reduce()
const somarNumeros = numeros.reduce((soma, numero) => soma + numero, 0);

// Imprimindo no console.
console.log(somarNumeros);
