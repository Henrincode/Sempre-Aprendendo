# 📘 Regex (Expressões Regulares)

### 📌 O que é Regex?

Uma expressão regular (regex) é um padrão usado para encontrar combinações de caracteres dentro de uma string. Ela permite validações, buscas, substituições e extrações complexas com poucas linhas de código.

---

## 🔤 Sintaxe Básica

|Símbolo|Significado|Exemplo|
|---|---|---|
|`.`|Qualquer caractere (exceto nova linha)|`a.c` → "abc", "a9c"|
|`^`|Início da string|`^Olá` → "Olá mundo"|
|`$`|Fim da string|`fim$` → "até o fim"|
|`*`|Zero ou mais ocorrências|`lo*l` → "ll", "lol", "loool"|
|`+`|Uma ou mais ocorrências|`lo+l` → "lol", "lool"|
|`?`|Zero ou uma ocorrência (condicional)|`colou?r` → "color", "colour"|
|`{n}`|Exatamente n ocorrências|`\d{3}` → "123"|
|`{n,}`|Pelo menos n ocorrências|`a{2,}` → "aa", "aaa"|
|`{n,m}`|Entre n e m ocorrências|`a{2,4}` → "aa", "aaa", "aaaa"|

---

## 🔣 Classes de Caracteres

|Sintaxe|Significado|Exemplo|
|---|---|---|
|`[abc]`|Um dos caracteres `a`, `b` ou `c`|`[aeiou]`|
|`[^abc]`|Qualquer caractere **exceto** `a,b,c`|`[^0-9]`|
|`[a-z]`|Letras minúsculas|`[A-Za-z]`|
|`\d`|Dígito: `[0-9]`|`\d+`|
|`\D`|Não-dígito|`\D+`|
|`\w`|Palavra: `[A-Za-z0-9_]`|`\w+`|
|`\W`|Não-palavra|`\W+`|
|`\s`|Espaço em branco (tab, espaço, \n etc)|`\s+`|
|`\S`|Não-espaço|`\S+`|

---

## 🎯 Agrupamento e Alternância

|Sintaxe|Significado|Exemplo|
|---|---|---|
|`(abc)`|Grupo (captura)|`(ab)+` → "abab"|
|`(?:abc)`|Grupo **sem captura**|`(?:ha)+` → "hahaha"|
|`a|b`|Alternância ("ou")|

---

## 🧠 Métodos Úteis (em JavaScript)

```js
const texto = "O número é 123-456";

texto.match(/\d+/g);      // ["123", "456"]
texto.replace(/\d+/g, "X") // "O número é X-X"
```

---

## 🧪 Flags Comuns

|Flag|Descrição|
|---|---|
|`g`|Global – encontra todas as ocorrências|
|`i`|Insensitive – ignora maiúsc./minúsc.|
|`m`|Multilinha – `^` e `$` funcionam por linha|

```js
/Oi/gi.test("oi"); // true
```

---

## 🧩 Truques e Técnicas Avançadas

### ✔️ 1. Lookahead e Lookbehind

- **Lookahead positivo**: `x(?=y)` → casa `x` se vier antes de `y`
    
- **Lookahead negativo**: `x(?!y)` → casa `x` se **não** vier antes de `y`
    
- **Lookbehind positivo**: `(?<=y)x`
    
- **Lookbehind negativo**: `(?<!y)x`
    

```js
const str = "Preço: R$123";
str.match(/(?<=R\$)\d+/); // ["123"]
```

---

### ✔️ 2. Limites de palavras: `\b`

```js
/\bpalavra\b/.test("palavra")        // true
/\bpalavra\b/.test("minhapalavra")   // false
```

---

### ✔️ 3. Remover comentários, múltiplos espaços, tags HTML

```js
texto.replace(/<!--.*?-->/g, "")           // remove comentários HTML
texto.replace(/ +/g, " ")                  // normaliza espaços
html.replace(/<[^>]+>/g, "")               // remove tags HTML
```

---

### ✔️ 4. Divisão multiplataforma de linhas:

```js
conteudo.split(/\r?\n/); // Windows e Linux/macOS
```

---

## 🧮 Exemplos de Uso Real

### ✔️ Validação de e-mail:

```js
/^[\w.-]+@[\w.-]+\.\w{2,}$/
```

### ✔️ Validação de CPF (simples):

```js
/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
```

### ✔️ Senha forte:

```js
/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
```