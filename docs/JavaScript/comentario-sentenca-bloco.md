### O que é um comentário?

Um comentário é uma parte do código que o programa não executa. Ele é usado pelos programadores para adicionar explicações, notas ou desativar temporariamente trechos de código. Em JavaScript, há dois tipos:

1. **Comentário de uma linha**: começa com `//` e vai até o fim da linha.
2. **Comentário de várias linhas**: começa com `/*` e termina com `*/`, podendo ocupar várias linhas.

**Exemplos:**

- Comentário de uma linha:

```javascript
// Isso é um comentário, o programa ignora essa linha
console.log("Bom dia!"); // Isso também é um comentário após o código
```

- Comentário de várias linhas:

```javascript
/*
  Isso é um comentário
  que ocupa várias linhas.
  O programa ignora tudo aqui dentro.
*/
console.log("Boa tarde!");
```

Um comentário de várias linhas com asteriscos decorativos, ignorado pelo programa.

```javascript
/*
*
*
*
*/
```

---
### O que é uma sentença de código?

Uma sentença de código é uma instrução única em uma linguagem de programação que executa uma ação específica. É como uma frase completa: tem um propósito e geralmente termina com um ponto e vírgula `;` ou o fim da linha (em JavaScript). Cada comando independente é uma sentença.

**Exemplo:**

```javascript
console.log("Bom dia!");
```

Essa é uma sentença que exibe "Bom dia!" no console. Veja mais exemplos:

```javascript
console.log("Boa tarde!");
console.log("Boa noite!");
```

Cada linha acima é uma sentença de código independente.

---
### O que é um bloco de código?

Um bloco de código é um conjunto de sentenças agrupadas juntas, delimitadas por chaves `{}`. Ele organiza o código e define o escopo de execução, sendo comum em estruturas como loops, funções ou condicionais. Tudo dentro das chaves faz parte do mesmo bloco.

**Exemplo:**

```javascript
{
    console.log("Passo #01");
    console.log("Passo #02");
    console.log("Passo #03");
    console.log("Passo #04");
    console.log("Passo #05");
}
```

Aqui, as cinco sentenças estão dentro de um bloco, executadas em sequência. Blocos podem ser aninhados, como no seu exemplo:

```javascript
{
    {
        {
            {
                ;
                ;
                ;
            }
        }
    }
}
```

São blocos dentro de blocos, mas como só têm `;` (sentenças vazias), nada é executado.

---
### Resumo com base nos seus exemplos:

1. **Comentários**: `//` (uma linha) ou `/* ... */` (várias linhas). São ignorados pelo programa.

2. **Sentenças de código**: `console.log("Bom dia!");`, `console.log("Boa tarde!");`, etc. Comandos individuais.

3. **Bloco de código**: `{ console.log("Passo #01"); console.log("Passo #02"); ... }`. Agrupa sentenças.