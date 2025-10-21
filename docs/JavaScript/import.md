# 📘 Exportando e Importando Classes e Objetos no JavaScript (ES Modules)

## 🧩 O que é "export" e "import"?

Em JavaScript, as palavras-chave **`export`** e **`import`** permitem **dividir o código em módulos** — arquivos independentes que podem ser reutilizados em diferentes partes do projeto.

* **`export`** → envia algo de um arquivo para ser usado em outro.
* **`import`** → traz algo de outro arquivo para o arquivo atual.

Esses módulos usam a **sintaxe ES6 (ECMAScript 2015)** e funcionam tanto no navegador (com `<script type="module">`) quanto no Node.js moderno (com `"type": "module"` no `package.json`).

---

## 🧱 1. Exportando e Importando um Objeto

### 📦 Arquivo: `config.js`

```js
// Criando um objeto de configuração
const config = {
  appName: "MeuApp",
  version: "1.0.0",
  tema: "escuro"
};

// Exportando o objeto
export default config;
```

> 📝 **`export default`** indica que esse é o **export principal** do arquivo.
> Um arquivo só pode ter **um único export default**.

---

### 📥 Arquivo: `app.js`

```js
// Importando o objeto exportado
import config from './config.js';

console.log(config.appName);  // 👉 "MeuApp"
console.log(config.tema);     // 👉 "escuro"
```

> 💡 Observe que não é necessário usar `{}` ao importar o **default**.

---

## 🧱 2. Exportando e Importando uma Classe

### 📦 Arquivo: `User.js`

```js
// Criando uma classe chamada User
export default class User {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
}
```

> 🧠 Essa classe pode ser exportada diretamente com `export default class`.

---

### 📥 Arquivo: `main.js`

```js
// Importando a classe
import User from './User.js';

// Criando uma instância
const usuario1 = new User("Henrique", 25);
usuario1.saudacao(); // 👉 "Olá, meu nome é Henrique e eu tenho 25 anos."
```

---

## ⚙️ 3. Exportando **sem** Default (Export Nomeado)

Você também pode exportar **vários itens** de um mesmo arquivo usando **exports nomeados**.

### 📦 Arquivo: `utils.js`

```js
// Exportando dois itens nomeados
export const PI = 3.14159;

export function somar(a, b) {
  return a + b;
}
```

### 📥 Arquivo: `math.js`

```js
// Importando itens nomeados (usa chaves {})
import { PI, somar } from './utils.js';

console.log(PI);          // 👉 3.14159
console.log(somar(10, 5)); // 👉 15
```

> ⚠️ Nesse caso, **os nomes devem ser exatamente os mesmos** que foram exportados.

---

## 🧩 4. Exportando Múltiplos Itens Juntos

Você também pode exportar todos de uma vez no final:

### 📦 Arquivo: `dados.js`

```js
const usuario = { nome: "Lucas", ativo: true };
const produto = { nome: "Notebook", preco: 3500 };

function mostrarInfo() {
  console.log("Sistema de exportação funcionando!");
}

// Exportando todos juntos
export { usuario, produto, mostrarInfo };
```

### 📥 Arquivo: `importarTudo.js`

```js
import { usuario, produto, mostrarInfo } from './dados.js';

console.log(usuario.nome); // 👉 "Lucas"
mostrarInfo();             // 👉 "Sistema de exportação funcionando!"
```

---

## 🧠 5. Misturando Default + Nomeados

Você pode exportar um item principal e outros secundários.

### 📦 Arquivo: `appData.js`

```js
const versao = "2.0.0";
const autor = "Henrique";

export function logarVersao() {
  console.log(`Versão atual: ${versao}`);
}

// Export default e nomeados juntos
export default autor;
export { versao, logarVersao };
```

### 📥 Arquivo: `importarCombinado.js`

```js
// Import default + nomeados
import autor, { versao, logarVersao } from './appData.js';

console.log(autor);   // 👉 "Henrique"
console.log(versao);  // 👉 "2.0.0"
logarVersao();        // 👉 "Versão atual: 2.0.0"
```

---

## ⚡ 6. Importando Tudo de Uma Vez

Você também pode importar tudo de um módulo dentro de um **objeto único**.

### 📥 Exemplo:

```js
import * as utils from './utils.js';

console.log(utils.PI);       // 👉 3.14159
console.log(utils.somar(2,3)); // 👉 5
```

> 🧩 Isso é útil quando o módulo tem muitas funções e você quer organizá-las em um único nome.

---

## 💡 Dica Extra: Caminhos Relativos

* `./` → mesmo diretório
* `../` → volta uma pasta
* `./pasta/arquivo.js` → caminho completo até o arquivo

---

## ✅ Resumo Rápido

| Tipo de Export                  | Sintaxe no Arquivo                               | Como Importar                          |
| ------------------------------- | ------------------------------------------------ | -------------------------------------- |
| Export Default (um por arquivo) | `export default valor`                           | `import valor from './arquivo.js'`     |
| Export Nomeado                  | `export { valor }` ou `export const valor = ...` | `import { valor } from './arquivo.js'` |
| Importar tudo                   | `import * as obj from './arquivo.js'`            | `obj.valor`                            |