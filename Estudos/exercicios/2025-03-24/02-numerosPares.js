// Filtrar números pares
// Descrição: Dado um array de números, retorne um novo array contendo apenas os números pares.

// Entrada: [1, 2, 3, 4, 5, 6]
// Saída esperada: [2, 4, 6]

// Método recomendado: .filter()

// Criando array
const numeros = [1, 2, 3, 4, 5, 6];
// Tratando os dados com o metodo .filter()
const numerosPares = numeros.filter((n) => n % 2 === 0);
// Imprimindo os dados no console
console.log(numerosPares);
