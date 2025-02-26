// Object.preventExtensions "Object.prevenirExtensoes" - Impede a adição de novos atributos ao objeto, 
// mas permite modificar e excluir os existentes.
const produto = Object.preventExtensions({
    nome: 'Qualquer', 
    preco: 1.99, 
    tag: 'promoção'
});

console.log('Extensível:', Object.isExtensible(produto)); // "Object.eExtensivel" Verifica se o objeto pode ser estendido

produto.nome = 'Borracha'; // Modificação permitida
produto.descricao = 'Borracha escolar branca'; // Adição não permitida (não terá efeito)
delete produto.tag; // Exclusão permitida

console.log(produto); // { nome: 'Borracha', preco: 1.99 }

// Object.seal "Object.selar" - "Sela" o objeto, impedindo a adição ou remoção de atributos, 
// mas permite modificar os já existentes.
const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa);

console.log('Selado:', Object.isSealed(pessoa)); // "Object.estaSelado" Verifica se o objeto está selado

pessoa.sobrenome = 'Silva'; // Adição não permitida
delete pessoa.nome; // Exclusão não permitida
pessoa.idade = 29; // Modificação permitida

console.log(pessoa); // { nome: 'Juliana', idade: 29 }

// Object.freeze "Object.congelar" - "Congela" o objeto, tornando-o completamente imutável. 
// Não é possível adicionar, modificar ou excluir atributos.
const carro = { marca: 'Toyota', modelo: 'Corolla' };
Object.freeze(carro);

console.log('Congelado:', Object.isFrozen(carro)); // "Object.estaCongelado" Verifica se o objeto está congelado

carro.ano = 2024; // Adição não permitida
carro.modelo = 'Civic'; // Modificação não permitida
delete carro.marca; // Exclusão não permitida

console.log(carro); // { marca: 'Toyota', modelo: 'Corolla' }