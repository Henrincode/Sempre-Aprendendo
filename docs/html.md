# Guia Completo e Detalhado de HTML e CSS

## Estrutura Completa do HTML

HTML oferece diversas tags e funcionalidades para estruturar e manipular o conteúdo de forma detalhada.

### Estrutura e Conteúdo Básico
- **`<!DOCTYPE html>`**: Define o tipo de documento como HTML5.
- **`<html lang="pt-BR">`**: Define a linguagem do documento para português do Brasil.
- **`<head>`**: Metadados e informações do documento.
  - **`<title>`**: Título da página, aparece na aba do navegador.
  - **`<meta charset="UTF-8">`**: Define a codificação de caracteres para UTF-8.
  - **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: Responsividade para dispositivos móveis.
  - **`<meta name="description" content="Descrição da página">`**: Resumo da página para SEO.
  - **`<link rel="stylesheet" href="style.css">`**: Inclui um arquivo CSS externo.
  - **`<style>`**: CSS interno.
  - **`<script src="script.js">`**: Inclui um arquivo JavaScript.
- **`<body>`**: Conteúdo principal da página.

### Estrutura Semântica HTML5
- **`<header>`**: Cabeçalho da página ou seção.
- **`<nav>`**: Menu de navegação, geralmente com links.
- **`<main>`**: Conteúdo principal do documento.
- **`<section>`**: Define uma seção ou agrupamento de conteúdo.
- **`<article>`**: Representa conteúdo independente, como uma postagem.
- **`<aside>`**: Conteúdo lateral, como uma barra de informações.
- **`<footer>`**: Rodapé da página ou seção.

### Elementos de Texto e Formatação
- **`<h1>` a `<h6>`**: Títulos e subtítulos, onde `<h1>` é o maior e `<h6>` o menor.
- **`<p>`**: Parágrafo de texto.
- **`<br>`**: Quebra de linha.
- **`<hr>`**: Linha horizontal, utilizada para separar conteúdo.
- **`<strong>`**: Texto em negrito para ênfase.
- **`<em>`**: Texto em itálico para ênfase.
- **`<blockquote>`**: Citação em bloco.
- **`<q>`**: Citação inline.
- **`<pre>`**: Preserva o formato de texto, útil para código.
- **`<code>`**: Indica um trecho de código.
- **`<mark>`**: Destaca texto.

### Links e Mídia
- **`<a href="URL">`**: Link.
  - **Atributo `target="_blank"`**: Abre o link em uma nova aba.
- **`<img src="URL" alt="Descrição">`**: Exibe uma imagem.
  - **Atributo `width` e `height`**: Define dimensões da imagem.
- **`<audio controls src="URL">`**: Reproduz áudio.
- **`<video controls src="URL">`**: Reproduz vídeo.
  - **`<source>`**: Especifica arquivos de mídia alternativos para `<video>` ou `<audio>`.

### Listas
- **`<ul>`**: Lista não ordenada.
- **`<ol>`**: Lista ordenada.
- **`<li>`**: Item de lista.
- **`<dl>`**: Lista de definição.
  - **`<dt>`**: Termo da definição.
  - **`<dd>`**: Definição do termo.

### Elementos de Formulário
- **`<form action="URL" method="POST">`**: Define um formulário.
  - **`<input>`**: Campo de entrada, tipos incluem `text`, `password`, `email`, `number`, `checkbox`, `radio`, etc.
  - **`<label>`**: Rótulo para um campo de formulário.
  - **`<textarea>`**: Campo de entrada de múltiplas linhas.
  - **`<button>`**: Botão para ações.
  - **`<select>`**: Menu suspenso.
  - **`<option>`**: Opção dentro de um `<select>`.
  - **`<fieldset>`**: Agrupa campos de formulário.
  - **`<legend>`**: Rótulo para `<fieldset>`.

### Tags Obsoletas e Outros Elementos
- **`<center>`** e **`<font>`**: Obsoletas, usava-se para centralizar e definir fontes; agora são substituídas pelo CSS.
  
---

## Propriedades Avançadas de CSS

CSS permite controlar o layout, a aparência e até animações de páginas web.

### Seletores Avançados
- **`element, element`**: Seleciona múltiplos elementos.
- **`element.class`**: Seleciona elementos específicos com uma classe.
- **`element#id`**: Seleciona elementos específicos com um ID.
- **`element element`**: Seleciona elementos filhos.
- **`:hover`, `:active`, `:focus`**: Pseudoclasses para interações.
- **`:nth-child(n)`**: Seleciona o enésimo filho.
- **`::before`, `::after`**: Adiciona conteúdo antes ou depois de um elemento.

### Cores e Textos
- **`color`**: Define a cor do texto.
- **`background-color`**: Define a cor de fundo.
- **`background-image`**: Define uma imagem de fundo.
- **`font-family`**: Tipo da fonte.
- **`font-weight`**: Espessura do texto.
- **`text-align`**: Alinhamento do texto (`left`, `right`, `center`, `justify`).
- **`text-transform`**: Altera a capitalização (`uppercase`, `lowercase`, `capitalize`).

### Modelo de Caixa
- **`width`, `height`**: Largura e altura.
- **`margin`**: Espaço externo.
- **`padding`**: Espaço interno.
- **`border`**: Borda ao redor do elemento.
- **`border-radius`**: Arredonda bordas.
- **`box-sizing: border-box`**: Inclui borda e padding nas dimensões.

### Flexbox e Grid Layout
#### Flexbox
- **`display: flex`**: Habilita o flexbox.
- **`flex-direction`**: Define a direção dos itens (`row`, `column`).
- **`justify-content`** e **`align-items`**: Alinhamento ao longo do eixo principal e cruzado.
- **`flex-wrap`**: Permite itens quebrarem para a próxima linha.

#### Grid Layout
- **`display: grid`**: Habilita o Grid Layout.
- **`grid-template-columns` e `grid-template-rows`**: Define estrutura de colunas e linhas.
- **`gap`**: Espaçamento entre células do grid.

### Posições
- **`position: static`**: Padrão, sem posição.
- **`position: relative`**: Movimenta em relação à posição padrão.
- **`position: absolute`**: Posiciona em relação ao contêiner pai.
- **`position: fixed`**: Fixa na tela.
- **`z-index`**: Controla a sobreposição.

### Animações e Transições
- **`transition`**: Define transições suaves (ex.: `transition: all 0.3s ease`).
- **`animation`**: Define animações.
  - **`@keyframes`**: Define etapas de uma animação.

### Transformações
- **`transform: rotate`, `scale`, `translate`, `skew`**: Permite rotação, redimensionamento e movimento de elementos.
- **`opacity`**: Define transparência (de 0 a 1).

### Efeitos de Sombra e Filtros
- **`box-shadow`**: Adiciona sombra.
- **`filter`**: Aplica efeitos como `blur`, `brightness`, `contrast`.

### Media Queries e Responsividade
- **`@media`**: Aplicação de estilos para dispositivos específicos.

  ```css
  @media (max-width: 768px) {
      /* Estilos para telas pequenas */
  }
  ```
