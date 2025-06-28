# 📐 Documentação do CSS Grid: Guia Completo para `display: grid`

O **CSS Grid Layout** é um sistema de layout **bidimensional** que permite controlar simultaneamente **linhas e colunas**. Ele é ideal para estruturas de layout mais complexas e responsivas, diferente do Flexbox, que opera em apenas uma dimensão.

---

## 🧱 Conceitos Fundamentais

### 🔹 Grid Container e Grid Items

Um **Grid Container** é criado com `display: grid` ou `display: inline-grid`. Todos os **filhos diretos** tornam-se **Grid Items**.

```css
.container {
  display: grid;         /* Grid em nível de bloco */
}
.container-inline {
  display: inline-grid;  /* Grid inline */
}
```

### 🔹 Estrutura do Grid

- **Linhas**: horizontais
    
- **Colunas**: verticais
    
- **Células**: interseções entre linhas e colunas
    
- **Trilhas**: espaço entre duas linhas ou colunas
    
- **Áreas**: região retangular formada por múltiplas células
    

---

## ⚙️ Propriedades do Grid Container

### 1. `grid-template-columns`

Define **quantidade e tamanho das colunas**:

```css
.container {
  grid-template-columns: 100px 100px 100px 100px;     /* 4 colunas fixas */
  grid-template-columns: 1fr 2fr;                     /* Colunas proporcionais */
  grid-template-columns: repeat(3, 1fr);              /* 3 colunas iguais */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsivo */
}
```

### 2. `grid-template-rows`

Controla as **linhas horizontais**:

```css
.container {
  grid-template-rows: 50px 100px 50px;
  grid-template-rows: 1fr 2fr;
}
```

### 3. Unidade `fr` (fração)

Unidade específica do Grid para **espaço proporcional**:

```css
.container {
  grid-template-columns: 1fr 1fr 1fr;          /* 3 colunas iguais */
  grid-template-columns: 300px 1fr 2fr;        /* Coluna fixa + proporcionais */
}
```

### 4. `grid-template-areas`

Define **áreas nomeadas**:

```css
.container {
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer  { grid-area: footer; }
```

### 5. Espaçamento: `gap`, `row-gap`, `column-gap`

Controla o **espaçamento entre trilhas**:

```css
.container {
  gap: 20px;                  /* Espaçamento geral */
  row-gap: 20px;              /* Linhas */
  column-gap: 30px;           /* Colunas */
  gap: 20px 30px;             /* Shorthand (linhas colunas) */
}
```

### 6. `grid-auto-flow`

Define o **fluxo automático** de posicionamento:

```css
.container {
  grid-auto-flow: row;        /* (padrão) linhas */
  grid-auto-flow: column;     /* colunas */
  grid-auto-flow: dense;      /* preencher lacunas */
}
```

### 7. Alinhamento: `justify-items`, `align-items`

Controla **alinhamento interno dos itens**:

```css
.container {
  justify-items: center;      /* horizontal */
  align-items: center;        /* vertical */
  place-items: center;        /* shorthand: vertical horizontal */
}
```

📌 Valores comuns: `start`, `end`, `center`, `stretch`

---

## 🎯 Posicionamento de Itens

### 📌 Usando Linhas do Grid

```css
.item {
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 4;

  grid-row: 1 / 3;            /* shorthand */
  grid-column: 2 / 4;

  grid-column: span 2;        /* ocupa 2 colunas */
  grid-row: span 3;           /* ocupa 3 linhas */
}
```

### 🔁 Usando Números Negativos

Referência a partir do final da linha/coluna:

```css
.item {
  grid-column: 1 / -1;        /* do início ao fim da linha */
  grid-row: 2 / -2;           /* da 2ª até a penúltima linha */
}
```

---

## 🧠 Funções Úteis

### `minmax(min, max)`

Define **valores mínimo e máximo**:

```css
.container {
  grid-template-columns: minmax(200px, 1fr) 2fr;
}
```

### `repeat()`

Simplifica **repetições** de colunas/linhas:

```css
.container {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

---

## 📱 Layout Responsivo com CSS Grid

### 🔄 Com Media Queries

```css
.container {
  grid-template-columns: 1fr;
}
@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### 🔀 Reorganização com `grid-template-areas`

```css
.container {
  grid-template-areas:
    "header"
    "content"
    "sidebar"
    "footer";
}
@media (min-width: 768px) {
  .container {
    grid-template-areas:
      "header header"
      "content sidebar"
      "footer footer";
  }
}
```

---

## ✅ Exemplo Prático Completo

```css
.layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  gap: 20px;
  min-height: 100vh;
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer  { grid-area: footer; }

@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "content"
      "sidebar"
      "footer";
  }
}
```

---

## 🌐 Compatibilidade

O **CSS Grid** é **amplamente suportado** por navegadores modernos. Consulte [Can I Use](https://caniuse.com/css-grid) para suporte detalhado.

---

## 💡 Dicas Finais

1. Utilize o **inspecionar elemento** para visualizar o grid.
    
2. Combine **Grid com Flexbox** para mais controle.
    
3. Use Grid para **layouts bidimensionais** e Flexbox para **unidimensionais**.
    
4. A unidade `fr` facilita **layouts fluídos**.
    
5. Prefira `auto-fit` ou `auto-fill` com `minmax()` para **grids responsivos**.