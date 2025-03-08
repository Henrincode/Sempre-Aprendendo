// Crie uma função que receba um array de números e retorna o segundo
// maior número presente nesse array.

// Exemplos:

// segundoMaior([12, 16, 1, 5]) // retornará 12
// segundoMaior([8, 4, 5, 6]) // retornará 6

const segundoMaior = numeros => console.log(numeros.sort((a , b) => b - a)[1]);


segundoMaior([12, 16, 1, 5]); // retornará 12
segundoMaior([8, 4, 5, 6]); // retornará 6