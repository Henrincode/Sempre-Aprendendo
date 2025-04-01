# Objeto String em JavaScript

### Construtor

#### String() constructor
Cria um novo objeto `String`.

---

### Métodos Estáticos

#### .fromCharCode()
Retorna uma string criada a partir de uma sequência de valores de código de caracteres (Unicode).

#### .fromCodePoint()
Retorna uma string criada a partir de uma sequência de pontos de código Unicode.

#### .raw()
Retorna uma string bruta a partir de um objeto de modelo de string (template literal), sem processar os caracteres de escape.

---

### Métodos de Instância

#### .anchor() *(Obsoleto)*
Retorna uma string encapsulada em uma tag HTML `<a>` com o atributo `name`.

#### .at()
Retorna o caractere em um índice especificado (suporta índices negativos).

#### .big() *(Obsoleto)*
Retorna uma string encapsulada em uma tag HTML `<big>`.

#### .blink() *(Obsoleto)*
Retorna uma string encapsulada em uma tag HTML `<blink>`.

#### .bold() *(Obsoleto)*
Retorna uma string encapsulada em uma tag HTML `<b>`.

#### .charAt()
Retorna o caractere em um índice especificado.

#### .charCodeAt()
Retorna o valor numérico Unicode do caractere em um índice especificado.

#### .codePointAt()
Retorna o ponto de código Unicode do caractere em um índice especificado.

#### .concat()
Combina a string atual com uma ou mais strings, retornando uma nova string.

#### .endsWith()
Verifica se a string termina com uma substring especificada.

#### .fixed() *(Obsoleto)*
Retorna uma string encapsulada em uma tag HTML `<tt>`.

#### .fontcolor() *(Obsoleto)*
Retorna uma string encapsulada em uma tag HTML `<font>` com um atributo `color`.

#### .fontsize() *(Obsoleto)*
Retorna uma string encapsulada em uma tag HTML `<font>` com um atributo `size`.

#### .includes()
Verifica se a string contém uma substring especificada.

#### .indexOf()
Retorna o índice da primeira ocorrência de uma substring especificada, ou -1 se não encontrada.

#### .isWellFormed()
Verifica se a string é bem formada (sem pontos de código Unicode inválidos).

#### .italics() *(Obsoleto)*
Retorna uma string encapsulada em uma tag HTML `<i>`.

#### .lastIndexOf()
Retorna o índice da última ocorrência de uma substring especificada, ou -1 se não encontrada.

#### .link() *(Obsoleto)*
Retorna uma string encapsulada em uma tag HTML `<a>` com um atributo `href`.

#### .localeCompare()
Compara duas strings de acordo com a ordem de classificação da localidade atual.

#### .match()
Retorna um array com os resultados da correspondência de uma expressão regular na string.

#### .matchAll()
Retorna um iterador com todas as correspondências de uma expressão regular na string.

#### .normalize()
Retorna a forma normalizada Unicode da string.

#### .padEnd()
Preenche o final da string com um caractere especificado até atingir um comprimento desejado.

#### .padStart()
Preenche o início da string com um caractere especificado até atingir um comprimento desejado.

#### .repeat()
Retorna uma nova string com a string original repetida um número especificado de vezes.

#### .replace()
Substitui a primeira ocorrência de uma substring ou padrão por um novo valor.

#### .replaceAll()
Substitui todas as ocorrências de uma substring ou padrão por um novo valor.

#### .search()
Retorna o índice da primeira correspondência de uma expressão regular na string, ou -1 se não encontrada.

#### .slice()
Retorna uma substring da string com base em índices de início e fim.

#### .small() *(Obsoleto)*
Retorna uma string encapsulada em uma tag HTML `<small>`.

#### .split()
Divide a string em um array de substrings com base em um separador especificado.

#### .startsWith()
Verifica se a string começa com uma substring especificada.

#### .strike() *(Obsoleto)*
Retorna uma string encapsulada em uma tag HTML `<strike>`.

#### .sub() *(Obsoleto)*
Retorna uma string encapsulada em uma tag HTML `<sub>`.

#### .substr() *(Obsoleto)*
Retorna uma substring da string com base em um índice inicial e comprimento.

#### .substring()
Retorna uma substring da string com base em índices de início e fim.

#### .sup() *(Obsoleto)*
Retorna uma string encapsulada em uma tag HTML `<sup>`.

#### .toLocaleLowerCase()
Converte a string para letras minúsculas de acordo com a localidade atual.

#### .toLocaleUpperCase()
Converte a string para letras maiúsculas de acordo com a localidade atual.

#### .toLowerCase()
Converte a string para letras minúsculas.

#### .toString()
Retorna uma string representando o objeto.

#### .toUpperCase()
Converte a string para letras maiúsculas.

#### .toWellFormed()
Retorna uma versão bem formada da string, substituindo pontos de código inválidos por �.

#### .trim()
Remove espaços em branco do início e do fim da string.

#### .trimEnd()
Remove espaços em branco do final da string.

#### .trimStart()
Remove espaços em branco do início da string.

#### .valueOf()
Retorna o valor primitivo da string.

#### .\[@@iterator]()
Retorna um iterador dos caracteres da string.

---

### Propriedades de Instância

#### .length
Retorna o comprimento da string (número de caracteres).