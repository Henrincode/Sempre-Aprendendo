// Escreva uma função que receba um array de números e retornará
// a soma de todos os números desse array.

// Exemplos:

// somarNumeros([10, 10, 10]) // retornará 30
// somarNumeros([15, 15, 15, 15]) // retornará 60

const somarNumeros = numeros => {
    console.log(numeros.reduce((soma, indice) => soma + indice, 0))
}

somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60