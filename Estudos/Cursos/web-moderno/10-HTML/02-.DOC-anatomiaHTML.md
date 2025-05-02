# ✅ Código com comentários:

```html
<!DOCTYPE html>
<!-- Declara o tipo de documento. Informa ao navegador que este é um arquivo HTML5. -->

<html>
  <!-- Elemento raiz do documento HTML. -->

  <head>
    <!-- Contém metadados (informações sobre o documento, não visíveis diretamente na página). -->

    <meta charset="utf-8" />
    <!-- Define o conjunto de caracteres como UTF-8, que suporta acentos e símbolos especiais. -->

    <title>Anatomia HTML</title>
    <!-- Define o título da página que aparece na aba do navegador. -->
  </head>

  <body>
    <!-- Contém todo o conteúdo visível da página web. -->

    <header>
      <!-- Cabeçalho da página. Normalmente usado para logotipo, título e menu principal. -->

      <h1>Exercícios HTML</h1>
      <!-- Título principal da página, nível 1 (o mais importante). -->
    </header>

    <nav>
      <!-- Seção de navegação da página. Contém links para outras partes ou páginas. -->

      <a href="#">Navegação 1</a>
      <!-- Um link de navegação. O símbolo "#" indica que o link não leva a lugar nenhum por enquanto. -->
    </nav>

    <section id="conteudo">Conteúdo</section>
    <!-- Seção que representa um conteúdo principal da página. Tem um id chamado "conteudo". -->

    <aside>Lateral</aside>
    <!-- Conteúdo lateral relacionado ao principal, como anúncios, links extras ou informações adicionais. -->

    <footer>Rodapé</footer>
    <!-- Rodapé da página, geralmente com informações de contato, direitos autorais ou links úteis. -->
  </body>
</html>
```

---

# 📘 **O que foi aprendido:

### 📄 **Estrutura básica de um documento HTML**

- O código começa com `<!DOCTYPE html>` que informa ao navegador que o documento usa HTML5.
- A tag `<html>` envolve todo o conteúdo do site.

---

### 🧠 **Seção `<head>`**

- Contém configurações e informações que não são exibidas diretamente na página, como o `<meta charset="utf-8">` que define a codificação dos caracteres e o `<title>` que aparece na aba do navegador.

---

### 🖼️ **Seção `<body>`**

- Tudo o que é visível na página vai dentro do `<body>`.
- Os elementos dentro do `<body>` são organizados por funções semânticas:

  - `<header>`: usado para o topo da página com título principal (`<h1>`).
  - `<nav>`: menu de navegação com links.
  - `<section>`: bloco de conteúdo principal, com `id="conteudo"` que pode ser usado em CSS ou JavaScript.
  - `<aside>`: conteúdo lateral, como menus secundários ou propagandas.
  - `<footer>`: parte inferior da página, normalmente com informações finais.
