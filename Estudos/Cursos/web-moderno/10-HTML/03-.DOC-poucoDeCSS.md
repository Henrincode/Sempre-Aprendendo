# ✅ Códigos com comentários:

### `03-poucoDeCSS.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Um Pouco de CSS</title>

    <!-- Importando o arquivo CSS externo -->
    <link rel="stylesheet" href="03-poucoDeCSS.css" />

    <style>
      /* Estilizando o elemento <h1> diretamente dentro do HTML */
      h1 {
        font-size: 20px;
      }

      /* Classe para fundo vermelho */
      .fundoVermelho {
        background-color: #c00; /* Vermelho escuro */
      }

      /* Classe para texto em negrito */
      .negrito {
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <!-- Título da página -->
    <h1>CSS</h1>

    <!-- Span com ID 'textoPrincipal', recebe estilo do CSS externo -->
    <span id="textoPrincipal">Texto1</span><br /><br /><br />

    <!-- Span com duas classes: fundo vermelho e negrito -->
    <span class="fundoVermelho negrito">Texto 2</span><br /><br />

    <!-- Span com apenas a classe de fundo vermelho -->
    <span class="fundoVermelho">Texto 3</span>
  </body>
</html>
```

---

### `03-poucoDeCSS.css`

```css
/* Estilo aplicado ao elemento com ID 'textoPrincipal' */
#textoPrincipal {
  font-size: 40px; /* Tamanho grande da fonte */
  font-weight: bold; /* Deixa o texto em negrito */
  color: #fff; /* Cor do texto: branco */
  padding: 10px; /* Espaçamento interno */
  background-color: #444; /* Cor de fundo cinza escuro */
}
```

---

# 📘 O que foi aprendido:

### 🧠 **O que é HTML?**

HTML (HyperText Markup Language) é a linguagem de marcação usada para estruturar o conteúdo da web. Com HTML, você cria títulos, parágrafos, links, imagens, tabelas e muito mais.

---

### 🎨 **O que é CSS?**

CSS (Cascading Style Sheets) é usado para estilizar elementos HTML. Ele permite alterar cores, tamanhos, espaçamentos, fontes, e até animações. Você pode usar CSS de três formas:

- **Interno**: dentro da tag `<style>` no HTML.
- **Externo**: em um arquivo `.css` separado, como no exemplo.
- **Inline**: diretamente no elemento (não usado aqui).

---

### 🧩 **Seletores e Classes**

- O **ID** `#textoPrincipal` aplica um estilo específico a apenas um elemento.
- As **classes** `.fundoVermelho` e `.negrito` podem ser usadas em vários elementos e combinadas entre si.

---

### 🖼️ **Diferença entre ID e Classe**

- `id` deve ser **único** em cada página.
- `class` pode ser reutilizada em vários elementos.

No código:

- `#textoPrincipal` (ID): estilizado no CSS externo.
- `.fundoVermelho` e `.negrito` (classes): estilizadas no CSS interno.

---

### 🔗 **Ligação entre HTML e CSS**

- A tag `<link rel="stylesheet" href="...">` conecta o HTML ao arquivo CSS externo.
- A tag `<style>` permite escrever CSS diretamente no HTML.
