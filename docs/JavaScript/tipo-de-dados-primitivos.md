# Tipos de Dados Primitivos em JavaScript

## 1. Tipos Primitivos (Imutáveis)

Os tipos primitivos são armazenados diretamente na memória e não podem ser modificados.

### 1.1. String (Texto)

Representa uma sequência de caracteres.

```js
let texto = "JavaScript";
let mensagem = 'Olá, mundo!';
let template = `Interpolação: ${mensagem}`;
```

#### Boxing com String

Apesar de serem primitivos, as strings podem usar métodos porque o JavaScript realiza um **Boxing** temporário.

```js
let nome = "Henrique";
console.log(nome.toUpperCase()); // "HENRIQUE"
console.log(nome.length); // 8
```

Internamente, o JavaScript transforma `"Henrique"` em um objeto `String`, executa `toUpperCase()` e depois descarta o objeto.

---

### 1.2. Number (Número)

Pode ser inteiro ou decimal.

```js
let inteiro = 42;
let decimal = 3.14;
let negativo = -10;
let infinito = Infinity;
let nan = NaN; // Not-a-Number
```

#### 📌 Boxing com Number

Os números também possuem métodos devido ao **Boxing**.

```js
let numero = 123.456;
console.log(numero.toFixed(2)); // "123.46"
console.log(numero.toExponential(2)); // "1.23e+2"
```

`toFixed(2)` é um método da classe `Number`, e o JavaScript transforma `numero` temporariamente em um objeto `Number` antes de chamá-lo.

---
### 1.3. Boolean (Lógico)

Representa valores `true` ou `false`.

```js
let verdadeiro = true;
let falso = false;
```

#### Boxing com Boolean

Os booleanos podem ser temporariamente objetos.

```js
let ativo = true;
console.log(ativo.toString()); // "true"
console.log(Boolean.prototype); // Exibe os métodos disponíveis
```

O valor `true` é convertido temporariamente em um objeto `Boolean` para acessar `toString()`.

---

### 1.4. Null (Ausência de Valor)

Representa uma ausência intencional de valor.

```js
let vazio = null;
```

`null` é um tipo primitivo, mas `typeof null` retorna `"object"` por um erro histórico do JavaScript.

---

### 1.5. Undefined (Não Definido)

Indica que uma variável foi declarada, mas não recebeu valor.

```js
let indefinido;
console.log(indefinido); // undefined
```

Diferente de `null`, `undefined` indica que **nenhum valor foi atribuído**.

---

### 1.6. Symbol (Identificador Único)

Criado para gerar identificadores únicos, útil para propriedades de objetos.

```js
let simbolo1 = Symbol('id');
let simbolo2 = Symbol('id');
console.log(simbolo1 === simbolo2); // false
```

Mesmo que dois `Symbol` tenham a mesma descrição (`'id'`), eles são **sempre diferentes**.

---

### 1.7. BigInt (Números Inteiros Grandes)

Para números maiores que `Number.MAX_SAFE_INTEGER`.

```js
let numeroGrande = 9007199254740991n; // Sufixo "n" define um BigInt
let soma = numeroGrande + 10n;
console.log(soma); // 9007199254741001n
```

`BigInt` não pode ser misturado com `Number` em operações sem conversão.

---

## 2. O que é Boxing?

**Boxing** é o processo onde JavaScript converte temporariamente um tipo primitivo em um **objeto wrapper**, permitindo acessar métodos e propriedades.

### Como funciona?

1. O JavaScript automaticamente cria um objeto da classe correspondente (`String`, `Number`, `Boolean`).
2. Executa o método desejado (`toUpperCase()`, `toFixed()`, `toString()`, etc.).
3. Destrói o objeto logo em seguida.

```js
console.log("Exemplo".toUpperCase()); // "EXEMPLO"
console.log((42.7).toFixed(1)); // "42.7"
console.log(true.toString()); // "true"
```

Nenhuma dessas variáveis se tornou um **objeto** de verdade, apenas foram convertidas temporariamente para execução do método.

---
## 3. Considerações Finais

- **Tipos primitivos são imutáveis**, mas **Boxing permite que eles usem métodos de objetos**.
- `null` e `undefined` **não possuem métodos** e não podem ser "caixa-empacotados" (`Boxed`).
- **Símbolos (`Symbol`) não realizam Boxing**, pois são sempre primitivos.
- O **Boxing é transparente**, ou seja, ocorre automaticamente sem que o programador precise criar instâncias manualmente.