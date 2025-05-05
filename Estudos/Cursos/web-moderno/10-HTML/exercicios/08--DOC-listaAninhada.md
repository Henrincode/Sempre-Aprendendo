# ✅ Código com comentários:

```html
<!-- Título da página -->
<h1>Projeto</h1>

<!-- Lista com a classe "tree" para representar a árvore de arquivos -->
<ul class="tree">
  <!-- Pasta backend -->
  <li>
    <!-- Pasta interativa: pode ser recolhida ou expandida -->
    <span wm-folder>backend</span>
    <ul>
      <!-- Subpasta app dentro de backend -->
      <li>
        <span wm-folder>app</span>
        <ul>
          <!-- Arquivos dentro da pasta app -->
          <li>produto.js</li>
          <li>usuario.js</li>
          <li>venda.js</li>
        </ul>
      </li>

      <!-- Subpasta config dentro da pasta app -->
      <li>
        <span wm-folder>config.js</span>
        <ul>
          <!-- Arquivos dentro de config.js -->
          <li>banco.js</li>
          <li>rotas.js</li>
          <li>servidor.js</li>
        </ul>
      </li>
    </ul>
  </li>

  <!-- Pasta frontend -->
  <li>
    <span wm-folder>frontend</span>
    <ul>
      <!-- Subpasta public dentro de frontend -->
      <li>
        <span wm-folder>public</span>
        <ul>
          <!-- Arquivos dentro da pasta public -->
          <li>app.css</li>
          <li>app.js</li>
          <li>index.html</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<!-- Estilo externo que define a aparência da árvore -->
<link rel="stylesheet" href="http://files.cod3r.com.br/curso-web/tree.css" />

<!-- Script para tornar as pastas recolhíveis e expansíveis -->
<script>
  // Seleciona todos os elementos com o atributo "wm-folder"
  document.querySelectorAll("[wm-folder]").forEach(folder => {
    // Adiciona um evento de clique para alternar o display da próxima <ul>
    folder.onclick = function () {
      const ul = folder.nextElementSibling; // Pega a <ul> que está logo após o <span>
      const d = ul.style.display; // Obtém o valor atual do display
      ul.style.display = d === "none" ? "block" : "none"; // Alterna entre 'none' e 'block'
    };
  });
</script>
```

---

# 📘 O que foi aprendido:

### 🌐 **Linguagem HTML**

HTML (HyperText Markup Language) é a linguagem padrão para criar páginas da web. Ela usa **tags** para estruturar o conteúdo, como `<h1>`, `<ul>`, `<li>`, entre outras.

---

### 🌳 **Árvore de arquivos com `<ul>` e `<li>`**

- Utilizamos **listas não ordenadas (`<ul>`)** e **itens de lista (`<li>`)** para criar uma estrutura parecida com uma árvore de arquivos.
- Essa estrutura é muito útil para simular pastas e arquivos em uma interface web.

---

### 📁 **Pasta expansível com JavaScript**

- Cada pasta foi marcada com um atributo personalizado `wm-folder`, que é usado para identificar os elementos clicáveis.
- O JavaScript seleciona todos os elementos com esse atributo e adiciona um comportamento de clique que **expande ou recolhe** a sublista (`<ul>`).
- Isso cria um efeito visual de abrir e fechar pastas, como num explorador de arquivos.

---

### 🎨 **Estilo com CSS externo**

- Um arquivo CSS externo (`tree.css`) foi incluído para deixar a árvore de arquivos com uma aparência mais organizada e intuitiva.
- Esse arquivo provavelmente define ícones de pastas, margens, recuos e outros estilos visuais.

---

### ⚙️ **Interatividade com DOM e JavaScript**

- Usamos o **DOM (Document Object Model)** para manipular elementos HTML diretamente com JavaScript.
- A função `folder.onclick` define o comportamento que será executado quando o usuário clicar em uma pasta.
- A propriedade `nextElementSibling` pega o próximo elemento (a sublista) para alternar sua visibilidade (`display`).
