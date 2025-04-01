# Objeto Number em JavaScript

### Construtor

#### Number() constructor

Cria um novo objeto `Number`.

---

### Métodos Estáticos

#### .isFinite()

Verifica se um valor é um número finito.

#### .isInteger()

Verifica se um valor é um número inteiro.

#### .isNaN()

Verifica se um valor é `NaN` (Not-a-Number).

#### .isSafeInteger()

Verifica se um valor é um inteiro seguro (dentro dos limites de precisão do JavaScript).

#### .parseFloat()

Converte uma string em um número de ponto flutuante.

#### .parseInt()

Converte uma string em um número inteiro, com opção de especificar a base.

---

### Propriedades Estáticas

#### .EPSILON

Representa a menor diferença entre 1 e o próximo valor representável maior que 1.

#### .MAX_SAFE_INTEGER

O maior inteiro seguro que pode ser representado com precisão (2⁵³ - 1).

#### .MAX_VALUE

O maior valor positivo representável em JavaScript.

#### .MIN_SAFE_INTEGER

O menor inteiro seguro que pode ser representado com precisão (-(2⁵³ - 1)).

#### .MIN_VALUE

O menor valor positivo representável em JavaScript.

#### .NaN

Representa o valor "Not-a-Number".

#### .NEGATIVE_INFINITY

Representa o valor negativo infinito.

#### .POSITIVE_INFINITY

Representa o valor positivo infinito.

---

### Métodos de Instância

#### .toExponential()

Retorna o número em notação exponencial como uma string.

#### .toFixed()

Retorna o número com um número fixo de casas decimais como uma string.

#### .toLocaleString()

Retorna o número formatado como uma string de acordo com a localidade especificada.

#### .toPrecision()

Retorna o número com uma precisão específica como uma string.

#### .toString()

Retorna o número como uma string, com opção de especificar a base (ex.: binário, hexadecimal).

#### .valueOf()

Retorna o valor primitivo do objeto `Number`.