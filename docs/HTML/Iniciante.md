# 📘 HTML + CSS Básico — Guia para Iniciantes

Se você está começando agora no mundo da web, esse guia vai te mostrar como usar HTML e CSS para criar suas primeiras páginas. Vamos aprender a estruturar textos, adicionar imagens, aplicar cores e deixar o visual mais agradável.

---

## 🌐 O que é HTML?

HTML (HyperText Markup Language) é a linguagem usada para criar o conteúdo de uma página web: textos, imagens, links, listas, botões e mais.

### 🧱 Estrutura básica de uma página HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Minha Primeira Página</title>
</head>
<body>
  <h1>Olá, mundo!</h1>
  <p>Essa é a minha primeira página com HTML.</p>
</body>
</html>
```

---

## 🖼️ Tags HTML mais comuns

### Títulos e parágrafos

```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<p>Texto do parágrafo.</p>
```

### Imagens e links

```html
<img src="imagem.jpg" alt="Descrição da imagem" width="300">
<a href="https://google.com" target="_blank">Clique aqui para visitar o Google</a>
```

### Listas

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>Primeiro</li>
  <li>Segundo</li>
</ol>
```

---

## 🧮 Formulários simples

```html
<form>
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">
  
  <br><br>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <br><br>

  <button type="submit">Enviar</button>
</form>
```

---

## 🎨 O que é CSS?

CSS (Cascading Style Sheets) é a linguagem usada para **estilizar** páginas HTML: mudar cores, fontes, tamanhos e posicionamento dos elementos.

### 🧩 CSS Interno (dentro da tag `<style>`)

```html
<head>
  <style>
    body {
      background-color: #f0f0f0;
    }

    h1 {
      color: blue;
    }

    p {
      font-size: 18px;
    }
  </style>
</head>
```

---

## 📌 CSS Básico com exemplos

### Cores e textos

```css
p {
  color: black;
  background-color: lightyellow;
  font-family: Arial;
  text-align: center;
}
```

### Espaçamento

```css
h1 {
  margin: 20px;
  padding: 10px;
}
```

### Bordas

```css
img {
  border: 2px solid gray;
  border-radius: 8px;
}
```

---

## 💡 Projeto básico completo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Projeto Básico</title>
  <style>
    body {
      font-family: sans-serif;
      background-color: #f9f9f9;
      padding: 20px;
    }

    h1 {
      color: darkblue;
    }

    img {
      border: 2px solid #ccc;
      border-radius: 10px;
    }
  </style>
</head>
<body>
  <h1>Minha Página</h1>
  <p>Aprendendo HTML e CSS do zero!</p>
  <img src="imagem.jpg" alt="Foto exemplo" width="200">
</body>
</html>
```

---

Com esse guia básico, você já consegue criar uma página com estrutura, imagens, texto e um pouco de estilo. Aos poucos, você vai entender mais e explorar coisas novas.