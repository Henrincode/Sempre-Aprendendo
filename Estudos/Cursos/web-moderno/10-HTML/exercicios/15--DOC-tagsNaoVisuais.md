# ✅ Código com comentários:

```html
<h1>Tags Não Visuais</h1>

<!-- 
Tags Semânticas:
São tags que dão significado ao conteúdo da página, facilitando a leitura por humanos e
por mecanismos de busca.

section - Representa uma seção temática de conteúdo (ex: capítulo, grupo de artigos).
article - Representa um conteúdo independente e auto-contido (ex: post de blog, notícia).
header - Define o cabeçalho de uma seção ou da página.
footer - Define o rodapé de uma seção ou da página.
nav - Agrupa links de navegação principais.
aside - Conteúdo à parte, geralmente relacionado ao conteúdo principal (ex: barra lateral).
details - Contém informações adicionais que podem ser exibidas ou ocultadas.

Tags Genéricas (não semânticas):
div - Container de bloco, usado para agrupar elementos e aplicar estilos.
span - Container em linha (inline), usado para aplicar estilos a partes específicas de um texto.
-->

<!-- Exemplo com divs, que são blocos genéricos -->
<div>Área 1</div>
<div>Área 2</div>

<!-- Exemplo com span, que normalmente é inline, mas está sendo alterado via CSS -->
<p>
  Esse é um texto com <span class="diferente">muitas palavras</span> e ponto.
</p>

<!-- Estilos que alteram o comportamento padrão das tags -->
<style>
  div {
    display: inline; /* Normalmente div é bloco, aqui foi transformada em inline */
  }

  span {
    display: block; /* Normalmente span é inline, aqui foi transformada em bloco */
  }

  .diferente {
    font-weight: bold;
    font-size: 30px;
    color: chocolate;
  }
</style>
```

---

# 📘 O que foi aprendido:

### 🧱 **Tags não visuais e seu papel na estrutura**

Tags "não visuais" são aquelas que **organizam o conteúdo**, mas **não afetam diretamente a aparência** (a menos que sejam estilizadas com CSS). Elas ajudam na semântica e na organização lógica da página.

- **Semânticas**: ajudam a dar **significado** ao conteúdo (ex: `section`, `article`, `header`).
- **Genéricas**: como `div` e `span`, são usadas quando não há significado semântico específico, apenas para **agrupamento e estilização**.

---

### 🎨 **Alterando o comportamento padrão com CSS**

- A tag `<div>` é um **bloco por padrão**, mas aqui foi transformada em **inline**, fazendo com que as duas áreas (`Área 1` e `Área 2`) fiquem lado a lado.
- A tag `<span>`, que é **inline por padrão**, foi transformada em **bloco**, ocupando uma linha inteira e permitindo aplicar estilos de texto de forma destacada.
- A classe `.diferente` aplicou estilos ao texto, destacando-o com negrito, cor e tamanho de fonte maior.

---

### 🧪 **Experimentos visuais e práticos**

Esse exercício mostra como é possível alterar o **comportamento visual** das tags usando **CSS** e entender a **função estrutural das tags semânticas** no HTML.
