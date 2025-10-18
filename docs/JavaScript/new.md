# 📘 O que é o `new` em JavaScript

## 🧠 Conceito

O operador **`new`** em JavaScript é usado para **criar uma nova instância de um objeto** baseado em uma **função construtora** ou **classe**.
Quando usamos `new`, o JavaScript:

1. **Cria um novo objeto vazio** (`{}`);
2. **Define o protótipo (`[[Prototype]]`)** desse novo objeto para o objeto `prototype` da função construtora;
3. **Executa a função construtora**, aplicando o `this` ao novo objeto;
4. **Retorna o novo objeto**, a menos que a função construtora retorne um outro objeto explicitamente.

---

## ⚙️ Sintaxe

```js
new NomeDaFunção([argumentos])
```

---

## 🧩 Exemplo básico

```js
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const pessoa1 = new Pessoa("Henrique", 25);
console.log(pessoa1.nome); // Henrique
console.log(pessoa1.idade); // 25
```

### 🧾 Explicação:

* `new Pessoa("Henrique", 25)` cria um **novo objeto**;
* Dentro da função `Pessoa`, o `this` **se refere a esse novo objeto**;
* As propriedades `nome` e `idade` são adicionadas a ele;
* O resultado final é um **objeto com esses dados**.

---

## 🧱 Exemplo com método

```js
function Carro(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
  this.exibir = function() {
    console.log(`Carro: ${this.marca} ${this.modelo}`);
  };
}

const meuCarro = new Carro("Fiat", "Uno");
meuCarro.exibir(); // Carro: Fiat Uno
```

🔹 Cada objeto criado com `new Carro()` terá seu próprio método `exibir`.

---

## 🧬 Usando `prototype` para economizar memória

Se quisermos **compartilhar métodos** entre todas as instâncias (em vez de criar um novo método para cada objeto), usamos o **prototype**:

```js
function Animal(tipo) {
  this.tipo = tipo;
}

Animal.prototype.som = function() {
  console.log(`${this.tipo} faz um som`);
};

const cachorro = new Animal("Cachorro");
const gato = new Animal("Gato");

cachorro.som(); // Cachorro faz um som
gato.som();     // Gato faz um som
```

✅ Agora o método `som` é **compartilhado** entre todas as instâncias — mais eficiente!

---

## 🧰 Exemplo com `class` (forma moderna)

O `new` também é usado com **classes ES6**, que são apenas uma **forma diferente de criar construtores**:

```js
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const joao = new Pessoa("João", 30);
joao.apresentar(); // Olá, meu nome é João e tenho 30 anos.
```

➡️ Aqui, `new Pessoa()` funciona da mesma forma que nas funções construtoras.

---

## 🔍 O que acontece se **não usar `new`**

Se você esquecer o `new`, o `this` **não apontará para um novo objeto** — e pode causar erros, especialmente no modo estrito (`'use strict'`):

```js
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

const p = Produto("Camiseta", 50); // ❌ esqueci o new
console.log(p); // undefined
console.log(globalThis.nome); // "Camiseta" (fora do modo estrito)
```

No modo estrito:

```js
'use strict';
Produto("Camiseta", 50); // ❌ Erro: Cannot set property 'nome' of undefined
```

✅ Sempre use `new` quando a função for um **construtor**.

---

## 🧩 Verificando se uma função foi chamada com `new`

Você pode verificar dentro da função se ela foi chamada corretamente:

```js
function Usuario(nome) {
  if (!(this instanceof Usuario)) {
    throw new Error("Use o operador new para criar um Usuario");
  }
  this.nome = nome;
}

const u1 = new Usuario("Maria"); // ✅ ok
const u2 = Usuario("João");      // ❌ Erro
```

---

## 📦 Resumo

| Ação                                               | O que faz |
| -------------------------------------------------- | --------- |
| Cria um novo objeto                                | ✅         |
| Define o protótipo                                 | ✅         |
| Liga o `this` ao novo objeto                       | ✅         |
| Retorna o objeto criado                            | ✅         |
| Deve ser usado com funções construtoras ou classes | ✅         |

---

## 🧠 Dica extra

Você pode imaginar `new` como um "fábrica automática" de objetos.
Ele **cria**, **liga o protótipo**, **chama o construtor** e **entrega o objeto pronto**.