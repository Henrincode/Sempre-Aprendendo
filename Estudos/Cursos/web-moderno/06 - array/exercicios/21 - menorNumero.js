// Criar uma função que receba um array de números e retorne
// o menor número desse array.

// Exemplos:

// menorNumero([6, 5, 8, 3]) // retornará 3
// menorNumero([-5, -15, 50, 3]) // retornará -15

const menorNumero = n => console.log(Math.min(...n));

menorNumero([6, 5, 8, 3]) // retornará 3
menorNumero([-5, -15, 50, 3]) // retornará -15