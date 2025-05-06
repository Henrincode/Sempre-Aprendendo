# ✅ Códigos com comentários:

```html
<!-- Exibindo imagens simples usando a tag <img> -->
<p>
  <img
    src="http://files.cod3r.com.br/curso-web/imagem1.jpg"
    alt="Muro da Cidade"
    width="513"
    height="342"
    title="Muro da Cidade por Tarso Besa"
  />
</p>

<!-- Exibindo uma imagem animada no formato GIF -->
<p>
  <img
    src="http://files.cod3r.com.br/curso-web/imagem2.gif"
    alt="Intro Cod3r"
    height="342"
  />
</p>

<!-- Exibindo uma imagem com classe personalizada para estilo (fundo cinza e largura fixa) -->
<p class="circular">
  <img
    src="http://files.cod3r.com.br/curso-web/imagem3.png"
    alt="Rio de Janeiro"
    height="342"
  />
</p>

<!-- Imagem ao lado de um texto; usamos "align" para posicionar à esquerda -->
<p class="texto">
  <img
    src="http://files.cod3r.com.br/curso-web/avatar.jpg"
    alt="Avatar"
    height="50"
    align="left"
  />
  Texto genérico de exemplo para ilustrar a exibição de uma imagem ao lado de um
  parágrafo. Isso ajuda a entender o comportamento do texto em volta de uma
  imagem com alinhamento.
</p>

<!-- Elemento que usa imagem de fundo com CSS -->
<p class="cidade"></p>

<!-- Usando a tag <picture> com <source> para tornar a imagem responsiva -->
<p>
  <picture>
    <!-- Se a largura da tela for maior que 600px, essa imagem será usada -->
    <source
      srcset="http://files.cod3r.com.br/curso-web/logo-larga.png"
      media="(min-width: 600px)"
    />
    <!-- Imagem padrão que será exibida em telas menores -->
    <img
      src="http://files.cod3r.com.br/curso-web/logo-estreita.png"
      alt="Logo"
    />
  </picture>
</p>

<!-- Estilos CSS aplicados às classes dos elementos HTML -->
<style>
  /* Define largura e cor de fundo para o elemento com classe "circular" */
  .circular {
    width: 513px;
    background-color: gray;
  }

  /* Define a largura do bloco de texto */
  .texto {
    width: 400px;
  }

  /* Define margem à direita da imagem dentro do texto para separar da escrita */
  .texto img {
    margin-right: 10px;
  }

  /* Define imagem de fundo para o bloco com classe "cidade" e ajusta exibição */
  .cidade {
    width: 513px;
    height: 342px;
    background-image: url("http://files.cod3r.com.br/curso-web/imagem4.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 200%;
  }
</style>
```

---

# 📘 O que foi aprendido:

### 🖼️ **O que é a tag `<img>`?**

A tag `<img>` é usada para **inserir imagens** em uma página HTML. Ela não possui uma tag de fechamento. Os principais atributos usados são:

- `src`: caminho da imagem (URL ou local).
- `alt`: texto alternativo, exibido se a imagem não carregar (e importante para acessibilidade).
- `width` e `height`: controlam o tamanho da imagem.
- `title`: texto exibido ao passar o mouse sobre a imagem.
- `align` (usado aqui, mas **obsoleto**): define o alinhamento da imagem (ex: `left`, `right`).

---

### 🧱 **Uso de classes com CSS**

As imagens foram envolvidas em `<p>` com classes como `.circular`, `.texto` e `.cidade`. Com essas classes, aplicamos estilos como largura, fundo, e margem para controlar o layout.

Exemplo:

```css
.texto img {
  margin-right: 10px;
}
```

Isso afasta o texto da imagem, criando um espaço visual mais agradável.

---

### 🏙️ **Imagem de fundo com CSS**

A `<p class="cidade">` mostra como usar **imagens de fundo via CSS**:

```css
background-image: url("imagem.jpg");
```

E também como ajustar a exibição com:

- `background-size`: redimensiona a imagem.
- `background-position`: centraliza.
- `background-repeat`: impede repetições.

---

### 📱 **Responsividade com `<picture>` e `<source>`**

O elemento `<picture>` permite exibir **imagens diferentes dependendo do tamanho da tela**, melhorando o desempenho e a experiência em dispositivos móveis.

- `<source media="(min-width: 600px)">`: define qual imagem será usada em telas grandes.
- A `<img>` dentro do `<picture>` é a imagem padrão (fallback).

Isso ajuda a tornar o site **mais responsivo e leve**.

---

### ⚠️ **Sobre o atributo `align`**

O atributo `align` foi usado para alinhar a imagem à esquerda do texto, mas **ele está obsoleto no HTML5**. O ideal hoje em dia é usar **CSS para alinhar elementos**, por exemplo:

```css
img {
  float: left;
  margin-right: 10px;
}
```
