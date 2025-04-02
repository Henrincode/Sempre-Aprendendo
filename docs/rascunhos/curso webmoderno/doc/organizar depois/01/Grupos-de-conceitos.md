**1. Sentença**

Uma **sentença** é uma unidade básica de código que representa uma instrução completa.  

### Sentenças em JavaScript
- Em JavaScript, uma sentença pode ou não terminar com um ponto e vírgula (`;`).  

Exemplos:  
```javascript
console.log("oi")
```
ou  
```javascript
console.log("oi");
```

### Sentenças em Múltiplas Linhas
Uma sentença pode ocupar várias linhas ou incluir espaços extras. Isso é permitido, mas o código deve ser sempre legível e organizado.  

Exemplo:  
```javascript
console
  .log(
    "Oi"
  );
```

### Diferença entre Linguagens
- Em linguagens como **Java** e **C++**, o uso do ponto e vírgula (`;`) é obrigatório para finalizar uma sentença.  
- Já em **JavaScript**, ele é opcional na maioria dos casos, mas recomendado para evitar erros.

---

**2. Bloco**

Um **bloco** é um conjunto de sentenças agrupadas entre chaves `{ }`. Ele é usado para organizar o código e definir escopos.

### Exemplo de Bloco
```javascript
{
    console.log("Este é o início do bloco.");
    let mensagem = "Blocos ajudam na organização!";
    console.log(mensagem);
}
```

### Uso Comum de Blocos
Blocos são usados para:  
- Definir o corpo de funções.  
- Estruturar condicionais (`if`, `else`).  
- Agrupar instruções dentro de laços (`for`, `while`).  

Exemplo dentro de uma função:  
```javascript
function saudacao(nome) {
    if (nome) {
        console.log(`Olá, ${nome}!`);
    } else {
        console.log("Olá, visitante!");
    }
}
```

---

**Comparação: Livro vs Linguagem de Programação**

**No Livro:**  
1. Letras formam palavras.  
2. Palavras formam frases.  
3. Frases compõem parágrafos.  
4. Parágrafos estruturam seções.  
5. Seções organizam capítulos.  
6. Capítulos formam o livro.  

O **livro** é a soma dessas partes em uma narrativa organizada.

**Na Linguagem de Programação:**  
1. Caracteres formam variáveis e operadores.  
2. Variáveis e operadores criam instruções.  
3. Instruções compõem funções.  
4. Funções integram módulos.  
5. Módulos estruturam aplicações.  

Uma **aplicação** é o resultado de várias partes organizadas, assim como um livro.
