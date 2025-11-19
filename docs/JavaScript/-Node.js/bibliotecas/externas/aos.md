# 📘 Guia Completo: Como Usar AOS (Animate On Scroll)

Este guia ensina a usar **AOS** tanto em **Next.js** quanto em **HTML + CSS + JS puro**, com exemplos e instruções simples.

---

# ⭐ O que é o AOS?
O **AOS (Animate On Scroll)** é uma biblioteca de animações que exibe efeitos quando elementos se tornam visíveis no scroll.

✔ Fácil de usar
✔ Funciona em qualquer projeto (HTML, PHP, Node, React, Next, etc.)
✔ Leve e rápido
✔ Não depende de React

---

# 🟦 Parte 1 — Usando AOS no HTML + CSS + JS

## 📌 1. Instalar via CDN (mais fácil)
Adicione isso dentro do `<head>`:

```html
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
```

E antes de fechar o `<body>`:

```html
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>
  AOS.init();
</script>
```

---

## 📌 2. Usar animações nos elementos

```html
<div data-aos="fade-up">Conteúdo animado!</div>
```

---

## 📌 3. Exemplo completo (copiar e colar)

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <title>Teste AOS</title>
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</head>
<body>

  <h1 data-aos="fade-up">Título com AOS</h1>
  <p data-aos="zoom-in">Texto com animação</p>

  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>AOS.init();</script>
</body>
</html>
```

---

# 🟩 Parte 2 — Usando AOS no Next.js

O AOS funciona perfeitamente no Next, mas **só pode ser carregado no Cliente**, porque ele depende do `window`.

## 📌 1. Instalar AOS

```bash
npm install aos
```

---

## 📌 2. Criar um componente Client com AOS
Dentro do Next, **qualquer arquivo que usa AOS precisa ser client**:

```jsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="p-10 space-y-10">
      <h1 data-aos="fade-up" className="text-4xl font-bold">
        Animação com AOS no Next
      </h1>

      <p data-aos="zoom-in" className="text-lg">
        Este texto aparece com animação quando entra na tela.
      </p>
    </div>
  );
}
```

---

# 🟣 Opções úteis do AOS

Você pode configurar no `AOS.init()`:

```js
AOS.init({
  duration: 1000,     // duração da animação
  once: true,         // só anima 1 vez
  offset: 120,        // distância para começar
  easing: "ease-out", // curva da animação
});
```

---

# 🟠 Lista de animações mais usadas
Use no atributo `data-aos="..."`:

### ✨ Aparição
- `fade`
- `fade-up`
- `fade-down`
- `fade-left`
- `fade-right`

### 💥 Zoom
- `zoom-in`
- `zoom-out`

### 🎬 Slides
- `slide-up`
- `slide-down`
- `slide-left`
- `slide-right`

### 🎚 Outros
- `flip-left`
- `flip-right`
- `flip-up`
- `flip-down`

---

# 🧩 Dicas importantes

### ✔ Funciona em qualquer lugar que gere HTML
HTML, PHP, Node, Express, WordPress, Laravel, Next, React…

### ✔ No Next sempre precisa ser client component
Porque o AOS usa `window`.

### ✔ Super leve
Você pode usar junto de Tailwind sem problema.

---

# 🎉 Final
Agora você sabe usar o AOS tanto em projetos simples HTML quanto com o Next.js.

Se quiser, posso adicionar:
- exemplos com Tailwind
- criar um componente de animação reutilizável no Next
- tabelas de todas as animações do AOS
- exemplos avançados

