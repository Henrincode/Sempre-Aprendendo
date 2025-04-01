# Objeto Object em JavaScript

### Construtor

#### Object() constructor
Cria um novo objeto `Object`.

---

### Métodos Estáticos

#### .assign()
Copia as propriedades enumeráveis de um ou mais objetos de origem para um objeto de destino.

#### .create()
Cria um novo objeto com o protótipo especificado e propriedades opcionais.

#### .defineProperties()
Define várias propriedades em um objeto, especificando seus descritores.

#### .defineProperty()
Define uma nova propriedade ou modifica uma existente em um objeto, com um descritor.

#### .entries()
Retorna um array de pares \[chave, valor] das propriedades enumeráveis do objeto.

#### .freeze()
Congela um objeto, impedindo que ele seja modificado.
**Muda o objeto original**

#### .fromEntries()
Cria um novo objeto a partir de um iterável de pares \[chave, valor].

#### .getOwnPropertyDescriptor()
Retorna o descritor de uma propriedade específica de um objeto.

#### .getOwnPropertyDescriptors()
Retorna todos os descritores de propriedades próprias de um objeto.

#### .getOwnPropertyNames()
Retorna um array com os nomes das propriedades próprias enumeráveis e não enumeráveis de um objeto.

#### .getOwnPropertySymbols()
Retorna um array com os símbolos usados como propriedades próprias de um objeto.

#### .getPrototypeOf()
Retorna o protótipo de um objeto especificado.

#### .groupBy()
Agrupa elementos de um iterável em um objeto com base em uma função de chaveamento.

#### .hasOwn()
Verifica se um objeto possui uma propriedade própria com a chave especificada.

#### .is()
Compara se dois valores são iguais, tratando `NaN` como igual a si mesmo.

#### .isExtensible()
Verifica se um objeto pode ter novas propriedades adicionadas.

#### .isFrozen()
Verifica se um objeto está congelado (imutável).

#### .isSealed()
Verifica se um objeto está selado (propriedades existentes não podem ser removidas).

#### .keys()
Retorna um array com os nomes das propriedades enumeráveis próprias de um objeto.

#### .preventExtensions()
Impede que novas propriedades sejam adicionadas a um objeto.
**Muda o objeto original**

#### .seal()
Sela um objeto, impedindo a adição ou remoção de propriedades, mas permitindo modificação de valores existentes.
**Muda o objeto original**

#### .setPrototypeOf()
Define o protótipo de um objeto especificado.

#### .values()
Retorna um array com os valores das propriedades enumeráveis próprias de um objeto.

---

### Métodos de Instância

#### .\__defineGetter__() *(Obsoleto)*
Associa uma função como getter de uma propriedade específica.

#### .\__defineSetter__() *(Obsoleto)*
Associa uma função como setter de uma propriedade específica.

#### .\__lookupGetter__() *(Obsoleto)*
Retorna a função getter associada a uma propriedade.

#### .\__lookupSetter__() *(Obsoleto)*
Retorna a função setter associada a uma propriedade.

#### .hasOwnProperty()
Verifica se o objeto possui uma propriedade própria com a chave especificada.

#### .isPrototypeOf()
Verifica se o objeto está na cadeia de protótipos de outro objeto.

#### .propertyIsEnumerable()
Verifica se uma propriedade é enumerável e própria do objeto.

#### .toLocaleString()
Retorna uma string representando o objeto, ajustada à localidade.

#### .toString()
Retorna uma string representando o objeto.

#### .valueOf()
Retorna o valor primitivo do objeto.

---

### Propriedades de Instância

#### .\__proto__ *(Obsoleto)*
Permite acessar ou definir o protótipo do objeto.

#### .constructor
Retorna a função construtora que criou a instância do objeto.