# Objetos - Propriedades Acessoras

Este documento explica de forma clara e prática a diferença entre `get`, `set` e funções normais em objetos JavaScript no ambiente **Node.js**. É comum que iniciantes confundam o uso dessas três formas de manipular dados em objetos, então vamos descomplicar tudo com exemplos comentados.

---

## ✨ Conceitos Fundamentais

### Getter (`get`)

Um **getter** é um método que é executado automaticamente quando acessamos uma propriedade como se fosse um valor. Ele não precisa (e nem aceita) parâmetros.

```js
const pessoa = {
  nome: "Lucas",
  get saudacao() {
    return `Olá, ${this.nome}`;
  }
};

console.log(pessoa.saudacao); // "Olá, Lucas"
```

### Setter (`set`)

Um **setter** é chamado quando atribuímos um valor a uma propriedade. Ele sempre recebe **um** parâmetro.

```js
const pessoa = {
  _nome: "",
  set nome(valor) {
    this._nome = valor.toUpperCase();
  },
  get nome() {
    return this._nome;
  }
};

pessoa.nome = "ana";
console.log(pessoa.nome); // "ANA"
```

### Função normal

Usamos uma função normal quando queremos executar uma ação que pode (ou deve) receber vários parâmetros ou realizar operações mais explícitas para o programador.

```js
const calculadora = {
  somar(a, b) {
    return a + b;
  }
};

console.log(calculadora.somar(3, 4)); // 7
```

---

## 🏠 Exemplo Prático: Contador Inteligente (Node.js)

```js
const contador = {
  _valor: 0, // propriedade interna

  get valor() {
    console.log("Getter chamado");
    return this._valor;
  },

  set valor(novoValor) {
    console.log("Setter chamado");
    if (typeof novoValor === "number") {
      this._valor = novoValor;
    } else {
      console.log("Valor inválido. Use apenas números.");
    }
  },

  incrementar(passo = 1) {
    this._valor += passo;
    console.log(`Incrementado em ${passo}. Novo valor: ${this._valor}`);
    return this._valor;
  }
};

// Exportar o contador como módulo (opcional)
module.exports = contador;
```

### Usos no Node.js:

```js
// Dentro do mesmo arquivo ou importando com require
console.log(contador.valor); // Getter chamado -> 0
contador.valor = 10;         // Setter chamado
console.log(contador.valor); // Getter chamado -> 10
contador.incrementar();      // Incrementado em 1 -> 11
contador.incrementar(5);     // Incrementado em 5 -> 16
contador.valor = "texto";    // Valor inválido
```

---

## 🔗 Tabela Comparativa

|Tipo|Sintaxe|Aceita parâmetros?|Como usar?|
|---|---|---|---|
|`get`|`get nome() { ... }`|❌ Não|`obj.nome`|
|`set`|`set nome(valor) { ... }`|✅ Sim (1 param)|`obj.nome = valor`|
|Função|`nome(p1, p2) { ... }`|✅ Sim|`obj.nome()`|

---

## 🎓 Dicas de Uso

- Use `get` para ler valores com cálculo ou lógica embutida, sem precisar chamar uma função.
    
- Use `set` para validações automáticas ou ajustes quando valores forem atribuídos.
    
- Use funções normais para qualquer ação que não se encaixe naturalmente como propriedade.