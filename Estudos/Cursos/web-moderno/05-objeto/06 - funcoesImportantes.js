// Exemplo de funções importantes do objeto Object em JavaScript

const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
};

// Object.keys retorna um array com as chaves do objeto
console.log(Object.keys(pessoa)); // [ 'nome', 'idade', 'peso' ]

// Object.values retorna um array com os valores das propriedades do objeto
console.log(Object.values(pessoa)); // [ 'Rebeca', 2, 13 ]

// Object.entries retorna um array contendo arrays com [chave, valor] de cada propriedade
console.log(Object.entries(pessoa));

// Percorrendo o array retornado por Object.entries usando forEach
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

// Object.defineProperty define uma nova propriedade ou modifica uma existente com configurações específicas
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Define se a propriedade será listada em Object.keys()
    writable: false,  // Define se a propriedade pode ser modificada
    value: '01/01/2019' // Valor da propriedade
});

// Tentando modificar a propriedade 'dataNascimento' (não será alterada porque writable: false)
pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento); // '01/01/2019'

// Object.keys agora inclui 'dataNascimento' porque enumerable: true
console.log(Object.keys(pessoa));

// Object.assign copia as propriedades de um ou mais objetos para um objeto destino
const dest = { a: 1 };
const o1 =   { b: 2 };
const o2 =   { c: 3, a: 4 }; // Se houver chaves repetidas, o último objeto sobrescreve os anteriores
const obj = Object.assign(dest, o1, o2);

// Object.freeze impede qualquer modificação no objeto
Object.freeze(obj);
obj.c = 1234; // Tentativa de alteração será ignorada
console.log(obj); // { a: 4, b: 2, c: 3 }