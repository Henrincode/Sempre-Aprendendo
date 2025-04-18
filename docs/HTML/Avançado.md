# 📕 HTML + CSS Avançado — Layouts Profissionais e Funcionalidades Avançadas

Nesta etapa, vamos explorar recursos mais avançados do HTML e CSS, como animações, posicionamento absoluto, Grid Layout, media queries, filtros, transformações, e outros efeitos visuais para interfaces modernas.

---

## 🔸 Tags HTML Avançadas

### Mídia e interatividade

```html
<video controls width="300">
  <source src="video.mp4" type="video/mp4">
  Seu navegador não suporta vídeos.
</video>

<audio controls>
  <source src="audio.mp3" type="audio/mp3">
  Seu navegador não suporta áudio.
</audio>
```

### `details` e `summary`

Permite esconder/revelar conteúdo clicável.

```html
<details>
  <summary>Mais detalhes</summary>
  <p>Este conteúdo fica escondido até o clique.</p>
</details>
```

---

## 🔹 Atributos HTML úteis

- `target="_blank"` — abre o link em nova aba
    
- `required`, `placeholder`, `min`, `max`, `step` — em `<input>`
    
- `autoplay`, `loop`, `muted` — em `<audio>` e `<video>`
    
- `download` — força download de arquivo
    

```html
<a href="arquivo.pdf" download>Baixar PDF</a>

<input type="number" min="0" max="100" step="10" placeholder="0 a 100" required>
```

---

## 💎 CSS Avançado

### Grid Layout

Permite criar estruturas em linhas e colunas com controle total.

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto auto;
  gap: 20px;
}
```

```html
<div class="grid-container">
  <div>Menu</div>
  <div>Conteúdo principal</div>
  <div>Rodapé</div>
</div>
```

---

### Posições com `absolute`, `fixed`, `relative`, `sticky`

```css
.menu-flutuante {
  position: fixed;
  top: 10px;
  right: 10px;
  background: #222;
  color: white;
  padding: 10px;
}
```

```css
.caixa {
  position: relative;
}

.item-absoluto {
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
}
```

---

### Animações com `@keyframes` e `animation`

```css
@keyframes deslizar {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.barra {
  animation: deslizar 0.5s ease-in-out;
}
```

---

### Transições suaves

```css
.botao {
  background-color: #3498db;
  color: white;
  transition: background-color 0.3s ease;
}

.botao:hover {
  background-color: #2980b9;
}
```

---

### Transformações e Opacidade

```css
.imagem {
  transform: scale(1.2) rotate(10deg);
  opacity: 0.7;
}
```

---

### Filtros visuais

```css
.blur {
  filter: blur(5px);
}

.contraste {
  filter: contrast(150%);
}
```

---

### Sombra de texto e de caixa

```css
.texto-sombreado {
  text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
}

.card {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
```

---

## 📱 Responsividade com Media Queries

```css
@media (max-width: 768px) {
  body {
    background-color: #f0f0f0;
  }

  .container {
    flex-direction: column;
  }
}
```

---

## 📂 Projeto Avançado Completo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Portfolio Avançado</title>
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    header {
      background-color: #111;
      color: white;
      padding: 30px;
      text-align: center;
      animation: deslizar 1s ease-out;
    }

    nav {
      position: sticky;
      top: 0;
      background: #222;
      padding: 10px;
      text-align: center;
    }

    nav a {
      color: white;
      margin: 0 10px;
      text-decoration: none;
    }

    .grid-layout {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      padding: 20px;
    }

    .card {
      background: white;
      border-radius: 10px;
      box-shadow: 0 5px 10px rgba(0,0,0,0.2);
      padding: 20px;
      transition: transform 0.3s ease;
    }

    .card:hover {
      transform: scale(1.05);
    }

    footer {
      text-align: center;
      background: #333;
      color: white;
      padding: 20px;
      margin-top: 40px;
    }

    @keyframes deslizar {
      from { opacity: 0; transform: translateY(-50px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 600px) {
      header {
        font-size: 18px;
      }
    }
  </style>
</head>
<body>

<header>
  <h1>Meu Portfólio Avançado</h1>
</header>

<nav>
  <a href="#">Home</a>
  <a href="#">Projetos</a>
  <a href="#">Contato</a>
</nav>

<section class="grid-layout">
  <div class="card">
    <h2>Projeto 1</h2>
    <p>Descrição do projeto com responsividade.</p>
  </div>
  <div class="card">
    <h2>Projeto 2</h2>
    <p>Com animação e efeitos.</p>
  </div>
  <div class="card">
    <h2>Projeto 3</h2>
    <p>Layout em Grid e transformações.</p>
  </div>
</section>

<footer>
  <p>© 2025 - Todos os direitos reservados</p>
</footer>

</body>
</html>
```

---

Essa documentação cobre **quase tudo** que você precisa para construir interfaces modernas e responsivas com HTML e CSS.