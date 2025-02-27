// JSON (JavaScript Object Notation) é um formato de troca de dados leve e amplamente utilizado para armazenar e transportar informações.
// Ele é baseado na sintaxe de objetos do JavaScript, mas pode ser usado por diversas linguagens.

// JSON.stringify - Converte um objeto para uma string JSON (formato de texto).
// Propriedades que são funções ou símbolos são ignoradas no processo de conversão.
const obj = { a: 1, b: 2, c: 3, soma() { return this.a + this.b + this.c }};
console.log(JSON.stringify(obj)); // Saída: {"a":1,"b":2,"c":3}

// A função "soma" foi ignorada porque JSON não suporta a conversão de funções.

// JSON.parse - Converte uma string JSON válida de volta para um objeto.
// A string deve estar no formato correto, com aspas duplas para as chaves e valores do tipo string.

// Exemplos inválidos (comentados porque geram erro):
// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")); // Chaves sem aspas duplas não são aceitas.
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")); // Aspas simples não são aceitas no formato JSON.

// Exemplo válido:
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'));

// JSON suporta vários tipos de dados como números, strings, booleanos, objetos e arrays:
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'));