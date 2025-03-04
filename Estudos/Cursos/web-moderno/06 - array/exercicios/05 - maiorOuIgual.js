// Crie uma função que receba dois números e retorne se o
// primeiro é maior ou igual ao segundo.

// Exemplos:

// maiorOuIgual(0, 0) // retornará true
// maiorOuIgual(0, "0") // retornará false
// maiorOuIgual(5, 1) // retornará false

const maiorOuIgual = (n1, n2) => console.log(typeof n1 === typeof n2 && n1 >= n2);

maiorOuIgual(0, 0)
maiorOuIgual(0, "0")
maiorOuIgual(5, 1)