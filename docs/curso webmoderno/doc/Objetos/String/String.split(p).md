O método `split()` é usado em JavaScript para dividir uma string em várias partes, com base em um separador fornecido, e retorna um **array** contendo os pedaços da string. Ele não altera a string original, apenas gera uma nova.

### Sintaxe:
```javascript
str.split([separador[, limite]])
```

- **separador** (opcional): É o valor onde a string será dividida. Pode ser uma string ou uma expressão regular. Se for omitido, a string inteira será retornada como o único elemento do array.
- **limite** (opcional): É um número que especifica o número máximo de divisões que devem ser feitas. Se omitido, o método vai dividir a string completamente.

### Exemplos:

1. **Dividindo com um separador específico**:
   ```javascript
   let frase = "Olá, como você está?";
   let palavras = frase.split(" "); 
   console.log(palavras);  // ["Olá,", "como", "você", "está?"]
   ```

2. **Dividindo com um separador de caractere**:
   ```javascript
   let numeros = "1,2,3,4,5";
   let array = numeros.split(",");  
   console.log(array);  // ["1", "2", "3", "4", "5"]
   ```

3. **Usando o limite**:
   ```javascript
   let texto = "maçã,banana,laranja,abacaxi";
   let frutas = texto.split(",", 2); 
   console.log(frutas);  // ["maçã", "banana"]
   ```

4. **Dividindo sem um separador**:
   ```javascript
   let palavra = "exemplo";
   let array = palavra.split(""); 
   console.log(array);  // ["e", "x", "e", "m", "p", "l", "o"]
   ```

5. **Quando o separador não é encontrado**:
   Se o separador não for encontrado, a string original será retornada como único item do array.
   ```javascript
   let frase = "Olá mundo";
   let partes = frase.split("!");  
   console.log(partes);  // ["Olá mundo"]
   ```

Esse método é muito útil para manipulação de strings quando você precisa dividir o conteúdo em partes menores.