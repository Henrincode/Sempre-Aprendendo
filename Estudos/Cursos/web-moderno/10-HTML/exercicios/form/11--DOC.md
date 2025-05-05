# ✅ Código com comentários:

```html
<!-- Título principal da página -->
<h1>Formulário</h1>

<!-- Formulário que envia dados para o servidor -->
<form action="http://localhost:3003/usuarios" method="post">
  <!-- Campo de texto para digitar o nome -->
  <input type="text" name="nome" />

  <!-- Botão para enviar o formulário -->
  <button>Enviar</button>
</form>
```

```js
// Importa o framework Express para criar o servidor
const express = require("express");

// Cria uma instância da aplicação Express
const app = express();

// Importa o body-parser para interpretar os dados do corpo da requisição
const bodyParser = require("body-parser");

// Configura o Express para usar o body-parser e interpretar dados no formato x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Define a rota POST para /usuarios
// Quando o formulário for enviado, os dados serão capturados aqui
app.post("/usuarios", (req, resp) => {
  // Exibe os dados enviados no terminal
  console.log(req.body);

  // Envia uma resposta HTML para o navegador
  resp.send("<h1>Parabéns</h1>");
});

// Inicia o servidor na porta 3003
app.listen(3003);
```

---

# 📘 O que foi aprendido:

### 📝 **Formulários HTML e envio de dados**

- A tag `<form>` é usada para criar formulários que enviam dados ao servidor.
- O atributo `action` define **para onde os dados serão enviados** (neste caso, `http://localhost:3003/usuarios`).
- O atributo `method="post"` define o **método de envio**. Aqui usamos `POST`, que envia os dados no **corpo da requisição**, ideal para dados sensíveis ou grandes.
- `<input type="text" name="nome">` cria um campo de texto. O atributo `name` é o **identificador do dado** que será enviado ao servidor.
- `<button>` é o botão que **envia** o formulário.

---

### 🚀 **Servidor com Express + body-parser**

- Usamos o **Express** para criar rapidamente um servidor web.
- A biblioteca **body-parser** é usada para interpretar os dados do formulário enviados com `POST`. Sem ela, o `req.body` seria `undefined`.
- `app.use(bodyParser.urlencoded({ extended: true }))` ativa essa interpretação para formulários do tipo `x-www-form-urlencoded`, que é o padrão de envio do HTML.
- A rota `app.post("/usuarios", ...)` responde às requisições feitas pelo formulário.
- `req.body` contém os dados enviados, por exemplo: `{ nome: 'João' }`.
- `res.send("<h1>Parabéns</h1>")` envia uma resposta HTML simples para o navegador.

---

### 📌 **Resumo prático**

- Criamos um formulário simples em HTML.
- Usamos um servidor Express com body-parser para receber e tratar os dados enviados.
- Ao preencher e enviar o formulário, o nome digitado é mostrado no terminal e o usuário recebe uma resposta na tela.
