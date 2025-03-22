# Operadores em JavaScript

Os operadores em JavaScript são usados para realizar operações em variáveis e valores. Eles podem ser classificados em diversas categorias, como operadores de atribuição, comparação, lógicos, bit a bit e outros.
## Operadores Aritméticos

- `+` → Adiciona dois valores.

```javascript
let soma = 10 + 5; // soma agora é 15
```

- `-` → Subtrai um valor do outro.

```javascript
let subtracao = 20 - 8; // subtracao agora é 12
```

- `*` → Multiplica dois valores.

```javascript
let multiplicacao = 4 * 3; // multiplicacao agora é 12
```

- `/` → Divide um valor pelo outro.

```javascript
let divisao = 16 / 4; // divisao agora é 4
```

- `%` → Retorna o resto da divisão entre dois valores.

```javascript
let modulo = 10 % 3; // modulo agora é 1 (10 dividido por 3 tem resto 1)
```  

## Operadores de Atribuição

Os operadores de atribuição são utilizados para armazenar valores em variáveis.

- `=` → Atribui um valor a uma variável.

```javascript
let x = 10; // x recebe 10
```

- `+=` → Soma e atribui o resultado à variável.

```javascript
let y = 5;
y += 3; // y agora é 8 (equivalente a y = y + 3)
```

- `-=` → Subtrai e atribui o resultado.

```javascript
let z = 10;
z -= 4; // z agora é 6 (equivalente a z = z - 4)
```

- `*=` → Multiplica e atribui o resultado.

```javascript
let a = 2;
a *= 3; // a agora é 6 (equivalente a a = a * 3)
```

- `/=` → Divide e atribui o resultado.

```javascript
let b = 10;
b /= 2; // b agora é 5 (equivalente a b = b / 2)
```

- `%=` → Calcula o módulo e atribui o resultado.

```javascript
let c = 10;
c %= 3; // c agora é 1 (equivalente a c = c % 3)
```

- `**=` → Exponenciação e atribui o resultado.

```javascript
let d = 2;
d **= 3; // d agora é 8 (equivalente a d = d ** 3)
```

## Operadores de Comparação

Esses operadores são usados para comparar dois valores.

- `==` → Igualdade solta (com conversão implícita de tipos).

```javascript
console.log(5 == "5"); // true (conversão implícita para o mesmo tipo)
```

  **Explicação:** O operador `==` realiza uma conversão automática de tipos antes da comparação. Como `5` é um número e `"5"` é uma string, o JavaScript converte a string para número antes de comparar, resultando em `true`.

- `===` → Igualdade estrita (sem conversão de tipos).

```javascript
console.log(5 === "5"); // false (tipos diferentes)
```

  **Explicação:** O operador `===` compara tanto o valor quanto o tipo de dado. Como `5` é um número (`number`) e `"5"` é uma string (`string`), o JavaScript os considera diferentes, retornando `false`.

- `!=` → Diferente (com conversão implícita).

```javascript
console.log(10 != "10"); // false
```

- `!==` → Diferente estrito (sem conversão de tipos).

```javascript
console.log(10 !== "10"); // true
```

- `>` → Maior que.

```javascript
console.log(10 > 5); // true
```

- `<` → Menor que.

```javascript
console.log(10 < 5); // false
```

- `>=` → Maior ou igual.

```javascript
console.log(10 >= 10); // true
```

- `<=` → Menor ou igual.

```javascript
console.log(5 <= 10); // true
```

## Operadores Lógicos

Usados para combinar expressões booleanas.

- `&&` → "E" lógico (ambos precisam ser `true`).

```javascript
console.log(true && false); // false
```

- `||` → "Ou" lógico (pelo menos um precisa ser `true`).

```javascript
console.log(true || false); // true
```

- `!` → Negação lógica.

```javascript
console.log(!true); // false
```

## Operadores Bit a Bit (Bitwise)

Esses operadores trabalham diretamente com bits.

- `&` → E bit a bit.

```javascript
console.log(5 & 1); // 1 (binário: 0101 & 0001 = 0001)
```

- `|` → Ou bit a bit.

```javascript
console.log(5 | 1); // 5 (binário: 0101 | 0001 = 0101)
```

- `^` → Ou exclusivo (XOR).

```javascript
console.log(5 ^ 1); // 4 (binário: 0101 ^ 0001 = 0100)
```

- `~` → Negação bit a bit.

```javascript
console.log(~5); // -6 (inverte todos os bits)
```

- `<<` → Deslocamento à esquerda.

```javascript
console.log(5 << 1); // 10 (binário: 0101 << 1 = 1010)
```

- `>>` → Deslocamento à direita.

```javascript
console.log(5 >> 1); // 2 (binário: 0101 >> 1 = 0010)
```

## Outros Operadores

- `typeof` → Retorna o tipo de dado da variável.

```javascript
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
```

- `instanceof` → Verifica se um objeto pertence a uma determinada classe.

```javascript
class Animal {}
let dog = new Animal();
console.log(dog instanceof Animal); // true
```