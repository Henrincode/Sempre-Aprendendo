# 📄 Documentação Completa da Tag `<table>`

## 🔹 O que é `<table>`?

A tag `<table>` define uma **tabela HTML**, usada para organizar dados em **linhas** e **colunas**. Ela é útil para exibir informações tabulares como planilhas, relatórios e listas comparativas.

---

## 🧱 Estrutura básica de uma `<table>`

```html
<table>
  <thead>
    <tr>
      <th>Coluna 1</th>
      <th>Coluna 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dado 1</td>
      <td>Dado 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Rodapé</td>
    </tr>
  </tfoot>
</table>
```

---

## 🧩 Tags relacionadas à `<table>`

|Tag|Descrição|
|---|---|
|`<caption>`|Define um título para a tabela|
|`<col>`|Define características de colunas específicas (dentro de `<colgroup>`)|
|`<colgroup>`|Agrupa colunas para aplicar estilos a múltiplas colunas|
|`<thead>`|Cabeçalho da tabela (linha superior)|
|`<tbody>`|Corpo principal da tabela|
|`<tfoot>`|Rodapé da tabela (última parte)|
|`<tr>`|Define uma linha da tabela|
|`<th>`|Célula de cabeçalho (negrito e centralizado por padrão)|
|`<td>`|Célula de dados (comum)|

---

## ⚙️ Atributos da tag `<table>`

|Atributo|Valor/Tipo|Descrição|
|---|---|---|
|`border`|número|**(Obsoleto)** Define a espessura da borda da tabela|
|`cellpadding`|número (px)|**(Obsoleto)** Espaçamento interno entre o conteúdo e a borda da célula|
|`cellspacing`|número (px)|**(Obsoleto)** Espaçamento entre as células|
|`summary`|texto|**(Obsoleto)** Texto para acessibilidade (uso de leitores de tela)|
|`width`|número ou %|**(Obsoleto)** Define a largura da tabela|
|`height`|número ou %|**(Obsoleto)** Define a altura da tabela|
|`align`|left/center/right|**(Obsoleto)** Alinhamento da tabela na página|
|`bgcolor`|cor|**(Obsoleto)** Define a cor de fundo da tabela|

> ⚠️ **Atenção:** Muitos desses atributos estão obsoletos no HTML5 e devem ser substituídos por **CSS**.

---

## 🎨 Propriedades CSS úteis para tabelas

|Propriedade|Descrição|
|---|---|
|`border-collapse`|Define se as bordas da tabela são separadas ou colapsadas (ex: `collapse`)|
|`border-spacing`|Define o espaço entre bordas das células (usado quando bordas são separadas)|
|`table-layout`|Define o algoritmo de layout (`auto` ou `fixed`)|
|`width`, `height`|Controlam tamanho da tabela ou das células|
|`text-align`|Alinhamento do conteúdo das células (`left`, `center`, `right`)|
|`vertical-align`|Alinhamento vertical (`top`, `middle`, `bottom`)|
|`padding`, `margin`|Espaçamentos internos/externos|

---

## ✅ Exemplo completo com CSS

```html
<style>
  table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
  }

  th, td {
    border: 1px solid #333;
    padding: 8px;
    text-align: center;
  }

  thead {
    background-color: #f2f2f2;
  }

  caption {
    caption-side: top;
    font-weight: bold;
    margin-bottom: 10px;
  }
</style>

<table>
  <caption>Lista de Produtos</caption>
  <thead>
    <tr>
      <th>Produto</th>
      <th>Preço</th>
      <th>Quantidade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Camisa</td>
      <td>R$ 50,00</td>
      <td>10</td>
    </tr>
    <tr>
      <td>Calça</td>
      <td>R$ 80,00</td>
      <td>5</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Estoque atualizado em 05/05/2025</td>
    </tr>
  </tfoot>
</table>
```

---

## 📚 Acessibilidade

- Use `<caption>` para nomear a tabela.
    
- Use `<th scope="col">` ou `<th scope="row">` para indicar a função da célula.
    
- Evite tabelas aninhadas.
    
- Sempre use `<thead>`, `<tbody>` e `<tfoot>` para organização semântica.
    

---

## ✅ Boas práticas

- Use CSS para estilizar, **não use atributos HTML obsoletos** como `bgcolor`, `border`, `cellpadding`.
    
- Prefira usar `<th>` para títulos de coluna/linha.
    
- Para tabelas complexas, use `aria-*` e elementos semânticos.