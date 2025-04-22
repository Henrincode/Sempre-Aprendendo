# 📦 Documentação: Express.js (Node.js)

## 📘 Introdução

**Express** é um framework minimalista e flexível para aplicações web no Node.js. Ele facilita o gerenciamento de rotas, requisições HTTP, middleware e outras funcionalidades úteis para construir APIs e servidores web de forma rápida e eficiente.

---

## 🚀 Instalação

Para usar o Express, é necessário tê-lo instalado em um projeto Node.js.

```bash
npm init -y
npm install express
```

---

## 🛠️ Criando um servidor básico

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

📌 **Explicação:**

- `express()` cria uma aplicação Express.
    
- `app.get()` define uma rota do tipo GET.
    
- `app.listen()` inicia o servidor na porta especificada.
    

---

## 📍 Rotas (Routes)

### Rota GET

```js
app.get('/rota', (req, res) => {
  res.send('Você acessou a rota GET');
});
```

### Rota POST

```js
app.post('/rota', (req, res) => {
  res.send('Você enviou dados via POST');
});
```

### Rota com parâmetro

```js
app.get('/usuario/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Usuário com ID: ${id}`);
});
```

---

## 🔄 Middleware

Middleware são funções que processam requisições antes de chegar na rota final.

```js
app.use((req, res, next) => {
  console.log('Middleware executado');
  next(); // passa para a próxima função
});
```

Você também pode usar middlewares como o `express.json()`:

```js
app.use(express.json());
```

---

## 📤 Enviando e recebendo dados (JSON)

### Recebendo dados com `POST`

```js
app.post('/dados', (req, res) => {
  const dados = req.body;
  res.json({ recebido: true, dados });
});
```

✅ Lembre-se de usar `app.use(express.json())` antes disso!

---

## 🧱 Servir arquivos estáticos

```js
app.use(express.static('public'));
```

📂 Com isso, arquivos na pasta `public` (como HTML, CSS, JS) estarão disponíveis no navegador.

---

## ❌ Tratamento de rotas não encontradas

```js
app.use((req, res) => {
  res.status(404).send('Página não encontrada');
});
```

---

## ⚙️ Exemplos práticos

### Exemplo: API simples de usuários

```js
const express = require('express');
const app = express();
app.use(express.json());

const usuarios = [];

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
  const usuario = req.body;
  usuarios.push(usuario);
  res.status(201).json(usuario);
});

app.listen(3000, () => {
  console.log('API rodando na porta 3000');
});
```

---

## 📚 Recursos úteis

- [Documentação oficial do Express](https://expressjs.com/)
    
- [Exemplos no GitHub](https://github.com/expressjs/express)