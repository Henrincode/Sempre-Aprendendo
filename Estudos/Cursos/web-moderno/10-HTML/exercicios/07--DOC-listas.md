# ✅ Código com comentários:

```html
<h1>Listas</h1>

<!-- Lista ordenada: os itens aparecem em sequência numérica -->
<h2>Aprovados</h2>
<ol>
  <li>Bia</li>
  <li>Pedro</li>
  <li>Ana</li>
  <li>João</li>
</ol>

<!-- Lista não ordenada: os itens aparecem com marcadores (bolinhas) -->
<h2>Lista de Compras</h2>
<ul>
  <li>Queijo</li>
  <li>Leite</li>
  <li>Arroz</li>
  <li>Pão</li>
</ul>

<!-- Lista de definição: usada para definir termos e seus significados -->
<h2>Principais termos do glossário de Cloud Computing</h2>
<dl>
  <dt>BaaS</dt>
  <!-- Termo: Backend as a Service -->
  <dd>Backend Como Serviço</dd>
  <!-- Definição do termo -->

  <dt>IaaS</dt>
  <!-- Termo: Infrastructure as a Service -->
  <dd>Infraestrutura Como Serviço</dd>

  <dt>PaaS</dt>
  <!-- Termo: Platform as a Service -->
  <dd>Plataforma Como Serviço</dd>

  <dt>SaaS</dt>
  <!-- Termo: Software as a Service -->
  <dd>Software Como Serviço</dd>
</dl>
```

---

# 📘 O que foi aprendido:

### 🧾 **Listas no HTML**

O HTML permite organizar conteúdos em **listas**, que são estruturas muito úteis para exibir informações agrupadas.

---

### 🔢 **`<ol>` - Lista Ordenada**

A tag `<ol>` (de _ordered list_) cria uma **lista numerada**. Cada item da lista é colocado dentro da tag `<li>`.

**Exemplo:**

```html
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
```

🔹 Útil para sequências, rankings ou etapas de processos.

---

### 🔘 **`<ul>` - Lista Não Ordenada**

A tag `<ul>` (de _unordered list_) cria uma **lista com marcadores (bolinhas)**. Também usa `<li>` para os itens.

**Exemplo:**

```html
<ul>
  <li>Item A</li>
  <li>Item B</li>
</ul>
```

🔹 Ideal para listas de compras, características ou tópicos sem ordem específica.

---

### 📚 **`<dl>` - Lista de Definições**

A tag `<dl>` (de _definition list_) é usada para exibir **pares de termos e definições**.

- `<dt>` (definition term): o termo que será definido.
- `<dd>` (definition description): a descrição ou explicação do termo.

**Exemplo:**

```html
<dl>
  <dt>HTML</dt>
  <dd>Linguagem de marcação para criar páginas web</dd>
</dl>
```

🔹 Muito usada em glossários, documentações ou FAQs.
