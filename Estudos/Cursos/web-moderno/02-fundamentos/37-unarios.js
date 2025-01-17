// Operadores unários são operadores que atuam sobre um único operando.
// No JavaScript, os operadores unários mais comuns são o incremento (++) e o decremento (--).
// Eles são utilizados para aumentar ou diminuir o valor de uma variável em uma unidade.

// Exemplo de Operadores Unários

let num1 = 1; // Inicializa num1 com o valor 1
let num2 = 2; // Inicializa num2 com o valor 2

// Incremento pós-fixado: o valor de num1 é retornado antes de ser incrementado.
console.log('01)', num1++); 
// Saída: 1 (num1 ainda é 1 no momento da impressão, mas depois é incrementado para 2)

// Decremento pré-fixado: o valor de num1 é decrementado antes de ser retornado.
console.log('02)', --num1); 
// Saída: 1 (num1 foi incrementado para 2 anteriormente, mas aqui é decrementado antes de ser retornado)

// Comparação com incremento pré-fixado (++num1) e decremento pós-fixado (num2--).
console.log('03)', ++num1 === num2--); 
// Explicação:
// - ++num1 incrementa num1 para 2 antes da comparação.
// - num2 (2) é usado na comparação e só depois decrementado para 1.
// - Resultado: true (2 === 2 na comparação).

// Comparação após as operações de incremento e decremento terem sido aplicadas.
console.log('04)', num1 === num2); 
// Saída: false (num1 é 2, e num2 foi decrementado para 1).

// Observação:
// - Pré-incremento (++variável) ou pré-decremento (--variável): atualiza o valor antes de usá-lo na expressão.
// - Pós-incremento (variável++) ou pós-decremento (variável--): usa o valor atual na expressão e atualiza a variável depois.