# Como Usar CSS Grid (display: grid)

O **CSS Grid** é uma ferramenta poderosa do CSS para criar layouts bidimensionais (linhas e colunas) de forma simples e flexível. Este guia explica os conceitos básicos e fornece exemplos práticos para começar a usar o `display: grid`.

## 1. O que é CSS Grid?

O CSS Grid permite dividir um container em uma grade (grid) com linhas e colunas, onde você pode posicionar elementos de forma precisa. É ideal para layouts complexos e responsivos.

## 2. Configuração Básica

Para usar o CSS Grid, aplique a propriedade `display: grid` a um elemento container. Os elementos filhos desse container se tornam itens da grade.

### Exemplo Básico

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px; /* 3 colunas de 100px cada */
  grid-template-rows: 50px 50px; /* 2 linhas de 50px cada */
  gap: 10px; /* Espaçamento entre os itens */
}

.item {
  background-color: lightblue;
  border: 1px solid #333;
}
```

**Resultado**: Uma grade com 3 colunas e 2 linhas, com espaçamento de 10px entre os itens.

## 3. Propriedades Principais do CSS Grid

### No Container

- **`display: grid`**: Define o elemento como um container de grade.
    
- **`grid-template-columns`**: Define o número e tamanho das colunas. Exemplo:
    
    ```css
    grid-template-columns: 1fr 2fr 1fr; /* 3 colunas, a do meio é 2x maior */
    ```
    
    - Unidades: `px`, `%`, `fr` (fração do espaço disponível), `auto`.
- **`grid-template-rows`**: Define o número e tamanho das linhas.
    
    ```css
    grid-template-rows: 100px auto; /* 2 linhas: 100px e altura automática */
    ```
    
- **`gap`**: Define o espaçamento entre linhas e colunas (substitui `grid-gap`).
    
    ```css
    gap: 20px; /* Espaço de 20px entre todos os itens */
    ```
    
    - Ou use `row-gap` (espaço entre linhas) e `column-gap` (espaço entre colunas).
- **`grid-template-areas`**: Nomeia áreas da grade para facilitar o posicionamento.
    
    ```css
    grid-template-areas:
      "header header header"
      "sidebar main main"
      "footer footer footer";
    ```
    
- **`justify-items`**: Alinha os itens horizontalmente dentro das células (ex.: `start`, `center`, `end`).
    
- **`align-items`**: Alinha os itens verticalmente dentro das células.
    

### Nos Itens (Elementos Filhos)

- **`grid-column`**: Define em quais colunas o item será posicionado.
    
    ```css
    .item {
      grid-column: 1 / 3; /* Ocupa da coluna 1 à 3 */
    }
    ```
    
- **`grid-row`**: Define em quais linhas o item será posicionado.
    
    ```css
    .item {
      grid-row: 1 / 2; /* Ocupa a linha 1 */
    }
    ```
    
- **`grid-area`**: Associa um item a uma área nomeada (definida em `grid-template-areas`).
    
    ```css
    .item {
      grid-area: header; /* Coloca o item na área chamada 'header' */
    }
    ```
    

## 4. Exemplo Prático: Layout de Página

Aqui está um exemplo de um layout de página com cabeçalho, barra lateral, conteúdo principal e rodapé:

```html
<div class="container">
  <header class="item header">Cabeçalho</header>
  <aside class="item sidebar">Barra Lateral</aside>
  <main class="item main">Conteúdo Principal</main>
  <footer class="item footer">Rodapé</footer>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr; /* Sidebar fixa, conteúdo flexível */
  grid-template-rows: 100px 1fr 50px; /* Cabeçalho, conteúdo, rodapé */
  gap: 10px;
  height: 100vh; /* Altura total da tela */
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.header { grid-area: header; background: #f1c40f; }
.sidebar { grid-area: sidebar; background: #2ecc71; }
.main { grid-area: main; background: #3498db; }
.footer { grid-area: footer; background: #e74c3c; }

.item {
  padding: 20px;
  color: white;
  text-align: center;
}
```

**Resultado**: Um layout com um cabeçalho ocupando toda a largura, uma barra lateral à esquerda, um conteúdo principal à direita e um rodapé na parte inferior.

## 5. Responsividade com CSS Grid

O CSS Grid facilita layouts responsivos com propriedades como `auto-fit`, `auto-fill` e `minmax`:

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}
```

- **`repeat(auto-fit, minmax(200px, 1fr))`**: Cria colunas que têm no mínimo 200px e se expandem para ocupar o espaço disponível, ajustando automaticamente o número de colunas com base no tamanho da tela.
- Use media queries para ajustes adicionais:
    
    ```css
    @media (max-width: 600px) {
      .container {
        grid-template-columns: 1fr; /* Uma coluna em telas pequenas */
      }
    }
    ```
    

## 6. Dicas Úteis

- **Ferramentas de Debug**: No navegador (ex.: Chrome DevTools), ative a opção "Show Layout" para visualizar as linhas da grade.
- **Unidades `fr`**: Use a unidade `fr` para distribuir espaço proporcionalmente.
- **Grid vs. Flexbox**: Use Grid para layouts bidimensionais (linhas e colunas) e Flexbox para layouts unidimensionais (apenas linhas ou colunas).
- **Nomenclatura de Áreas**: O uso de `grid-template-areas` torna o código mais legível e fácil de manter.

## 7. Recursos Adicionais

- [Documentação do CSS Grid no MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout)
- [Grid Garden](https://cssgridgarden.com/) (jogo interativo para aprender Grid)
- [Guia Completo do CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)