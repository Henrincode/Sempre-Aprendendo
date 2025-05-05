# ✅ Código com comentários:

```html
<!-- Título da página -->
<h1>Links</h1>

<!-- Link com URL absoluta (endereço completo do site) -->
<a id="inicio" href="https://www.google.com.br">Google 1</a><br />

<!-- Link com URL absoluta que abre em uma nova aba -->
<a href="https://www.google.com.br" target="_blank">Google 2</a><br /><br />

<!-- Link com URL relativa (referência a um arquivo local na mesma pasta) -->
<a href="index.html">Voltar 1</a><br />

<!-- Link com URL relativa a partir da raiz do projeto -->
<a href="/index.html">Voltar 2</a><br />

<!-- Link com URL relativa para voltar um diretório antes de acessar o arquivo -->
<a href="../index.html">Voltar 3</a><br /><br />

<!-- Link para enviar um e-mail -->
<a href="mailto:email@empresa.com.br">Entre em contato</a><br /><br />

<!-- Link âncora: área da página com um destino específico -->

<!-- Seção distante da página que será alcançada por um link âncora -->
<div id="noticia" style="position: absolute; top: 2000px;">
  <h1>Notícia Buemba!</h1>
  <p>Não era nada... :)</p>

  <!-- Link âncora que volta ao topo (onde está o id="inicio") -->
  <a href="#inicio">Voltar Início</a>
</div>

<!-- Link âncora que leva até a seção com id="noticia" -->
<a href="#noticia">Ir para Notícia</a>
```

---

# 📘 O que foi aprendido:

### 🔗 **Links com URL absoluta**

- Usamos a tag `<a>` para criar **hiperlinks**.
- Quando usamos `href="https://..."`, estamos criando um link para um **site externo** (chamado de URL absoluta).
- O atributo `target="_blank"` faz com que o link **abra em uma nova aba** do navegador.

---

### 🔄 **Links com URL relativa**

- Uma **URL relativa** aponta para arquivos **dentro do próprio projeto**.
- Exemplos:

  - `href="index.html"`: busca o arquivo na **mesma pasta**.
  - `href="/index.html"`: busca a partir da **raiz do site**.
  - `href="../index.html"`: volta **um nível acima** na estrutura de pastas antes de procurar o arquivo.

---

### ✉️ **Links para e-mail**

- O `href="mailto:email@..."` cria um link que **abre o programa de e-mail padrão** do usuário, já com o endereço preenchido.

---

### 🧭 **Links âncora (navegação dentro da página)**

- Podemos criar links que levam o usuário para **outra parte da mesma página**, usando `id` e `href="#id"`.
- Exemplo:

  - Um elemento com `id="noticia"` será o destino.
  - Um link com `href="#noticia"` leva até ele.

- Isso é útil para criar **navegação rápida** em páginas longas ou com seções específicas.
