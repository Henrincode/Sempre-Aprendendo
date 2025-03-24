O método `map()` em JavaScript é utilizado para criar um **novo array** com os resultados da execução de uma função em cada elemento do array original. O array original não é alterado, e o novo array possui o mesmo comprimento, mas com os valores transformados pela função que você passar como argumento.

### Sintaxe:
```javascript
let novoArray = array.map((elemento, indice, arrayOriginal) => {
    // Operações a serem realizadas em cada elemento
    return valorTransformado;
});
```

- `elemento`: o valor atual do item no array durante a iteração.
- `indice`: a posição (índice) do elemento no array.
- `arrayOriginal`: o array sobre o qual o `map()` foi chamado.

### Exemplo básico:
```javascript
const numeros = [1, 2, 3, 4];
const quadrados = numeros.map(num => num * num);

console.log(quadrados);  // [1, 4, 9, 16]
```

### Explicação:
No exemplo acima, para cada elemento no array `numeros`, a função passada ao `map()` eleva esse número ao quadrado. O `map()` retorna um novo array `quadrados` com os valores transformados.

### Características do `map()`:
1. **Não altera o array original**: O array sobre o qual `map()` é chamado permanece inalterado.
2. **Retorna um novo array**: O método cria e retorna um novo array com os resultados.
3. **Função imutável**: Não modifica diretamente o array original ou seus elementos, mas cria um novo array baseado no processamento dos dados.