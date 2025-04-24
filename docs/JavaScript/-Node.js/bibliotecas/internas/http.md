# 📘 Documentação do Módulo `http` do Node.js

O módulo `http` é um dos módulos nativos do Node.js e permite criar servidores web e fazer requisições HTTP sem a necessidade de bibliotecas externas.

## 📦 Importação do Módulo

```js
const http = require('http');
```

## 🖥 Criando um Servidor HTTP

O método mais comum para criar um servidor é usando `http.createServer()`.

### 📌 Exemplo Básico de Servidor:

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200; // Código de status HTTP
  res.setHeader('Content-Type', 'text/plain'); // Tipo de conteúdo
  res.end('Olá, mundo!'); // Resposta enviada ao cliente
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
```

### 🔍 Explicando os Parâmetros

- `req` (Request): Representa a requisição feita pelo cliente.
    
- `res` (Response): Representa a resposta que o servidor vai enviar.
    

---

## 🔎 Lidando com Requisições

Você pode acessar propriedades da requisição:

```js
const server = http.createServer((req, res) => {
  console.log(req.method); // GET, POST, etc.
  console.log(req.url);    // Caminho da URL
  console.log(req.headers); // Cabeçalhos HTTP

  res.end('Informações recebidas.');
});
```

---

## 🧭 Roteamento Simples

Para lidar com diferentes caminhos (rotas), use `req.url`:

```js
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Página Inicial');
  } else if (req.url === '/sobre') {
    res.end('Página Sobre');
  } else {
    res.statusCode = 404;
    res.end('Página não encontrada');
  }
});
```

---

## 📤 Enviando HTML como Resposta

```js
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Bem-vindo ao servidor Node.js</h1>');
});
```

---

## 📥 Lidando com Dados de Requisição (POST)

Para coletar dados enviados por POST:

```js
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      console.log('Corpo da requisição:', body);
      res.end('Dados recebidos');
    });
  } else {
    res.end('Envie uma requisição POST');
  }
});
```

---

## ⚙️ Métodos Úteis

- `http.createServer(callback)`: Cria um novo servidor.
    
- `server.listen(port, callback)`: Faz o servidor escutar uma porta.
    
- `res.setHeader(nome, valor)`: Define um cabeçalho.
    
- `res.statusCode`: Define o código de status.
    
- `res.end(conteúdo)`: Finaliza e envia a resposta.
    

---

## ✅ Conclusão

O módulo `http` do Node.js é leve e poderoso para aplicações web simples. Para projetos maiores, frameworks como Express.js são recomendados, mas entender o funcionamento nativo é essencial para compreender como as coisas funcionam por baixo dos panos.