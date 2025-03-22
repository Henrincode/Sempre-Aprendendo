# Hierarquia Completa de Variáveis em JavaScript

## 1. Declaração de Variáveis

### 1.1 `var`

- **Escopo:** Função
- **Reatribuível:** Sim
- **Redeclarável:** Sim
- **Hoisting:** Sim (inicializa como `undefined`)
- **Exemplo:**

```js
function exemplo() {
	var x = 10;
	if (true) {
		var x = 20; // Mesmo x declarado novamente
	}
	console.log(x); // 20
}
```

### 1.2 `let`

- **Escopo:** Bloco (`{}`)
- **Reatribuível:** Sim
- **Redeclarável:** Não
- **Hoisting:** Sim (mas não inicializa)
- **Exemplo:**

```js
let y = 10;
if (true) {
	let y = 20; // Novo escopo
	console.log(y); // 20
}
console.log(y); // 10
```

### 1.3 `const`

- **Escopo:** Bloco (`{}`)
- **Reatribuível:** Não
- **Redeclarável:** Não
- **Hoisting:** Sim (mas não inicializa)
- **Exemplo:**

```js
const z = 10;
z = 20; // Erro: Assignment to constant variable
```
  
---
## 2. Tipos de Variáveis
### 2.1 Primitivos

- `string`: Texto (`"exemplo"`)
- `number`: Números inteiros e decimais (`42`, `3.14`)
- `boolean`: Verdadeiro ou falso (`true`, `false`)
- `undefined`: Variável declarada, mas sem valor
- `null`: Ausência intencional de valor
- `symbol`: Identificador único (`Symbol("id")`)
- `bigint`: Números inteiros grandes (`9007199254740991n`)
### 2.2 Estruturados
- `Array`: Lista ordenada de elementos (`[1, 2, 3]`)
- `Object`: Estrutura de chave-valor (`{ nome: "Henrique" }`)
- `Set`: Conjunto de valores únicos
- `Map`: Estrutura de chave-valor otimizada
- `WeakSet` e `WeakMap`: Versões fracas de `Set` e `Map` para otimização de memória

---
## 3. Escopos de Variáveis

### 3.1 Escopo Global
- Declarado fora de funções ou blocos
- Acessível em qualquer parte do código

```js
var globalVar = "Sou global";
function teste() {
	console.log(globalVar); // Acessível
}
```

### 3.2 Escopo de Função

- Criado dentro de uma função
- Não acessível fora dela

```js
function escopoFuncao() {
	var x = "Dentro da função";
}
console.log(x); // Erro
```

### 3.3 Escopo de Bloco

- Criado dentro de `{}` usando `let` ou `const`

```js
if (true) {
	let y = 10;
}
console.log(y); // Erro: y is not defined
```

### 3.4 Escopo de Módulo (ES6)

- Cada arquivo é um módulo separado
- Variáveis declaradas nele são isoladas

---
## 4. Hoisting (Elevação)

- `var`: Elevada e inicializada com `undefined`
- `let` e `const`: Elevadas, mas não inicializadas
- **Exemplo:**

```js
console.log(a); // undefined
var a = 5;

console.log(b); // Erro: Cannot access 'b' before initialization
let b = 10;
```

---
## 5. Diferenças entre `var`, `let` e `const`
| Característica | `var`                 | `let`                   | `const`                 |
| -------------- | --------------------- | ----------------------- | ----------------------- |
| Escopo         | Função                | Bloco                   | Bloco                   |
| Reatribuição   | Sim                   | Sim                     | Não                     |
| Redeclaração   | Sim                   | Não                     | Não                     |
| Hoisting       | Sim (com `undefined`) | Sim (sem inicialização) | Sim (sem inicialização) |

---
## 6. Boas Práticas

- Use `const` sempre que possível para evitar reatribuição acidental.
- Prefira `let` ao invés de `var` para evitar problemas de escopo.
- Nomeie variáveis de forma descritiva e sem números no início.
- Evite usar `var` em códigos modernos.