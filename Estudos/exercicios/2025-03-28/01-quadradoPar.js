// Transformar array de números com map()
// Dado um array de números, crie um novo array onde cada número seja elevado ao quadrado somente se for par.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Saída esperada: [4, 16, 36, 64, 100]

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ehPar = n => n % 2 === 0;
const aoQuadrado = n => n * n;

const quadradoPar = numeros.filter(ehPar).map(aoQuadrado);

console.log(quadradoPar);
