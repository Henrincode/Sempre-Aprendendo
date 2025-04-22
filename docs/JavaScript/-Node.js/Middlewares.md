# 📘 Documentação: Middlewares no Node.js (Express)

## 📌 O que é um Middleware?

No contexto de servidores Node.js (principalmente usando **Express**), um **middleware** é uma **função que intercepta** a requisição (`req`) e a resposta (`res`) antes que o servidor conclua o ciclo de resposta.

### 📥 Requisição → 🧠 Middleware(s) → 📤 Resposta

---

## 🧠 Para que servem?

Middlewares permitem:

- 📄 Acesso e modificação da requisição (`req`)
    
- ✍️ Modificação da resposta (`res`)
    
- ⛔ Bloqueio de requisições
    
- 🚀 Encaminhamento para próxima função (`next()`)
    
- 🔐 Autenticação e autorização
    
- 🧼 Validação de dados
    
- 🐞 Tratamento de erros
    
- 📋 Registro de logs
    

---

## 🔧 Estrutura básica de um middleware

```js
function meuMiddleware(req, res, next) {
  console.log('Middleware executado');
  next(); // passa para o próximo middleware ou rota
}
```

---

## 🧪 Exemplo simples com Express

```js
const express = require('express');
const app = express();

// Middleware simples
app.use((req, res, next) => {
  console.log(`Método: ${req.method} | URL: ${req.url}`);
  next(); // continua o fluxo
});

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.listen(3000);
```

---

## ⚙️ Tipos de middleware

### 1. **Global**

Aplica-se a todas as rotas com `app.use()`.

```js
app.use(express.json()); // body parser global
```

### 2. **Por rota**

É aplicado apenas a rotas específicas.

```js
function verificarToken(req, res, next) {
  if (req.headers.token === '123') {
    next();
  } else {
    res.status(401).send('Não autorizado');
  }
}

app.get('/privado', verificarToken, (req, res) => {
  res.send('Você tem acesso!');
});
```

### 3. **De erro**

Recebe **4 parâmetros** e é ativado quando há erro.

```js
function tratarErro(err, req, res, next) {
  console.error(err);
  res.status(500).send('Erro interno!');
}

app.use(tratarErro);
```

---

## 📚 Middleware nativo do Express

|Middleware|Função|
|---|---|
|`express.json()`|Converte `body` JSON em objeto JS|
|`express.urlencoded()`|Converte dados de formulários HTML|
|`express.static()`|Serve arquivos estáticos (HTML, CSS, imagens...)|

---

## 🧩 Ordem de execução

A ordem dos middlewares importa!

```js
app.use(m1); // executa primeiro
app.use(m2); // depois esse
app.get('/', m3, rotaFinal); // executa m3 e depois a rota
```

---

## 🔄 Encadeando múltiplos middlewares

```js
function m1(req, res, next) {
  console.log('M1');
  next();
}

function m2(req, res, next) {
  console.log('M2');
  next();
}

app.get('/', m1, m2, (req, res) => {
  res.send('Fim!');
});
```

### 🧪 Saída:

```
M1
M2
Fim!
```

---

## 🛑 Encerrando o fluxo sem `next()`

```js
app.use((req, res, next) => {
  res.send('Acesso bloqueado!');
  // não chama next(), então o fluxo para aqui
});
```

---

## ✅ Boas práticas

- ✅ Use middlewares para separar responsabilidades (autenticação, logs, validação, etc.)
    
- ✅ Organize em arquivos separados
    
- ✅ Trate erros com um middleware de erro centralizado
    
- ❌ Evite lógica pesada dentro de middlewares simples
    

---

## 🗂️ Exemplo de estrutura de projeto com middlewares

```
/meu-projeto
│
├── index.js
├── middlewares/
│   ├── autenticar.js
│   └── logger.js
```

```js
// middlewares/logger.js
module.exports = (req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
};
```

---

## 🧠 Conclusão

Middlewares são fundamentais no Express/Node.js para:

- Modularizar o código
    
- Aplicar verificações e transformações
    
- Controlar o fluxo da aplicação
    

> 💡 Comece usando `app.use()` com logs, depois teste middlewares de autenticação e erro. É a base para APIs robustas!