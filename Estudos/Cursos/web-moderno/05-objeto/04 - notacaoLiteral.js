// Exemplo de criação de objetos utilizando notação literal

const a = 1, b = 2, c = 3;

// Maneiras diferentes de criar um objeto com propriedades que possuem o mesmo nome das variáveis
const obj1 = { a: a, b: b, c: c }; // Forma tradicional
const obj2 = { a, b, c }; // Forma simplificada (shorthand)
console.log(obj1, obj2);

// Criando um objeto com nome de propriedade dinâmica
const nomeAttr = 'nota';
const valorAttr = 7.87;

const obj3 = {};
obj3[nomeAttr] = valorAttr; // Atribuindo dinamicamente um valor a uma chave
console.log(obj3);

const obj4 = { [nomeAttr]: valorAttr }; // Criando um objeto com chave dinâmica de forma simplificada
console.log(obj4);

// Criando métodos dentro de um objeto
const obj5 = {
    funcao1: function() {
        // Forma tradicional de declarar uma função dentro de um objeto
    },
    funcao2() {
        // Sintaxe reduzida para métodos dentro de objetos (shorthand method)
    }
};

console.log(obj5);