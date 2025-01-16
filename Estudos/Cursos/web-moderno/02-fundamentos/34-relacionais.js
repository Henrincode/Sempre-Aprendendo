// Comparação de Igualdade em JavaScript

// == (Igual): Compara o valor, realizando conversão de tipo se necessário.
// === (Estritamente igual): Compara o valor e o tipo. Não realiza conversão de tipo.

console.log('01)', '1' == 1);  // true - A string '1' é convertida para o número 1 antes da comparação.
console.log('02)', '1' === 1); // false - A string '1' e o número 1 são de tipos diferentes.

// != (Diferente): Oposto de ==.
// !== (Estritamente diferente): Oposto de ===.
console.log('03)', '3' != 3); // false
console.log('04)', '3' !== 3); // true - Tipos diferentes.

// Operadores relacionais: <, >, <=, >=
console.log('05)', 3 < 2); // false
console.log('06)', 3 > 2); // true
console.log('07)', 3 <= 2); // false
console.log('08)', 3 >= 2); // true

// Comparando objetos:
const d1 = new Date(0);
const d2 = new Date(0);
console.log('09)', d1 === d2); // false - Mesmo que representem a mesma data, são objetos diferentes na memória.
console.log('10)', d1 == d2); // false - Mesmo comportamento que === para objetos.
console.log('11)', d1.getTime() === d2.getTime()); // true - Comparando os timestamps (milissegundos desde 1º de janeiro de 1970).

// Valores especiais: undefined e null
console.log('12)', undefined == null); // true - Uma peculiaridade do JavaScript.
console.log('13)', undefined === null); // false - Tipos diferentes.

// Outros exemplos com diferentes tipos de dados:
console.log('14)', true == 1); // true - Booleano true é convertido para o número 1.
console.log('15)', [] == 0); // true - Array vazio é convertido para o número 0.
console.log('16)', {} == 0); // false - Objeto não pode ser convertido para número.