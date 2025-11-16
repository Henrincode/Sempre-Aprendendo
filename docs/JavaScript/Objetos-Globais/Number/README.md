# Objeto Number em JavaScript

O Number é um dos objetos fundamentais do JavaScript, representando números inteiros e de ponto flutuante. Diferente de muitas linguagens que possuem tipos inteiros e flutuantes separados, JavaScript usa apenas um tipo numérico baseado no padrão IEEE 754 de 64 bits. Existem métodos estáticos (que pertencem ao construtor Number) e propriedades estáticas que definem limites numéricos importantes.

---

## Construtor

### Number()

Cria um novo objeto `Number` ou retorna um valor numérico primitivo quando chamado como função. Existem várias formas de utilizar:

```javascript
// Número primitivo (sem new)
const num1 = Number(123);
console.log(num1); // 123
console.log(typeof num1); // 'number'

// Objeto Number (com new - raro)
const num2 = new Number(123);
console.log(num2); // [Number: 123]
console.log(typeof num2); // 'object'

// Conversão de string para número
const num3 = Number('456');
console.log(num3); // 456

// Conversão de boolean
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Conversão de null
console.log(Number(null)); // 0

// Conversão de undefined
console.log(Number(undefined)); // NaN

// String com espaços é convertida
console.log(Number('  789  ')); // 789

// String vazia retorna 0
console.log(Number('')); // 0

// String inválida retorna NaN
console.log(Number('abc')); // NaN

// Número diretamente
console.log(Number(3.14)); // 3.14

// Número em notação científica
console.log(Number('1e3')); // 1000
```

---

## Métodos Estáticos

Os métodos estáticos pertencem ao construtor `Number` e não requerem uma instância de number.

### Number.isFinite()

Verifica se um valor é um número finito. Diferente de `isFinite()` global, não faz coerção de tipo.

```javascript
// Números finitos
console.log(Number.isFinite(123)); // true
console.log(Number.isFinite(0)); // true
console.log(Number.isFinite(-456)); // true
console.log(Number.isFinite(3.14)); // true

// Infinito
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false

// NaN
console.log(Number.isFinite(NaN)); // false

// Sem coerção de tipo (diferente do isFinite global)
console.log(Number.isFinite('123')); // false (string não é convertida)
console.log(isFinite('123')); // true (isFinite global converte)

// Casos práticos
function validarValor(valor) {
  if (!Number.isFinite(valor)) {
    console.log('Valor inválido');
    return false;
  }
  return true;
}

console.log(validarValor(100)); // true
console.log(validarValor(Infinity)); // false

// Calcular média seguramente
function calcularMedia(valores) {
  const validos = valores.filter(v => Number.isFinite(v));
  if (validos.length === 0) return NaN;
  const soma = validos.reduce((a, b) => a + b, 0);
  return soma / validos.length;
}

console.log(calcularMedia([10, 20, 30])); // 20
console.log(calcularMedia([10, Infinity, 30])); // 20
```

### Number.isInteger()

Verifica se um valor é um número inteiro (sem parte decimal).

```javascript
// Números inteiros
console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(-100)); // true

// Números com decimais
console.log(Number.isInteger(3.14)); // false
console.log(Number.isInteger(1.0)); // true (1.0 é considerado inteiro)
console.log(Number.isInteger(0.5)); // false

// Valores especiais
console.log(Number.isInteger(NaN)); // false
console.log(Number.isInteger(Infinity)); // false

// Sem coerção de tipo
console.log(Number.isInteger('42')); // false (string não é convertida)
console.log(Number.isInteger(true)); // false

// Casos práticos
function ehInteiro(valor) {
  return Number.isInteger(valor) && valor > 0;
}

console.log(ehInteiro(5)); // true
console.log(ehInteiro(5.5)); // false

// Validar quantidade
function validarQuantidade(qtd) {
  if (!Number.isInteger(qtd) || qtd <= 0) {
    throw new Error('Quantidade deve ser um inteiro positivo');
  }
  return true;
}

console.log(validarQuantidade(10)); // true

// Filtrar apenas inteiros
const numeros = [1, 2.5, 3, 4.7, 5];
const inteiros = numeros.filter(n => Number.isInteger(n));
console.log(inteiros); // [ 1, 3, 5 ]
```

### Number.isNaN()

Verifica se um valor é `NaN`. Diferente do operador `isNaN()` global, não faz coerção de tipo.

```javascript
// NaN
console.log(Number.isNaN(NaN)); // true

// Números normais
console.log(Number.isNaN(0)); // false
console.log(Number.isNaN(42)); // false

// Sem coerção de tipo (diferente do isNaN global)
console.log(Number.isNaN('abc')); // false (string não é convertida)
console.log(isNaN('abc')); // true (isNaN global converte e resulta em NaN)

console.log(Number.isNaN(undefined)); // false
console.log(isNaN(undefined)); // true

// Resultado de operações inválidas
console.log(Number.isNaN(0 / 0)); // true
console.log(Number.isNaN(Math.sqrt(-1))); // true

// Casos práticos
function calcularRaiz(num) {
  const resultado = Math.sqrt(num);
  if (Number.isNaN(resultado)) {
    console.log('Não é possível calcular raiz de número negativo');
    return null;
  }
  return resultado;
}

console.log(calcularRaiz(16)); // 4
console.log(calcularRaiz(-1)); // null

// Validar resultado de parsing
function parseNumero(str) {
  const num = parseFloat(str);
  if (Number.isNaN(num)) {
    return null;
  }
  return num;
}

console.log(parseNumero('3.14')); // 3.14
console.log(parseNumero('abc')); // null

// Comparação: isNaN vs Number.isNaN
const valor = 'não é número';
console.log(isNaN(valor)); // true (converte para NaN)
console.log(Number.isNaN(valor)); // false (não converte)
```

### Number.isSafeInteger()

Verifica se um valor é um inteiro seguro (dentro dos limites de representação precisa: -2^53 + 1 a 2^53 - 1).

```javascript
// Inteiros seguros
console.log(Number.isSafeInteger(42)); // true
console.log(Number.isSafeInteger(0)); // true
console.log(Number.isSafeInteger(-100)); // true

// Máximo inteiro seguro
console.log(Number.isSafeInteger(9007199254740991)); // true (2^53 - 1)
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true

// Mínimo inteiro seguro
console.log(Number.isSafeInteger(-9007199254740991)); // true
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER)); // true

// Além do limite seguro (perda de precisão)
console.log(Number.isSafeInteger(9007199254740992)); // false
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false

// Números com decimais
console.log(Number.isSafeInteger(3.14)); // false

// Valores especiais
console.log(Number.isSafeInteger(NaN)); // false
console.log(Number.isSafeInteger(Infinity)); // false

// Casos práticos
function validarID(id) {
  if (!Number.isSafeInteger(id) || id <= 0) {
    console.log('ID inválido');
    return false;
  }
  return true;
}

console.log(validarID(12345)); // true
console.log(validarID(Number.MAX_SAFE_INTEGER + 1)); // false

// Operação segura com grandes números
function somar(a, b) {
  if (!Number.isSafeInteger(a) || !Number.isSafeInteger(b)) {
    throw new Error('Operação com números não seguros');
  }
  const resultado = a + b;
  if (!Number.isSafeInteger(resultado)) {
    console.warn('Resultado ultrapassou limite seguro');
  }
  return resultado;
}

console.log(somar(1000, 2000)); // 3000
```

### Number.parseFloat()

Converte uma string em um número de ponto flutuante. Equivalente a `parseFloat()` global.

```javascript
// Conversão básica
console.log(Number.parseFloat('3.14')); // 3.14
console.log(Number.parseFloat('42')); // 42
console.log(Number.parseFloat('-15.5')); // -15.5

// Com espaços
console.log(Number.parseFloat('  3.14  ')); // 3.14

// Notação científica
console.log(Number.parseFloat('1.5e2')); // 150
console.log(Number.parseFloat('2e-3')); // 0.002

// String com caracteres não numéricos (para na conversão)
console.log(Number.parseFloat('123abc')); // 123
console.log(Number.parseFloat('3.14x2')); // 3.14

// String vazia ou inválida
console.log(Number.parseFloat('')); // NaN
console.log(Number.parseFloat('abc')); // NaN

// Apenas números no início
console.log(Number.parseFloat('99 garrafas')); // 99

// Casos práticos
function converterPreço(str) {
  const valor = Number.parseFloat(str);
  if (Number.isNaN(valor)) {
    return 0;
  }
  return Math.round(valor * 100) / 100; // 2 casas decimais
}

console.log(converterPreço('19.99')); // 19.99
console.log(converterPreço('R$ 49.90 reais')); // NaN (caracteres no início)

// Extrair números de strings
function extrairNumeros(str) {
  const regex = /\d+\.?\d*/g;
  const matches = str.match(regex);
  if (!matches) return [];
  return matches.map(m => Number.parseFloat(m));
}

console.log(extrairNumeros('Preço: 19.99, Desconto: 5.50')); 
// [ 19.99, 5.5 ]

// Comparação: parseFloat vs parseInt
console.log(Number.parseFloat('3.14')); // 3.14
console.log(Number.parseInt('3.14')); // 3 (ignora decimais)
```

### Number.parseInt()

Converte uma string em um número inteiro, aceitando um argumento opcional para a base numérica.

```javascript
// Conversão básica (base 10 - padrão)
console.log(Number.parseInt('42')); // 42
console.log(Number.parseInt('-100')); // -100

// Com espaços
console.log(Number.parseInt('  456  ')); // 456

// Ignora a parte decimal
console.log(Number.parseInt('3.99')); // 3
console.log(Number.parseInt('123abc')); // 123

// String vazia ou inválida
console.log(Number.parseInt('')); // NaN
console.log(Number.parseInt('abc')); // NaN

// Com especificação de base
console.log(Number.parseInt('1010', 2)); // 10 (binário para decimal)
console.log(Number.parseInt('FF', 16)); // 255 (hexadecimal para decimal)
console.log(Number.parseInt('77', 8)); // 63 (octal para decimal)

// Detectar base automaticamente
console.log(Number.parseInt('0xFF')); // 255 (prefixo 0x = hex)
console.log(Number.parseInt('0b1010')); // 10 (prefixo 0b = binário)

// Casos práticos
function converterBinario(str) {
  return Number.parseInt(str, 2);
}

console.log(converterBinario('1010')); // 10
console.log(converterBinario('11111111')); // 255

// Converter hexadecimal
function converterHex(str) {
  return Number.parseInt(str, 16);
}

console.log(converterHex('FF')); // 255
console.log(converterHex('10')); // 16

// Validar entrada de idade
function extrairIdade(str) {
  const idade = Number.parseInt(str);
  if (Number.isNaN(idade) || idade < 0 || idade > 150) {
    return null;
  }
  return idade;
}

console.log(extrairIdade('25 anos')); // 25
console.log(extrairIdade('abc')); // null

// Diferentes bases
const numero = 255;
console.log(Number.parseInt(numero.toString(2), 2)); // 255 (binário)
console.log(Number.parseInt(numero.toString(16), 16)); // 255 (hexadecimal)
```

---

## Propriedades Estáticas

As propriedades estáticas representam valores numéricos especiais e limites importantes.

### Number.EPSILON

Representa a diferença entre 1 e o menor valor maior que 1 que pode ser representado como um `Number` (aproximadamente 2.2204460492503130808472633361816E-16).

```javascript
// Valor de EPSILON
console.log(Number.EPSILON); // 2.220446049250313e-16

// Comparação com EPSILON (para lidar com erros de ponto flutuante)
const a = 0.1 + 0.2;
const b = 0.3;

// Comparação direta pode falhar
console.log(a === b); // false (0.30000000000000004 !== 0.3)

// Comparação com tolerância
function sãoIguais(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(sãoIguais(a, b)); // true

// Exemplo com múltiplas operações
function calcularMedia(valores) {
  const soma = valores.reduce((acc, val) => acc + val, 0);
  return soma / valores.length;
}

const media = calcularMedia([0.1, 0.1, 0.1]);
console.log(media); // 0.09999999999999998
console.log(sãoIguais(media, 0.1)); // true

// Tolerância mais ampla para casos práticos
function sãoProximos(a, b, tolerancia = 1e-10) {
  return Math.abs(a - b) < tolerancia;
}

console.log(sãoProximos(0.1 + 0.2, 0.3)); // true
console.log(sãoProximos(3.14159, 3.14160, 0.0001)); // true
```

### Number.MAX_SAFE_INTEGER

Representa o maior inteiro seguro que pode ser representado com precisão (2^53 - 1 = 9007199254740991).

```javascript
// Valor máximo
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// Operações até o limite
console.log(Number.MAX_SAFE_INTEGER - 1); // 9007199254740990
console.log(Number.MAX_SAFE_INTEGER + 0); // 9007199254740991

// Além do limite (perda de precisão)
console.log(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // true (perda de precisão)

// Casos práticos
function validarID(id) {
  return Number.isSafeInteger(id) && id > 0 && id <= Number.MAX_SAFE_INTEGER;
}

console.log(validarID(12345)); // true
console.log(validarID(Number.MAX_SAFE_INTEGER)); // true
console.log(validarID(Number.MAX_SAFE_INTEGER + 1)); // false

// Validar timestamp
function validarTimestamp(ts) {
  return ts > 0 && ts <= Number.MAX_SAFE_INTEGER;
}

const agora = Date.now();
console.log(validarTimestamp(agora)); // true

// Comparação com MAX_VALUE
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MAX_VALUE > Number.MAX_SAFE_INTEGER); // true
```

### Number.MAX_VALUE

Representa o maior valor numérico representável em JavaScript (aproximadamente 1.8 × 10^308).

```javascript
// Valor máximo
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

// Número muito grande
const maiorNumero = Number.MAX_VALUE;
console.log(maiorNumero); // 1.7976931348623157e+308

// Além do limite (resulta em Infinity)
console.log(Number.MAX_VALUE * 2); // Infinity
console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity

// Operação que ultrapassa
console.log(Number.MAX_VALUE * 1.001); // Infinity

// Casos práticos
function validarNumero(num) {
  if (Number.isFinite(num) && Math.abs(num) <= Number.MAX_VALUE) {
    return true;
  }
  return false;
}

console.log(validarNumero(1000)); // true
console.log(validarNumero(Number.MAX_VALUE)); // true
console.log(validarNumero(Number.MAX_VALUE * 2)); // false

// Cálculo com grandes números
function somarSeguro(a, b) {
  if (Math.abs(a) > Number.MAX_VALUE || Math.abs(b) > Number.MAX_VALUE) {
    return null; // Valor muito grande
  }
  const resultado = a + b;
  if (!Number.isFinite(resultado)) {
    return null; // Overflow
  }
  return resultado;
}

console.log(somarSeguro(1e308, 1e308)); // null (Infinity)
console.log(somarSeguro(1e200, 1e200)); // 2e+200
```

### Number.MIN_SAFE_INTEGER

Representa o menor inteiro seguro que pode ser representado com precisão (-(2^53 - 1) = -9007199254740991).

```javascript
// Valor mínimo
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// Operações até o limite
console.log(Number.MIN_SAFE_INTEGER + 1); // -9007199254740990
console.log(Number.MIN_SAFE_INTEGER - 0); // -9007199254740991

// Além do limite (perda de precisão)
console.log(Number.MIN_SAFE_INTEGER - 1); // -9007199254740992
console.log(Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2); // true

// Casos práticos
function validarRangoSeguro(num) {
  return num >= Number.MIN_SAFE_INTEGER && num <= Number.MAX_SAFE_INTEGER;
}

console.log(validarRangoSeguro(0)); // true
console.log(validarRangoSeguro(-5000000000000000)); // true
console.log(validarRangoSeguro(Number.MIN_SAFE_INTEGER - 1)); // false

// Trabalhar com grandes negativos
function dividirSeguro(a, b) {
  if (b === 0) return null;
  const resultado = a / b;
  if (!Number.isSafeInteger(resultado)) {
    return null; // Resultado não é inteiro seguro
  }
  return resultado;
}

console.log(dividirSeguro(-100, 5)); // -20
console.log(dividirSeguro(Number.MIN_SAFE_INTEGER, 1)); // -9007199254740991
```

### Number.MIN_VALUE

Representa o menor valor positivo representável em JavaScript (aproximadamente 5 × 10^-324, muito próximo de zero mas não zero).

```javascript
// Valor mínimo positivo
console.log(Number.MIN_VALUE); // 5e-324

// Muito pequeno
console.log(Number.MIN_VALUE > 0); // true

// Comparação com zero
console.log(Number.MIN_VALUE === 0); // false

// Além do limite resulta em zero
console.log(Number.MIN_VALUE / 2); // 0

// Casos práticos
function ehPequeno(num) {
  return num > 0 && num < 0.01;
}

console.log(ehPequeno(0.001)); // true
console.log(ehPequeno(Number.MIN_VALUE)); // true

// Tolerância para comparação
function sãoIguaisAZero(num) {
  return Math.abs(num) < Number.MIN_VALUE * 10;
}

console.log(sãoIguaisAZero(0)); // true
console.log(sãoIguaisAZero(Number.MIN_VALUE)); // true

// Comparação: MIN_VALUE vs MIN_SAFE_INTEGER
console.log(Number.MIN_VALUE); // 5e-324 (número positivo muito pequeno)
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991 (inteiro negativo)
```

### Number.NaN

Representa o valor "Not-a-Number" (não é um número).

```javascript
// NaN
console.log(Number.NaN); // NaN
console.log(Number.NaN === NaN); // false (NaN não é igual a si mesmo!)

// Operações que resultam em NaN
console.log(0 / 0); // NaN
console.log(Math.sqrt(-1)); // NaN
console.log(parseInt('abc')); // NaN
console.log(Number.parseFloat('não é número')); // NaN

// Comparação com NaN
const valor = Number.NaN;
console.log(valor === NaN); // false
console.log(Number.isNaN(valor)); // true

// Casos práticos
function calcularQuadrado(num) {
  const resultado = num * num;
  if (Number.isNaN(resultado)) {
    return 0;
  }
  return resultado;
}

console.log(calcularQuadrado(5)); // 25
console.log(calcularQuadrado(NaN)); // 0

// Lidar com operações inválidas
function dividirSeguro(a, b) {
  if (b === 0) {
    console.log('Divisão por zero');
    return Number.NaN;
  }
  return a / b;
}

console.log(dividirSeguro(10, 2)); // 5
console.log(dividirSeguro(10, 0)); // NaN

// Filtrar valores válidos
const valores = [1, NaN, 2, NaN, 3];
const validos = valores.filter(v => !Number.isNaN(v));
console.log(validos); // [ 1, 2, 3 ]
```

### Number.POSITIVE_INFINITY

Representa o valor infinito positivo (`Infinity`).

```javascript
// Infinito positivo
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.POSITIVE_INFINITY === Infinity); // true

// Operações que resultam em Infinity
console.log(1 / 0); // Infinity
console.log(Number.MAX_VALUE * 2); // Infinity
console.log(Math.exp(1000)); // Infinity

// Comparação
console.log(Number.POSITIVE_INFINITY > Number.MAX_VALUE); // true
console.log(Number.POSITIVE_INFINITY + 1); // Infinity

// Casos práticos
function validarValorFinito(num) {
  return num < Number.POSITIVE_INFINITY;
}

console.log(validarValorFinito(1000)); // true
console.log(validarValorFinito(Infinity)); // false

// Lidar com limites
function crescerSemLimite() {
  let valor = 1;
  while (valor < Number.POSITIVE_INFINITY) {
    valor *= 2;
  }
  return valor;
}

console.log(crescerSemLimite()); // Infinity

// Máximo entre valores
function obterMaximo(valores) {
  return Math.max(...valores, Number.NEGATIVE_INFINITY);
}

console.log(obterMaximo([1, 5, 3])); // 5
console.log(obterMaximo([])); // -Infinity
```

### Number.NEGATIVE_INFINITY

Representa o valor infinito negativo (`-Infinity`).

```javascript
// Infinito negativo
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NEGATIVE_INFINITY === -Infinity); // true

// Operações que resultam em -Infinity
console.log(-1 / 0); // -Infinity
console.log(-Number.MAX_VALUE * 2); // -Infinity
console.log(Math.log(0)); // -Infinity

// Comparação
console.log(Number.NEGATIVE_INFINITY < -Number.MAX_VALUE); // true
console.log(Number.NEGATIVE_INFINITY - 1); // -Infinity

// Casos práticos
function validarAcima(num) {
  return num > Number.NEGATIVE_INFINITY;
}

console.log(validarAcima(-1000)); // true
console.log(validarAcima(-Infinity)); // false

// Encontrar mínimo
function obterMinimo(valores) {
  return Math.min(...valores, Number.POSITIVE_INFINITY);
}

console.log(obterMinimo([5, 2, 8])); // 2
console.log(obterMinimo([])); // Infinity

// Comparar com limites
const temperatura = -300;
if (temperatura > Number.NEGATIVE_INFINITY) {
  console.log('Temperatura válida');
}

// Range válido
function estaNoRange(num, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) {
  return num >= min && num <= max;
}

console.log(estaNoRange(5, 0, 10)); // true
console.log(estaNoRange(15, 0, 10)); // false
```

---

## Métodos de Instância

Os métodos de instância operam em um número específico.

### .toExponential()

Retorna uma string representando o número em notação exponencial (científica), com um número opcional de dígitos após o ponto decimal.

```javascript
const num = 12345.6789;

// Notação exponencial padrão
console.log(num.toExponential()); // '1.23456789e+4'

// Com número específico de casas decimais
console.log(num.toExponential(2)); // '1.23e+4'
console.log(num.toExponential(4)); // '1.2346e+4'

// Número pequeno
const pequeno = 0.000123;
console.log(pequeno.toExponential()); // '1.23e-4'
console.log(pequeno.toExponential(3)); // '1.230e-4'

// Número negativo
const negativo = -456.789;
console.log(negativo.toExponential(2)); // '-4.57e+2'

// Sem casas decimais (mínimo é 0)
console.log(num.toExponential(0)); // '1e+4'

// Casos práticos
const velocidadeLuz = 299792458; // m/s
console.log(velocidadeLuz.toExponential(2)); // '3.00e+8'

// Notação científica para valores muito grandes/pequenos
function formatarCientifico(num, casas = 3) {
  return num.toExponential(casas);
}

console.log(formatarCientifico(6.022e23)); // '6.022e+23' (Número de Avogadro)
console.log(formatarCientifico(1.602e-19)); // '1.602e-19' (Carga do elétron)

// Comparar representações
const valor = 123456;
console.log(valor.toString()); // '123456'
console.log(valor.toExponential()); // '1.23456e+5'
console.log(valor.toFixed(2)); // '123456.00'
```

### .toFixed()

Retorna uma string representando o número com um número fixo de dígitos após o ponto decimal (0-100).

```javascript
const num = 123.456;

// Número padrão de casas decimais (0)
console.log(num.toFixed()); // '123'

// 1 casa decimal
console.log(num.toFixed(1)); // '123.5' (arredonda)

// 2 casas decimais
console.log(num.toFixed(2)); // '123.46' (arredonda)

// 4 casas decimais (com zeros se necessário)
console.log(num.toFixed(4)); // '123.4560'

// Número inteiro
const inteiro = 42;
console.log(inteiro.toFixed(2)); // '42.00'

// Número pequeno
const pequeno = 0.1 + 0.2; // 0.30000000000000004
console.log(pequeno.toFixed(2)); // '0.30'

// Casos práticos
function formatarPreço(valor) {
  return 'R$ ' + valor.toFixed(2);
}

console.log(formatarPreço(19.5)); // 'R$ 19.50'
console.log(formatarPreço(100)); // 'R$ 100.00'

// Arredondamento monetário
function calcularTroco(valor, pago) {
  const troco = pago - valor;
  return parseFloat(troco.toFixed(2));
}

console.log(calcularTroco(19.99, 50)); // 30.01

// Percentual com precisão
function calcularDesconto(valor, percentual) {
  const desconto = (valor * percentual) / 100;
  return parseFloat(desconto.toFixed(2));
}

console.log(calcularDesconto(100, 15)); // 15

// Temperatura com 1 casa decimal
const temperatura = 98.6543;
console.log(temperatura.toFixed(1)); // '98.7'
```

### .toLocaleString()

Retorna uma string representando o número ajustada à localidade especificada (formato de número local).

```javascript
const num = 1234567.89;

// Formato padrão da localidade
console.log(num.toLocaleString()); 
// Varia conforme navegador/sistema

// Localidade específica (português brasileiro)
console.log(num.toLocaleString('pt-BR'));
// '1.234.567,89'

// Localidade específica (inglês americano)
console.log(num.toLocaleString('en-US'));
// '1,234,567.89'

// Localidade específica (alemão)
console.log(num.toLocaleString('de-DE'));
// '1.234.567,89'

// Com formato de moeda
console.log(num.toLocaleString('pt-BR', { 
  style: 'currency', 
  currency: 'BRL' 
}));
// 'R$ 1.234.567,89'

console.log(num.toLocaleString('en-US', { 
  style: 'currency', 
  currency: 'USD' 
}));
// '$1,234,567.89'

// Percentual
console.log((0.15).toLocaleString('pt-BR', { 
  style: 'percent' 
}));
// '15%'

// Casos práticos
function formatarValorLocal(valor, moeda = 'BRL') {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: moeda
  });
}

console.log(formatarValorLocal(1500)); // 'R$ 1.500,00'
console.log(formatarValorLocal(1500, 'USD')); // '$1,500.00'

// Números com separadores locais
function formatarNumero(num, locale = 'pt-BR') {
  return num.toLocaleString(locale);
}

console.log(formatarNumero(1000000)); // '1.000.000'
console.log(formatarNumero(1000000, 'en-US')); // '1,000,000'

// Tabela de vendas formatada
const vendas = [1234.56, 5678.90, 9012.34];
vendas.forEach(v => {
  console.log(formatarValorLocal(v));
});
```

### .toPrecision()

Retorna uma string representando o número com um número total especificado de dígitos significativos (1-100).

```javascript
const num = 123.456;

// Precision padrão (representação completa)
console.log(num.toPrecision()); // '123.456'

// 1 dígito significativo
console.log(num.toPrecision(1)); // '1e+2'

// 3 dígitos significativos
console.log(num.toPrecision(3)); // '123'

// 5 dígitos significativos
console.log(num.toPrecision(5)); // '123.46'

// 8 dígitos significativos
console.log(num.toPrecision(8)); // '123.45600'

// Número pequeno
const pequeno = 0.000123;
console.log(pequeno.toPrecision(2)); // '1.2e-4'
console.log(pequeno.toPrecision(4)); // '0.0001230'

// Número inteiro
const inteiro = 42;
console.log(inteiro.toPrecision(2)); // '4.2e+1'
console.log(inteiro.toPrecision(3)); // '42.0'

// Casos práticos
function formatarMedida(valor, precisao = 4) {
  return valor.toPrecision(precisao);
}

console.log(formatarMedida(3.14159265)); // '3.142'
console.log(formatarMedida(9.8066)); // '9.807'

// Resultados científicos
const resistencia = 1234.5678; // ohms
console.log(resistencia.toPrecision(4)); // '1.235e+3' ou '1235'

// Comparação: toPrecision vs toFixed
const valor = 123.456;
console.log(valor.toFixed(2)); // '123.46' (2 casas decimais)
console.log(valor.toPrecision(4)); // '123.5' (4 dígitos significativos)

// Arredondamento significativo
function arredondarSignificativo(num, digitos) {
  return parseFloat(num.toPrecision(digitos));
}

console.log(arredondarSignificativo(12345.6789, 4)); // 12350
```

### .toString()

Retorna uma string representando o número em uma base especificada (padrão é base 10).

```javascript
const num = 255;

// Base 10 (padrão)
console.log(num.toString()); // '255'
console.log(num.toString(10)); // '255'

// Base 2 (binário)
console.log(num.toString(2)); // '11111111'

// Base 8 (octal)
console.log(num.toString(8)); // '377'

// Base 16 (hexadecimal)
console.log(num.toString(16)); // 'ff'

// Número negativo
const negativo = -123;
console.log(negativo.toString()); // '-123'
console.log(negativo.toString(2)); // '-1111011'

// Ponto flutuante
const decimal = 123.45;
console.log(decimal.toString()); // '123.45'

// Casos práticos
function converterParaBinario(num) {
  return num.toString(2);
}

console.log(converterParaBinario(10)); // '1010'
console.log(converterParaBinario(256)); // '100000000'

// Converter para hexadecimal
function converterParaHex(num) {
  return '0x' + num.toString(16).toUpperCase();
}

console.log(converterParaHex(255)); // '0xFF'
console.log(converterParaHex(4095)); // '0xFFF'

// Código de cor RGB para hexadecimal
function rgbParaHex(r, g, b) {
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

console.log(rgbParaHex(255, 0, 128)); // '#ff0080'

// Validar base
function converterEmBase(num, base) {
  if (base < 2 || base > 36) {
    throw new Error('Base deve estar entre 2 e 36');
  }
  return num.toString(base);
}

console.log(converterEmBase(100, 16)); // '64'
console.log(converterEmBase(100, 2)); // '1100100'
```

### .valueOf()

Retorna o valor primitivo do objeto `Number`. Para números primitivos, retorna o próprio número.

```javascript
// Número primitivo
const num1 = 42;
console.log(num1.valueOf()); // 42
console.log(num1.valueOf() === 42); // true

// Objeto Number
const num2 = new Number(42);
console.log(num2.valueOf()); // 42
console.log(num2.valueOf() === 42); // true

// Diferença entre primitivo e objeto
const primitivo = 123;
const objeto = new Number(123);

console.log(primitivo === objeto); // false (tipos diferentes)
console.log(primitivo === objeto.valueOf()); // true

// Tipo
console.log(typeof primitivo); // 'number'
console.log(typeof objeto); // 'object'
console.log(typeof objeto.valueOf()); // 'number'

// Casos práticos
function garantirPrimitivo(valor) {
  if (typeof valor === 'object' && valor instanceof Number) {
    return valor.valueOf();
  }
  return valor;
}

console.log(garantirPrimitivo(42)); // 42
console.log(garantirPrimitivo(new Number(42))); // 42

// Operações que usam valueOf implicitamente
const obj = new Number(100);
console.log(obj + 50); // 150 (valueOf é chamado automaticamente)
console.log(obj * 2); // 200

// Forçar conversão para primitivo
const numero = new Number(3.14159);
const primitivo2 = +numero; // unário +
const primitivo3 = numero.valueOf();

console.log(typeof primitivo2); // 'number'
console.log(typeof primitivo3); // 'number'
console.log(primitivo2 === primitivo3); // true
```

---

## Dicas Importantes

### Limites Numéricos em JavaScript

| Propriedade | Valor | Descrição |
|---|---|---|
| `Number.MAX_SAFE_INTEGER` | 2^53 - 1 | Maior inteiro seguro |
| `Number.MIN_SAFE_INTEGER` | -(2^53 - 1) | Menor inteiro seguro |
| `Number.MAX_VALUE` | ~1.8e+308 | Maior número representável |
| `Number.MIN_VALUE` | ~5e-324 | Menor número positivo |
| `Number.EPSILON` | ~2.2e-16 | Menor diferença entre números |

### Comparação entre Métodos Similares

| Necessidade | Método | Nota |
|---|---|---|
| Verificar inteiro seguro | `Number.isSafeInteger()` | Sem coerção de tipo |
| Verificar NaN | `Number.isNaN()` | Sem coerção, mais confiável |
| Verificar finitude | `Number.isFinite()` | Sem coerção de tipo |
| Converter string | `Number.parseFloat()` ou `parseInt()` | Depende se precisa decimal |
| Formatar decimal | `.toFixed()` | Número fixo de casas |
| Formatar científico | `.toExponential()` | Notação científica |
| Formatar com precisão | `.toPrecision()` | Dígitos significativos |

### Problemas Comuns com Pontos Flutuantes

```javascript
// Problema: imprecisão de ponto flutuante
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Solução: usar EPSILON
function sãoIguais(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}
console.log(sãoIguais(0.1 + 0.2, 0.3)); // true

// Arredondar para casas decimais
function arredondarDecimais(num, casas = 2) {
  return parseFloat(num.toFixed(casas));
}
console.log(arredondarDecimais(0.1 + 0.2)); // 0.3
```

### Métodos úteis para casos comuns

```javascript
// Validar se é número válido
function ehNumeroValido(valor) {
  return typeof valor === 'number' && Number.isFinite(valor);
}

console.log(ehNumeroValido(42)); // true
console.log(ehNumeroValido('42')); // false
console.log(ehNumeroValido(Infinity)); // false

// Converter com segurança
function converterParaNumero(valor) {
  const num = Number(valor);
  return Number.isFinite(num) ? num : null;
}

console.log(converterParaNumero('123')); // 123
console.log(converterParaNumero('abc')); // null

// Gerar número aleatório em range
function aleatorioentre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(aleatorioentre(1, 10)); // Entre 1 e 10

// Formatar número com separadores
function formatarNumero(num, casas = 2, locale = 'pt-BR') {
  return num.toLocaleString(locale, {
    minimumFractionDigits: casas,
    maximumFractionDigits: casas
  });
}

console.log(formatarNumero(1234.5)); // '1.234,50'

// Verificar se está no range
function noRange(num, min, max) {
  return Number.isFinite(num) && num >= min && num <= max;
}

console.log(noRange(5, 0, 10)); // true
console.log(noRange(15, 0, 10)); // false
```

### Métodos úteis do objeto Math

O objeto `Math` complementa o `Number` com operações matemáticas:

```javascript
// Arredondamento
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.trunc(4.9)); // 4

// Valor absoluto
console.log(Math.abs(-42)); // 42

// Mínimo e máximo
console.log(Math.min(5, 2, 8)); // 2
console.log(Math.max(5, 2, 8)); // 8

// Potência e raiz
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4

// Trigonometria
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0)); // 1

// Aleatório
console.log(Math.random()); // Entre 0 e 1
```
