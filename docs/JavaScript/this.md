# 📘 Documentação: O que é o `this` em JavaScript

## 📌 Visão Geral

Em JavaScript, o **`this`** é uma **palavra-chave especial** que faz referência ao **objeto que está executando a função atual**.

O valor de `this` **muda dependendo de como a função é chamada**, e não apenas de onde ela é definida.
Isso é o que muitas vezes causa confusão — mas é também o que torna o `this` tão poderoso.

---

## 🔍 Regras básicas do `this`

Vamos ver os **principais contextos** onde o `this` se comporta de maneiras diferentes.

---

### 1️⃣ **No escopo global**

No **navegador**, `this` no escopo global faz referência ao objeto **`window`**.
No **Node.js**, ele aponta para **`global`**.

```js
console.log(this === window); // true (no navegador)
console.log(this === global); // true (no Node.js)
```

---

### 2️⃣ **Dentro de um objeto (método)**

Quando o `this` é usado dentro de um **método**, ele aponta para **o próprio objeto** que contém aquele método.

```js
const pessoa = {
  nome: "Henrique",
  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
};

pessoa.falar(); // "Meu nome é Henrique"
```

🧠 **Explicação:**
`this` se refere ao objeto `pessoa`, pois é ele quem chama o método `falar`.

---

### 3️⃣ **Funções comuns (modo global)**

Quando o `this` é usado **em uma função comum** (fora de objetos), ele depende do modo:

* **Modo normal:** `this` aponta para o objeto global (`window` no navegador).
* **Modo estrito (`'use strict'`):** `this` será `undefined`.

```js
function exemplo() {
  console.log(this);
}

exemplo(); // window (modo normal) ou undefined (modo estrito)
```

---

### 4️⃣ **Funções dentro de métodos**

Aqui está uma armadilha comum 👇

```js
const usuario = {
  nome: "Maria",
  saudacao() {
    function interna() {
      console.log(`Olá, ${this.nome}`);
    }
    interna();
  }
};

usuario.saudacao(); // "Olá, undefined"
```

🧠 **Explicação:**
A função `interna()` é **uma função comum**, e portanto seu `this` **não aponta mais para `usuario`**, mas sim para o contexto global.

✅ **Solução 1: Usar arrow function**

```js
const usuario = {
  nome: "Maria",
  saudacao() {
    const interna = () => {
      console.log(`Olá, ${this.nome}`);
    };
    interna();
  }
};

usuario.saudacao(); // "Olá, Maria"
```

🧠 **Motivo:** Arrow functions **não criam seu próprio `this`** — elas **herdam** o `this` do escopo onde foram definidas.

---

### 5️⃣ **Usando `this` em construtores (funções com `new`)**

Quando uma função é usada com o operador `new`, o `this` se refere ao **novo objeto criado**.

```js
function Carro(modelo) {
  this.modelo = modelo;
  this.ligar = function() {
    console.log(`${this.modelo} está ligado.`);
  };
}

const fusca = new Carro("Fusca");
fusca.ligar(); // "Fusca está ligado."
```

🧠 **Explicação:**
Com `new`, o JavaScript:

1. Cria um novo objeto vazio `{}`
2. Define `this` para esse objeto
3. Retorna o objeto automaticamente (a menos que seja retornado algo diferente manualmente)

---

### 6️⃣ **Usando `this` com `call()`, `apply()` e `bind()`**

Esses três métodos permitem **controlar manualmente** o valor de `this`.

#### 👉 `.call(thisArg, arg1, arg2, ...)`

```js
function apresentar(saudacao) {
  console.log(`${saudacao}, meu nome é ${this.nome}`);
}

const pessoa = { nome: "Lucas" };

apresentar.call(pessoa, "Olá"); // "Olá, meu nome é Lucas"
```

#### 👉 `.apply(thisArg, [args])`

Funciona igual ao `call()`, mas recebe os argumentos como **array**.

```js
apresentar.apply(pessoa, ["Oi"]); // "Oi, meu nome é Lucas"
```

#### 👉 `.bind(thisArg)`

Retorna uma **nova função** com o `this` fixado.

```js
const apresentarLucas = apresentar.bind(pessoa);
apresentarLucas("E aí"); // "E aí, meu nome é Lucas"
```

---

### 7️⃣ **Em classes (ES6)**

Dentro de classes, o `this` representa a **instância criada**.

```js
class Animal {
  constructor(tipo) {
    this.tipo = tipo;
  }

  falar() {
    console.log(`${this.tipo} faz um som.`);
  }
}

const gato = new Animal("Gato");
gato.falar(); // "Gato faz um som."
```

---

## ⚠️ Armadilhas comuns

1. **Perder o `this` ao passar funções como callback**

```js
const botao = {
  texto: "Salvar",
  clicar() {
    console.log(this.texto);
  }
};

setTimeout(botao.clicar, 1000); // undefined
```

🧠 **Motivo:** `setTimeout` executa a função **sem manter o contexto** do objeto.

✅ **Solução:**

```js
setTimeout(() => botao.clicar(), 1000);
// ou
setTimeout(botao.clicar.bind(botao), 1000);
```

---

## 🧩 Resumo Rápido

| Contexto                        | `this` referencia                |
| ------------------------------- | -------------------------------- |
| Escopo global (navegador)       | `window`                         |
| Escopo global (Node.js)         | `global`                         |
| Método de objeto                | O próprio objeto                 |
| Função comum (modo estrito)     | `undefined`                      |
| Função comum (modo normal)      | Objeto global                    |
| Arrow function                  | `this` do escopo onde foi criada |
| Função construtora              | Nova instância criada            |
| `call()` / `apply()` / `bind()` | Valor definido manualmente       |

---

## 💡 Dica prática

Se você quiser **ver de onde vem o `this`**, coloque:

```js
console.log(this);
```

no início da função — é uma forma simples e eficaz de **entender o contexto atual**.