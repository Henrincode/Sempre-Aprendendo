// Este arquivo contém exemplos de operações matemáticas em JavaScript.
// Vamos explorar os diferentes operadores e seu uso.

// Incremento:
// d++    -> Pós-incremento: Incrementa +1 após a avaliação da variável.
// ++d    -> Pré-incremento: Incrementa +1 antes da avaliação da variável.

// Operações com operadores:
// a + d  -> Operador infixo: Soma ou concatenação, dependendo do tipo dos operandos.
// -d     -> Operador unário: Inverte o sinal de um número (positivo para negativo, ou negativo para positivo).

// Desestruturação de um array para inicializar variáveis:
let [a, b, c, d] = [-3, 5, 1, 15]; 

// Operações matemáticas básicas:
const soma = a + b + c + d;       // Soma de todas as variáveis.
const subtracao = d - b;          // Subtração de 'd' por 'b'.
const multiplicacao = a * b;      // Multiplicação de 'a' por 'b'.
const divisao = d / a;            // Divisão de 'd' por 'a'.
const modulo = a % 2;             // Resto da divisão de 'a' por 2.

// Exibindo os resultados no console:
console.log(soma, subtracao, multiplicacao, divisao, modulo); 