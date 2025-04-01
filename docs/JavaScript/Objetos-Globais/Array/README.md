# Objeto Array em JavaScript

### Construtor

#### Array() constructor
Cria um novo array `Array`.

---

### Métodos Estáticos

#### .from()
Cria um novo array a partir de um iterável ou de um objeto semelhante a um array.

#### .fromAsync()
Cria um novo array a partir de um iterável assíncrono.

#### .isArray()
Verifica se um valor é um array.

#### .of()
Cria um novo array com um número variável de argumentos, independentemente do tipo ou quantidade.

---

### Propriedades Estáticas

#### \[Symbol.species]
Retorna o construtor usado para criar instâncias derivadas do array.

---

### Métodos de Instância

#### .at()
Retorna o elemento em um índice especificado, permitindo índices negativos para contar a partir do final.

#### .concat()
Combina dois ou mais arrays, retornando um novo array.

#### .copyWithin()
Copia uma sequência de elementos dentro do array para outra posição no mesmo array.
**Muda o array original**

#### .entries()
Retorna um iterador de pares \[índice, valor] dos elementos do array.

#### .every()
Verifica se todos os elementos do array satisfazem uma condição especificada.

#### .fill()
Preenche todos os elementos do array com um valor estático, dentro de um intervalo opcional.
**Muda o array original**

#### .filter()
Cria um novo array com os elementos que passam em um teste fornecido por uma função.

#### .find()
Retorna o primeiro elemento do array que satisfaz uma condição especificada.

#### .findIndex()
Retorna o índice do primeiro elemento que satisfaz uma condição especificada.

#### .findLast()
Retorna o último elemento do array que satisfaz uma condição especificada.

#### .findLastIndex()
Retorna o índice do último elemento que satisfaz uma condição especificada.

#### .flat()
Cria um novo array com todos os elementos de sub-arrays concatenados até uma profundidade especificada.

#### .flatMap()
Mapeia cada elemento usando uma função e achata o resultado em um novo array.

#### .forEach()
Executa uma função para cada elemento do array.

#### .includes()
Verifica se um array contém um elemento específico.

#### .indexOf()
Retorna o primeiro índice em que um elemento específico é encontrado.

#### .join()
Junta todos os elementos do array em uma string, usando um separador opcional.

#### .keys()
Retorna um iterador com os índices do array.

#### .lastIndexOf()
Retorna o último índice em que um elemento específico é encontrado.

#### .map()
Cria um novo array com os resultados de uma função aplicada a cada elemento.

#### .pop()
Remove e retorna o último elemento do array.
**Muda o array original**

#### .push()
Adiciona um ou mais elementos ao final do array e retorna o novo comprimento.
**Muda o array original**

#### .reduce()
Reduz o array a um único valor, aplicando uma função acumuladora da esquerda para a direita.

#### .reduceRight()
Reduz o array a um único valor, aplicando uma função acumuladora da direita para a esquerda.

#### .reverse()
Inverte a ordem dos elementos no array.
**Muda o array original**

#### .shift()
Remove e retorna o primeiro elemento do array.
**Muda o array original**

#### .slice()
Retorna uma cópia superficial de uma porção do array, definida por índices de início e fim.

#### .some()
Verifica se pelo menos um elemento do array satisfaz uma condição especificada.

#### .sort()
Ordena os elementos do array com base em uma função de comparação opcional.
**Muda o array original**

#### .splice()
Adiciona ou remove elementos do array em uma posição específica.
**Muda o array original**

#### .toLocaleString()
Retorna uma string representando os elementos do array, ajustada à localidade.

#### .toReversed()
Retorna um novo array com os elementos na ordem inversa, sem modificar o original.

#### .toSorted()
Retorna um novo array com os elementos ordenados, sem modificar o original.

#### .toSpliced()
Retorna um novo array com elementos adicionados ou removidos, sem modificar o original.

#### .toString()
Retorna uma string representando o array e seus elementos.

#### .unshift()
Adiciona um ou mais elementos ao início do array e retorna o novo comprimento.
**Muda o array original**

#### .values()
Retorna um iterador com os valores dos elementos do array.

#### .with()
Retorna um novo array com um elemento substituído em um índice específico, sem modificar o original.

#### .\[@@iterator]()
Retorna um iterador dos valores do array (equivalente a `.values()`).

---

### Propriedades de Instância

#### .length
Retorna ou define o número de elementos no array.

#### .\[@@unscopables]
Um objeto que lista propriedades que não devem ser expostas em blocos `with`.