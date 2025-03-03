// Exemplo de MAP
const nums = [1, 2, 3, 4, 5];

// Multiplicando cada número por 2 e armazenando no array resultado
let resultado = nums.map(e => e * 2);

// Exibindo o array resultado
console.log(resultado);

// Função que soma 10 a um número
const soma10 = e => e + 10;
// Função que triplica um número
const triplo = e => e * 3;
// Função que converte o número para o formato de moeda
const paraDinheiro = e => `R$ ${e.toFixed(2).replace('.', ',')}`;

// Aplicando as funções soma10, triplo e paraDinheiro em sequência
resultado = resultado.map(soma10).map(triplo).map(paraDinheiro);

// Exibindo o resultado final
console.log(resultado);