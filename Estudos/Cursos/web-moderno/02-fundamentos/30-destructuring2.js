// Destructuring em array

// O destructuring é uma forma de extrair dados de arrays ou objetos e atribuí-los a variáveis 
// de maneira prática, usando uma sintaxe especial.

// Exemplo básico de destructuring com array
const [a] = [10]; 
// Aqui, estamos extraindo o primeiro valor do array [10] e atribuindo à variável 'a'.
console.log(a); // Saída: 10

// Extração múltipla com posições específicas e valores padrão
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]; 
// O destructuring permite "pular" posições ao ignorar espaços com vírgulas. 
// Se uma variável não tiver um valor correspondente no array, podemos definir um valor padrão (n6 = 0).
console.log(n1, n3, n5, n6); 
// Saída: 10 9 undefined 0

// Extração de valores aninhados em arrays
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]; 
// Aqui, ignoramos o primeiro elemento do array externo e acessamos o segundo elemento do array interno. 
// Em outras palavras:
// - Primeiro ignoramos o primeiro array inteiro (,)
// - Depois acessamos o segundo array ([9, 6, 8]) e o segundo elemento (6).
console.log(nota); // Saída: 6