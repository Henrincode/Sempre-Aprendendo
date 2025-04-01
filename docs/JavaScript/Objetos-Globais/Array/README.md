# Objeto Array em JavaScript

### Construtor

#### Array() constructor
Cria um novo objeto `Array`.

---

### Métodos Estáticos

#### .from()
Cria um novo array a partir de um objeto iterável ou array-like.

#### .fromAsync()
Cria um novo array a partir de um iterável assíncrono.

#### .isArray()
Verifica se o valor fornecido é um array.

#### .of()
Cria um novo array com os elementos especificados como argumentos.

---

### Propriedades Estáticas

#### [Symbol.species]
Define a função construtora usada para criar objetos derivados.

---

### Métodos de Instância

#### .at()
Retorna o elemento na posição especificada, permitindo índices negativos.

#### .concat()
Combina dois ou mais arrays e retorna um novo array.

#### .copyWithin()
Copia uma sequência de elementos dentro do array para outra posição.

#### .entries()
Retorna um iterador com pares [índice, valor] do array.

#### .every()
Verifica se todos os elementos satisfazem uma condição.

#### .fill()
Preenche o array com um valor estático em um intervalo especificado.

#### .filter()
Cria um novo array com os elementos que passam em um teste.

#### .find()
Retorna o primeiro elemento que satisfaz uma condição.

#### .findIndex()
Retorna o índice do primeiro elemento que satisfaz uma condição.

#### .findLast()
Retorna o último elemento que satisfaz uma condição.

#### .findLastIndex()
Retorna o índice do último elemento que satisfaz uma condição.

#### .flat()
Cria um novo array com todos os sub-arrays concatenados até uma profundidade especificada.

#### .flatMap()
Mapeia cada elemento e achata o resultado em um novo array.

#### .forEach()
Executa uma função para cada elemento do array.

#### .includes()
Verifica se o array contém um elemento específico.

#### .indexOf()
Retorna o primeiro índice onde um elemento é encontrado.

#### .join()
Junta todos os elementos do array em uma string.

#### .keys()
Retorna um iterador com as chaves (índices) do array.

#### .lastIndexOf()
Retorna o último índice onde um elemento é encontrado.

#### .map()
Cria um novo array com os resultados de uma função aplicada a cada elemento.

#### .pop()
Remove e retorna o último elemento do array.

#### .push()
Adiciona um ou mais elementos ao final do array.

#### .reduce()
Reduz o array a um único valor, aplicando uma função do início ao fim.

#### .reduceRight()
Reduz o array a um único valor, aplicando uma função do fim ao início.

#### .reverse()
Inverte a ordem dos elementos no array.

#### .shift()
Remove e retorna o primeiro elemento do array.

#### .slice()
Retorna uma cópia superficial de uma parte do array.

#### .some()
Verifica se pelo menos um elemento satisfaz uma condição.

#### .sort()
Ordena os elementos do array.

#### .splice()
Adiciona ou remove elementos do array em uma posição específica.

#### .toLocaleString()
Retorna uma string representando os elementos do array, ajustada à localidade.

#### .toReversed()
Retorna um novo array com os elementos na ordem inversa, sem alterar o original.

#### .toSorted()
Retorna um novo array ordenado, sem alterar o original.

#### .toSpliced()
Retorna um novo array com adições ou remoções, sem alterar o original.

#### .toString()
Retorna uma string representando o array e seus elementos.

#### .unshift()
Adiciona um ou mais elementos ao início do array.

#### .values()
Retorna um iterador com os valores do array.

#### .with()
Retorna um novo array com um elemento substituído em um índice especificado.

#### [\@\@iterator]
Retorna um iterador para os valores do array.

---

### Propriedades de Instância

#### .length
Retorna ou define o número de elementos no array.

#### [\@\@unscopables]
Define quais propriedades não devem ser expostas em um bloco `with`.