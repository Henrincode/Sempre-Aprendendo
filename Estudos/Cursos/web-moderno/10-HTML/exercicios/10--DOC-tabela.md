# ✅ Código com comentários:

```html
<!-- Tabela com informações de produtos -->
<table>
  <!-- Legenda/título da tabela -->
  <caption>
    Produtos
  </caption>

  <!-- Cabeçalho da tabela -->
  <thead>
    <tr>
      <!-- Títulos das colunas -->
      <th>Produto</th>
      <th>Preço</th>
      <th>Quantidade</th>
      <th>Total</th>
    </tr>
  </thead>

  <!-- Corpo principal da tabela com os dados -->
  <tbody>
    <tr>
      <td>iPad</td>
      <td>3289,00</td>
      <td>5</td>
      <td>16445,00</td>
    </tr>
    <tr>
      <td>Samsung</td>
      <td>2649,00</td>
      <td>8</td>
      <td>21192,00</td>
    </tr>
  </tbody>

  <!-- Rodapé da tabela com o total geral -->
  <tfoot>
    <tr>
      <!-- Usa colspan para juntar 3 colunas em uma só -->
      <td colspan="3">Total</td>
      <td>37637,00</td>
    </tr>
  </tfoot>
</table>

<style>
  /* Junta as bordas da tabela para evitar espaços entre elas */
  table {
    border-collapse: collapse;
  }

  /* Espaçamento interno nas células (colunas e linhas) */
  th,
  td {
    padding: 10px;
  }

  /* Linha de borda inferior no cabeçalho */
  thead tr {
    border-bottom: solid 3px #444;
  }

  /* Efeito de destaque ao passar o mouse nas linhas do corpo da tabela */
  tbody tr:hover {
    background-color: #dedede;
  }

  /* Estilo do rodapé da tabela */
  tfoot {
    background-color: #444;
    color: white;
    font-weight: bold;
  }
</style>
```

---

# 📘 O que foi aprendido:

### 🧱 **Estrutura básica de uma tabela HTML**

- A tag `<table>` define uma **tabela**.
- Dentro dela, usamos outras tags para montar a estrutura completa:

  - `<caption>`: adiciona um **título/legenda** à tabela.
  - `<thead>`: define o **cabeçalho** com os títulos das colunas.
  - `<tbody>`: contém os **dados principais** da tabela.
  - `<tfoot>`: mostra informações **finais ou totais** (geralmente somas ou médias).
  - `<tr>`: representa uma **linha** da tabela.
  - `<th>`: célula de **título** (em negrito, por padrão).
  - `<td>`: célula com **dados comuns**.

---

### 🖌️ **Estilização com CSS**

- `border-collapse: collapse`: junta as bordas para evitar espaço duplo entre as células.
- `padding`: adiciona espaço **interno** entre o conteúdo da célula e sua borda.
- `thead tr { border-bottom }`: adiciona uma linha de separação entre o cabeçalho e os dados.
- `tbody tr:hover`: muda a cor de fundo quando o mouse **passa por cima** da linha, facilitando a leitura.
- `tfoot`: recebe estilo próprio (cor de fundo escura e texto branco) para **destacar o total**.

---

### 🧠 **Extra: Atributo `colspan`**

- O `colspan="3"` no rodapé faz com que a célula **ocupe o espaço de 3 colunas**, centralizando o texto "Total".
- Isso é útil quando você precisa agrupar colunas em uma única célula.

### 🧠 **Extra: Atributo `rowspan`**

- O `rowspan="2"` (ou qualquer outro número) faz com que a célula **ocupe o espaço de 2 linhas** (ou mais), na **vertical**.

- Isso é útil quando você precisa **agrupar informações de várias linhas em uma única célula**. Por exemplo, em uma tabela onde o mesmo item se repete em várias linhas, você pode unir as células dessa coluna com `rowspan`.
