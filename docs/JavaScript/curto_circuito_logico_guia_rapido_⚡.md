# Curto-Circuito Lógico — Guia Rápido ⚡

> Um guia prático e direto para entender os operadores de curto-circuito e operadores relacionados em JavaScript.

---

## Sumário

1. Introdução rápida
2. Operadores fundamentais
   - `||` (OR)
   - `&&` (AND)
   - `??` (Nullish coalescing)
   - `!` (NOT)
   - `?.` (Optional chaining)
   - `||=`, `&&=`, `??=` (atribuições lógicas)
3. Padrões de uso práticos
4. Armadilhas comuns e diferenças sutis
5. Cheatsheet rápido
6. Testes rápidos no console
7. Próximos passos / referências

---

## 1. Introdução rápida

“Curto-circuito” é o comportamento pelo qual **uma expressão lógica retorna um valor sem avaliar tudo** — o operador para assim que consegue decidir o resultado. Em JavaScript isso é usado tanto para **controle de fluxo** quanto para **valor padrão** e **inicializações**.

Este guia mostra cada operador, exemplos e quando preferir um em vez do outro.

---

## 2. Operadores fundamentais

### `||` — OR lógico

**O que faz:** retorna o **primeiro valor truthy** ou o último valor se todos forem falsy.

```js
// Exemplo
const a = 0 || 5;      // 5 (0 é falsy)
const b = "ok" || 5;  // "ok" (primeiro truthy)
```

**Quando usar:** quando você quer um *fallback* e considera `0`, `""` e `false` como inválidos.

---

### `&&` — AND lógico

**O que faz:** retorna o **primeiro valor falsy** ou o último valor se todos forem truthy.

```js
// Exemplo
const x = true && "passou";  // "passou"
const y = 0 && "nunca";      // 0 (curto-circuito)
```

**Padrão útil:** `cond && doSomething()` — executa `doSomething()` apenas se `cond` for truthy.

---

### `??` — Nullish coalescing

**O que faz:** retorna o valor da esquerda **a menos que seja `null` ou `undefined`**, caso em que retorna a direita.

```js
const p = null ?? 'padrão';   // 'padrão'
const q = 0 ?? 'padrão';      // 0 (0 não é null nem undefined)
```

**Quando usar:** quando você quer tratar apenas valores realmente ausentes, sem confundir `0`, `""` ou `false`.

---

### `!` — NOT lógico

**O que faz:** inverte o valor lógico.

```js
!!value // converte value para boolean
```

**Uso comum:** `!!` para forçar conversão para boolean.

---

### `?.` — Optional chaining (encadeamento opcional)

**O que faz:** tenta acessar uma propriedade ou chamar um método, retornando `undefined` se a referência intermediária for `null` ou `undefined` (sem lançar erro).

```js
const user = null;
console.log(user?.name); // undefined (sem TypeError)
```

**Perfeito para:** acessar propriedades em objetos aninhados que podem não existir.

---

### `||=`, `&&=`, `??=` — Atribuições lógicas

**O que fazem:** atribuim valor à variável dependendo da condição lógica.

```js
let a = null;
a ??= 10; // a = 10 (porque a é null)

let b = 0;
b ||= 5;  // b = 5 (porque 0 é falsy)

let c = true;
c &&= 99; // c = 99 (porque c era truthy — agora recebe 99)
```

**Escolha:** use `??=` quando quiser evitar substituir valores como `0` e `""`.

---

## 3. Padrões de uso práticos

- **Valores padrão (quando `0`, `""` são inválidos):** `const port = process.env.PORT || 3000;`
- **Valores padrão (quando `0` é válido):** `const limit = process.env.LIMIT ?? 10;`
- **Execução condicional:** `isReady && start();`
- **Inicializar singletons em contexto global:** `globalThis.__STORE ??= { users: [], nextId: 1 };`
- **Acessar profundidade de objeto sem erro:** `user?.profile?.email`.

---

## 4. Armadilhas comuns e diferenças sutis

- `||` trata `0`, `""`, `false` como falsy — isso pode sobrescrever valores válidos.
- `??` **não** é combinado com `||` sem parênteses: use `a ?? b || c` com cuidado (operações têm precedência definida — prefira parênteses).
- `?.` apenas protege `null`/`undefined` — se a propriedade existir mas você tentar chamar algo que não é função, ainda dará erro.
- Atribuições lógicas (`||=`) podem mudar tipos inesperadamente se o valor original for falsy.

---

## 5. Cheatsheet rápido

| Operador | Comportamento | Exemplo | Observação |
|---|---:|---|---|
| `a || b` | retorna primeiro truthy | `0 || 5 // 5` | trata 0, "" e false como inválidos |
| `a && b` | retorna primeiro falsy | `true && 2 // 2` | útil para encadear execuções |
| `a ?? b` | retorna `a` exceto se `a` for null/undefined | `0 ?? 5 // 0` | ideal para valores numéricos válidos 0 |
| `!a` / `!!a` | inversão / coerção para booleano | `!!"" // false` | conversão rápida para boolean |
| `obj?.prop` | safe access | `u?.name` | evita TypeError |
| `x ??= y` | atribui se x for null/undefined | `x ??= 1` | mantêm 0 e "" |

---

## 6. Testes rápidos no console

Cole e execute isto no console do navegador / Node:

```js
console.log(0 || 'fallback');    // 'fallback'
console.log(0 ?? 'fallback');     // 0
console.log(false || 'f');       // 'f'
console.log(false ?? 'f');       // false

const obj = null;
console.log(obj?.a?.b);         // undefined (sem erro)

let s = undefined;
s ??= 'ok';
console.log(s); // 'ok'

let z = 0;
z ||= 99;
console.log(z); // 99  (porque 0 é falsy)
```

---

## 7. Próximos passos / referências

- Experimente trocar `||` por `??` em lugares com números válidos (portas, limites, contadores).
- Use `?.` sempre que acessar propriedades de objetos que possam não existir.
- Leia sobre precedência de operadores quando combinar `||`, `&&` e `??` em expressões maiores.

---

> Dica final: quando tiver dúvida se um valor como `0` ou `""` é válido no seu domínio, prefira `??` — isso evita bugs silenciosos.

---

*Criado para ser curto, prático e reutilizável. Teste os exemplos no console e adapte os padrões ao seu caso de uso.*

