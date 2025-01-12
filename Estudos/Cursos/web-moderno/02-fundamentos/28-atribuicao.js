// Aqui estou aprendendo sobre atribuições com operações aritméticas.

// Declaro uma constante 'a' com o valor 7.
const a = 7;
// Declaro uma variável 'b' com o valor 3.
let b = 3;

// Atribuição aditiva:
// Estou usando o operador `+=`, que adiciona o valor de 'a' a 'b'.
// Isso é equivalente a: b = b + a.
b += a;
console.log(b); // Aqui o resultado é 10, porque 3 + 7 = 10.

// Atribuição subtrativa:
// Agora, uso o operador `-=` para subtrair 4 do valor atual de 'b'.
// Isso é equivalente a: b = b - 4.
b -= 4;
console.log(b); // O resultado é 6, porque 10 - 4 = 6.

// Atribuição multiplicativa:
// Aqui, uso o operador `*=` para multiplicar 'b' por 2.
// Isso é equivalente a: b = b * 2.
b *= 2;
console.log(b); // O resultado é 12, porque 6 * 2 = 12.

// Atribuição divisiva:
// Uso o operador `/=` para dividir 'b' por 2.
// Isso é equivalente a: b = b / 2.
b /= 2;
console.log(b); // O resultado é 6, porque 12 / 2 = 6.

// Atribuição modular:
// Finalmente, uso o operador `%=` para calcular o resto da divisão de 'b' por 2.
// Isso é equivalente a: b = b % 2.
b %= 2;
console.log(b); // O resultado é 0, porque o resto da divisão de 6 por 2 é 0.
