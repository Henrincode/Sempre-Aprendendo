# ✅ Código com comentários:

```html
<!-- Títulos ou cabeçalhos de diferentes níveis -->
<h1>Cabeçalho Principal</h1>
<!-- Nível mais alto de importância -->
<h2>Cabeçalho de Nível 2</h2>
<h3>Cabeçalho de Nível 3</h3>
<h4>Cabeçalho de Nível 4</h4>
<h5>Cabeçalho de Nível 5</h5>
<h6>Cabeçalho de Nível 6</h6>
<!-- Nível mais baixo de importância -->

<!-- Parágrafo de texto -->
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id velit ac
  velit ullamcorper scelerisque sit amet sit amet felis. Aenean sit amet
  pulvinar mi. Praesent vel risus varius felis placerat consequat vitae quis
  mauris. Vestibulum interdum libero venenatis libero imperdiet, eget fringilla
  risus interdum. Vivamus sapien justo, aliquam a dui at, tristique mollis
  metus. Donec venenatis elit sed maximus ullamcorper. Duis vitae mattis mi.
</p>

<!-- Exemplo de texto com estilos: negrito e itálico -->
<p>Texto em <b>negrito</b> e <i>itálico</i></p>

<!-- Exemplo de sobrescrito (acima) e subscrito (abaixo) -->
<p>2<sup>2</sup> = 4 e H<sub>2</sub>O = Água</p>

<!-- Exemplo de como o HTML ignora múltiplos espaços e quebras de linha -->
<p>Espaço entre palavras</p>
```

---

# 📘 O que foi aprendido:

### 🏷️ **Tags de Cabeçalho (`<h1>` até `<h6>`)**

Essas tags são usadas para títulos e subtítulos:

- `<h1>` é o título mais importante (normalmente o título principal da página).
- `<h2>` a `<h6>` são usados para organizar subtópicos hierarquicamente.

📌 _Quanto menor o número, maior a importância e o tamanho visual._

---

### 📄 **Tag de Parágrafo `<p>`**

A tag `<p>` é usada para **criar parágrafos de texto**. Ela agrupa blocos de conteúdo textual.

---

### ✍️ **Formatação de Texto**

- `<b>`: deixa o texto em **negrito**.
- `<i>`: deixa o texto em _itálico_.
  Essas tags são úteis para dar ênfase visual ao conteúdo.

---

### 🔢 **Sobrescrito e Subscrito**

- `<sup>`: eleva o texto (ex: potências, como 2²).
- `<sub>`: abaixa o texto (ex: fórmulas químicas, como H₂O).

---

### 🧠 **Comportamento do HTML com espaços e quebras de linha**

Por padrão, **o HTML ignora múltiplos espaços em branco e quebras de linha** no código. Isso significa que:

```html
<p>Espaço entre palavras</p>
```

Vai aparecer assim no navegador:

```
Espaço entre palavras
```

✅ Para forçar uma quebra de linha, usamos a tag `<br />`.
