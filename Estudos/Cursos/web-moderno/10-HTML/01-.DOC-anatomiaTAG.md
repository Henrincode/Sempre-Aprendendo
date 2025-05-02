# ✅ Código com comentários:

```html
<!-- Exemplo de estrutura com tags HTML personalizadas (não são tags reais) -->
<tag>
  <bla>
    <opa>Texto</opa>
    <opa>Texto</opa>
    <opa>Texto</opa>
    <opa>Texto</opa>
  </bla>
</tag>

<!-- Tags HTML reais abaixo: -->
<meta />
<!-- Tag usada para definir metadados da página, como charset e viewport -->
<br />
<!-- Quebra de linha (break) -->
<input />
<!-- Campo de entrada (input), usado em formulários -->

<!-- Exemplo de tag com atributos e conteúdo interno -->
<tag param1="valor1" param2="valor2">
  <!-- Corpo da tag -->
</tag>

<!-- Exemplo de tag com atributos, mas fechada diretamente (tag auto-fechada) -->
<tag param1="valor1" param2="valor2" />

<!-- Exemplo com atributos comuns em frameworks como Vue.js -->
<input type="text" v-if v-for v-else />
<!-- Atributos v-if, v-for e v-else são diretivas do Vue.js, não do HTML puro -->

<!-- Exemplo de componente personalizado (usado em frameworks como Vue ou React) -->
<Calendario></Calendario>
```

---

# 📘 O que foi aprendido:

### 🏷️ **Tags personalizadas**

Você viu um exemplo com nomes de tags fictícias como `<tag>`, `<bla>`, `<opa>`. Essas tags **não fazem parte do HTML padrão**, mas servem para representar ou simular estruturas (úteis em frameworks ou exemplos didáticos).

---

### 🧱 **Tags HTML reais**

As tags `<meta />`, `<br />` e `<input />` **são tags do HTML de verdade**. Algumas delas são chamadas de **tags vazias (self-closing)**, pois não têm conteúdo interno e são fechadas diretamente com `/`.

- `<meta />`: define informações sobre o documento, como codificação de caracteres.
- `<br />`: cria uma quebra de linha.
- `<input />`: cria campos de entrada, como texto, senha, etc.

---

### ⚙️ **Atributos em tags**

As tags podem ter **atributos**, como `param1="valor1"`, que servem para **configurar ou modificar o comportamento** da tag.

---

### 🧩 **Uso de frameworks**

Os exemplos com `v-if`, `v-for` e `<Calendario>` mostram elementos comuns em frameworks JavaScript como Vue.js:

- `v-if`: exibe o elemento apenas se a condição for verdadeira.
- `v-for`: repete o elemento para cada item de uma lista.
- `v-else`: exibe se o `v-if` não for verdadeiro.
- `<Calendario>`: exemplo de **componente personalizado**, criado com JavaScript e HTML.
