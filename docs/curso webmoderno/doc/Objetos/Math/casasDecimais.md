Em JavaScript, a forma correta de arredondar casas decimais depende do que você precisa: arredondamento padrão, truncamento ou controle específico de casas decimais. Aqui estão algumas abordagens comuns:

### 1. **Usando `toFixed()`** (Para exibição de número formatado)
```javascript
let num = 5.6789;
console.log(num.toFixed(2)); // "5.68"
```
- Retorna uma string.
- Arredonda para cima ou para baixo corretamente.
- Não é adequado para cálculos matemáticos diretos, pois retorna um texto.

### 2. **Usando `Math.round()`** (Arredondamento padrão)
```javascript
let num = 5.6789;
let arredondado = Math.round(num * 100) / 100; // 2 casas decimais
console.log(arredondado); // 5.68
```
- Arredonda para o inteiro mais próximo.
- Multiplicar antes e dividir depois permite controlar as casas decimais.

### 3. **Usando `Math.floor()`** (Arredondamento para baixo)
```javascript
let num = 5.6789;
let arredondado = Math.floor(num * 100) / 100;
console.log(arredondado); // 5.67
```
- Sempre arredonda para baixo.

### 4. **Usando `Math.ceil()`** (Arredondamento para cima)
```javascript
let num = 5.6789;
let arredondado = Math.ceil(num * 100) / 100;
console.log(arredondado); // 5.68
```
- Sempre arredonda para cima.

### 5. **Usando `Number.toPrecision()`** (Controle de dígitos significativos)
```javascript
let num = 5.6789;
console.log(num.toPrecision(3)); // "5.68"
```
- Retorna uma string com um número de dígitos total, incluindo antes e depois do ponto decimal.

Se precisar realizar cálculos precisos, evite `toFixed()` para operações matemáticas e prefira `Math.round()`, `Math.floor()` ou `Math.ceil()`. 🚀