// Desenvolva uma função que receba dois números inteiros não negativos
// (maiores ou iguais a zero) e realize a multiplicação deles. Porém,
// não utilize o operador de multiplicação.

// Exemplo:
// multiplicar(5, 5) // retornará 25
// multiplicar(0, 7) // retornará 0

const multiplicar = (n1, n2) => {
    let soma = 0;
    for(let i = 0; i < n2; i++) soma += n1;
    console.log(soma);
}

multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0