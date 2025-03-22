# Estruturas de Dados em JavaScript

## 1. Estruturas de Dados Padrão

As estruturas de dados permitem armazenar, organizar e manipular conjuntos de valores de forma eficiente.

### 1.1. Array (Lista Ordenada)

O `Array` é uma estrutura indexada que armazena múltiplos valores em uma sequência ordenada.

```js
let numeros = [1, 2, 3, 4, 5];
let nomes = ["Henrique", "João", "Maria"];
```

✔️ **Acessamos os elementos pelo índice:**

```js
console.log(numeros[0]); // 1
console.log(nomes[2]); // "Maria"
```

✔️ **Métodos úteis:**

```js
numeros.push(6); // Adiciona no final
numeros.pop(); // Remove o último
numeros.unshift(0); // Adiciona no início
numeros.shift(); // Remove o primeiro
console.log(numeros.includes(3)); // true (verifica existência)
```

---

### 1.2. Matriz (Array Multidimensional)

Uma **matriz** é um `Array` que contém outros `Arrays`.

```js
let matriz = [
  [1, 2],
  [3, 4]
];

console.log(matriz[0][1]); // 2
console.log(matriz[1][0]); // 3
```

✔️ **Manipulação de matrizes:**

```js
matriz[1].push(5); // Adiciona 5 na segunda linha
console.log(matriz); // [[1, 2], [3, 4, 5]]
```

---

### 1.3. Object (Estrutura Chave-Valor)

Os objetos armazenam valores como pares **chave → valor**.

```js
let pessoa = {
  nome: "Henrique",
  idade: 34,
  cidade: "Americana"
};

console.log(pessoa.nome); // "Henrique"
console.log(pessoa["idade"]); // 34
```

✔️ **Métodos úteis:**

```js
pessoa.profissao = "Programador"; // Adiciona uma chave
delete pessoa.cidade; // Remove a chave "cidade"
console.log(Object.keys(pessoa)); // ["nome", "idade", "profissao"]
console.log(Object.values(pessoa)); // ["Henrique", 44, "Programador"]
```

---

### 1.4. Set (Conjunto de Valores Únicos)

O `Set` armazena valores **sem repetições** e mantém a ordem de inserção.

```js
let conjunto = new Set([1, 2, 3, 3, 4]);
console.log(conjunto); // Set {1, 2, 3, 4}
```

✔️ **Métodos úteis:**

```js
conjunto.add(5); // Adiciona um valor
conjunto.delete(2); // Remove um valor
console.log(conjunto.has(3)); // true (verifica existência)
console.log(conjunto.size); // 3 (quantidade de elementos)
```

---

### 1.5. Map (Estrutura Chave-Valor Otimizada)

O `Map` é similar a um `Object`, mas permite **qualquer tipo de chave** e mantém a ordem de inserção.

```js
let mapa = new Map();
mapa.set("nome", "Henrique");
mapa.set(123, "Número como chave");
mapa.set(true, "Booleano como chave");

console.log(mapa.get("nome")); // "Henrique"
console.log(mapa.has(123)); // true
console.log(mapa.size); // 3
```

✔️ **Métodos úteis:**

```js
mapa.delete(true); // Remove a chave `true`
console.log(mapa.keys()); // Iterador com as chaves
console.log(mapa.values()); // Iterador com os valores
```

---

## 2. Estruturas Fracas (Otimização de Memória)

### 2.1. WeakSet (Conjunto de Objetos Únicos e Fracos)

O `WeakSet` armazena **apenas objetos**, e os remove automaticamente da memória se não forem mais referenciados.

```js
let objeto1 = { nome: "Objeto 1" };
let objeto2 = { nome: "Objeto 2" };

let weakset = new WeakSet([objeto1, objeto2]);
console.log(weakset.has(objeto1)); // true
```

✔️ **Diferenças para `Set`:**

- ❌ **Não pode armazenar valores primitivos**
- 🚀 **Melhora a otimização de memória**
- ✅ **Elementos são coletados pelo garbage collector automaticamente**

---

### 2.2. WeakMap (Map com Chaves Fracas)

O `WeakMap` funciona como um `Map`, mas **as chaves devem ser objetos** e desaparecem da memória quando não são mais referenciadas.

```js
let obj = { id: 1 };
let weakmap = new WeakMap();

weakmap.set(obj, "Valor associado");
console.log(weakmap.get(obj)); // "Valor associado"
```

✔️ **Vantagens do `WeakMap`:**

- ❌ **Não pode ser iterado (`.keys()`, `.values()`)**
- ✅ **Automaticamente remove chaves não referenciadas**

---

## 3. Comparação das Estruturas

|Estrutura|Permite valores primitivos?|Mantém ordem de inserção?|Permite chaves personalizadas?|Suporta Iteração?|Coletado pelo Garbage Collector?|
|---|---|---|---|---|---|
|**Array**|✅ Sim|✅ Sim|❌ Não (apenas índices numéricos)|✅ Sim (`forEach`, `map`)|❌ Não|
|**Matriz**|✅ Sim|✅ Sim|❌ Não|✅ Sim|❌ Não|
|**Object**|✅ Sim|❌ Não|✅ Sim (chaves são strings ou símbolos)|✅ Sim (`Object.keys()`)|❌ Não|
|**Set**|✅ Sim|✅ Sim|❌ Não|✅ Sim (`forEach`)|❌ Não|
|**Map**|✅ Sim|✅ Sim|✅ Sim (qualquer tipo)|✅ Sim (`.keys()`, `.values()`)|❌ Não|
|**WeakSet**|❌ Não (apenas objetos)|❌ Não|❌ Não|❌ Não|✅ Sim|
|**WeakMap**|❌ Não (apenas objetos)|❌ Não|✅ Sim (apenas objetos)|❌ Não|✅ Sim|

---

## 4. Conclusão

- `Array` e `Matriz` são usados para armazenar listas ordenadas de valores.
- `Object` e `Map` organizam dados como pares **chave → valor**.
- `Set` e `WeakSet` armazenam **valores únicos**.
- `WeakSet` e `WeakMap` são otimizados para **coleta automática de memória**.