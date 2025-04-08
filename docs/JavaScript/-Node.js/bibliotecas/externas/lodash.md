## 📚 Documentação - Lodash no Node.js

### 📦 O que é o Lodash?

Lodash é uma biblioteca JavaScript utilitária que facilita a manipulação de arrays, objetos, strings, entre outros. Ela oferece métodos prontos para tarefas comuns, melhorando a legibilidade e eficiência do código.

---

### 🚀 Instalação

```bash
npm install lodash
```

---

### 🛠️ Como importar

```js
const _ = require('lodash');
```

---

### 🔧 Principais métodos do Lodash

#### 1. `_.chunk(array, tamanho)`

Divide um array em vários subarrays com o tamanho especificado.

```js
console.log(_.chunk(['a', 'b', 'c', 'd'], 2)); 
// [['a', 'b'], ['c', 'd']]
```

---

#### 2. `_.compact(array)`

Remove todos os valores falsy (`false`, `0`, `''`, `null`, `undefined`, `NaN`).

```js
console.log(_.compact([0, 1, false, 2, '', 3])); 
// [1, 2, 3]
```

---

#### 3. `_.concat(array, ...valores)`

Concatena valores ao array.

```js
console.log(_.concat([1], 2, [3], [[4]])); 
// [1, 2, 3, [4]]
```

---

#### 4. `_.difference(array, valores)`

Retorna os elementos do primeiro array que não estão nos outros.

```js
console.log(_.difference([2, 1], [2, 3])); 
// [1]
```

---

#### 5. `_.flatten(array)`

Achata um nível de profundidade do array.

```js
console.log(_.flatten([1, [2, [3, [4]], 5]])); 
// [1, 2, [3, [4]], 5]
```

---

#### 6. `_.flattenDeep(array)`

Achata o array completamente (de forma recursiva).

```js
console.log(_.flattenDeep([1, [2, [3, [4]], 5]])); 
// [1, 2, 3, 4, 5]
```

---

#### 7. `_.uniq(array)`

Remove valores duplicados.

```js
console.log(_.uniq([2, 1, 2])); 
// [2, 1]
```

---

#### 8. `_.orderBy(collection, propriedades, ordem)`

Ordena uma coleção com base em uma ou mais propriedades.

```js
const users = [
  { nome: 'Henrique', idade: 34 },
  { nome: 'Alan', idade: 22 },
  { nome: 'Marques', idade: 34 }
];

console.log(_.orderBy(users, ['idade', 'nome'], ['asc', 'desc']));
// Ordena por idade crescente e nome decrescente
```

---

#### 9. `_.debounce(funcao, tempo)`

Executa uma função depois de um certo tempo sem ser chamada novamente (usado em eventos, como digitação).

```js
const log = () => console.log('Chamou!');
const debounced = _.debounce(log, 1000);

debounced();
debounced();
debounced();
// Apenas uma chamada após 1 segundo da última
```

---

### 📎 Dica de uso

Você pode importar só o método que vai usar, para economizar memória:

```js
const uniq = require('lodash/uniq');

console.log(uniq([1, 2, 2, 3]));
// [1, 2, 3]
```

---

### 📚 Documentação oficial

Para mais métodos e exemplos avançados:  
🔗 [https://lodash.com/docs](https://lodash.com/docs)