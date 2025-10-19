# 📘 Classes em JavaScript

## 🧩 O que é uma classe?

Uma **classe** é uma forma de criar **moldes (modelos)** para objetos.
Ela define **como os objetos serão estruturados**, ou seja, **quais propriedades e métodos** eles terão.

👉 As classes foram introduzidas no **ES6 (ECMAScript 2015)** para facilitar a **criação e reutilização de objetos** de forma mais organizada e legível.

---

## 🏗️ Criando uma classe

Você cria uma classe usando a palavra-chave `class` e define um **construtor** (`constructor`) para inicializar os valores.

```js
// Criando uma classe Pessoa
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;   // propriedade nome
    this.idade = idade; // propriedade idade
  }

  // método da classe
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// Criando um novo objeto usando a classe
const pessoa1 = new Pessoa("Henrique", 25);
pessoa1.apresentar(); // Saída: Olá, meu nome é Henrique e tenho 25 anos.
```

---

## 🧠 Entendendo o `constructor`

O **`constructor`** é um método especial que é **executado automaticamente** quando você cria um novo objeto com `new`.

```js
class Carro {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  info() {
    console.log(`${this.marca} - ${this.modelo}`);
  }
}

const carro1 = new Carro("Fiat", "Uno");
carro1.info(); // Fiat - Uno
```

---

## ⚙️ Criando métodos dentro da classe

Os **métodos** são funções internas à classe que podem manipular seus dados.

```js
class ContaBancaria {
  constructor(cliente, saldo = 0) {
    this.cliente = cliente;
    this.saldo = saldo;
  }

  // Método para depositar
  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$${valor} realizado.`);
  }

  // Método para sacar
  sacar(valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente!");
      return;
    }
    this.saldo -= valor;
    console.log(`Saque de R$${valor} realizado.`);
  }

  // Método para ver o saldo
  verSaldo() {
    console.log(`Saldo atual: R$${this.saldo}`);
  }
}

const conta1 = new ContaBancaria("João");
conta1.depositar(500);
conta1.sacar(200);
conta1.verSaldo();
```

---

## 🧬 Diferença entre **classe** e **objeto literal**

| Característica   | Classe                                       | Objeto literal                             |
| ---------------- | -------------------------------------------- | ------------------------------------------ |
| **Forma**        | Usa `class` e `new`                          | Usa `{ chave: valor }` diretamente         |
| **Reutilização** | Pode criar vários objetos com o mesmo modelo | Cada objeto precisa ser criado manualmente |
| **Organização**  | Centraliza propriedades e métodos            | Tudo fica solto, sem estrutura formal      |
| **Herança**      | Suporta herança com `extends`                | Não suporta diretamente                    |
| **Exemplo**      | `class Pessoa {}`                            | `const pessoa = { nome: "João" }`          |

### 🔹 Exemplo com objeto literal

```js
const pessoa = {
  nome: "Ana",
  idade: 22,
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  },
};

pessoa.apresentar(); // Olá, meu nome é Ana e tenho 22 anos.
```

👉 Esse modelo funciona, mas **não é reutilizável** — cada nova pessoa teria que ser criada manualmente.

---

## 🧱 Criando vários objetos com a mesma classe

```js
const pessoa1 = new Pessoa("Henrique", 25);
const pessoa2 = new Pessoa("Lucas", 30);
const pessoa3 = new Pessoa("Marina", 21);

pessoa1.apresentar();
pessoa2.apresentar();
pessoa3.apresentar();
```

✅ Assim, **todas as pessoas seguem o mesmo modelo (classe Pessoa)**, mas têm **dados diferentes**.

---

## 🧰 Métodos estáticos (`static`)

Um **método estático** pertence **à classe em si**, e não aos objetos criados a partir dela.

```js
class Matematica {
  static somar(a, b) {
    return a + b;
  }
}

console.log(Matematica.somar(5, 7)); // 12
```

🔸 Você **não usa `new`** para chamar métodos estáticos.
Eles são úteis para funções auxiliares (como cálculos).

---

## 🪞 Herança (extends)

Uma classe pode **herdar** de outra para **reaproveitar código**.

```js
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  emitirSom() {
    console.log("Som genérico de animal");
  }
}

class Cachorro extends Animal {
  emitirSom() {
    console.log("Au au!");
  }
}

const dog = new Cachorro("Rex");
dog.emitirSom(); // Au au!
```

---

## 🚀 Resumo geral

| Conceito        | Explicação                                                     |
| --------------- | -------------------------------------------------------------- |
| **Classe**      | Modelo para criar objetos com as mesmas propriedades e métodos |
| **Objeto**      | Instância (exemplo concreto) de uma classe                     |
| **Constructor** | Inicializa os dados do objeto                                  |
| **Método**      | Função que pertence à classe                                   |
| **Static**      | Método que pertence à classe e não ao objeto                   |
| **Extends**     | Cria uma herança de outra classe                               |

---

## 🧾 Exemplo completo

```js
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  aplicarDesconto(percentual) {
    this.preco -= this.preco * (percentual / 100);
  }

  info() {
    console.log(`${this.nome} custa R$${this.preco.toFixed(2)}`);
  }
}

// Criando produtos
const produto1 = new Produto("Notebook", 3000);
const produto2 = new Produto("Mouse", 100);

// Aplicando desconto
produto1.aplicarDesconto(10);
produto2.aplicarDesconto(5);

// Exibindo informações
produto1.info(); // Notebook custa R$2700.00
produto2.info(); // Mouse custa R$95.00
```