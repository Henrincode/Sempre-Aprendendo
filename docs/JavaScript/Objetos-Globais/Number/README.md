# Objeto Number em JavaScript

### Construtor

#### Number() constructor
Cria um novo objeto `Number` ou retorna um valor numérico primitivo quando chamado como função.

---

### Métodos Estáticos

#### .isFinite()
Verifica se um valor é um número finito, retornando `true` se for finito e `false` caso contrário.

#### .isInteger()
Verifica se um valor é um número inteiro, retornando `true` se for inteiro e `false` caso contrário.

#### .isNaN()
Verifica se um valor é `NaN`, retornando `true` se for `NaN` e `false` caso contrário.

#### .isSafeInteger()
Verifica se um valor é um inteiro seguro (dentro dos limites de representação precisa em JavaScript), retornando `true` se for seguro e `false` caso contrário.

#### .parseFloat()
Converte uma string em um número de ponto flutuante.

#### .parseInt()
Converte uma string em um número inteiro, aceitando um argumento opcional para a base numérica.

---

### Propriedades Estáticas

#### .EPSILON
Representa a diferença entre 1 e o menor valor maior que 1 que pode ser representado como um `Number`.

#### .MAX_SAFE_INTEGER
Representa o maior inteiro seguro que pode ser representado com precisão em JavaScript (`2^53 - 1`).

#### .MAX_VALUE
Representa o maior valor numérico representável em JavaScript.

#### .MIN_SAFE_INTEGER
Representa o menor inteiro seguro que pode ser representado com precisão em JavaScript (`-(2^53 - 1)`).

#### .MIN_VALUE
Representa o menor valor positivo representável em JavaScript (próximo de zero, mas não zero).

#### .NaN
Representa o valor "Not-a-Number" (não é um número).

#### .NEGATIVE_INFINITY
Representa o valor infinito negativo (`-Infinity`).

#### .POSITIVE_INFINITY
Representa o valor infinito positivo (`Infinity`).

---

### Métodos de Instância

#### .toExponential()
Retorna uma string representando o número em notação exponencial, com um número opcional de dígitos após o ponto decimal.

#### .toFixed()
Retorna uma string representando o número com um número fixo de dígitos após o ponto decimal.

#### .toLocaleString()
Retorna uma string representando o número ajustada à localidade especificada.

#### .toPrecision()
Retorna uma string representando o número com um número total especificado de dígitos significativos.

#### .toString()
Retorna uma string representando o número em uma base especificada (padrão é base 10).

#### .valueOf()
Retorna o valor primitivo do objeto `Number`.