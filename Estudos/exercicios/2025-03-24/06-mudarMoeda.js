// Transformar preços para outra moeda
// Descrição: Dado um array de preços em reais, converta todos os valores para dólares (suponha que 1 real = 0.20 dólares).

// Entrada: [10, 50, 100]
// Saída esperada: [2, 10, 20]

// Método recomendado: .map()

// Criando variável real para dólar
const realDolar = 0.2;

// Criando array
const precoReal = [10, 50, 100];

// Tratando os dados com o metodo .map()
const precoDolar = precoReal.map((preco) => preco * realDolar);

// Imprimindo no console
console.log(precoDolar);
