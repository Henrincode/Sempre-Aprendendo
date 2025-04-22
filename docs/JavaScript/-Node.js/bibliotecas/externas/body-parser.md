# 📦 Body-Parser no Node.js (com Express)

## 📘 O que é o `body-parser`?

O `body-parser` é um **middleware** do Node.js usado com o **Express** para **interpretar o corpo das requisições HTTP** (como os dados enviados via POST, PUT, etc.). Ele transforma os dados recebidos em um objeto JavaScript acessível através de `req.body`.

> ⚠️ Desde o Express v4.16.0, parte das funcionalidades do `body-parser` já está incluída no próprio Express, mas ele ainda pode ser utilizado separadamente.

---

## 🚀 Instalação

```bash
npm install body-parser
```

---

## 🔧 Como Usar

### 1. Importação e configuração básica:

```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para interpretar JSON
app.use(bodyParser.json());

// Middleware para interpretar dados codificados na URL (formulários)
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/dados', (req, res) => {
  console.log(req.body); // Exibe os dados enviados no corpo da requisição
  res.send('Dados recebidos!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

---

## 🧠 Entendendo os Tipos

### `bodyParser.json()`

Usado para processar dados no formato **JSON**.

- Ideal para APIs REST.
    
- Requisições devem ter o header `Content-Type: application/json`.
    

### `bodyParser.urlencoded({ extended: true })`

Usado para processar dados de **formulários HTML**.

- Quando `extended: true`: permite objetos complexos no corpo.
    
- Quando `extended: false`: permite apenas strings ou arrays simples.
    

---

## ✅ Exemplo de Requisição JSON

```bash
curl -X POST http://localhost:3000/dados \
  -H "Content-Type: application/json" \
  -d '{"nome": "Maria", "idade": 25}'
```

---

## ✅ Exemplo de Formulário (URL Encoded)

```bash
curl -X POST http://localhost:3000/dados \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "nome=João&idade=30"
```

---

## 🆕 Usando o Express sem body-parser (modo nativo)

```js
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

---

## 🛑 Quando usar `body-parser` hoje?

- Em projetos legados: **Sim**, ele ainda é amplamente usado.
    
- Em projetos novos com Express >= 4.16: **Não é obrigatório**, use o `express.json()` e `express.urlencoded()`.