# Objeto String em JavaScript

A String é um dos objetos fundamentais do JavaScript, permitindo trabalhar com sequências de caracteres. Existem métodos estáticos (que pertencem ao construtor String) e métodos de instância (que pertencem a cada string criada). String é um tipo primitivo imutável, o que significa que qualquer operação retorna uma nova string.

---

## Construtor

### String()

Cria um novo objeto `String` ou converte um valor para string primitiva. Existem várias formas de utilizar:

```javascript
// String vazia
const str1 = new String();
console.log(str1); // [String: '']

// Converter valor para string primitiva (sem new)
const str2 = String(123);
console.log(str2); // '123'
console.log(typeof str2); // 'string'

// String com valor
const str3 = new String('Hello');
console.log(str3); // [String: 'Hello']

// Forma moderna (recomendada)
const str4 = 'Hello';
console.log(str4); // 'Hello'
console.log(typeof str4); // 'string'

// Converter valores diferentes
console.log(String(true)); // 'true'
console.log(String(null)); // 'null'
console.log(String(undefined)); // 'undefined'
console.log(String([1, 2, 3])); // '1,2,3'
```

---

## Métodos Estáticos

Os métodos estáticos pertencem ao construtor `String` e não requerem uma instância de string.

### String.fromCharCode()

Retorna uma string criada a partir de uma sequência de valores de código de caracteres (Unicode). Trabalha com caracteres básicos (até U+FFFF).

```javascript
// Criar string com um caractere
console.log(String.fromCharCode(65)); // 'A'
console.log(String.fromCharCode(97)); // 'a'

// Múltiplos caracteres
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // 'Hello'

// Códigos Unicode comuns
console.log(String.fromCharCode(32)); // espaço ' '
console.log(String.fromCharCode(48, 49, 50)); // '012'

// Caracteres especiais
console.log(String.fromCharCode(169)); // '©'
console.log(String.fromCharCode(8364)); // '€'

// Com array usando spread operator
const codigos = [72, 101, 108, 108, 111];
console.log(String.fromCharCode(...codigos)); // 'Hello'

// Criar sequência de caracteres
const letras = [];
for (let i = 65; i <= 90; i++) {
  letras.push(String.fromCharCode(i));
}
console.log(letras.join('')); // 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
```

### String.fromCodePoint()

Retorna uma string criada a partir de uma sequência de pontos de código Unicode. Diferente de `fromCharCode()`, funciona com caracteres além de U+FFFF, incluindo emojis.

```javascript
// Caracteres básicos (como fromCharCode)
console.log(String.fromCodePoint(65)); // 'A'
console.log(String.fromCodePoint(97, 98, 99)); // 'abc'

// Caracteres Unicode além de U+FFFF (emojis e símbolos especiais)
console.log(String.fromCodePoint(0x1F600)); // '😀'
console.log(String.fromCodePoint(128512)); // '😀' (mesmo emoji)

// Múltiplos emojis
console.log(String.fromCodePoint(0x1F4A9, 0x1F44D, 0x1F389)); // '💩👍🎉'

// Caracteres matemáticos
console.log(String.fromCodePoint(0x2260)); // '≠'
console.log(String.fromCodePoint(0x221E)); // '∞'

// Comparação: fromCharCode vs fromCodePoint
console.log(String.fromCharCode(0x1F600)); // 😐 (comportamento inesperado)
console.log(String.fromCodePoint(0x1F600)); // 😀 (correto)

// Com múltiplos pontos de código
const emojiArray = [0x1F600, 0x1F601, 0x1F602];
console.log(String.fromCodePoint(...emojiArray)); // '😀😁😂'
```

### String.raw()

Retorna uma string bruta a partir de um template literal, sem processar caracteres de escape. Útil para expressões regulares e caminhos de arquivo.

```javascript
// String normal (processa escapes)
const normal = 'Linha 1\nLinha 2';
console.log(normal);
// Output:
// Linha 1
// Linha 2

// String raw (não processa escapes)
const raw = String.raw`Linha 1\nLinha 2`;
console.log(raw); // 'Linha 1\nLinha 2'

// Caminhos de arquivo Windows
const caminho = String.raw`C:\Users\nome\arquivo.txt`;
console.log(caminho); // 'C:\Users\nome\arquivo.txt'

// Expressões regulares
const regex = String.raw`\d{3}\-\d{3}\-\d{4}`;
console.log(regex); // '\\d{3}\\-\\d{3}\\-\\d{4}'

// Com template strings
const nome = 'Ana';
const mensagem = String.raw`Olá ${nome}, este é um teste\n`;
console.log(mensagem); // 'Olá Ana, este é um teste\n'

// Comparação clara
const esc = 'C:\\Users'; // 'C:\Users'
const noEsc = String.raw`C:\Users`; // 'C:\Users'
console.log(esc === noEsc); // true
```

---

## Métodos de Instância

Os métodos de instância operam em uma string específica.

### .at()

Retorna o caractere em um índice especificado, permitindo índices negativos para contar a partir do final. Mais intuitivo que `charAt()`.

```javascript
const str = 'JavaScript';

// Índices positivos
console.log(str.at(0)); // 'J'
console.log(str.at(4)); // 'S'

// Índices negativos (a partir do final)
console.log(str.at(-1)); // 't' (último caractere)
console.log(str.at(-2)); // 'p' (penúltimo)
console.log(str.at(-10)); // 'J' (primeiro caractere)

// Fora dos limites
console.log(str.at(100)); // undefined
console.log(str.at(-100)); // undefined

// Casos práticos
const email = 'usuario@email.com';
console.log(email.at(-1)); // 'm'
console.log(email.at(-4)); // '.c'
```

### .charAt()

Retorna o caractere em um índice especificado. Retorna string vazia se o índice estiver fora dos limites.

```javascript
const str = 'Hello';

// Obtém caractere em posição
console.log(str.charAt(0)); // 'H'
console.log(str.charAt(1)); // 'e'
console.log(str.charAt(4)); // 'o'

// Fora dos limites retorna string vazia
console.log(str.charAt(10)); // ''
console.log(str.charAt(-1)); // ''

// Loop através dos caracteres
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}
// Output: H e l l o

// Comparação: charAt vs at vs bracket notation
const palavra = 'Python';
console.log(palavra.charAt(0)); // 'P'
console.log(palavra.at(0)); // 'P'
console.log(palavra[0]); // 'P'

// Mas com índices negativos
console.log(palavra.charAt(-1)); // ''
console.log(palavra.at(-1)); // 'n'
console.log(palavra[-1]); // undefined
```

### .charCodeAt()

Retorna o valor numérico Unicode do caractere em um índice especificado. Retorna `NaN` se o índice estiver fora dos limites.

```javascript
const str = 'ABC';

// Obter código do caractere
console.log(str.charCodeAt(0)); // 65 ('A')
console.log(str.charCodeAt(1)); // 66 ('B')
console.log(str.charCodeAt(2)); // 67 ('C')

// Valores Unicode comuns
console.log('a'.charCodeAt(0)); // 97
console.log('0'.charCodeAt(0)); // 48
console.log(' '.charCodeAt(0)); // 32 (espaço)

// Fora dos limites
console.log(str.charCodeAt(10)); // NaN

// Converter string para array de códigos
const hello = 'Hello';
const codigos = [];
for (let i = 0; i < hello.length; i++) {
  codigos.push(hello.charCodeAt(i));
}
console.log(codigos); // [ 72, 101, 108, 108, 111 ]

// Verificar tipo de caractere
const char = 'A';
if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
  console.log('É letra maiúscula');
}
```

### .codePointAt()

Retorna o ponto de código Unicode do caractere em um índice especificado. Funciona com caracteres fora do Basic Multilingual Plane (como emojis).

```javascript
// Caracteres básicos
console.log('A'.codePointAt(0)); // 65
console.log('a'.codePointAt(0)); // 97

// Emojis e caracteres especiais
console.log('😀'.codePointAt(0)); // 128512
console.log('😀'.length); // 2 (ocupa 2 unidades de código)
console.log('😀'[0]); // '\uD83D' (primeira metade do surrogat pair)

// Caracteres Unicode especiais
console.log('€'.codePointAt(0)); // 8364
console.log('©'.codePointAt(0)); // 169

// Comparação: charCodeAt vs codePointAt
const emoji = '😀';
console.log(emoji.charCodeAt(0)); // 55357 (primeira metade do surrogat)
console.log(emoji.codePointAt(0)); // 128512 (código completo)

// Verificar se há emojis
function temEmoji(str) {
  for (let i = 0; i < str.length; i++) {
    const code = str.codePointAt(i);
    if (code > 0xFFFF) return true;
  }
  return false;
}
console.log(temEmoji('Hello')); // false
console.log(temEmoji('Hello 😀')); // true
```

### .concat()

Combina a string atual com uma ou mais strings, retornando uma nova string. Não modifica a string original.

```javascript
const str1 = 'Hello';
const str2 = 'World';

// Concatenar duas strings
const resultado1 = str1.concat(' ', str2);
console.log(resultado1); // 'Hello World'
console.log(str1); // 'Hello' (original não muda)

// Múltiplas strings
const resultado2 = 'a'.concat('b', 'c', 'd');
console.log(resultado2); // 'abcd'

// Com espaços e pontuação
const nome = 'João';
const sobrenome = 'Silva';
const completo = nome.concat(' ', sobrenome);
console.log(completo); // 'João Silva'

// Com números (convertidos para string)
const resultado3 = 'Versão '.concat(1, '.', 5);
console.log(resultado3); // 'Versão 1.5'

// Alternativa com +
const alt1 = str1 + ' ' + str2;
console.log(alt1); // 'Hello World'

// Alternativa com template strings (recomendado)
const alt2 = `${str1} ${str2}`;
console.log(alt2); // 'Hello World'
```

### .endsWith()

Verifica se a string termina com uma substring especificada. Retorna `true` ou `false`.

```javascript
const str = 'JavaScript.js';

// Verificar terminação
console.log(str.endsWith('.js')); // true
console.log(str.endsWith('pt')); // true
console.log(str.endsWith('Java')); // false

// Case sensitive
console.log(str.endsWith('.JS')); // false

// Com posição (comprimento máximo para buscar)
console.log(str.endsWith('Script', 10)); // true (procura até índice 10)

// Casos práticos
const email = 'usuario@email.com';
console.log(email.endsWith('.com')); // true
console.log(email.endsWith('.br')); // false

const arquivo = 'documento.pdf';
console.log(arquivo.endsWith('.pdf')); // true
console.log(arquivo.endsWith('.doc')); // false

// Verificar extensão
function ehImagem(filename) {
  return filename.endsWith('.jpg') || 
         filename.endsWith('.png') || 
         filename.endsWith('.gif');
}

console.log(ehImagem('foto.jpg')); // true
console.log(ehImagem('texto.txt')); // false
```

### .includes()

Verifica se a string contém uma substring especificada. Retorna `true` ou `false`.

```javascript
const str = 'JavaScript é incrível';

// Verificar se contém substring
console.log(str.includes('Script')); // true
console.log(str.includes('Python')); // false

// Case sensitive
console.log(str.includes('JAVA')); // false
console.log(str.includes('java')); // true

// A partir de um índice específico
console.log(str.includes('é', 5)); // true (procura a partir do índice 5)
console.log(str.includes('Java', 5)); // false

// Casos práticos
const mensagem = 'Bem-vindo ao portal de suporte';
console.log(mensagem.includes('suporte')); // true

const url = 'https://www.google.com';
console.log(url.includes('google')); // true

// Validação
const nome = 'João Silva Santos';
if (nome.includes('Silva')) {
  console.log('Encontrou Silva'); // Será executado
}

// Alternativa a indexOf
const texto = 'Olá mundo';
console.log(texto.indexOf('mundo') !== -1); // true
console.log(texto.includes('mundo')); // true (mais legível)
```

### .indexOf()

Retorna o índice da primeira ocorrência de uma substring especificada, ou `-1` se não encontrada.

```javascript
const str = 'JavaScript JavaScript';

// Primeira ocorrência
console.log(str.indexOf('Script')); // 4
console.log(str.indexOf('Java')); // 0

// Não encontrado
console.log(str.indexOf('Python')); // -1

// A partir de um índice específico
console.log(str.indexOf('Script', 5)); // 15 (segunda ocorrência)

// Case sensitive
console.log(str.indexOf('java')); // -1
console.log(str.indexOf('Java')); // 0

// Encontrar todos os índices
const texto = 'banana';
const indices = [];
let index = texto.indexOf('a');
while (index !== -1) {
  indices.push(index);
  index = texto.indexOf('a', index + 1);
}
console.log(indices); // [ 1, 3, 5 ]

// Verificar se existe
const email = 'usuario@email.com';
if (email.indexOf('@') !== -1) {
  console.log('Tem @ no email'); // Será executado
}

// Encontrar caractere específico
const palavra = 'biblioteca';
const posicaoA = palavra.indexOf('a');
console.log(posicaoA); // 7
```

### .lastIndexOf()

Retorna o índice da última ocorrência de uma substring especificada, ou `-1` se não encontrada. Procura do final para o início.

```javascript
const str = 'JavaScript JavaScript';

// Última ocorrência
console.log(str.lastIndexOf('Script')); // 15
console.log(str.lastIndexOf('Java')); // 11

// Não encontrado
console.log(str.lastIndexOf('Python')); // -1

// A partir de um índice específico (procura para trás)
console.log(str.lastIndexOf('Java', 5)); // 0

// Case sensitive
console.log(str.lastIndexOf('java')); // -1

// Encontrar última posição de um caractere
const texto = 'hello world';
console.log(texto.lastIndexOf('o')); // 7

// Extrair última palavra
const caminho = '/home/usuario/documentos/arquivo.txt';
const ultimaBarra = caminho.lastIndexOf('/');
const arquivo = caminho.substring(ultimaBarra + 1);
console.log(arquivo); // 'arquivo.txt'

// Comparação: indexOf vs lastIndexOf
const palavra = 'abracadabra';
console.log(palavra.indexOf('a')); // 0 (primeira)
console.log(palavra.lastIndexOf('a')); // 10 (última)
```

### .localeCompare()

Compara duas strings de acordo com a ordem de classificação da localidade atual. Retorna negativo, 0 ou positivo.

```javascript
// Comparação básica
console.log('a'.localeCompare('b')); // -1 (a vem antes de b)
console.log('b'.localeCompare('a')); // 1 (b vem depois de a)
console.log('a'.localeCompare('a')); // 0 (são iguais)

// Ordenar array de strings
const nomes = ['Carlos', 'Ana', 'Bruno'];
nomes.sort((a, b) => a.localeCompare(b));
console.log(nomes); // [ 'Ana', 'Bruno', 'Carlos' ]

// Case insensitive
console.log('A'.localeCompare('a')); // -1 (maiúsculas geralmente vêm primeiro)

// Com localidade específica
console.log('ä'.localeCompare('z', 'de')); // -1 (em alemão, ä < z)

// Ordem alfabética em português
const cidades = ['Rio', 'São Paulo', 'Brasília', 'Belo Horizonte'];
cidades.sort((a, b) => a.localeCompare(b, 'pt-BR'));
console.log(cidades); 
// [ 'Belo Horizonte', 'Brasília', 'Rio', 'São Paulo' ]

// Verificar se vem antes/depois
if ('abc'.localeCompare('def') < 0) {
  console.log('abc vem antes de def'); // Será executado
}

// Case insensitive customizado
const resultado = 'Maçã'.localeCompare('maca', 'pt-BR', { sensitivity: 'base' });
console.log(resultado); // 0 (ã e a são tratados como iguais)
```

### .match()

Retorna um array com os resultados da correspondência de uma expressão regular na string. Retorna `null` se não houver correspondência.

```javascript
const str = 'JavaScript 123 Python 456';

// Padrão simples
const resultado1 = str.match(/\d+/);
console.log(resultado1); // [ '123', index: 11, input: '...', groups: undefined ]

// Com flag global (g) - encontrar todos
const resultado2 = str.match(/\d+/g);
console.log(resultado2); // [ '123', '456' ]

// Encontrar palavras
const texto = 'gato, gata, gatinha';
const gatinhos = texto.match(/gat\w*/g);
console.log(gatinhos); // [ 'gato', 'gata', 'gatinha' ]

// Não encontrado
const resultado3 = str.match(/xyz/);
console.log(resultado3); // null

// Com grupos de captura
const email = 'usuario@email.com';
const matches = email.match(/(\w+)@(\w+\.\w+)/);
console.log(matches);
// [ 'usuario@email.com', 'usuario', 'email.com', index: 0, ... ]

// Validar formato
function ehCPF(cpf) {
  const resultado = cpf.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/);
  return resultado !== null;
}

console.log(ehCPF('123.456.789-10')); // true
console.log(ehCPF('123456789')); // false

// Encontrar todas as URLs
const html = 'Visite https://google.com e https://github.com';
const urls = html.match(/https?:\/\/[^\s]+/g);
console.log(urls); // [ 'https://google.com', 'https://github.com' ]
```

### .matchAll()

Retorna um iterador com todas as correspondências de uma expressão regular na string. A expressão regular deve ter a flag global (g).

```javascript
const str = 'JavaScript 123 Python 456 Java 789';

// Deve ter flag global (g)
const regex = /\d+/g;
const matches = str.matchAll(regex);

// Iterar através dos matches
for (const match of matches) {
  console.log(match[0], 'no índice', match.index);
}
// Output:
// 123 no índice 11
// 456 no índice 24
// 789 no índice 36

// Converter para array
const regex2 = /\w+/g;
const allMatches = [...str.matchAll(regex2)];
console.log(allMatches.length); // 5

// Com grupos de captura
const texto = 'nome: João, idade: 30, nome: Maria, idade: 28';
const regex3 = /nome:\s*(\w+),\s*idade:\s*(\d+)/g;

for (const match of texto.matchAll(regex3)) {
  console.log(`Nome: ${match[1]}, Idade: ${match[2]}`);
}
// Output:
// Nome: João, Idade: 30
// Nome: Maria, Idade: 28

// Extrair grupos de captura
const html = '<a href="url1">link1</a><a href="url2">link2</a>';
const regex4 = /<a href="([^"]+)">([^<]+)<\/a>/g;
const links = [];

for (const match of html.matchAll(regex4)) {
  links.push({ url: match[1], texto: match[2] });
}

console.log(links);
// [ { url: 'url1', texto: 'link1' }, { url: 'url2', texto: 'link2' } ]
```

### .normalize()

Retorna a forma normalizada Unicode da string. Útil para comparar strings com acentuação.

```javascript
// Comparação básica
console.log('café'); // String com é pré-composto
console.log('cafe\u0301'); // String com e + acento combinado

// Sem normalizar (diferentes)
console.log('café' === 'cafe\u0301'); // false

// Com normalizar (iguais)
console.log('café'.normalize() === 'cafe\u0301'.normalize()); // true

// Formas diferentes de normalização
const str = 'ñ'; // ñ pré-composto

console.log(str.normalize('NFC')); // Forma Normalizada Canônica Composta
console.log(str.normalize('NFKC')); // Forma Normalizada de Compatibilidade Composta
console.log(str.normalize('NFD')); // Forma Normalizada Canônica Descomposta
console.log(str.normalize('NFKD')); // Forma Normalizada de Compatibilidade Descomposta

// Normalizar para comparação
function comparar(str1, str2) {
  return str1.normalize('NFC') === str2.normalize('NFC');
}

console.log(comparar('café', 'cafe\u0301')); // true

// Remover acentos (simplificado)
function removerAcentos(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

console.log(removerAcentos('café')); // 'cafe'
console.log(removerAcentos('São Paulo')); // 'Sao Paulo'
```

### .padEnd()

Preenche o final da string com um caractere especificado até atingir um comprimento desejado.

```javascript
const str = 'Hi';

// Preencher até comprimento 5 com espaço (padrão)
console.log(str.padEnd(5)); // 'Hi   '
console.log(str.padEnd(5).length); // 5

// Com caractere customizado
console.log(str.padEnd(8, '.')); // 'Hi......'
console.log(str.padEnd(8, '-')); // 'Hi------'

// Repetir caractere
console.log('JS'.padEnd(10, '=')); // 'JS========'

// Já atinge o comprimento
console.log('Hello'.padEnd(3, '-')); // 'Hello' (não muda)

// Casos práticos
const preco = '9.99';
console.log(preco.padEnd(8, '0')); // '9.990000'

// Formatar tabela
const id = '1';
const nome = 'João';
const linha = id.padEnd(3, ' ') + nome.padEnd(15, ' ') + '✓';
console.log(linha); // '1  João           ✓'

// Alinhamento visual
const itens = ['Maçã', 'Banana', 'Laranja'];
itens.forEach(item => {
  console.log(item.padEnd(10, '.') + ' R$ 5.00');
});
// Maçã...... R$ 5.00
// Banana.... R$ 5.00
// Laranja... R$ 5.00
```

### .padStart()

Preenche o início da string com um caractere especificado até atingir um comprimento desejado.

```javascript
const str = 'Hi';

// Preencher até comprimento 5 com espaço (padrão)
console.log(str.padStart(5)); // '   Hi'
console.log(str.padStart(5).length); // 5

// Com caractere customizado
console.log(str.padStart(8, '.')); // '......Hi'
console.log(str.padStart(8, '-')); // '------Hi'

// Repetir caractere
console.log('JS'.padStart(10, '=')); // '========JS'

// Já atinge o comprimento
console.log('Hello'.padStart(3, '-')); // 'Hello' (não muda)

// Casos práticos
const numero = '42';
console.log(numero.padStart(5, '0')); // '00042'

// Formatar código postal
const cep = '12345';
console.log(cep.padStart(8, '0')); // '00012345'

// Alinhar números em tabela
const valores = ['5', '100', '2500'];
valores.forEach(valor => {
  console.log(valor.padStart(6, ' ') + ' reais');
});
// Output:
//      5 reais
//    100 reais
//   2500 reais

// Mostrar progression
function mostrarProgresso(percentual) {
  const barra = '█'.repeat(Math.floor(percentual / 10));
  return barra.padEnd(10, '░') + ' ' + percentual + '%';
}

console.log(mostrarProgresso(30)); // '███░░░░░░ 30%'
```

### .repeat()

Retorna uma nova string com a string original repetida um número especificado de vezes.

```javascript
const str = 'Ha';

// Repetir 3 vezes
console.log(str.repeat(3)); // 'HaHaHa'

// Repetir 1 vez
console.log(str.repeat(1)); // 'Ha'

// Repetir 0 vezes
console.log(str.repeat(0)); // ''

// Com caractere único
console.log('*'.repeat(5)); // '*****'

// Casos práticos
console.log('abc'.repeat(2)); // 'abcabc'

// Criar padrão repetido
console.log('-'.repeat(20)); // '--------------------'
console.log('✓ '.repeat(3)); // '✓ ✓ ✓ '

// Gerar lista
const item = '• ';
console.log(item.repeat(4)); // '• • • • '

// Indent
const linha = 'código';
const indent = '  '.repeat(3);
console.log(indent + linha); // '      código' (6 espaços + código)

// Preencher espaço
console.log('Inicio' + ' '.repeat(10) + 'Fim');
// Inicio          Fim

// Com template strings
const stars = '⭐'.repeat(5);
console.log(`Avaliação: ${stars}`); // 'Avaliação: ⭐⭐⭐⭐⭐'
```

### .replace()

Substitui a primeira ocorrência de uma substring ou padrão por um novo valor.

```javascript
const str = 'Olá Mundo, Mundo é grande';

// Substituir primeira ocorrência de string
console.log(str.replace('Mundo', 'Planeta'));
// 'Olá Planeta, Mundo é grande'

// Case sensitive
console.log(str.replace('mundo', 'Planeta'));
// 'Olá Mundo, Mundo é grande' (não encontrou 'mundo' minúsculo)

// Com expressão regular
const regex = /mundo/i; // flag i = case insensitive
console.log(str.replace(regex, 'Planeta'));
// 'Olá Planeta, Mundo é grande'

// Com função de substituição
const texto = 'Eu tenho 25 anos';
const resultado = texto.replace(/\d+/, (match) => {
  return parseInt(match) + 1;
});
console.log(resultado); // 'Eu tenho 26 anos'

// Substituir com grupos de captura
const data = '2024-11-15';
console.log(data.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1'));
// '15/11/2024'

// Função com informações do match
const html = '<div>Conteúdo</div>';
const processado = html.replace(/<(\w+)>/g, (match, tag) => {
  return `<${tag.toUpperCase()}>`;
});
console.log(processado); // '<DIV>Conteúdo</DIV>'

// Converter CamelCase para kebab-case
function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
console.log(camelToKebab('backgroundColor')); // 'background-color'
```

### .replaceAll()

Substitui todas as ocorrências de uma substring ou padrão por um novo valor.

```javascript
const str = 'maçã banana maçã melancia maçã';

// Substituir todas as ocorrências
console.log(str.replaceAll('maçã', 'pêra'));
// 'pêra banana pêra melancia pêra'

// Case sensitive
console.log(str.replaceAll('Maçã', 'pêra'));
// 'maçã banana maçã melancia maçã' (não substitui)

// Com expressão regular (deve ter flag global)
const regex = /\d/g;
console.log('abc123def456'.replaceAll(regex, 'X'));
// 'abcXXXdefXXX'

// Com função de substituição
const texto = 'A cor é azul e azul é bonito';
const resultado = texto.replaceAll('azul', (match) => {
  return match.toUpperCase();
});
console.log(resultado); // 'A cor é AZUL e AZUL é bonito'

// Escapar caracteres especiais em regex
function escape(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Remover todas as instâncias de um padrão
function removerTodasAsOcorrencias(str, pattern) {
  const escaped = escape(pattern);
  const regex = new RegExp(escaped, 'g');
  return str.replaceAll(regex, '');
}

console.log(removerTodasAsOcorrencias('cafe.com.cafe.com', 'cafe'));
// '.com..com'

// Casos práticos
console.log('hello-world-test'.replaceAll('-', '_')); // 'hello_world_test'
console.log('1.000.000'.replaceAll('.', '')); // '1000000'

// Normalizar espaços
function normalizarEspacos(str) {
  return str.replaceAll(/\s+/g, ' ').trim();
}
console.log(normalizarEspacos('Olá    mundo    teste'));
// 'Olá mundo teste'
```

### .search()

Retorna o índice da primeira correspondência de uma expressão regular na string, ou `-1` se não encontrada.

```javascript
const str = 'JavaScript 123 Python 456';

// Encontrar primeiro dígito
console.log(str.search(/\d/)); // 11 (índice de '1')

// Não encontrado
console.log(str.search(/xyz/)); // -1

// Com flags
const regex1 = /JAVA/i; // case insensitive
console.log(str.search(regex1)); // 0

// Encontrar caractere especial
const email = 'usuario@email.com';
console.log(email.search(/@/)); // 7

// Comparação: search vs indexOf
const texto = 'Olá Mundo';
console.log(texto.indexOf('Mundo')); // 4
console.log(texto.search('Mundo')); // 4

// search com regex
console.log(texto.search(/\d/)); // -1 (não tem dígitos)
console.log('Test123'.search(/\d/)); // 4

// Verificar primeira posição válida
const html = '<div class="container">Conteúdo</div>';
const classeStart = html.search(/class=/);
if (classeStart !== -1) {
  console.log('Encontrou atributo class');
}

// Encontrar primeiro espaço
console.log('Olá Mundo'.search(/\s/)); // 3

// Validação de formato
function ehData(str) {
  return str.search(/^\d{2}\/\d{2}\/\d{4}$/) !== -1;
}
console.log(ehData('15/11/2024')); // true
console.log(ehData('2024-11-15')); // false
```

### .slice()

Retorna uma substring da string com base em índices de início e fim. Não modifica a string original.

```javascript
const str = 'JavaScript';

// Do índice 0 ao 4
console.log(str.slice(0, 4)); // 'Java'

// Do índice 4 até o final
console.log(str.slice(4)); // 'Script'

// Índices negativos
console.log(str.slice(-6)); // 'Script' (últimos 6 caracteres)
console.log(str.slice(-6, -1)); // 'Scrip'

// Do início até antes de um índice
console.log(str.slice(0, 5)); // 'JavaS'

// Extrair parte do meio
const email = 'usuario@email.com';
const dominio = email.slice(email.indexOf('@') + 1);
console.log(dominio); // 'email.com'

// Remover caracteres do final
const arquivo = 'documento.pdf';
const semExtensao = arquivo.slice(0, arquivo.lastIndexOf('.'));
console.log(semExtensao); // 'documento'

// String inteira
console.log(str.slice()); // 'JavaScript'

// Copiar string (shallow copy)
const original = 'hello';
const copia = original.slice();
console.log(copia); // 'hello'
console.log(copia === original); // false (nova string)

// Reverter string
const palavraReversa = 'python'
  .split('')
  .reverse()
  .join('');
console.log(palavraReversa); // 'nohtyp'
```

### .split()

Divide a string em um array de substrings com base em um separador especificado.

```javascript
const str = 'maçã,banana,laranja';

// Dividir por vírgula
console.log(str.split(',')); 
// [ 'maçã', 'banana', 'laranja' ]

// Dividir por espaço
const frase = 'Olá mundo JavaScript';
console.log(frase.split(' '));
// [ 'Olá', 'mundo', 'JavaScript' ]

// Dividir cada caractere
console.log('Hello'.split(''));
// [ 'H', 'e', 'l', 'l', 'o' ]

// Sem separador (array com string inteira)
console.log(str.split());
// [ 'maçã,banana,laranja' ]

// Com limite de splits
console.log(str.split(',', 2));
// [ 'maçã', 'banana' ]

// Separador regex
const csv = 'nome,idade,cidade';
console.log(csv.split(/,\s*/)); // [ 'nome', 'idade', 'cidade' ]

// Quebrar em linhas
const texto = 'Linha 1\nLinha 2\nLinha 3';
console.log(texto.split('\n'));
// [ 'Linha 1', 'Linha 2', 'Linha 3' ]

// URL parsing
const url = 'https://example.com:8080/path/to/page';
const partes = url.split('/');
console.log(partes);
// [ 'https:', '', 'example.com:8080', 'path', 'to', 'page' ]

// Separador múltiplo
function dividirPor(str, separadores) {
  const regex = new RegExp(`[${separadores}]`);
  return str.split(regex);
}

console.log(dividirPor('a;b,c:d', ';,:'));
// [ 'a', 'b', 'c', 'd' ]
```

### .startsWith()

Verifica se a string começa com uma substring especificada. Retorna `true` ou `false`.

```javascript
const str = 'JavaScript é incrível';

// Verificar início
console.log(str.startsWith('Java')); // true
console.log(str.startsWith('Java')); // true
console.log(str.startsWith('Python')); // false

// Case sensitive
console.log(str.startsWith('java')); // false

// A partir de um índice específico
console.log(str.startsWith('Script', 4)); // true (procura a partir do índice 4)

// Casos práticos
const url = 'https://www.google.com';
console.log(url.startsWith('https')); // true

const email = 'usuario@email.com';
console.log(email.startsWith('usuario')); // true

// Validar protocolo
function ehHTTPS(url) {
  return url.startsWith('https://');
}
console.log(ehHTTPS('https://google.com')); // true
console.log(ehHTTPS('http://google.com')); // false

// Validar prefixo
const codigoBarras = '7891234567890';
console.log(codigoBarras.startsWith('789')); // true

// Substituir de forma condicional
function adicionarPrefixo(str, prefixo) {
  if (!str.startsWith(prefixo)) {
    return prefixo + str;
  }
  return str;
}

console.log(adicionarPrefixo('mundo', 'Olá ')); // 'Olá mundo'
console.log(adicionarPrefixo('Olá mundo', 'Olá ')); // 'Olá mundo'
```

### .substring()

Retorna uma substring da string com base em índices de início e fim. Diferente de `.slice()`, não aceita índices negativos.

```javascript
const str = 'JavaScript';

// Do índice 0 ao 4
console.log(str.substring(0, 4)); // 'Java'

// Do índice 4 até o final
console.log(str.substring(4)); // 'Script'

// Índices fora de ordem (são trocados automaticamente)
console.log(str.substring(4, 0)); // 'Java'

// Índices negativos (tratados como 0)
console.log(str.substring(-2, 3)); // 'Jav'

// Comparação: slice vs substring
const palavra = 'Python';
console.log(palavra.slice(0, 4)); // 'Pyth'
console.log(palavra.substring(0, 4)); // 'Pyth'

console.log(palavra.slice(-4)); // 'thon'
console.log(palavra.substring(-4)); // 'Python' (índice negativo vira 0)

console.log(palavra.slice(4, 1)); // '' (começo > fim)
console.log(palavra.substring(4, 1)); // 'yth' (troca automaticamente)

// Extrair nome de usuário de email
const email = 'usuario@email.com';
const usuario = email.substring(0, email.indexOf('@'));
console.log(usuario); // 'usuario'

// Extrair domínio
const dominio = email.substring(
  email.indexOf('@') + 1,
  email.lastIndexOf('.')
);
console.log(dominio); // 'email'
```

### .toLowerCase()

Converte a string para letras minúsculas.

```javascript
const str = 'JavaScript é Incrível';

// Converter para minúsculas
console.log(str.toLowerCase()); // 'javascript é incrível'

// Com diferentes tipos de caracteres
console.log('HELLO WORLD'.toLowerCase()); // 'hello world'
console.log('Hello World'.toLowerCase()); // 'hello world'
console.log('123 ABC'.toLowerCase()); // '123 abc'

// Com caracteres acentuados
console.log('JOÃO SILVA'.toLowerCase()); // 'joão silva'
console.log('CAFÉ'.toLowerCase()); // 'café'

// Casos práticos
const email = 'Usuario@Email.COM';
const emailNormalizado = email.toLowerCase();
console.log(emailNormalizado); // 'usuario@email.com'

// Validação case-insensitive
function corresponde(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}
console.log(corresponde('JavaScript', 'javascript')); // true

// Converter nome de arquivo
const arquivo = 'DOCUMENTO_IMPORTANTE.PDF';
console.log(arquivo.toLowerCase()); // 'documento_importante.pdf'

// Comparar senhas
const senha = 'MyPassword123';
const senhaInserida = 'MYPASSWORD123';
if (senha.toLowerCase() === senhaInserida.toLowerCase()) {
  console.log('Senhas correspondem'); // Não será executado (maiúsculas diferentes)
}
```

### .toUpperCase()

Converte a string para letras maiúsculas.

```javascript
const str = 'JavaScript é Incrível';

// Converter para maiúsculas
console.log(str.toUpperCase()); // 'JAVASCRIPT É INCRÍVEL'

// Com diferentes tipos de caracteres
console.log('hello world'.toUpperCase()); // 'HELLO WORLD'
console.log('Hello World'.toUpperCase()); // 'HELLO WORLD'
console.log('123 abc'.toUpperCase()); // '123 ABC'

// Com caracteres acentuados
console.log('joão silva'.toUpperCase()); // 'JOÃO SILVA'
console.log('café'.toUpperCase()); // 'CAFÉ'

// Casos práticos
const nome = 'João Silva';
const nomeCapitalizado = nome.toUpperCase();
console.log(nomeCapitalizado); // 'JOÃO SILVA'

// Formatação de título
const titulo = 'bem-vindo ao portal';
console.log(titulo.toUpperCase()); // 'BEM-VINDO AO PORTAL'

// Código de país
const pais = 'brasil';
const codigo = pais.toUpperCase(); // 'BRASIL'

// Gerar chave de acesso
function gerarChave(str) {
  const timestamp = Date.now();
  return (str.toUpperCase() + timestamp).toUpperCase().substring(0, 15);
}
console.log(gerarChave('usuario'));
```

### .toLocaleLowerCase()

Converte a string para letras minúsculas de acordo com a localidade atual.

```javascript
const str = 'ISTANBUL';

// Conversão em localidade padrão
console.log(str.toLocaleLowerCase()); // 'istanbul'

// Com localidade específica (turco tem 'İ' maiúsculo especial)
console.log(str.toLocaleLowerCase('tr-TR')); // 'istanbul'

// Comparar em diferentes localidades
const palavra = 'İstanbul'; // I turco
console.log(palavra.toLocaleLowerCase('en-US')); // 'i̇stanbul'
console.log(palavra.toLocaleLowerCase('tr-TR')); // 'istanbul'

// Normalizar email por localidade
const email = 'USUARIO@EMAIL.COM';
const emailNormalizado = email.toLocaleLowerCase('pt-BR');
console.log(emailNormalizado); // 'usuario@email.com'

// Comparação case-insensitive por localidade
function compararLocalizado(str1, str2, locale) {
  return str1.toLocaleLowerCase(locale) === str2.toLocaleLowerCase(locale);
}

console.log(compararLocalizado('JOÃO', 'joão', 'pt-BR')); // true
```

### .toLocaleUpperCase()

Converte a string para letras maiúsculas de acordo com a localidade atual.

```javascript
const str = 'istanbul';

// Conversão em localidade padrão
console.log(str.toLocaleUpperCase()); // 'ISTANBUL'

// Com localidade específica (turco tem 'I' minúsculo especial)
console.log(str.toLocaleUpperCase('tr-TR')); // 'İSTANBUL'

// Comparar em diferentes localidades
const palavra = 'i';
console.log(palavra.toLocaleUpperCase('en-US')); // 'I'
console.log(palavra.toLocaleUpperCase('tr-TR')); // 'İ' (I turco)

// Normalizar nome por localidade
const nome = 'joão silva';
const nomeCapitalizado = nome.toLocaleUpperCase('pt-BR');
console.log(nomeCapitalizado); // 'JOÃO SILVA'

// Gerar código por localidade
function gerarCodigo(str, locale) {
  return str.toLocaleUpperCase(locale).substring(0, 3);
}

console.log(gerarCodigo('brasil', 'pt-BR')); // 'BRA'
console.log(gerarCodigo('españa', 'es-ES')); // 'ESP'
```

### .toString()

Retorna uma string representando o objeto. Para strings primitivas, retorna a própria string.

```javascript
// String primitiva
const str1 = 'Hello';
console.log(str1.toString()); // 'Hello'
console.log(str1.toString() === str1); // true

// Objeto String
const str2 = new String('Hello');
console.log(str2.toString()); // 'Hello'
console.log(str2.toString() === 'Hello'); // true

// Útil para garantir que é string
function processar(valor) {
  const texto = valor.toString();
  return texto.toLowerCase();
}

console.log(processar('Hello')); // 'hello'
console.log(processar(123)); // '123'
console.log(processar(true)); // 'true'

// Em operações com arrays
const valores = ['a', 'b', 'c'];
console.log(valores.map(v => v.toString()).join(','));
// 'a,b,c'

// Converter número para string
const numero = 42;
const asString = numero.toString();
console.log(asString); // '42'
console.log(typeof asString); // 'string'

// Com base numérica (para números)
const dec = 255;
console.log(dec.toString(2)); // '11111111' (binário)
console.log(dec.toString(16)); // 'ff' (hexadecimal)
```

### .trim()

Remove espaços em branco do início e do fim da string.

```javascript
const str = '  Hello World  ';

// Remover espaços
console.log(str.trim()); // 'Hello World'
console.log(str.trim().length); // 11

// Espaços internos não são removidos
const str2 = '  Hello   World  ';
console.log(str2.trim()); // 'Hello   World'

// Diferentes tipos de espaço em branco
const str3 = '\t\nHello\r\n\t';
console.log(str3.trim()); // 'Hello'

// Casos práticos
const entrada = '  João Silva  ';
const nomeLimpo = entrada.trim();
console.log(nomeLimpo); // 'João Silva'

// Validação de entrada
function validarEmail(email) {
  const emailLimpo = email.trim().toLowerCase();
  return emailLimpo.includes('@');
}

console.log(validarEmail('  usuario@email.com  ')); // true

// Limpeza de dados
const dados = [' apple ', ' banana ', ' cherry '];
const limpos = dados.map(d => d.trim());
console.log(limpos); // [ 'apple', 'banana', 'cherry' ]
```

### .trimStart()

Remove espaços em branco do início da string.

```javascript
const str = '  Hello World  ';

// Remover espaços do início
console.log(str.trimStart()); // 'Hello World  '

// Aliases
console.log(str.trimLeft()); // 'Hello World  ' (trimLeft é alias para trimStart)

// Diferentes tipos de espaço
const str2 = '\t\n  Hello\n  ';
console.log(str2.trimStart()); // 'Hello\n  '

// Casos práticos
const codigo = '    function teste() {';
const linhaCorrigida = codigo.trimStart();
console.log(linhaCorrigida); // 'function teste() {'

// Remover indentação
const linhas = [
  '    const x = 1;',
  '    const y = 2;',
  '    console.log(x + y);'
];

const semaIndent = linhas.map(l => l.trimStart());
console.log(semaIndent);
// [ 'const x = 1;', 'const y = 2;', 'console.log(x + y);' ]
```

### .trimEnd()

Remove espaços em branco do final da string.

```javascript
const str = '  Hello World  ';

// Remover espaços do final
console.log(str.trimEnd()); // '  Hello World'

// Aliases
console.log(str.trimRight()); // '  Hello World' (trimRight é alias para trimEnd)

// Diferentes tipos de espaço
const str2 = '  Hello  \t\n  ';
console.log(str2.trimEnd()); // '  Hello'

// Casos práticos
const linhaCSV = 'nome,idade,cidade  ';
const linhaLimpa = linhaCSV.trimEnd();
console.log(linhaLimpa); // 'nome,idade,cidade'

// Remover quebras de linha do final
const texto = 'Parágrafo 1\nParágrafo 2\n\n';
const textoLimpo = texto.trimEnd();
console.log(textoLimpo); // 'Parágrafo 1\nParágrafo 2'

// Limpar output
const output = '████████░░░░░░░░░░\n  ';
console.log(output.trimEnd()); // '████████░░░░░░░░░░'
```

### .valueOf()

Retorna o valor primitivo da string. Para strings primitivas, retorna a própria string.

```javascript
// String primitiva
const str1 = 'Hello';
console.log(str1.valueOf()); // 'Hello'
console.log(str1.valueOf() === str1); // true

// Objeto String
const str2 = new String('Hello');
console.log(str2.valueOf()); // 'Hello'
console.log(str2.valueOf() === 'Hello'); // true

// Diferença entre objeto e primitiva
const str3 = 'hello';
const str4 = new String('hello');

console.log(str3 == str4); // true (comparação por valor)
console.log(str3 === str4); // false (tipos diferentes)
console.log(str3 === str4.valueOf()); // true

// Em operações matemáticas (coerção)
const num = '42';
const numObj = new String('42');

console.log(num + 8); // '428' (concatenação)
console.log(numObj + 8); // '428' (converte para primitiva)

// Converter para primitiva explicitamente
const valor = new String('100');
const primitivo = valor.valueOf();
console.log(typeof primitivo); // 'string'
console.log(Number(primitivo)); // 100 (agora pode converter para número)
```

### .isWellFormed()

Verifica se a string é bem formada (sem pontos de código Unicode inválidos).

```javascript
// String bem formada
const str1 = 'Hello';
console.log(str1.isWellFormed()); // true

// Com acentos
const str2 = 'Café';
console.log(str2.isWellFormed()); // true

// Com emojis
const str3 = 'Hello 😀';
console.log(str3.isWellFormed()); // true

// String com surrogat inválido (geralmente não ocorre em código normal)
const str4 = String.fromCharCode(0xD800); // Surrogat inválido
console.log(str4.isWellFormed()); // false

// Validar antes de processar
function processar(str) {
  if (!str.isWellFormed()) {
    console.log('String malformada detectada');
    return null;
  }
  return str.toUpperCase();
}

console.log(processar('Hello')); // 'HELLO'

// Validar entrada do usuário
function validarEntrada(entrada) {
  if (!entrada.isWellFormed()) {
    throw new Error('Entrada contém caracteres inválidos');
  }
  return entrada.trim();
}

console.log(validarEntrada('  João  ')); // 'João'
```

### .toWellFormed()

Retorna uma versão bem formada da string, substituindo pontos de código inválidos.

```javascript
// String bem formada (não muda)
const str1 = 'Hello';
console.log(str1.toWellFormed()); // 'Hello'

// String com surrogat inválido
const str2 = 'Hello' + String.fromCharCode(0xD800) + 'World';
console.log(str2.isWellFormed()); // false
console.log(str2.toWellFormed()); // Substitui surrogat inválido

// Com emojis válidos
const str3 = 'Olá 😀 Mundo';
console.log(str3.toWellFormed()); // 'Olá 😀 Mundo'

// Limpar string potencialmente corrompida
function limparString(str) {
  return str.toWellFormed();
}

// Garantir que processamento é seguro
function processarString(str) {
  const bem_formada = str.toWellFormed();
  return bem_formada.toLowerCase().trim();
}

console.log(processarString('  Café  ')); // 'café'
```

### [@@iterator]()

Retorna um iterador dos caracteres da string.

```javascript
const str = 'Hello';

// Usar com for...of
for (const char of str) {
  console.log(char);
}
// Output: H e l l o

// Acessar @@iterator explicitamente
const iterator = str[Symbol.iterator]();
console.log(iterator.next()); // { value: 'H', done: false }
console.log(iterator.next()); // { value: 'e', done: false }
console.log(iterator.next()); // { value: 'l', done: false }
console.log(iterator.next()); // { value: 'l', done: false }
console.log(iterator.next()); // { value: 'o', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// Spread operator usa @@iterator
const caracteres = [...str];
console.log(caracteres); // [ 'H', 'e', 'l', 'l', 'o' ]

// Destructuring usa @@iterator
const [primeiro, segundo, ...resto] = str;
console.log(primeiro); // 'H'
console.log(segundo); // 'e'
console.log(resto); // [ 'l', 'l', 'o' ]

// Converter para array
const array = Array.from(str);
console.log(array); // [ 'H', 'e', 'l', 'l', 'o' ]

// Obter caractere por índice
const chars = [...str];
console.log(chars[0]); // 'H'
console.log(chars[chars.length - 1]); // 'o'
```

---

## Propriedades de Instância

### .length

Retorna o comprimento da string (número de caracteres Unicode).

```javascript
const str1 = 'Hello';

// Obter tamanho
console.log(str1.length); // 5

// String vazia
const str2 = '';
console.log(str2.length); // 0

// Com acentos e caracteres especiais
const str3 = 'Café';
console.log(str3.length); // 4

// Com emojis (podem ocupar múltiplas unidades de código)
const str4 = 'Hello 😀';
console.log(str4.length); // 8 (H-e-l-l-o- -emoji-caractere extra)

// Importantes: emojis podem ter comprimento maior que 1
const emoji = '😀';
console.log(emoji.length); // 2

// Loop usando length
const palavra = 'Python';
for (let i = 0; i < palavra.length; i++) {
  console.log(palavra[i]);
}
// Output: P y t h o n

// Verificar se string está vazia
const entrada = '';
console.log(entrada.length === 0); // true
console.log(entrada.length > 0); // false

// Comparar tamanho
const str5 = 'JavaScript';
console.log(str5.length); // 10
console.log(str5.length > 5); // true

// Encontrar string mais longa
const palavras = ['maçã', 'banana', 'uva'];
const maisLonga = palavras.reduce((anterior, atual) => 
  atual.length > anterior.length ? atual : anterior
);
console.log(maisLonga); // 'banana'
```

---

## Dicas Importantes

### Strings são Imutáveis

Qualquer método que aparenta modificar a string na verdade retorna uma nova string:

```javascript
const str = 'Hello';
const modificada = str.toUpperCase();

console.log(str); // 'Hello' (original não muda)
console.log(modificada); // 'HELLO' (nova string)
```

### Métodos Obsoletos

Evite usar: `.anchor()`, `.big()`, `.blink()`, `.bold()`, `.fixed()`, `.fontcolor()`, `.fontsize()`, `.italics()`, `.link()`, `.small()`, `.strike()`, `.sub()`, `.substr()`, `.sup()`. Eles criam HTML e não são mais recomendados. Use CSS e DOM APIs em seu lugar.

### Comparação de Strings

| Necessidade | Método | Nota |
|---|---|---|
| Comparar igualdade | `===` | Exato |
| Comparar ignorando maiúscula | `.toLowerCase()` + `===` | Simples |
| Comparar por localidade | `.localeCompare()` | Respeita idioma |
| Conter substring | `.includes()` | Fácil de ler |
| Encontrar posição | `.indexOf()` | Retorna índice |
| Começar com | `.startsWith()` | Específico |
| Terminar com | `.endsWith()` | Específico |

### Métodos úteis para casos comuns

```javascript
// Dividir e processar
const csv = 'João,25,SP'.split(',');
console.log(csv); // [ 'João', '25', 'SP' ]

// Unir array em string
const palavras = ['Olá', 'mundo', 'JavaScript'];
console.log(palavras.join(' ')); // 'Olá mundo JavaScript'

// Capitalizar primeira letra
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize('jOÃO')); // 'João'

// Repetir padrão
console.log('ab'.repeat(3)); // 'ababab'

// Preencher
console.log('5'.padStart(3, '0')); // '005'

// Remover espaços
console.log('  hello  '.trim()); // 'hello'

// Substituir múltiplo
console.log('hello'.replaceAll('l', 'L')); // 'heLLo'

// Procurar por padrão
console.log('hello'.match(/l+/)); // [ 'll', ... ]
```
