# ⚖️ Classe vs Objeto — Qual usar em cada caso?

## 🧱 1. Quando usar um **objeto literal**

Use **objeto literal** (ou seja, exportar um objeto pronto) quando:

* Você **precisa de apenas uma instância** no sistema (um único ponto de acesso).
* O objeto **não precisa ser recriado várias vezes**.
* Não há necessidade de **configurações diferentes** por instância.
* Ele serve como um **“serviço” global**, exemplo: conexão com o banco, configuração do app, cache, logger etc.

👉 É a escolha ideal para o **caso da conexão com banco de dados**.

---

### 📦 Exemplo com Objeto — Singleton (conexão única)

#### `db.js`

```js
// Simulação de uma conexão com o banco de dados
const db = {
  conectado: false,

  conectar() {
    if (!this.conectado) {
      console.log("Conectando ao banco de dados...");
      this.conectado = true;
    } else {
      console.log("Já está conectado!");
    }
  },

  desconectar() {
    if (this.conectado) {
      console.log("Desconectando...");
      this.conectado = false;
    }
  }
};

// Exporta o mesmo objeto para todos os módulos
export default db;
```

#### `app.js`

```js
import db from './db.js';

db.conectar();  // 👉 "Conectando ao banco de dados..."
db.conectar();  // 👉 "Já está conectado!"
```

> ✅ Aqui, **toda a aplicação usa a mesma instância de `db`** — perfeito para conexões únicas.

---

## 🧩 2. Quando usar uma **classe**

Use **classe** quando:

* Você precisa criar **várias instâncias independentes** (ex: múltiplos usuários, múltiplas conexões diferentes).
* O objeto precisa de **dados diferentes por instância**.
* Você quer encapsular **lógica complexa** e permitir **herança ou extensões futuras**.
* Há **configurações dinâmicas**, ex: conectar a bancos diferentes.

---

### 📦 Exemplo com Classe — várias conexões

#### `Database.js`

```js
export default class Database {
  constructor(nomeBanco) {
    this.nomeBanco = nomeBanco;
    this.conectado = false;
  }

  conectar() {
    if (!this.conectado) {
      console.log(`Conectando ao banco ${this.nomeBanco}...`);
      this.conectado = true;
    }
  }

  desconectar() {
    if (this.conectado) {
      console.log(`Desconectando do banco ${this.nomeBanco}...`);
      this.conectado = false;
    }
  }
}
```

#### `main.js`

```js
import Database from './Database.js';

const db1 = new Database("Clientes");
const db2 = new Database("Produtos");

db1.conectar(); // 👉 "Conectando ao banco Clientes..."
db2.conectar(); // 👉 "Conectando ao banco Produtos..."
```

> ✅ Aqui, você pode ter **quantas instâncias quiser**, cada uma com seu próprio estado.

---

## 🧠 3. Resumo comparativo

| Situação                                                             | Melhor opção                 | Por quê                                          |
| -------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------ |
| Uma única instância global (como conexão com o banco, config, cache) | **Objeto literal**           | É simples e garante apenas uma instância         |
| Várias instâncias diferentes (usuários, conexões, sessões)           | **Classe**                   | Cada instância tem seus próprios dados e métodos |
| Precisa de herança, encapsulamento, polimorfismo                     | **Classe**                   | Suporte completo a OOP                           |
| Precisa apenas expor funções/utilitários                             | **Objeto ou funções soltas** | Menos código e mais direto                       |

---

## 💡 Dica: o padrão “Singleton” com Classe

Se quiser manter a **estrutura de classe**, mas ainda garantir **uma única instância**, você pode combinar os dois conceitos 👇

#### `DatabaseSingleton.js`

```js
class Database {
  constructor() {
    if (Database.instancia) {
      return Database.instancia; // Reaproveita a mesma instância
    }

    this.conectado = false;
    Database.instancia = this; // Armazena a primeira instância
  }

  conectar() {
    if (!this.conectado) {
      console.log("Conectando ao banco de dados...");
      this.conectado = true;
    }
  }
}

export default new Database(); // Exporta já instanciado
```

> Assim, mesmo sendo uma classe, ela **só terá uma instância** — como um objeto singleton.

---

## ✅ Conclusão

| Caso de uso                         | Recomendação                               |
| ----------------------------------- | ------------------------------------------ |
| Conexão única com o banco de dados  | ✅ **Objeto literal** (ou classe singleton) |
| Múltiplas conexões/configurações    | ✅ **Classe**                               |
| Serviço ou utilitário compartilhado | ✅ **Objeto literal**                       |
| Estrutura complexa com herança      | ✅ **Classe**                               |