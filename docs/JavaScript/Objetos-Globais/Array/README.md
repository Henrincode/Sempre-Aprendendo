# Objeto Array em JavaScript

O Array é um dos objetos fundamentais do JavaScript, permitindo armazenar múltiplos valores em uma única variável. Existem dois tipos principais de métodos: estáticos (que pertencem ao construtor Array) e de instância (que pertencem a cada array criado).

---

## Construtor

### Array()

Cria um novo array `Array`. Existem várias formas de utilizar o construtor:

```javascript
// Array vazio
const arr1 = new Array();
console.log(arr1); // []

// Array com tamanho inicial
const arr2 = new Array(3);
console.log(arr2); // [ <3 empty items> ]
console.log(arr2.length); // 3

// Array com elementos
const arr3 = new Array(1, 2, 3);
console.log(arr3); // [ 1, 2, 3 ]

// Forma moderna (sem new)
const arr4 = [1, 2, 3];
console.log(arr4); // [ 1, 2, 3 ]
```

---

## Métodos Estáticos

Os métodos estáticos pertencem ao construtor `Array` e não requerem uma instância de array.

### Array.from()

Cria um novo array a partir de um iterável ou de um objeto semelhante a um array (array-like).

```javascript
// De uma string
const str = "hello";
console.log(Array.from(str)); // [ 'h', 'e', 'l', 'l', 'o' ]

// De um objeto array-like
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
console.log(Array.from(arrayLike)); // [ 'a', 'b', 'c' ]

// De um Set
const set = new Set([1, 2, 3]);
console.log(Array.from(set)); // [ 1, 2, 3 ]

// Com função de mapeamento
const nums = [1, 2, 3];
console.log(Array.from(nums, x => x * 2)); // [ 2, 4, 6 ]

// De um NodeList (elementos do DOM)
// const elements = Array.from(document.querySelectorAll('div'));
```

### Array.fromAsync()

Cria um novo array a partir de um iterável assíncrono. Útil para trabalhar com operações assíncronas.

```javascript
// De um iterável assíncrono
async function example() {
  async function* asyncGen() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const result = await Array.fromAsync(asyncGen());
  console.log(result); // [ 1, 2, 3 ]
}

example();

// Com função de mapeamento assíncrono
async function example2() {
  async function* asyncGen() {
    yield 10;
    yield 20;
  }
  
  const result = await Array.fromAsync(
    asyncGen(),
    x => Promise.resolve(x * 2)
  );
  console.log(result); // [ 20, 40 ]
}

example2();
```

### Array.isArray()

Verifica se um valor é um array (diferencia arrays de outros objetos).

```javascript
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray([])); // true
console.log(Array.isArray('array')); // false
console.log(Array.isArray({ length: 3 })); // false
console.log(Array.isArray(123)); // false
console.log(Array.isArray(null)); // false

// Útil para validação
function processar(valor) {
  if (Array.isArray(valor)) {
    console.log('É um array');
  } else {
    console.log('Não é um array');
  }
}

processar([1, 2]); // É um array
processar('não é'); // Não é um array
```

### Array.of()

Cria um novo array com um número variável de argumentos, independentemente do tipo ou quantidade. Diferente do construtor `Array()`, evita o comportamento especial com um único argumento numérico.

```javascript
// Array.of() vs Array()
console.log(Array.of(7)); // [ 7 ] - cria array com valor 7
console.log(new Array(7)); // [ <7 empty items> ] - cria array com 7 posições vazias

// Com múltiplos argumentos
console.log(Array.of(1, 2, 3)); // [ 1, 2, 3 ]
console.log(Array.of('a', 'b')); // [ 'a', 'b' ]

// Com tipos diferentes
console.log(Array.of(1, 'dois', true, null)); // [ 1, 'dois', true, null ]

// Sem argumentos
console.log(Array.of()); // []
```

---

## Propriedades Estáticas

### Array[Symbol.species]

Retorna o construtor usado para criar instâncias derivadas do array. Útil ao criar classes que estendem Array.

```javascript
console.log(Array[Symbol.species]); // [Function: Array]

// Em uma classe customizada
class MinhaArray extends Array {
  static get [Symbol.species]() {
    return Array; // Retorna o construtor Array normal
  }
}

const arr = new MinhaArray(1, 2, 3);
const mapeado = arr.map(x => x * 2);
console.log(mapeado instanceof MinhaArray); // false
console.log(mapeado instanceof Array); // true
```

---

## Métodos de Instância

Os métodos de instância operam em um array específico.

### .at()

Retorna o elemento em um índice especificado, permitindo índices negativos para contar a partir do final. É mais intuitivo que usar `arr[arr.length - 1]`.

```javascript
const arr = ['a', 'b', 'c', 'd'];

// Índices positivos
console.log(arr.at(0)); // 'a'
console.log(arr.at(2)); // 'c'

// Índices negativos (a partir do final)
console.log(arr.at(-1)); // 'd' (último elemento)
console.log(arr.at(-2)); // 'c' (penúltimo elemento)
console.log(arr.at(-4)); // 'a' (primeiro elemento)

// Fora dos limites
console.log(arr.at(10)); // undefined
console.log(arr.at(-10)); // undefined
```

### .concat()

Combina dois ou mais arrays, retornando um novo array. Não modifica os arrays originais.

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

// Concatenar dois arrays
const resultado1 = arr1.concat(arr2);
console.log(resultado1); // [ 1, 2, 3, 4 ]
console.log(arr1); // [ 1, 2 ] - original não muda

// Concatenar múltiplos arrays
const resultado2 = arr1.concat(arr2, arr3);
console.log(resultado2); // [ 1, 2, 3, 4, 5, 6 ]

// Concatenar com valores individuais
const resultado3 = arr1.concat('a', 'b', arr2);
console.log(resultado3); // [ 1, 2, 'a', 'b', 3, 4 ]

// Arrays aninhados (não desaninha)
const arr4 = [1, [2, 3]];
const resultado4 = arr4.concat([4, 5]);
console.log(resultado4); // [ 1, [ 2, 3 ], 4, 5 ]
```

### .copyWithin()

Copia uma sequência de elementos dentro do array para outra posição no mesmo array. **Muda o array original**.

```javascript
const arr1 = [1, 2, 3, 4, 5];

// copyWithin(alvo, início, fim)
// Copia elementos de [início, fim) para posição alvo
arr1.copyWithin(0, 3, 5);
console.log(arr1); // [ 4, 5, 3, 4, 5 ] - elementos de índice 3-4 copiados para 0-1

const arr2 = ['a', 'b', 'c', 'd', 'e'];

// Copiar sem especificar fim (até o final)
arr2.copyWithin(2, 0);
console.log(arr2); // [ 'a', 'b', 'a', 'b', 'c' ] - copia a, b para posição 2

const arr3 = [1, 2, 3, 4, 5, 6];

// Usar índices negativos
arr3.copyWithin(0, -2); // Copia últimos 2 elementos para o início
console.log(arr3); // [ 5, 6, 3, 4, 5, 6 ]
```

### .entries()

Retorna um iterador de pares [índice, valor] dos elementos do array.

```javascript
const arr = ['a', 'b', 'c'];

// Usar com for...of
for (const [index, value] of arr.entries()) {
  console.log(index, value);
}
// Output:
// 0 'a'
// 1 'b'
// 2 'c'

// Converter para array
const entries = Array.from(arr.entries());
console.log(entries); // [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]

// Destructuring
const iterator = arr.entries();
console.log(iterator.next().value); // [ 0, 'a' ]
console.log(iterator.next().value); // [ 1, 'b' ]
```

### .every()

Verifica se todos os elementos do array satisfazem uma condição especificada. Retorna `true` ou `false`.

```javascript
const numeros = [2, 4, 6, 8];

// Verificar se todos são pares
console.log(numeros.every(n => n % 2 === 0)); // true

// Verificar se todos são maiores que 0
console.log(numeros.every(n => n > 0)); // true

// Verificar se todos são maiores que 5
console.log(numeros.every(n => n > 5)); // false

const produtos = [
  { nome: 'Notebook', preco: 2000 },
  { nome: 'Mouse', preco: 50 },
  { nome: 'Teclado', preco: 150 }
];

// Verificar se todos os produtos têm preço
console.log(produtos.every(p => p.preco > 0)); // true

// Verificar se todos os preços são menores que 100
console.log(produtos.every(p => p.preco < 100)); // false
```

### .fill()

Preenche todos os elementos do array com um valor estático, dentro de um intervalo opcional. **Muda o array original**.

```javascript
const arr1 = [1, 2, 3, 4, 5];

// Preencher todo o array
arr1.fill(0);
console.log(arr1); // [ 0, 0, 0, 0, 0 ]

const arr2 = [1, 2, 3, 4, 5];

// Preencher a partir de um índice
arr2.fill(9, 2); // Preencher a partir do índice 2
console.log(arr2); // [ 1, 2, 9, 9, 9 ]

const arr3 = [1, 2, 3, 4, 5];

// Preencher em um intervalo específico
arr3.fill(7, 1, 4); // Preencher de índice 1 a 3 (4 é exclusivo)
console.log(arr3); // [ 1, 7, 7, 7, 5 ]

// Com índices negativos
const arr4 = new Array(5).fill('x');
console.log(arr4); // [ 'x', 'x', 'x', 'x', 'x' ]
```

### .filter()

Cria um novo array com os elementos que passam em um teste fornecido por uma função. Não modifica o array original.

```javascript
const numeros = [1, 2, 3, 4, 5, 6];

// Filtrar números pares
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares); // [ 2, 4, 6 ]

// Filtrar números maiores que 3
const maioresQue3 = numeros.filter(n => n > 3);
console.log(maioresQue3); // [ 4, 5, 6 ]

const usuarios = [
  { nome: 'Ana', idade: 25, ativo: true },
  { nome: 'Bruno', idade: 17, ativo: false },
  { nome: 'Carlos', idade: 30, ativo: true }
];

// Filtrar usuários maiores de idade
const maioresIdade = usuarios.filter(u => u.idade >= 18);
console.log(maioresIdade);
// [ { nome: 'Ana', idade: 25, ativo: true }, { nome: 'Carlos', idade: 30, ativo: true } ]

// Filtrar usuários ativos
const ativos = usuarios.filter(u => u.ativo);
console.log(ativos); // [ { nome: 'Ana', ... }, { nome: 'Carlos', ... } ]

// Com índice e array
const resultado = [10, 20, 30].filter((valor, index) => index !== 1);
console.log(resultado); // [ 10, 30 ]
```

### .find()

Retorna o primeiro elemento do array que satisfaz uma condição especificada. Retorna `undefined` se nenhum elemento satisfaz a condição.

```javascript
const numeros = [1, 2, 3, 4, 5, 6];

// Encontrar o primeiro número par
const primeiroPar = numeros.find(n => n % 2 === 0);
console.log(primeiroPar); // 2

// Encontrar o primeiro número maior que 4
const primeiroMaiorQue4 = numeros.find(n => n > 4);
console.log(primeiroMaiorQue4); // 5

const usuarios = [
  { id: 1, nome: 'Ana' },
  { id: 2, nome: 'Bruno' },
  { id: 3, nome: 'Carlos' }
];

// Encontrar usuário com id 2
const usuario = usuarios.find(u => u.id === 2);
console.log(usuario); // { id: 2, nome: 'Bruno' }

// Elemento não encontrado
const naoEncontrado = usuarios.find(u => u.id === 999);
console.log(naoEncontrado); // undefined
```

### .findIndex()

Retorna o índice do primeiro elemento que satisfaz uma condição especificada. Retorna `-1` se nenhum elemento satisfaz a condição.

```javascript
const numeros = [10, 20, 30, 40, 50];

// Encontrar índice do primeiro número maior que 25
const index1 = numeros.findIndex(n => n > 25);
console.log(index1); // 2 (o valor é 30)

// Encontrar índice do primeiro número par
const index2 = numeros.findIndex(n => n % 2 === 0);
console.log(index2); // 0 (todos são pares)

const usuarios = [
  { id: 1, nome: 'Ana' },
  { id: 2, nome: 'Bruno' },
  { id: 3, nome: 'Carlos' }
];

// Encontrar índice do usuário com nome 'Bruno'
const indexBruno = usuarios.findIndex(u => u.nome === 'Bruno');
console.log(indexBruno); // 1

// Elemento não encontrado
const indexNaoEncontrado = numeros.findIndex(n => n === 999);
console.log(indexNaoEncontrado); // -1
```

### .findLast()

Retorna o último elemento do array que satisfaz uma condição especificada. Procura do final para o início.

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 3, 2];

// Encontrar o último número 3
const ultimo3 = numeros.findLast(n => n === 3);
console.log(ultimo3); // 3 (o segundo 3 no array)

// Encontrar o último número par
const ultimoPar = numeros.findLast(n => n % 2 === 0);
console.log(ultimoPar); // 2 (o último elemento par)

const usuarios = [
  { id: 1, nome: 'Ana', status: 'ativo' },
  { id: 2, nome: 'Bruno', status: 'inativo' },
  { id: 3, nome: 'Carlos', status: 'ativo' }
];

// Encontrar o último usuário ativo
const ultimoAtivo = usuarios.findLast(u => u.status === 'ativo');
console.log(ultimoAtivo); // { id: 3, nome: 'Carlos', status: 'ativo' }

// Não encontrado
const naoEncontrado = numeros.findLast(n => n > 100);
console.log(naoEncontrado); // undefined
```

### .findLastIndex()

Retorna o índice do último elemento que satisfaz uma condição especificada. Procura do final para o início e retorna `-1` se não encontrar.

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 3, 2];

// Encontrar índice do último número 3
const indexUltimo3 = numeros.findLastIndex(n => n === 3);
console.log(indexUltimo3); // 6

// Encontrar índice do último número par
const indexUltimoPar = numeros.findLastIndex(n => n % 2 === 0);
console.log(indexUltimoPar); // 7 (o valor 2)

const usuarios = [
  { id: 1, nome: 'Ana' },
  { id: 2, nome: 'Bruno' },
  { id: 3, nome: 'Carlos' },
  { id: 4, nome: 'Ana' }
];

// Encontrar índice do último 'Ana'
const indexAna = usuarios.findLastIndex(u => u.nome === 'Ana');
console.log(indexAna); // 3

// Não encontrado
const naoEncontrado = numeros.findLastIndex(n => n > 100);
console.log(naoEncontrado); // -1
```

### .flat()

Cria um novo array com todos os elementos de sub-arrays concatenados até uma profundidade especificada. Não modifica o array original.

```javascript
const arr1 = [1, 2, [3, 4]];

// Achatar com profundidade padrão (1)
console.log(arr1.flat()); // [ 1, 2, 3, 4 ]

const arr2 = [1, 2, [3, 4, [5, 6]]];

// Profundidade 1
console.log(arr2.flat(1)); // [ 1, 2, 3, 4, [ 5, 6 ] ]

// Profundidade 2
console.log(arr2.flat(2)); // [ 1, 2, 3, 4, 5, 6 ]

const arr3 = [1, [2, [3, [4, [5]]]]];

// Profundidade Infinity (achatar completamente)
console.log(arr3.flat(Infinity)); // [ 1, 2, 3, 4, 5 ]

// Remover buracos no array
const arr4 = [1, 2, , 4, , 6];
console.log(arr4.flat()); // [ 1, 2, 4, 6 ]
```

### .flatMap()

Mapeia cada elemento usando uma função e achata o resultado em um novo array em um nível de profundidade. É como fazer `.map()` e depois `.flat(1)`.

```javascript
const numeros = [1, 2, 3];

// Duplicar cada número e achatar
const resultado1 = numeros.flatMap(n => [n, n]);
console.log(resultado1); // [ 1, 1, 2, 2, 3, 3 ]

// Multiplicar e criar múltiplos valores
const resultado2 = numeros.flatMap(n => [n, n * 2]);
console.log(resultado2); // [ 1, 2, 2, 4, 3, 6 ]

const frases = ['Olá mundo', 'JavaScript é legal'];

// Dividir em palavras
const palavras = frases.flatMap(frase => frase.split(' '));
console.log(palavras); // [ 'Olá', 'mundo', 'JavaScript', 'é', 'legal' ]

const usuarios = [
  { id: 1, hobbies: ['programar', 'ler'] },
  { id: 2, hobbies: ['jogar', 'desenhar'] }
];

// Extrair todos os hobbies
const todosHobbies = usuarios.flatMap(u => u.hobbies);
console.log(todosHobbies); // [ 'programar', 'ler', 'jogar', 'desenhar' ]

// Comparação: flatMap vs map + flat
const comMap = numeros.map(n => [n, n * 2]).flat();
const comFlatMap = numeros.flatMap(n => [n, n * 2]);
console.log(comMap); // [ 1, 2, 2, 4, 3, 6 ]
console.log(comFlatMap); // [ 1, 2, 2, 4, 3, 6 ]
```

### .forEach()

Executa uma função para cada elemento do array. Retorna `undefined`. Útil para efeitos colaterais.

```javascript
const numeros = [1, 2, 3, 4, 5];

// Imprimir cada número
numeros.forEach(n => console.log(n));
// Output: 1 2 3 4 5

// Com índice
numeros.forEach((valor, index) => {
  console.log(`${index}: ${valor}`);
});
// Output:
// 0: 1
// 1: 2
// etc...

// Com referência ao array
const arr = [10, 20, 30];
arr.forEach((valor, index, array) => {
  console.log(`Valor: ${valor}, Próximo: ${array[index + 1] || 'nenhum'}`);
});
// Output:
// Valor: 10, Próximo: 20
// Valor: 20, Próximo: 30
// Valor: 30, Próximo: nenhum

// Modificar elementos externo (não recomendado)
const items = [1, 2, 3];
const quadrados = [];
items.forEach(item => {
  quadrados.push(item * item);
});
console.log(quadrados); // [ 1, 4, 9 ]

// forEach não pode ser interrompido com break
const arr2 = [1, 2, 3, 4, 5];
arr2.forEach(n => {
  if (n === 3) {
    // não funciona: break;
    // use return para pular para próxima iteração
  }
});
```

### .includes()

Verifica se um array contém um elemento específico. Retorna `true` ou `false`. Diferente de `indexOf()`, funciona bem com `NaN`.

```javascript
const numeros = [1, 2, 3, 4, 5];

// Verificar se contém um número
console.log(numeros.includes(3)); // true
console.log(numeros.includes(10)); // false

const frutas = ['maçã', 'banana', 'laranja'];

// Verificar se contém uma string
console.log(frutas.includes('banana')); // true
console.log(frutas.includes('uva')); // false

// A partir de um índice específico
console.log(numeros.includes(2, 2)); // false (procura de índice 2 em diante)
console.log(numeros.includes(3, 2)); // true

// Com NaN (includes funciona, indexOf não)
const arr = [1, 2, NaN, 4];
console.log(arr.includes(NaN)); // true
console.log(arr.indexOf(NaN)); // -1

// Com objetos (verifica referência)
const pessoa = { nome: 'Ana' };
const pessoas = [pessoa];
console.log(pessoas.includes(pessoa)); // true
console.log(pessoas.includes({ nome: 'Ana' })); // false (objeto diferente)
```

### .indexOf()

Retorna o primeiro índice em que um elemento específico é encontrado. Retorna `-1` se o elemento não existir.

```javascript
const numeros = [10, 20, 30, 40, 30, 50];

// Encontrar índice do primeiro 30
console.log(numeros.indexOf(30)); // 2

// Elemento não encontrado
console.log(numeros.indexOf(100)); // -1

// A partir de um índice específico
console.log(numeros.indexOf(30, 3)); // 4 (continua procurando a partir do índice 3)

const letras = ['a', 'b', 'c', 'a'];

// Primeira ocorrência de 'a'
console.log(letras.indexOf('a')); // 0

// Verificar se existe
if (letras.indexOf('b') !== -1) {
  console.log('Encontrou b'); // Será executado
}

// Com índices negativos no startIndex
const arr = [1, 2, 3, 2, 1];
console.log(arr.indexOf(2, -3)); // 3 (procura do índice 2 em diante)
```

### .join()

Junta todos os elementos do array em uma string, usando um separador opcional (padrão é vírgula). Não modifica o array original.

```javascript
const numeros = [1, 2, 3, 4, 5];

// Separador padrão (vírgula)
console.log(numeros.join()); // '1,2,3,4,5'

// Separador customizado
console.log(numeros.join('-')); // '1-2-3-4-5'
console.log(numeros.join(' ')); // '1 2 3 4 5'

// Sem separador
console.log(numeros.join('')); // '12345'

const palavras = ['Olá', 'mundo', 'JavaScript'];

// Criar frase
console.log(palavras.join(' ')); // 'Olá mundo JavaScript'

// Criar URL
const urlParts = ['https', 'example', 'com'];
console.log(urlParts.join('://')); // 'https://example.com'

// Com valores mistos (convertidos para string)
const misto = [1, 'a', null, undefined, true];
console.log(misto.join(' | ')); // '1 | a |  | true'

// Array vazio
console.log([].join(',')); // ''
```

### .keys()

Retorna um iterador com os índices do array.

```javascript
const arr = ['a', 'b', 'c'];

// Usar com for...of
for (const key of arr.keys()) {
  console.log(key);
}
// Output: 0 1 2

// Converter para array
console.log(Array.from(arr.keys())); // [ 0, 1, 2 ]

// Destructuring
const iterator = arr.keys();
console.log(iterator.next().value); // 0
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // undefined

// Array com buracos
const arr2 = [1, , 3];
for (const key of arr2.keys()) {
  console.log(key);
}
// Output: 0 1 2 (inclui índice do buraco)
```

### .lastIndexOf()

Retorna o último índice em que um elemento específico é encontrado. Procura do final para o início. Retorna `-1` se não encontrar.

```javascript
const numeros = [1, 2, 3, 2, 1];

// Último índice do valor 2
console.log(numeros.lastIndexOf(2)); // 3

// Último índice do valor 1
console.log(numeros.lastIndexOf(1)); // 4

// Não encontrado
console.log(numeros.lastIndexOf(10)); // -1

// A partir de um índice específico (procura para trás)
const arr = [1, 2, 3, 2, 1];
console.log(arr.lastIndexOf(2, 2)); // 1 (procura do índice 2 para trás)

const letras = ['a', 'b', 'c', 'b', 'a'];

// Última ocorrência de 'b'
console.log(letras.lastIndexOf('b')); // 3

// Remover última ocorrência
const index = letras.lastIndexOf('b');
if (index !== -1) {
  letras.splice(index, 1);
  console.log(letras); // [ 'a', 'b', 'c', 'a' ]
}
```

### .map()

Cria um novo array com os resultados de uma função aplicada a cada elemento. Não modifica o array original.

```javascript
const numeros = [1, 2, 3, 4, 5];

// Multiplicar por 2
const dobrados = numeros.map(n => n * 2);
console.log(dobrados); // [ 2, 4, 6, 8, 10 ]

// Converter para string
const strings = numeros.map(n => n.toString());
console.log(strings); // [ '1', '2', '3', '4', '5' ]

// Elevar ao quadrado
const quadrados = numeros.map(n => n ** 2);
console.log(quadrados); // [ 1, 4, 9, 16, 25 ]

const usuarios = [
  { id: 1, nome: 'Ana' },
  { id: 2, nome: 'Bruno' },
  { id: 3, nome: 'Carlos' }
];

// Extrair apenas os nomes
const nomes = usuarios.map(u => u.nome);
console.log(nomes); // [ 'Ana', 'Bruno', 'Carlos' ]

// Com índice e array
const resultado = numeros.map((valor, index) => `${index}: ${valor}`);
console.log(resultado); // [ '0: 1', '1: 2', '2: 3', '3: 4', '4: 5' ]

// Usar função externa
function dobro(n) {
  return n * 2;
}
console.log(numeros.map(dobro)); // [ 2, 4, 6, 8, 10 ]
```

### .pop()

Remove e retorna o último elemento do array. Retorna `undefined` se o array estiver vazio. **Muda o array original**.

```javascript
const arr1 = [1, 2, 3, 4, 5];

// Remover último elemento
const removido = arr1.pop();
console.log(removido); // 5
console.log(arr1); // [ 1, 2, 3, 4 ]

// Pop em array vazio
const arr2 = [];
console.log(arr2.pop()); // undefined
console.log(arr2); // []

// Usar em loop
const numeros = [1, 2, 3];
while (numeros.length > 0) {
  console.log(numeros.pop());
}
// Output: 3 2 1
// numeros agora é []

// Alternativa não-destrutiva: .at(-1) ou [arr.length - 1]
const arr3 = [1, 2, 3];
console.log(arr3.at(-1)); // 3
console.log(arr3); // [ 1, 2, 3 ] - não muda
```

### .push()

Adiciona um ou mais elementos ao final do array e retorna o novo comprimento. **Muda o array original**.

```javascript
const arr1 = [1, 2, 3];

// Adicionar um elemento
const novoTamanho = arr1.push(4);
console.log(arr1); // [ 1, 2, 3, 4 ]
console.log(novoTamanho); // 4

// Adicionar múltiplos elementos
arr1.push(5, 6, 7);
console.log(arr1); // [ 1, 2, 3, 4, 5, 6, 7 ]

// Adicionar de diferentes tipos
const misto = ['a'];
misto.push(1, true, null);
console.log(misto); // [ 'a', 1, true, null ]

// Adicionar um array (não desaninha)
const arr2 = [1, 2];
arr2.push([3, 4]);
console.log(arr2); // [ 1, 2, [ 3, 4 ] ]

// Alternativa com spread operator (não destrutivo)
const arr3 = [1, 2];
const novo = [...arr3, 3, 4];
console.log(novo); // [ 1, 2, 3, 4 ]
console.log(arr3); // [ 1, 2 ]
```

### .reduce()

Reduz o array a um único valor, aplicando uma função acumuladora da esquerda para a direita. Muito usado para somas, contagens, agrupamentos, etc.

```javascript
const numeros = [1, 2, 3, 4, 5];

// Somar todos os números
const soma = numeros.reduce((acc, num) => acc + num, 0);
console.log(soma); // 15

// Sem valor inicial (usa primeiro elemento)
const soma2 = numeros.reduce((acc, num) => acc + num);
console.log(soma2); // 15

// Multiplicar
const produto = numeros.reduce((acc, num) => acc * num, 1);
console.log(produto); // 120

// Contar ocorrências
const palavras = ['maçã', 'banana', 'maçã', 'laranja', 'maçã'];
const contagem = palavras.reduce((acc, palavra) => {
  acc[palavra] = (acc[palavra] || 0) + 1;
  return acc;
}, {});
console.log(contagem); // { maçã: 3, banana: 1, laranja: 1 }

// Agrupar por propriedade
const usuarios = [
  { nome: 'Ana', cidade: 'São Paulo' },
  { nome: 'Bruno', cidade: 'Rio de Janeiro' },
  { nome: 'Carlos', cidade: 'São Paulo' }
];

const porCidade = usuarios.reduce((acc, user) => {
  const cidade = user.cidade;
  if (!acc[cidade]) acc[cidade] = [];
  acc[cidade].push(user.nome);
  return acc;
}, {});

console.log(porCidade);
// {
//   'São Paulo': [ 'Ana', 'Carlos' ],
//   'Rio de Janeiro': [ 'Bruno' ]
// }

// Com índice
const resultado = numeros.reduce((acc, num, index) => {
  return acc + num + index;
}, 0);
console.log(resultado); // 15 (soma) + 0+1+2+3+4 (índices) = 25
```

### .reduceRight()

Reduz o array a um único valor, aplicando uma função acumuladora da direita para a esquerda. Similar a `.reduce()`, mas começa do final.

```javascript
const numeros = [1, 2, 3, 4];

// Reduzir da direita para esquerda
const resultado = numeros.reduceRight((acc, num) => acc + num, 0);
console.log(resultado); // 10 (4 + 3 + 2 + 1)

// Construir string de trás para frente
const letras = ['a', 'b', 'c'];
const reversa = letras.reduceRight((acc, letra) => acc + letra, '');
console.log(reversa); // 'cba'

// Sem valor inicial
const nums = [10, 20, 30];
const reduzido = nums.reduceRight((acc, num) => acc - num);
console.log(reduzido); // 0 (30 - 20 - 10)

// Comparação: reduce vs reduceRight
const arr = [1, 2, 3];
console.log(arr.reduce((a, b) => a - b)); // (1 - 2) - 3 = -4
console.log(arr.reduceRight((a, b) => a - b)); // (3 - 2) - 1 = 0
```

### .reverse()

Inverte a ordem dos elementos no array. **Muda o array original**. Retorna referência ao array modificado.

```javascript
const arr1 = [1, 2, 3, 4, 5];

// Invertê a ordem
arr1.reverse();
console.log(arr1); // [ 5, 4, 3, 2, 1 ]

const letras = ['a', 'b', 'c'];

// Reverse retorna o array modificado
const resultado = letras.reverse();
console.log(resultado); // [ 'c', 'b', 'a' ]
console.log(letras); // [ 'c', 'b', 'a' ] - mesmo array

// Verificar se é palíndromo
const palavra = 'radar'.split('');
console.log(palavra.join('') === palavra.reverse().join('')); // true

// Alternativa não-destrutiva: usar spread ou toReversed()
const arr2 = [1, 2, 3];
const invertido = [...arr2].reverse();
console.log(invertido); // [ 3, 2, 1 ]
console.log(arr2); // [ 1, 2, 3 ] - original não muda

// Usando toReversed() (não modifica original)
const arr3 = [1, 2, 3];
const novo = arr3.toReversed();
console.log(novo); // [ 3, 2, 1 ]
console.log(arr3); // [ 1, 2, 3 ]
```

### .shift()

Remove e retorna o primeiro elemento do array. Retorna `undefined` se o array estiver vazio. **Muda o array original**.

```javascript
const arr1 = [1, 2, 3, 4, 5];

// Remover primeiro elemento
const primeiro = arr1.shift();
console.log(primeiro); // 1
console.log(arr1); // [ 2, 3, 4, 5 ]

// Shift em array vazio
const arr2 = [];
console.log(arr2.shift()); // undefined

// Usar em loop (processar fila)
const fila = ['Ana', 'Bruno', 'Carlos'];
while (fila.length > 0) {
  console.log(fila.shift()); // Ana, Bruno, Carlos
}
console.log(fila); // []

// Alternativa não-destrutiva
const arr3 = [1, 2, 3];
console.log(arr3[0]); // 1
console.log(arr3); // [ 1, 2, 3 ] - não muda

// Para obter sem modificar
const arr4 = [1, 2, 3];
const slice = arr4.slice(1);
console.log(slice); // [ 2, 3 ]
console.log(arr4); // [ 1, 2, 3 ]
```

### .slice()

Retorna uma cópia superficial de uma porção do array, definida por índices de início e fim. Não modifica o array original.

```javascript
const arr = [1, 2, 3, 4, 5];

// Cópia do array inteiro
console.log(arr.slice()); // [ 1, 2, 3, 4, 5 ]

// Do índice 2 até o final
console.log(arr.slice(2)); // [ 3, 4, 5 ]

// Do índice 1 ao 3 (3 é exclusivo)
console.log(arr.slice(1, 3)); // [ 2, 3 ]

// Índices negativos
console.log(arr.slice(-2)); // [ 4, 5 ] (últimos 2 elementos)
console.log(arr.slice(-3, -1)); // [ 3, 4 ]

// Array original não muda
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// Copiar um array (shallow copy)
const original = [1, 2, 3];
const copia = original.slice();
copia[0] = 999;
console.log(original); // [ 1, 2, 3 ]
console.log(copia); // [ 999, 2, 3 ]

// Com strings
const letras = ['a', 'b', 'c', 'd'];
console.log(letras.slice(1, 3)); // [ 'b', 'c' ]
```

### .some()

Verifica se pelo menos um elemento do array satisfaz uma condição especificada. Retorna `true` ou `false`.

```javascript
const numeros = [1, 2, 3, 4, 5];

// Verificar se tem algum número par
console.log(numeros.some(n => n % 2 === 0)); // true

// Verificar se tem algum número maior que 10
console.log(numeros.some(n => n > 10)); // false

// Verificar se tem algum número negativo
console.log(numeros.some(n => n < 0)); // false

const usuarios = [
  { nome: 'Ana', ativo: false },
  { nome: 'Bruno', ativo: true },
  { nome: 'Carlos', ativo: false }
];

// Verificar se algum usuário está ativo
console.log(usuarios.some(u => u.ativo)); // true

// Verificar se algum nome começa com 'B'
console.log(usuarios.some(u => u.nome.startsWith('B'))); // true

// Diferença: some vs every
const arr = [2, 4, 6, 8];
console.log(arr.some(n => n % 2 === 0)); // true (alguns são pares)
console.log(arr.every(n => n % 2 === 0)); // true (todos são pares)

const arr2 = [2, 4, 5, 8];
console.log(arr2.some(n => n % 2 === 0)); // true (alguns são pares)
console.log(arr2.every(n => n % 2 === 0)); // false (nem todos são pares)
```

### .sort()

Ordena os elementos do array com base em uma função de comparação opcional. Por padrão, converte para string e ordena lexicograficamente. **Muda o array original**.

```javascript
const numeros = [3, 1, 4, 1, 5];

// Ordenação padrão (lexicográfica)
numeros.sort();
console.log(numeros); // [ 1, 1, 3, 4, 5 ]

// Ordenação numérica (crescente)
const nums = [30, 10, 20, 5];
nums.sort((a, b) => a - b);
console.log(nums); // [ 5, 10, 20, 30 ]

// Ordenação numérica (decrescente)
const nums2 = [30, 10, 20, 5];
nums2.sort((a, b) => b - a);
console.log(nums2); // [ 30, 20, 10, 5 ]

// Ordenar strings
const letras = ['d', 'a', 'c', 'b'];
letras.sort();
console.log(letras); // [ 'a', 'b', 'c', 'd' ]

// Ordenar objetos
const usuarios = [
  { nome: 'Carlos', idade: 30 },
  { nome: 'Ana', idade: 25 },
  { nome: 'Bruno', idade: 28 }
];

// Por idade
usuarios.sort((a, b) => a.idade - b.idade);
console.log(usuarios);
// [ { nome: 'Ana', idade: 25 }, { nome: 'Bruno', idade: 28 }, { nome: 'Carlos', idade: 30 } ]

// Alfabeticamente por nome
usuarios.sort((a, b) => a.nome.localeCompare(b.nome));
console.log(usuarios);
// [ { nome: 'Ana', ... }, { nome: 'Bruno', ... }, { nome: 'Carlos', ... } ]

// Alternativa não-destrutiva: usar toSorted()
const arr = [3, 1, 2];
const ordenado = arr.toSorted((a, b) => a - b);
console.log(ordenado); // [ 1, 2, 3 ]
console.log(arr); // [ 3, 1, 2 ]
```

### .splice()

Adiciona ou remove elementos do array em uma posição específica. Retorna um array com os elementos removidos. **Muda o array original**.

```javascript
const arr1 = [1, 2, 3, 4, 5];

// Remover 2 elementos a partir do índice 2
const removidos = arr1.splice(2, 2);
console.log(removidos); // [ 3, 4 ]
console.log(arr1); // [ 1, 2, 5 ]

// Inserir elementos sem remover
const arr2 = [1, 2, 5];
arr2.splice(2, 0, 3, 4);
console.log(arr2); // [ 1, 2, 3, 4, 5 ]

// Remover e inserir ao mesmo tempo
const arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 2, 'a', 'b');
console.log(arr3); // [ 1, 'a', 'b', 4, 5 ]

// Remover do final
const arr4 = [1, 2, 3, 4, 5];
arr4.splice(-2, 1);
console.log(arr4); // [ 1, 2, 3, 5 ]

// Remover todos a partir de um índice
const arr5 = [1, 2, 3, 4, 5];
arr5.splice(2);
console.log(arr5); // [ 1, 2 ]

// Alternativa não-destrutiva: usar toSpliced()
const arr6 = [1, 2, 3, 4, 5];
const novo = arr6.toSpliced(1, 2, 'a', 'b');
console.log(novo); // [ 1, 'a', 'b', 4, 5 ]
console.log(arr6); // [ 1, 2, 3, 4, 5 ]
```

### .toLocaleString()

Retorna uma string representando os elementos do array, ajustada à localidade (formato local do navegador/sistema).

```javascript
const numeros = [1000, 2000.50, 3000];

// Formato padrão da localidade
console.log(numeros.toLocaleString()); 
// Pode mostrar: "1,000, 2,000.5, 3,000" (em en-US)

// Especificar localidade
console.log(numeros.toLocaleString('pt-BR'));
// Pode mostrar: "1.000, 2.000,5, 3.000"

// Com datas
const datas = [new Date(2024, 0, 15), new Date(2024, 11, 25)];
console.log(datas.toLocaleString('pt-BR'));

// Com moeda
const preco = [10.50, 20.00, 30.99];
console.log(preco.toLocaleString('pt-BR', { 
  style: 'currency', 
  currency: 'BRL' 
}));

// Com objetos (converte para string dos objetos)
const pessoas = [
  { nome: 'Ana', toString() { return `Pessoa(${this.nome})`; } },
  { nome: 'Bruno', toString() { return `Pessoa(${this.nome})`; } }
];
console.log(pessoas.toLocaleString()); // Pessoa(Ana), Pessoa(Bruno)
```

### .toReversed()

Retorna um novo array com os elementos na ordem inversa, sem modificar o original. Versão não-destrutiva de `.reverse()`.

```javascript
const arr1 = [1, 2, 3, 4, 5];

// Criar novo array invertido
const invertido = arr1.toReversed();
console.log(invertido); // [ 5, 4, 3, 2, 1 ]
console.log(arr1); // [ 1, 2, 3, 4, 5 ] - original não muda

// Encadear com outros métodos
const numeros = [1, 2, 3, 4, 5];
const resultado = numeros
  .toReversed()
  .map(n => n * 2)
  .filter(n => n > 4);

console.log(resultado); // [ 10, 8, 6 ]
console.log(numeros); // [ 1, 2, 3, 4, 5 ] - não muda

// Com strings
const letras = ['a', 'b', 'c'];
console.log(letras.toReversed()); // [ 'c', 'b', 'a' ]
console.log(letras); // [ 'a', 'b', 'c' ]
```

### .toSorted()

Retorna um novo array com os elementos ordenados, sem modificar o original. Versão não-destrutiva de `.sort()`.

```javascript
const numeros = [3, 1, 4, 1, 5, 9];

// Criar novo array ordenado
const ordenado = numeros.toSorted((a, b) => a - b);
console.log(ordenado); // [ 1, 1, 3, 4, 5, 9 ]
console.log(numeros); // [ 3, 1, 4, 1, 5, 9 ] - original não muda

// Decrescente
const decrescente = numeros.toSorted((a, b) => b - a);
console.log(decrescente); // [ 9, 5, 4, 3, 1, 1 ]

// Encadear com outros métodos
const resultado = numeros
  .toSorted()
  .map(n => n * 2);

console.log(resultado); // [ 2, 2, 6, 8, 10, 18 ]

// Com objetos
const usuarios = [
  { nome: 'Carlos', idade: 30 },
  { nome: 'Ana', idade: 25 },
  { nome: 'Bruno', idade: 28 }
];

const ordenado2 = usuarios.toSorted((a, b) => a.idade - b.idade);
console.log(ordenado2);
// [ { nome: 'Ana', idade: 25 }, { nome: 'Bruno', idade: 28 }, { nome: 'Carlos', idade: 30 } ]
console.log(usuarios); // Original não muda
```

### .toSpliced()

Retorna um novo array com elementos adicionados ou removidos em uma posição específica, sem modificar o original. Versão não-destrutiva de `.splice()`.

```javascript
const arr1 = [1, 2, 3, 4, 5];

// Remover 2 elementos a partir do índice 2
const novo1 = arr1.toSpliced(2, 2);
console.log(novo1); // [ 1, 2, 5 ]
console.log(arr1); // [ 1, 2, 3, 4, 5 ] - original não muda

// Inserir elementos sem remover
const novo2 = arr1.toSpliced(2, 0, 'a', 'b');
console.log(novo2); // [ 1, 2, 'a', 'b', 3, 4, 5 ]
console.log(arr1); // [ 1, 2, 3, 4, 5 ]

// Remover e inserir ao mesmo tempo
const novo3 = arr1.toSpliced(1, 2, 'x', 'y');
console.log(novo3); // [ 1, 'x', 'y', 4, 5 ]
console.log(arr1); // [ 1, 2, 3, 4, 5 ]

// Encadear com outros métodos
const resultado = arr1
  .toSpliced(2, 1)
  .map(n => n * 2);

console.log(resultado); // [ 2, 4, 8, 10 ]
console.log(arr1); // [ 1, 2, 3, 4, 5 ]
```

### .toString()

Retorna uma string representando o array e seus elementos, separados por vírgula.

```javascript
const numeros = [1, 2, 3, 4, 5];

// Converter array para string
console.log(numeros.toString()); // '1,2,3,4,5'

// Equivalente a .join(',')
console.log(numeros.toString() === numeros.join(',')); // true

// Com strings
const letras = ['a', 'b', 'c'];
console.log(letras.toString()); // 'a,b,c'

// Com tipos mistos
const misto = [1, 'a', true, null, undefined];
console.log(misto.toString()); // '1,a,true,,'

// Com arrays aninhados
const aninhado = [1, [2, 3], [4, [5]]];
console.log(aninhado.toString()); // '1,2,3,4,5'

// Com objetos
const pessoas = [
  { nome: 'Ana', toString() { return `Pessoa(${this.nome})`; } },
  { nome: 'Bruno', toString() { return `Pessoa(${this.nome})`; } }
];
console.log(pessoas.toString()); // Pessoa(Ana),Pessoa(Bruno)
```

### .unshift()

Adiciona um ou mais elementos ao início do array e retorna o novo comprimento. **Muda o array original**.

```javascript
const arr1 = [2, 3, 4];

// Adicionar um elemento
const novoTamanho = arr1.unshift(1);
console.log(arr1); // [ 1, 2, 3, 4 ]
console.log(novoTamanho); // 4

// Adicionar múltiplos elementos
arr1.unshift(-1, 0);
console.log(arr1); // [ -1, 0, 1, 2, 3, 4 ]

// Com tipos mistos
const misto = ['b', 'c'];
misto.unshift('a', 1, true);
console.log(misto); // [ 'a', 1, true, 'b', 'c' ]

// Adicionar array (não desaninha)
const arr2 = [2, 3];
arr2.unshift([1]);
console.log(arr2); // [ [ 1 ], 2, 3 ]

// Alternativa não-destrutiva (spread operator)
const arr3 = [2, 3];
const novo = [1, ...arr3];
console.log(novo); // [ 1, 2, 3 ]
console.log(arr3); // [ 2, 3 ]
```

### .values()

Retorna um iterador com os valores dos elementos do array.

```javascript
const arr = ['a', 'b', 'c'];

// Usar com for...of
for (const value of arr.values()) {
  console.log(value);
}
// Output: 'a' 'b' 'c'

// Converter para array
console.log(Array.from(arr.values())); // [ 'a', 'b', 'c' ]

// Destructuring
const iterator = arr.values();
console.log(iterator.next().value); // 'a'
console.log(iterator.next().value); // 'b'
console.log(iterator.next().value); // 'c'
console.log(iterator.next().value); // undefined

// Array com buracos
const arr2 = [1, , 3];
for (const value of arr2.values()) {
  console.log(value);
}
// Output: 1 undefined 3
```

### .with()

Retorna um novo array com um elemento substituído em um índice específico, sem modificar o original. Versão não-destrutiva de `arr[index] = valor`.

```javascript
const arr1 = [1, 2, 3, 4, 5];

// Substituir elemento no índice 2
const novo1 = arr1.with(2, 30);
console.log(novo1); // [ 1, 2, 30, 4, 5 ]
console.log(arr1); // [ 1, 2, 3, 4, 5 ] - original não muda

// Usar índices negativos
const novo2 = arr1.with(-1, 50); // Substituir último elemento
console.log(novo2); // [ 1, 2, 3, 4, 50 ]
console.log(arr1); // [ 1, 2, 3, 4, 5 ]

// Encadear com outros métodos
const resultado = arr1
  .with(0, 10)
  .with(1, 20)
  .map(n => n * 2);

console.log(resultado); // [ 20, 40, 6, 8, 10 ]
console.log(arr1); // [ 1, 2, 3, 4, 5 ]

// Com strings
const letras = ['a', 'b', 'c'];
const novo3 = letras.with(1, 'x');
console.log(novo3); // [ 'a', 'x', 'c' ]
console.log(letras); // [ 'a', 'b', 'c' ]
```

### [@@iterator]()

Retorna um iterador dos valores do array (equivalente a `.values()`). É o iterador padrão para arrays.

```javascript
const arr = [1, 2, 3];

// Usar com for...of (usa @@iterator implicitamente)
for (const valor of arr) {
  console.log(valor);
}
// Output: 1 2 3

// Acessar @@iterator explicitamente
const iterator = arr[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// Spread operator usa @@iterator
const arr2 = [1, 2, 3];
const copia = [...arr2];
console.log(copia); // [ 1, 2, 3 ]

// Destructuring usa @@iterator
const [a, b, c] = arr2;
console.log(a, b, c); // 1 2 3
```

---

## Propriedades de Instância

### .length

Retorna ou define o número de elementos no array. É uma propriedade dinâmica que se atualiza quando elementos são adicionados ou removidos.

```javascript
const arr = [1, 2, 3];

// Obter tamanho
console.log(arr.length); // 3

// Definir tamanho (remove elementos se reduzir)
arr.length = 5;
console.log(arr); // [ 1, 2, 3, <2 empty items> ]

// Truncar array
const arr2 = [1, 2, 3, 4, 5];
arr2.length = 2;
console.log(arr2); // [ 1, 2 ]

// Limpar array
const arr3 = [1, 2, 3];
arr3.length = 0;
console.log(arr3); // []

// Loop usando length
const arr4 = ['a', 'b', 'c'];
for (let i = 0; i < arr4.length; i++) {
  console.log(arr4[i]);
}
// Output: 'a' 'b' 'c'

// Verificar se array está vazio
const arr5 = [];
console.log(arr5.length === 0); // true
console.log(arr5.length > 0); // false
```

### [@@unscopables]

Um objeto que lista propriedades que não devem ser expostas em blocos `with`. Raro usar, mas importante entender.

```javascript
// @@unscopables define quais propriedades não entram em escopo em blocos with
console.log(Array.prototype[Symbol.unscopables]);
// Retorna um objeto como:
// {
//   at: true,
//   copyWithin: true,
//   entries: true,
//   fill: true,
//   find: true,
//   findIndex: true,
//   findLast: true,
//   findLastIndex: true,
//   flat: true,
//   flatMap: true,
//   includes: true,
//   keys: true,
//   toReversed: true,
//   toSorted: true,
//   toSpliced: true,
//   values: true
// }

// Exemplo com bloco with (não recomendado usar with no código moderno)
const arr = [1, 2, 3];
with (arr) {
  // 'keys' não está disponível diretamente aqui
  // porque está em @@unscopables
  // console.log(keys); // Erro: keys is not defined
  console.log(length); // 3 (length não está em @@unscopables)
}
```

---

## Dicas Importantes

### Métodos que modificam o array original (Destrutivos)

Estes métodos alteram o array original: `.copyWithin()`, `.fill()`, `.pop()`, `.push()`, `.reverse()`, `.shift()`, `.sort()`, `.splice()`, `.unshift()`

### Métodos que não modificam o array original (Não-Destrutivos)

Estes métodos retornam um novo array: `.at()`, `.concat()`, `.entries()`, `.every()`, `.filter()`, `.find()`, `.findIndex()`, `.findLast()`, `.findLastIndex()`, `.flat()`, `.flatMap()`, `.forEach()`, `.keys()`, `.map()`, `.slice()`, `.some()`, `.toLocaleString()`, `.toReversed()`, `.toSorted()`, `.toSpliced()`, `.toString()`, `.values()`, `.with()`

### Escolher entre métodos similares

| Necessidade | Método | Nota |
|---|---|---|
| Remover do final | `.pop()` | Destrutivo |
| Remover do final (seguro) | `.slice(-1)[0]` ou `.at(-1)` | Não-destrutivo |
| Remover do início | `.shift()` | Destrutivo |
| Remover do início (seguro) | `.slice(1)` ou `.at(0)` | Não-destrutivo |
| Ordenar | `.sort()` | Destrutivo |
| Ordenar (seguro) | `.toSorted()` | Não-destrutivo |
| Inverter | `.reverse()` | Destrutivo |
| Inverter (seguro) | `.toReversed()` | Não-destrutivo |
| Adicionar/remover | `.splice()` | Destrutivo |
| Adicionar/remover (seguro) | `.toSpliced()` | Não-destrutivo |

### Métodos úteis para casos comuns

```javascript
// Soma de valores
const nums = [1, 2, 3];
const soma = nums.reduce((acc, n) => acc + n, 0); // 6

// Média
const media = soma / nums.length; // 2

// Máximo
const maximo = Math.max(...nums); // 3

// Mínimo
const minimo = Math.min(...nums); // 1

// Verificar se todos satisfazem
const todosMaioresQueZero = nums.every(n => n > 0); // true

// Verificar se algum satisfaz
const algumPar = nums.some(n => n % 2 === 0); // true

// Filtrar e contar
const parCount = nums.filter(n => n % 2 === 0).length; // 1

// Encontrar primeira ocorrência
const primeiro = nums.find(n => n > 2); // 3

// Encontrar índice
const index = nums.findIndex(n => n > 2); // 2
```
