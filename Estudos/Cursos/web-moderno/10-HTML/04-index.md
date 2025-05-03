# ✅ Códigos com comentários:

### `04-index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <!-- Define a codificação de caracteres como UTF-8 para suportar acentuação -->
    <meta charset="UTF-8" />

    <!-- Define o layout responsivo, para se ajustar a diferentes tamanhos de tela -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Título da aba do navegador -->
    <title>Exercícios HTML</title>
  </head>
  <body>
    <!-- Cabeçalho da página com o título principal -->
    <header>
      <h1>Exercícios HTML</h1>
    </header>

    <!-- Navegação com links que serão carregados dinamicamente -->
    <nav>
      <a href="#" wm-nav="exercicios/04-teste.html">00 - Teste</a> |
      <a href="#" wm-nav="exercicios/04-temp.html">TEMPPP</a>
    </nav>

    <!-- Área onde o conteúdo dos exercícios será carregado dinamicamente -->
    <section id="conteudo"></section>

    <!-- Rodapé da página -->
    <footer>Curso de Web Moderno</footer>

    <!-- Script JavaScript que trata o carregamento dinâmico -->
    <script>
      // Seleciona todos os elementos que possuem o atributo personalizado "wm-nav"
      document.querySelectorAll("[wm-nav]").forEach(link => {
        const conteudo = document.getElementById("conteudo"); // Pega a seção onde o conteúdo será inserido

        // Adiciona o evento de clique aos links
        link.onclick = function (e) {
          e.preventDefault(); // Impede o comportamento padrão de recarregar a página

          // Faz uma requisição para buscar o conteúdo HTML do link
          fetch(link.getAttribute("wm-nav"))
            .then(resp => resp.text()) // Converte a resposta para texto
            .then(html => (conteudo.innerHTML = html)); // Insere o conteúdo na seção "conteudo"
        };
      });
    </script>
  </body>
</html>
```

---

### `exercicios/04-teste.html`

```html
<!-- Conteúdo simples para testar o carregamento dinâmico -->
<h1>Funcionou!!!</h1>
```

---

### `exercicios/04-temp.html`

```html
<!-- Outro conteúdo de teste para exibir na página principal -->
<h3>TEMPPP</h3>
```

---

# 📘 O que foi aprendido:

### 🧠 **O que é HTML?**

HTML (HyperText Markup Language) é a linguagem usada para estruturar páginas web. Com ela, criamos elementos como títulos, parágrafos, listas, links e áreas de conteúdo. Ele serve como o "esqueleto" da página.

---

### 🧪 **O que esse código faz?**

O código cria uma **página principal (index.html)** que funciona como um _hub_ onde diferentes exercícios podem ser acessados sem sair da mesma página.

Com o uso de **JavaScript**, o conteúdo de outros arquivos HTML (como `teste.html` e `TEMP.html`) é carregado **dinamicamente** dentro da `<section id="conteudo">`.

---

### ⚙️ **Como funciona o carregamento dinâmico?**

- Os links no `<nav>` usam um **atributo personalizado** chamado `wm-nav`, que aponta para o arquivo HTML a ser carregado.
- Quando o link é clicado:

  - O JavaScript impede o comportamento padrão (evita a troca de página).
  - Usa `fetch()` para buscar o conteúdo do arquivo.
  - O conteúdo retornado é colocado dentro da `<section id="conteudo">`.

Esse recurso é útil para criar **aplicações de página única (SPA)**, onde o conteúdo muda sem recarregar toda a página.

---

### 🏷️ **Por que não usar `href="..."` direto?**

Porque o objetivo aqui é **evitar que a página seja recarregada**. Por isso, o `href="#"` é usado como valor neutro, e o link real vem do atributo personalizado `wm-nav`.

---

### 🧼 **Vantagens dessa abordagem:**

- Melhora a **experiência do usuário**, pois não há recarregamento de página.
- Torna a estrutura do site **mais organizada**.
- Facilita a manutenção: não é necessário duplicar o HTML para cada exercício.
