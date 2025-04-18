# 📘 HTML + CSS Intermediário — Estrutura e Estilo com Mais Controle

Agora que você já entende como funciona uma página básica, vamos mergulhar em novos elementos e técnicas para criar layouts mais ricos e bonitos.

---

## 🔹 Novos elementos HTML semânticos

Essas tags ajudam os mecanismos de busca e leitores de tela a entender melhor sua página.

```html
<header>
  <h1>Meu Site</h1>
</header>

<nav>
  <a href="#inicio">Início</a> |
  <a href="#sobre">Sobre</a> |
  <a href="#contato">Contato</a>
</nav>

<main>
  <section id="inicio">
    <h2>Bem-vindo</h2>
    <p>Texto da seção de boas-vindas.</p>
  </section>

  <article>
    <h2>Artigo Destacado</h2>
    <p>Texto de um artigo completo.</p>
  </article>

  <aside>
    <p>Conteúdo lateral como sugestões ou anúncios.</p>
  </aside>
</main>

<footer>
  <p>© 2025 - Meu site</p>
</footer>
```

---

## ✍️ Mais sobre formulários

### Campos adicionais e agrupamentos

```html
<form action="/enviar" method="post">
  <fieldset>
    <legend>Dados Pessoais</legend>

    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome">

    <label for="idade">Idade:</label>
    <input type="number" id="idade" name="idade">
  </fieldset>

  <fieldset>
    <legend>Preferências</legend>

    <label><input type="checkbox" name="gosto" value="html"> HTML</label>
    <label><input type="checkbox" name="gosto" value="css"> CSS</label>

    <label>Sexo:</label>
    <label><input type="radio" name="sexo" value="M"> Masculino</label>
    <label><input type="radio" name="sexo" value="F"> Feminino</label>
  </fieldset>

  <button type="submit">Enviar</button>
</form>
```

---

## 🎨 CSS com mais poder

### 🎯 Seletores mais específicos

```css
/* Todos os parágrafos */
p {
  color: black;
}

/* Parágrafo dentro de uma section */
section p {
  color: darkblue;
}

/* Classe personalizada */
.box {
  background-color: lightgray;
  padding: 20px;
}

/* ID específico */
#principal {
  font-size: 24px;
}
```

### 👈 Controle individual de lados com CSS

Quando você usa `padding`, `margin`, `border-radius` (e outras propriedades que aceitam valores múltiplos), é possível controlar cada lado separadamente:

```css
/* padding: top right bottom left */
.caixa {
  padding: 10px 20px 30px 40px;
}

/* apenas cima e baixo (10px), esquerda e direita (20px) */
.caixa {
  margin: 10px 20px;
}

/* borda arredondada só em cima */
.imagem {
  border-radius: 10px 10px 0 0;
}
```

E para círculos perfeitos:

```css
.foto-perfil {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
```

---

## 🧱 Modelo de Caixa

Entender como o espaço de um elemento é composto é essencial.

```css
.elemento {
  width: 300px;
  padding: 10px;
  border: 2px solid #333;
  margin: 20px;
  box-sizing: border-box; /* inclui borda e padding no tamanho total */
}
```

---

## 📐 Layout com Flexbox

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

## 📁 Projeto intermediário completo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Projeto Intermediário</title>
  <style>
    body {
      font-family: sans-serif;
      margin: 0;
      padding: 0;
    }

    header, footer {
      background-color: #333;
      color: white;
      padding: 20px;
      text-align: center;
    }

    main {
      display: flex;
      gap: 20px;
      padding: 20px;
    }

    section, article, aside {
      flex: 1;
      background-color: #f4f4f4;
      padding: 15px;
      border-radius: 8px;
    }

    nav a {
      margin: 0 10px;
      color: white;
      text-decoration: none;
    }
  </style>
</head>
<body>

<header>
  <h1>Meu Portfólio</h1>
  <nav>
    <a href="#">Início</a>
    <a href="#">Projetos</a>
    <a href="#">Contato</a>
  </nav>
</header>

<main>
  <section>
    <h2>Sobre mim</h2>
    <p>Sou um desenvolvedor aprendendo HTML e CSS.</p>
  </section>

  <article>
    <h2>Projeto em destaque</h2>
    <p>Esse é um exemplo de layout com Flexbox.</p>
  </article>

  <aside>
    <h3>Dica</h3>
    <p>Use `border-radius` para deixar seu layout mais moderno!</p>
  </aside>
</main>

<footer>
  <p>© 2025 — Desenvolvido por Mim</p>
</footer>

</body>
</html>
```

---

Isso cobre uma boa parte dos conceitos intermediários com base sólida de HTML e CSS.