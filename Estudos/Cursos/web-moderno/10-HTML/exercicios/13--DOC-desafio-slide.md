# ✅ Códigos com comentários:

```html
<!-- Container principal do slider com um atributo personalizado (wm-slider) -->
<div wm-slider>
  <!-- Cada <p> representa um slide com uma imagem -->
  <p>
    <img
      src="http://files.cod3r.com.br/curso-web/imagem1.jpg"
      alt="Muro da Cidade"
      width="513"
      height="342"
      title="Muro da Cidade por Tarso Besa"
    />
  </p>

  <p>
    <img
      src="http://files.cod3r.com.br/curso-web/imagem2.gif"
      alt="Intro Cod3r"
      height="342"
    />
  </p>

  <!-- Slide com imagem e uma classe que pode aplicar estilo circular -->
  <p class="circular">
    <img
      src="http://files.cod3r.com.br/curso-web/imagem3.png"
      alt="Rio de Janeiro"
      height="342"
    />
  </p>

  <!-- Slide com imagem pequena ao lado de um texto longo -->
  <p class="texto">
    <img
      src="http://files.cod3r.com.br/curso-web/avatar.jpg"
      alt="Avatar"
      height="50"
      align="left"
    />
    Texto genérico de exemplo para preencher o espaço visual do slide. Essa área
    pode ser usada para textos maiores acompanhados de uma imagem.
  </p>

  <!-- Slide vazio com imagem de fundo aplicada via CSS -->
  <p class="cidade"></p>

  <!-- Slide com elemento <picture> para carregar imagens diferentes conforme a largura da tela -->
  <p>
    <picture>
      <!-- Imagem usada quando a largura da tela for maior que 600px -->
      <source
        srcset="http://files.cod3r.com.br/curso-web/logo-larga.png"
        media="(min-width: 600px)"
      />
      <!-- Imagem padrão (carregada se a condição do <source> não for atendida) -->
      <img
        src="http://files.cod3r.com.br/curso-web/logo-estreita.png"
        alt="Logo"
      />
    </picture>
  </p>
</div>

<!-- Estilos dos slides -->
<style>
  /* Oculta todos os parágrafos inicialmente e posiciona de forma absoluta */
  p {
    position: absolute;
    display: none;
  }

  /* Slide com fundo cinza e largura definida */
  .circular {
    width: 513px;
    background-color: gray;
  }

  /* Slide de texto com largura menor */
  .texto {
    width: 400px;
  }

  /* Estilo para imagem dentro do slide de texto (espaço entre imagem e texto) */
  .texto img {
    margin-right: 10px;
  }

  /* Slide com imagem de fundo configurada via CSS */
  .cidade {
    width: 513px;
    height: 342px;
    background-image: url("http://files.cod3r.com.br/curso-web/imagem4.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 200%;
  }
</style>

<!-- Lógica de movimentação e transição de slides -->
<script>
  // Função para animar o movimento horizontal de um elemento
  function mover(elem, inicio, fim, passo, callback) {
    const novoInicio = inicio - passo;

    if (novoInicio >= fim) {
      elem.style.left = novoInicio + "px";
      // Chama recursivamente até alcançar o destino
      setTimeout(() => mover(elem, novoInicio, fim, passo, callback), 7);
    } else {
      // Quando terminar, executa a função de callback
      callback();
    }
  }

  // Função principal que inicia o slider automaticamente
  function slider() {
    const elementos = document.querySelectorAll("[wm-slider] > p");
    const slides = Array.from(elementos);
    exibirSlide(slides, slides[0]); // Começa com o primeiro slide
  }

  // Exibe um slide e inicia a transição para o próximo
  function exibirSlide(slides, slide) {
    slide.style.display = "block";

    const inicio = innerWidth; // Começa fora da tela à direita
    const fim = -slide.clientWidth; // Vai até fora da tela à esquerda

    slide.style.left = `${inicio}px`;

    mover(slide, inicio, fim, 5, () => {
      slide.style.display = "none"; // Oculta o slide atual
      exibirSlide(slides, getProximo(slides, slide)); // Exibe o próximo
    });

    // Retorna o próximo slide da lista (ciclo contínuo)
    function getProximo(lista, atual) {
      const i = lista.indexOf(atual) + 1;
      return i < lista.length ? lista[i] : lista[0];
    }
  }

  // Inicia o slider ao carregar a página
  slider();
</script>
```

---

# 📘 O que foi aprendido:

### 🧪 **O que esse código faz?**

Esse código constrói um **slider de imagens automático** usando **HTML**, **CSS** e **JavaScript**. Cada imagem ou bloco de conteúdo aparece na tela e se move horizontalmente, simulando um efeito de slide animado.

---

### 🎨 **Como o layout visual é controlado?**

- Os elementos `<p>` representam os **slides** individuais.
- O CSS usa `position: absolute` e `display: none` para controlar a exibição.
- Um dos slides (`.cidade`) usa **imagem de fundo via CSS**, enquanto outros usam `<img>` diretamente.
- A classe `.texto` mostra como combinar imagem + texto lado a lado.
- O `<picture>` permite **imagens responsivas**, mudando conforme o tamanho da tela.

---

### ⚙️ **Como funciona o slider em JavaScript?**

- A função `slider()` seleciona todos os slides e inicia a exibição.
- A função `exibirSlide()` mostra um slide, move ele da direita para a esquerda e, ao final da animação, chama o próximo slide.
- A função `mover()` faz o movimento animado frame a frame com `setTimeout()`.

---

### 🔁 **Como os slides são alternados?**

Quando um slide termina seu movimento, ele é ocultado e o próximo da lista é exibido. Quando o último slide termina, o ciclo recomeça do primeiro.

---

### ✅ **Resumo dos conceitos usados:**

- 📄 HTML: estrutura dos slides.
- 🎨 CSS: posicionamento, ocultação e estilo visual.
- 💡 JavaScript: lógica de animação e controle de fluxo entre os slides.
- 🖼️ Responsividade: uso do `<picture>` para adaptar imagens ao tamanho da tela.
- 🔁 Ciclo contínuo: o slider roda indefinidamente mostrando todos os slides em sequência.
