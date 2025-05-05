# 📘 Documentação Completa da Tag `<a>`

## ✅ O que é a tag `<a>`?

A tag `<a>` é usada para criar **hiperligações** (links) entre páginas da web, arquivos, âncoras internas ou para enviar emails. É uma das tags mais fundamentais da navegação HTML.

---

## 🔗 Sintaxe Básica

```html
<a href="URL">Texto do link</a>
```

---

## 🧩 Atributos Comuns da Tag `<a>`

|Atributo|Descrição|
|---|---|
|`href`|Define o destino do link (URL, âncora, e-mail, telefone, etc.).|
|`target`|Define onde o link será aberto.|
|`rel`|Define a relação entre a página atual e a página vinculada.|
|`download`|Indica que o link deve iniciar um download.|
|`type`|Indica o tipo MIME do recurso vinculado.|
|`hreflang`|Indica o idioma do destino do link.|
|`ping`|URLs para serem notificadas quando o link for clicado.|
|`referrerpolicy`|Controla quais informações do referenciador (referer) são enviadas ao servidor.|
|`name` _(obsoleto)_|Antigo uso para âncoras internas, substituído por `id`.|

---

## 🧠 Descrição dos Principais Atributos

### `href` (Hypertext REFerence)

Especifica o destino do link.

```html
<a href="https://www.google.com">Ir para o Google</a>
```

### `target`

Controla como o link será aberto:

|Valor|Significado|
|---|---|
|`_self`|(Padrão) Abre na mesma aba/janela.|
|`_blank`|Abre em uma nova aba/janela.|
|`_parent`|Abre no quadro pai.|
|`_top`|Abre no corpo inteiro da janela.|
|`nome_frame`|Abre em um `<iframe>` com nome específico.|

```html
<a href="pagina.html" target="_blank">Abrir em nova aba</a>
```

### `rel`

Usado para definir a relação entre a página atual e o link de destino. Importante para SEO e segurança.

|Valor|Significado|
|---|---|
|`noopener`|Evita que a nova aba tenha acesso à aba que a abriu.|
|`noreferrer`|Não envia o cabeçalho referer.|
|`nofollow`|Indica aos mecanismos de busca que não sigam o link.|
|`ugc`|Conteúdo gerado por usuário (ex: comentários).|
|`sponsored`|Links patrocinados.|

```html
<a href="https://siteexterno.com" target="_blank" rel="noopener noreferrer">Site Externo</a>
```

### `download`

Transforma o link em um gatilho de download.

```html
<a href="arquivo.pdf" download>Baixar PDF</a>
```

### `type`

Indica o tipo de mídia do arquivo.

```html
<a href="video.mp4" type="video/mp4">Ver vídeo</a>
```

### `hreflang`

Indica o idioma do recurso de destino.

```html
<a href="pagina-en.html" hreflang="en">English version</a>
```

### `ping`

Lista de URLs que recebem um "ping" (aviso) quando o link é clicado (usado em rastreamento).

```html
<a href="https://exemplo.com" ping="https://meuservidor.com/ping">Link com ping</a>
```

### `referrerpolicy`

Define qual política de referer será usada:

|Valor|Descrição|
|---|---|
|`no-referrer`|Não envia referer.|
|`origin`|Envia apenas a origem (domínio).|
|`unsafe-url`|Envia URL completa (incluindo parâmetros).|
|...|Há outros valores possíveis.|

```html
<a href="https://site.com" referrerpolicy="no-referrer">Link sem referer</a>
```

---

## 🧭 Linkando Internamente com Âncoras

```html
<!-- Destino -->
<h2 id="sobre-nos">Sobre Nós</h2>

<!-- Link -->
<a href="#sobre-nos">Ir para seção Sobre Nós</a>
```

---

## 📧 Criando Links para E-mail ou Telefone

### E-mail

```html
<a href="mailto:contato@empresa.com">Enviar e-mail</a>
```

### Telefone

```html
<a href="tel:+5511999999999">Ligar agora</a>
```

---

## 🧪 Exemplo Completo

```html
<a 
  href="https://exemplo.com/arquivo.zip" 
  target="_blank" 
  rel="noopener noreferrer" 
  download 
  hreflang="pt-br" 
  type="application/zip"
  referrerpolicy="no-referrer"
  ping="https://meusite.com/ping"
>
  Baixar Arquivo ZIP
</a>
```

---

## ❌ Atributos Obsoletos

|Atributo|Situação|Substituto recomendado|
|---|---|---|
|`name`|Obsoleto em HTML5|Use `id`|

---

## ✅ Boas Práticas

- Sempre use `rel="noopener noreferrer"` com `target="_blank"` por segurança.
    
- Links internos devem ser curtos e descritivos.
    
- Evite `#` vazio como destino (`href="#"`), pois isso faz a página rolar para o topo sem necessidade.