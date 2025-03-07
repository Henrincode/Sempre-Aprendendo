// Desenvolva uma função que receba como parâmetro um número de 1 a 10.
// Internamente, na função, será gerado um numero aleatório de 1 a 10.
// A função deverá retornar se o parâmetro de entrada foi igual ao
// numero sorteado internamente. Se o valor fornecido foi sorteado,
// retorne "Parabéns! O numero sorteado foi o X". Se não for igual,
// retorne "Que pena! O numero sorteado foi o X, X é o numero que foi sorteado.

// Exemplos:

// funcaoDaSorte(3) // retornará "Parabéns! o numero sorteado foi o 3"
// funcaoDaSorte(5) // retornará "Que pena! o numero sorteado foi o 3"
// funcaoDaSorte(5) // retornará "Que pena! o numero sorteado foi o 1"

const funcaoDaSorte = n => {
    const min = 1;
    const max = 10;
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log(n === numeroAleatorio ?
    `Parabéns! O numero sorteado foi o ${numeroAleatorio}`:
    `Que pena! O numero sorteado foi o ${numeroAleatorio}`)
};

funcaoDaSorte(3);
funcaoDaSorte(5);
funcaoDaSorte(5);