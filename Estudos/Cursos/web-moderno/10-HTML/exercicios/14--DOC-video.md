# ✅ Código com comentários:

```html
<!-- Elemento de vídeo com configurações personalizadas -->
<!-- Atributos:
  - controls: mostra os controles padrão do player
  - autoplay: inicia o vídeo automaticamente
  - controlsList="nodownload": oculta o botão de download
-->
<video
  id="meuVideo"
  width="800"
  height="450"
  controls
  autoplay
  controlsList="nodownload"
>
  <!-- Fonte do vídeo no formato MP4 -->
  <source
    src="http://files.cod3r.com.br/curso-web/video.mp4"
    type="video/mp4"
  />
  <!-- Mensagem exibida caso o navegador não suporte vídeo -->
  Seu browser não suporta a tag de vídeo
</video>

<!-- Barra de progresso personalizada para o vídeo -->
<div wm-progresso="meuVideo" class="progresso">
  <div></div>
</div>

<!-- Botões personalizados para controle do vídeo -->
<div>
  <button wm-play="meuVideo">Play</button>
  <button wm-pause="meuVideo">Pause</button>
</div>

<!-- Estilos para a barra de progresso -->
<style>
  .progresso {
    height: 20px;
    width: 500px;
    border: solid 1px #444;
    margin: 20px;
  }

  .progresso div {
    background-color: red;
    color: #fff;
    height: 100%;
    text-align: right;
    font-size: 14px;
    width: 0%;
  }
</style>

<!-- Script para configurar e controlar o vídeo -->
<script>
  function configurarVideo(id) {
    const video = document.getElementById(id);

    // Impede o menu do botão direito no vídeo
    video.oncontextmenu = () => false;

    // Botão play personalizado
    document.querySelector(`[wm-play=${id}]`).onclick = () => video.play();

    // Botão pause personalizado
    document.querySelector(`[wm-pause=${id}]`).onclick = () => video.pause();

    // Atualiza a barra de progresso do vídeo a cada 500ms
    setInterval(() => {
      const porcentual = (video.currentTime / video.duration) * 100;
      const valorDiv = document.querySelector(`[wm-progresso=${id}] > div`);
      valorDiv.style.width = `${porcentual}%`;
      valorDiv.innerHTML = `${porcentual.toFixed(0)}%`;
    }, 500);
  }

  // Chama a função para iniciar a configuração
  configurarVideo("meuVideo");
</script>
```

---

# 📘 O que foi aprendido:

### 🎬 **O que é a tag `<video>`?**

A tag `<video>` do HTML permite incorporar vídeos em páginas da web. Podemos configurar propriedades como **largura**, **altura**, **autoplay**, **controles**, entre outras. Também é possível definir diferentes fontes de vídeo usando `<source>`.

---

### 🛠️ **Como personalizar controles de vídeo com HTML, CSS e JavaScript?**

Neste exercício, aprendemos a criar **controles personalizados** para um vídeo. Em vez de usar apenas os controles nativos do navegador, criamos botões de **Play** e **Pause**, além de uma **barra de progresso customizada** que mostra visualmente quanto do vídeo já foi reproduzido.

---

### 🔁 **Como funciona a barra de progresso?**

- Um `<div>` dentro de outro `<div>` é usado como **barra de preenchimento**.
- A largura desse `<div>` interno é alterada dinamicamente com base no tempo atual do vídeo.
- A atualização é feita com `setInterval()`, usando a fórmula:

  ```js
  (currentTime / duration) * 100;
  ```

  para calcular o percentual assistido.

---

### 🧠 **O que é `oncontextmenu = () => false`?**

Esse comando **impede o menu de contexto** (botão direito) de aparecer sobre o vídeo, evitando, por exemplo, que o usuário possa baixar o vídeo diretamente.

---

### 🧩 **Como funcionam os atributos personalizados como `wm-play` e `wm-progresso`?**

Eles são **atributos personalizados** (não padrão do HTML), usados para identificar elementos específicos que serão manipulados via JavaScript. Isso torna o código mais flexível e organizado.

---

### 🎯 **Resumo dos aprendizados:**

- Como usar a tag `<video>` do HTML5.
- Como manipular vídeos com JavaScript (`play()`, `pause()`, `currentTime`, `duration`).
- Como criar **controles visuais e funcionais personalizados**.
- Como atualizar elementos dinamicamente com `setInterval()`.
- Como usar seletores CSS com atributos personalizados para vincular HTML ao JS.
