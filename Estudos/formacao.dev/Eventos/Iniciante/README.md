# Documentação das Tags HTML e Propriedades CSS

Este documento descreve as principais tags HTML e propriedades CSS aprendidas, explicando seus usos e funcionalidades.

---

## Estrutura HTML Básica

### Elementos Estruturais
- **`<html>`**: Tag que representa o documento HTML.
- **`<head>`**: Cabeçalho do documento; contém metadados como título, links para estilos e scripts.
- **`<body>`**: Corpo visível do documento, onde o conteúdo principal é inserido.

### Estrutura de Layout e Seções
- **`<header>`**: Cabeçalho da página ou seção.
- **`<footer>`**: Rodapé da página.
- **`<main>`**: Conteúdo principal do documento.
- **`<aside>`**: Conteúdo lateral, geralmente usado para menus laterais ou barras de informação.
- **`<nav>`**: Área de navegação, com links para outras páginas ou seções do site.

### Elementos de Conteúdo
- **`<div>`**: Divisão genérica de conteúdo, usada para agrupar elementos.
- **`<h1>`**: Título principal da página. Há também `<h2>` até `<h6>` para subtítulos.
- **`<p>`**: Parágrafo.
- **`<br>`**: Quebra de linha.
- **`<a>`**: Link para outra página ou seção.
- **`<img>`**: Imagem no documento, com atributos para definir a fonte, texto alternativo e tamanho.

### Listas
- **`<ol>`**: Lista ordenada (numerada).
- **`<ul>`**: Lista não ordenada (marcadores).
- **`<li>`**: Item da lista (usado em `<ol>` e `<ul>`).

### Elementos Inline
- **`<span>`**: Contêiner de texto inline, usado para aplicar estilos sem quebrar a linha.

---

## Estilos CSS Básicos

### Seletores
- **`#id`**: Seletor de ID, utilizado para elementos únicos.
- **`.class`**: Seletor de classe, aplicado a múltiplos elementos.

### Propriedades Visuais
- **`color`**: Cor do texto.
- **`background-color`**: Cor de fundo do elemento.
- **`font-size`**: Tamanho da fonte.
- **`padding`**: Margem interna do elemento.
- **`border`**: Borda ao redor do elemento.
- **`margin`**: Margem externa do elemento.

### Dimensões
- **`height`**: Altura do elemento.
- **`width`**: Largura do elemento.
- **`min-height: 100vh`**: Define altura mínima de 100% da altura da janela, garantindo que o `body` ocupe a tela inteira.

### Controle de Exibição (`display`)
- **`display: block`**: Elemento ocupa a linha inteira (ex.: `<div>`, `<p>`).
- **`display: none`**: Elemento oculto.
- **`display: inline`**: Coloca o elemento em linha, mas sem respeitar altura/largura.
- **`display: inline-block`**: Coloca o elemento em linha, considerando altura e largura.

---

## Layout Flexbox

Flexbox é uma técnica para organizar layouts mais flexíveis e adaptáveis.

### Direção e Alinhamento
- **`flex-direction: row`**: Organiza elementos em linha (horizontal).
- **`flex-direction: column`**: Organiza elementos em coluna (vertical).
- **`flex-direction: column-reverse`**: Organiza em coluna invertida.

### Alinhamento Principal (`justify-content`)
- **`justify-content: start`**: Alinha elementos ao início.
- **`justify-content: end`**: Alinha elementos ao final.
- **`justify-content: space-between`**: Distribui espaço entre os itens.
- **`justify-content: space-around`**: Distribui espaço entre e ao redor dos itens.

### Alinhamento Cruzado (`align-items`)
- **`align-items: start`**: Alinha ao início do eixo cruzado.
- **`align-items: center`**: Centraliza no eixo cruzado.
- **`align-items: end`**: Alinha ao final do eixo cruzado.
- **`align-items: stretch`**: Estica itens se a altura não estiver definida.

### Crescimento Flexível
- **`flex-grow: 1`**: Permite que o item ocupe o espaço vazio restante no contêiner flex.
