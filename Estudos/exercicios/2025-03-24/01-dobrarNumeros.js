// Dobrar os números
// Descrição: Dado um array de números, retorne um novo array onde cada número foi dobrado.

// Entrada: [1, 2, 3, 4, 5]
// Saída esperada: [2, 4, 6, 8, 10]

// Método recomendado: .map()

// Criando array
const numeros = [1, 2, 3, 4, 5];
// Tratando os dados com o metodo .map()
const dobrarNumeros = numeros.map((n) => n * 2);
// Imprimindo os dados no console
console.log(dobrarNumeros);
