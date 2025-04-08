# Módulo `require` no Node.js

O `require` é uma função do Node.js usada para importar módulos, arquivos ou pacotes em um script. Ele faz parte do sistema de módulos CommonJS, que é o padrão utilizado no Node.js para modularização de código.

---

## 📦 Sintaxe básica

```js
const módulo = require('caminho_ou_nome_do_módulo');
````

---

## 📁 Exemplos de uso

### 1. Requerendo um módulo interno do Node.js

```js
const fs = require('fs'); // Módulo de sistema de arquivos
```

### 2. Requerendo um módulo local (arquivo criado por você)

```js
const meuModulo = require('./meuModulo'); // './' indica que está na mesma pasta
```

### 3. Requerendo um módulo de terceiros (instalado via npm)

```js
const express = require('express');
```

---

## 🔄 Como o `require` funciona

Quando usamos `require`, o Node faz os seguintes passos:

1. **Resolve** o caminho do módulo.
2. **Carrega** o arquivo (caso seja um `.js`, `.json` ou `.node`).
3. **Executa** o código do módulo uma única vez (o resultado é **cacheado**).
4. **Retorna** o valor de `module.exports`.

---

## 🧠 Cache de módulos

O `require` armazena em cache o resultado da primeira importação. Isso significa que, mesmo que você use `require` várias vezes para o mesmo módulo, ele será carregado uma única vez:

```js
const a = require('./modulo'); // executa o código do módulo
const b = require('./modulo'); // retorna do cache
```

---

## 🔁 Exportando e Importando

### Exportando com `module.exports`

```js
// arquivo: soma.js
function soma(a, b) {
  return a + b;
}

module.exports = soma;
```

### Importando com `require`

```js
const soma = require('./soma');
console.log(soma(2, 3)); // 5
```

---

## 📌 Observações

- Você pode omitir a extensão `.js` ao importar arquivos JavaScript.
- Se o arquivo for `.json`, o conteúdo será automaticamente convertido em objeto.
- O Node procura arquivos nesta ordem:
	1. Arquivo `.js`
	2. Arquivo `.json`
	3. Arquivo `.node`
	4. Pasta com `index.js`
	5. Pasta com `package.json` e campo `"main"`

---

## 🧪 Exemplo prático

### Estrutura de arquivos:

```
📁 projeto
 ┣ 📄 index.js
 ┗ 📄 saudacao.js
```

### saudacao.js

```js
module.exports = function(nome) {
  return `Olá, ${nome}!`;
};
```

### index.js

```js
const saudacao = require('./saudacao');
console.log(saudacao('Henrique')); // Olá, Henrique!
```

---

## ✅ Quando usar `require`?

Use `require` quando estiver utilizando a sintaxe CommonJS (padrão do Node.js). Para projetos modernos com ES Modules, prefira `import/export`.

---

## 🔚 Conclusão

O `require` é fundamental para trabalhar com módulos no Node.js. Ele permite que você divida seu código em partes reutilizáveis, facilitando a manutenção, organização e escalabilidade do projeto.