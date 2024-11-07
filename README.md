###### Sempre Aprendendo - Todo dia aprendendo algo novo, SEMPRE! Muito do que for aprendendo postarei aqui!

---

# Introdução aos Fundamentos de Programação

Programação é o processo de escrever instruções que dizem a um computador o que fazer. Cada instrução é essencial para que o programa funcione corretamente e execute as tarefas desejadas. Vamos começar pelos conceitos mais básicos.

---

### 1. **Variáveis, Constantes e Tipos de Dados**

#### Variáveis

**Variável**: Uma variável é um espaço de armazenamento que guarda valores que podem ser utilizados e modificados durante a execução do programa.

- **Tipo de Variável**: Define o tipo de dado que a variável pode armazenar.
- **Nome da Variável**: Identifica a variável no código.
- **Valor da Variável**: O dado atribuído à variável.

**Exemplo de Declaração de Variável:**

```c
int idade = 18;
```

Explicação:
- **`int`**: Tipo da variável, indicando que ela guarda um número inteiro.
- **`idade`**: Nome da variável, representando a idade de uma pessoa.
- **`18`**: Valor inicial da variável, ou seja, a idade atribuída.

#### Constantes

Constantes são variáveis que não mudam de valor durante a execução do programa. Elas são úteis para valores fixos que não devem ser alterados, como taxas de conversão, números matemáticos, entre outros.

**Exemplo de Constante:**

```c
const float PI = 3.14;
```

Explicação:
- **`const`**: Define a variável como constante.
- **`float`**: Tipo da constante.
- **`PI`**: Nome da constante.
- **`3.14`**: Valor da constante.

#### Tipos de Dados

Os tipos de dados indicam o tipo de informação que uma variável pode guardar. Abaixo estão alguns tipos de dados comumente usados:

- **Inteiro (`int`)**: Armazena números inteiros, como `10`, `-3`, `45`.
- **Decimal (`float`, `double`)**: Armazena números com casas decimais, como `3.14`, `0.99`.
- **Caractere (`char`)**: Armazena um único caractere, como `'A'`, `'b'`.
- **Cadeia de Caracteres `(string`)**: Armazena uma sequência de caracteres, como `"Olá"`, `"Henrique"`.
- **Booleano (`bool`)**: Armazena valores `true` (verdadeiro) ou `false` (falso), utilizado para condições lógicas.

---

### 1.1. **Regras para Nomeação de Variáveis e Funções**

É essencial seguir algumas regras e boas práticas ao definir variáveis e funções. Isso facilita a leitura e a manutenção do código. Aqui estão algumas diretrizes:

#### Regras Gerais

1. **Não comece com números**: Nomes de variáveis e funções não podem começar com números. Devem iniciar com uma letra (a-z ou A-Z) ou um sublinhado (`_`).
   - **Correto**: `idade`, `alturaMaxima`, `_contador`
   - **Incorreto**: `1idade`, `3altura`

2. **Evite caracteres especiais**: Use apenas letras, números e o sublinhado (`_`). Caracteres como `@`, `#`, `%`, `&`, etc., não são permitidos.

3. **Evite palavras reservadas**: Não use palavras reservadas da linguagem (como `int`, `return`, `for`, etc.) como nome de variáveis ou funções.

#### Convenções de Nomenclatura

1. **Nomes descritivos**: Dê nomes que indiquem claramente o propósito da variável ou função. Isso facilita a compreensão do código, especialmente em projetos maiores.
   - **Exemplo de nome claro**: `quantidadeDeAlunos`
   - **Exemplo de nome pouco claro**: `qtd`

2. **Nomes curtos para variáveis temporárias**: Para variáveis de uso temporário (como contadores em laços), nomes curtos são aceitáveis (`i`, `j`, `k`, etc.).

3. **Camel Case**: Em algumas linguagens, é recomendado que nomes com múltiplas palavras usem a convenção *camelCase* (primeira palavra em minúscula e cada nova palavra iniciada em maiúscula). Essa prática melhora a legibilidade.
   - **Exemplo**: `idadeAluno`, `somaValores`, `nomeCompleto`

4. **Pascal Case para funções**: Uma prática comum é nomear funções usando *PascalCase* (todas as palavras iniciam em maiúscula), especialmente em linguagens como C# e Java.
   - **Exemplo**: `CalcularMedia()`, `VerificarStatus()`

---

### 2. **Expressões e Operadores**

**Expressão**: Uma expressão é uma combinação de valores, variáveis e operadores que resulta em um valor.

- **Operadores Aritméticos**: Usados para operações matemáticas (`+`, `-`, `*`, `/`).
- **Operadores de Comparação**: Comparam dois valores e retornam `true` ou `false` (por exemplo, `>=`, `<=`, `==`, `!=`).
- **Operadores Lógicos**: Usados para combinar condições (por exemplo, `&&` (E lógico), `||` (OU lógico)).

---

### 3. **Estruturas Condicionais**

Estruturas condicionais permitem que o programa execute certas partes do código dependendo de uma condição.

**Exemplo de Estrutura Condicional:**

```c
if (idade >= 18) {
    // Código executado se a idade for maior ou igual a 18
} else if (idade >= 30) {
    // Código executado se a idade for maior ou igual a 30
} else {
    // Código executado se nenhuma das condições anteriores for atendida
}
```

---

### 4. **Estruturas de Repetição**

As estruturas de repetição permitem executar um bloco de código várias vezes.

**Exemplo de Laço de Repetição:**

```c
for (int i = 0; i < 10; i++) {
    // Código executado 10 vezes
}
```

---

### 5. **Arrays, Vetores e Matrizes**

Arrays (ou vetores) são estruturas que armazenam vários valores do mesmo tipo em uma única variável.

**Exemplo de Array:**

```c
int numeros[5] = {1, 2, 3, 4, 5};
```

#### Matrizes

Matrizes são arrays de duas ou mais dimensões, representando uma tabela de dados.

---

### 6. **Funções**

Funções são blocos de código que executam uma tarefa específica e podem ser reutilizados no programa.

**Exemplo de Função:**

```c
int soma(int a, int b) {
    return a + b;
}
```

---

### 7. **Bibliotecas**

Bibliotecas são conjuntos de funções e definições já prontas que podem ser usadas em um programa para realizar tarefas específicas, como manipulação de strings, operações matemáticas, etc.

**Exemplo de Inclusão de Biblioteca:**

```c
#include <stdio.h>
```

---

Seguir essas regras e convenções contribui para a criação de um código mais organizado e fácil de entender. É uma boa prática adotar essas normas desde o início para desenvolver uma base sólida em programação!
