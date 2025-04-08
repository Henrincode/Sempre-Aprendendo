### 📦 `module.exports` no Node.js

#### ✅ Para que serve?

O `module.exports` é usado para **exportar valores, funções, objetos ou classes de um arquivo (módulo)** para que possam ser usados em **outros arquivos** com o `require()`.

No Node.js, **cada arquivo é um módulo independente**. Se você quiser que algo fique acessível fora dele, precisa exportar com `module.exports`.

---

### 🛠️ Como usar?

#### 1. Exportando uma função:

```js
// arquivo: saudacao.js

function dizerOla(nome) {
  return `Olá, ${nome}!`;
}

// Exporta a função para ser usada em outro arquivo
module.exports = dizerOla;
```

```js
// arquivo: app.js

// Importa a função do outro módulo
const saudacao = require('./saudacao');

console.log(saudacao('Henrique')); // Olá, Henrique!
```

---

#### 2. Exportando um objeto com várias funções:

```js
// arquivo: calculadora.js

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

module.exports = {
  somar,
  subtrair,
};
```

```js
// arquivo: app.js

const calc = require('./calculadora');

console.log(calc.somar(10, 5));      // 15
console.log(calc.subtrair(10, 5));   // 5
```

---

#### 3. Exportando uma classe:

```js
// arquivo: Pessoa.js

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    return `Olá, meu nome é ${this.nome}`;
  }
}

module.exports = Pessoa;
```

```js
// arquivo: app.js

const Pessoa = require('./Pessoa');

const henrique = new Pessoa('Henrique');
console.log(henrique.falar()); // Olá, meu nome é Henrique
```

---

### 🔄 Dica: `exports` vs `module.exports`

Você pode usar `exports` como atalho para `module.exports`, mas **não pode sobrescrever `exports` diretamente**, senão perde a referência.

```js
// Correto
exports.ola = () => 'Oi!';

// Errado (quebra o vínculo com module.exports)
exports = () => 'Oi!';
```