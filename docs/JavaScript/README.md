# 📌 Hierarquia Completa do JavaScript

[Entenda comentário, sentença de código e bloco de código](comentario-sentenca-bloco.md)

---
## 1 Declaração de Variáveis

- `var` → Antiga, escopo de função, pode ser redeclarada
- `let` → Escopo de bloco, pode ser reatribuída
- `const` → Escopo de bloco, não pode ser reatribuída

[**Clique aqui para ver mais detalhes!**](variavel.md)

---
## 2 Operadores

### 2.1 Atribuição

- `=` → Atribuição simples
- `+=` → Soma e atribuição
- `-=` → Subtração e atribuição
- `*=` → Multiplicação e atribuição
- `/=` → Divisão e atribuição
- `%=` → Módulo e atribuição
- `**=` → Exponenciação e atribuição
### 2.2 Comparação

- `==` → Igualdade solta (conversão implícita)
- `===` → Igualdade estrita (sem conversão)
- `!=` → Diferente (com conversão)
- `!==` → Diferente estrito (sem conversão)
- `>` → Maior que
- `<` → Menor que
- `>=` → Maior ou igual
- `<=` → Menor ou igual
### 2.3 Lógicos

- `&&` → "E" lógico (ambos precisam ser `true`)
- `||` → "Ou" lógico (pelo menos um precisa ser `true`)
- `!` → Negação lógica
### 2.4 Bitwise (bit a bit)

- `&` → E bit a bit
- `|` → Ou bit a bit
- `^` → Ou exclusivo (XOR)
- `~` → Negação bit a bit
- `<<` → Deslocamento à esquerda
- `>>` → Deslocamento à direita
### 2.5 Outros Operadores

- `typeof` → Retorna o tipo da variável
- `instanceof` → Verifica se um objeto é instância de uma classe

[**Clique aqui para ver mais detalhes**](operadores.md)

---
## 3 Tipos de Dados

- `string` → Texto (`"exemplo"`)
- `number` → Número (`42, 3.14`)
- `boolean` → Lógico (`true`, `false`)
- `null` → Ausência de valor
- `undefined` → Variável declarada sem valor
- `symbol` → Identificador único
- `bigint` → Números inteiros grandes (`9007199254740991n`)

[**Clique aqui para ver mais detalhes**](tipo-de-dados-primitivos.md)

---
## 4 Estruturas de Dados

- `Array` → Lista ordenada de elementos (`[1, 2, 3]`)
- `Matriz` → Array multidimensional (`[[1, 2], [3, 4]]`)
- `Object` → Estrutura de chave-valor (`{ nome: "Henrique", idade: 44 }`)
- `Set` → Conjunto de valores únicos
- `Map` → Estrutura chave-valor otimizada
- `WeakSet` e `WeakMap` → Versões fracas de `Set` e `Map` para otimização de memória

---
## 5 Estruturas Condicionais

- `if` → Bloco condicional principal
- `else` → Bloco caso o `if` seja falso
- `else if` → Para múltiplas verificações
- `switch` → Alternativa ao `if/else`, mais otimizado para múltiplas opções
- **Operador ternário** → `condição ? verdadeiro : falso`

---
## 6 Laços de Repetição

### 6.1 Tradicionais

- `for` → Estrutura de repetição controlada
- `for in` → Percorre propriedades de objetos
- `for of` → Percorre valores de arrays e iteráveis

### 6.2 Baseados em Condição

- `while` → Executa enquanto a condição for verdadeira
- `do while` → Executa pelo menos uma vez antes de verificar a condição

---
## 7 Métodos de Arrays

- `.forEach()` → Itera sobre os elementos
- `.filter()` → Retorna elementos filtrados
- `.map()` → Transforma elementos e retorna novo array
- `.reduce()` → Reduz um array a um único valor
- `.find()` → Retorna o primeiro elemento que satisfaz uma condição
- `.some()` → Retorna `true` se pelo menos um elemento satisfizer a condição
- `.every()` → Retorna `true` se todos os elementos satisfizerem a condição
- `.sort()` → Ordena os elementos
- `.reverse()` → Inverte a ordem dos elementos
- `.concat()` → Junta arrays
- `.join()` → Junta elementos como string
- `.split()` → Divide uma string em array

---
## **8 Funções**

- **Função tradicional:**

```js
function soma(a, b) {
	return a + b;
}
```

- **Função anônima (expressão de função):**

```js
const soma = function(a, b) {
	return a + b;
};
```

- Arrow Function:

```js
const soma = (a, b) => a + b;
```

- **IIFE (Immediately Invoked Function Expression):**

```js
(function() {
	console.log("Executado imediatamente!");
})();
```

---
## 9 Controle de Fluxo

- `break` → Interrompe um laço
- `continue` → Pula a iteração atual e continua o loop

---
## 10 Manipulação de Objetos

- `Object.keys(obj)` → Retorna as chaves do objeto
- `Object.values(obj)` → Retorna os valores do objeto
- `Object.entries(obj)` → Retorna pares chave-valor
- `Object.assign(destino, origem)` → Copia propriedades
- `Object.freeze(obj)` → Congela o objeto (não pode ser modificado)
- `Object.seal(obj)` → Impede a adição de novas propriedades

---
## 11 Classes e Prototipagem

- **Criando classes:**

```js
class Pessoa {
	constructor(nome) {
		this.nome = nome;
	}
	falar() {
		console.log(`Meu nome é ${this.nome}`);
	}
}
```

- **Herança com `extends` e `super`:**

```js
class Aluno extends Pessoa {
	constructor(nome, curso) {
		super(nome);
		this.curso = curso;
	}
}
```

- **Prototype personalizado:**

```js
Array.prototype.primeiro = function() {
	return this[0];
};
console.log([1, 2, 3].primeiro()); // 1
```

---
## 12 Manipulação de JSON

- **Convertendo para JSON:**

```js
const obj = { nome: "Henrique", idade: 44 };
const json = JSON.stringify(obj);
```

- **Convertendo de JSON para objeto:**

```js
const objConvertido = JSON.parse(json);
```
