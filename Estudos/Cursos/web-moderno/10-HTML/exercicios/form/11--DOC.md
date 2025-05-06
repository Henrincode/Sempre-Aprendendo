## ✅ Códigos comentados:

`11-form.html`

```html
<!-- Título principal da página -->
<h1>Formulário</h1>

<!-- Início do formulário com método POST. Os dados serão enviados para a URL definida em cada botão com 'formaction' -->
<form method="post">
  <!-- Campo oculto com o ID do usuário -->
  <input type="hidden" name="id" value="3" />

  <!-- Campo de texto para o nome do usuário -->
  <input type="text" name="nome" />

  <!-- Campo para digitar a senha (oculta os caracteres) -->
  <input type="password" name="senha" />

  <!-- Área de texto maior para uma descrição ou biografia -->
  <textarea name="bio" cols="30" rows="10"></textarea>

  <!-- Seleção de tipo de usuário com botões de opção (radio) -->
  <div>
    <input type="radio" name="tipo" value="admin" /> Adm
    <input type="radio" name="tipo" value="redular" /> Regular
    <input type="radio" name="tipo" value="professor" /> Professor
  </div>

  <!-- Caixa de seleção (checkbox) para marcar se o usuário está ativo -->
  <div><input type="checkbox" name="ativo" /> Ativo</div>

  <!-- Menu suspenso para selecionar o estado -->
  <select name="estado">
    <option value="">Selecione</option>
    <option value="ac">Acre</option>
    <option value="ba">Bahia</option>
    <option value="ce">Ceará</option>
  </select>

  <!-- Seleção múltipla para interesses (segure Ctrl ou Shift para selecionar mais de um) -->
  <select name="interesses" multiple size="5">
    <option value="js">Javascript</option>
    <option value="java">JAVA</option>
    <option value="php">PHP</option>
    <option value="python">Python</option>
    <option value="go">GO</option>
    <option value="c">C</option>
  </select>

  <!-- Botões com ações diferentes para envio dos dados -->
  <button formaction="http://localhost:3003/usuarios">Incluir</button>
  <button formaction="http://localhost:3003/usuarios/3">Alterar</button>
</form>

<!-- Estilização básica para os campos do formulário -->
<style>
  input,
  textarea,
  select {
    display: block;
    margin-bottom: 10px;
  }

  input[type="radio"],
  input[type="checkbox"] {
    display: inline;
  }
</style>
```

---

`11-server.js`

```js
// Importa o framework Express
const express = require("express");
const app = express();

// Importa o body-parser para lidar com os dados enviados nos formulários
const bodyParser = require("body-parser");

// Middleware para interpretar dados no formato x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); // Corrigido "extend" para "extended"

// Rota POST para criação de usuário
app.post("/usuarios", (req, resp) => {
  // Exibe os dados enviados no terminal
  console.log(req.body);

  // Envia resposta para o navegador
  resp.send("<h1>Parabéns. Usuário cadastrado!</h1>");
});

// Rota POST para alteração de usuário existente
app.post("/usuarios/:id", (req, resp) => {
  // Exibe o ID da URL e os dados do corpo
  console.log(req.params.id);
  console.log(req.body);

  // Envia resposta ao navegador
  resp.send("<h1>Parabéns. Usuário alterado!</h1>");
});

// Inicia o servidor na porta 3003
app.listen(3003);
```

---

## 📘 O que foi aprendido

### 🧾 **Formulários HTML com diferentes campos**

- Aprendemos a usar vários elementos HTML para entrada de dados:

  - `<input type="text">` e `<input type="password">` para texto e senha.
  - `<textarea>` para textos maiores como biografias.
  - `<input type="radio">` para selecionar **um** entre vários tipos (admin, regular, professor).
  - `<input type="checkbox">` para marcar se o usuário está ativo.
  - `<select>` e `<option>` para listas suspensas (com ou sem múltiplas seleções).

- Usamos `formaction` nos botões para enviar o mesmo formulário para URLs diferentes (útil para "Incluir" ou "Alterar").

---

### 🚀 **Servidor com Express e rotas dinâmicas**

- O servidor foi criado com **Express**, e os dados dos formulários são lidos com **body-parser**.
- `app.use(bodyParser.urlencoded({ extended: true }))` habilita o servidor a entender os dados de formulários HTML.
- Criamos duas rotas POST:

  - `/usuarios` → cria um novo usuário.
  - `/usuarios/:id` → altera o usuário com o ID especificado.

- `req.body` exibe os dados enviados pelo formulário e `req.params.id` mostra o ID da URL.

---

### 🧠 **Resumo prático**

- O formulário HTML agora aceita vários tipos de entrada de dados.
- Usamos `formaction` para direcionar os envios a diferentes rotas.
- O servidor Express recebe, processa e responde com base nos dados.
- Vimos como capturar tanto o corpo da requisição (`req.body`) quanto parâmetros da URL (`req.params`).
