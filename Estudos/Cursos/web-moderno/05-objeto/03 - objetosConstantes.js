// Em JavaScript, quando usamos 'const' para criar um objeto, o que é constante é a referência para o endereço de memória onde o objeto está armazenado.
// Isso significa que podemos alterar os atributos do objeto, mas não podemos reatribuir a variável para um novo objeto.

// Exemplo:
const pessoa = { nome: 'João' };
pessoa.nome = 'Pedro'; // Aqui, o objeto original não foi substituído, apenas o valor do atributo 'nome' foi alterado.
console.log(pessoa); // { nome: 'Pedro' }

// Se tentarmos reatribuir a variável para um novo objeto, ocorrerá um erro, pois 'pessoa' é uma constante.
// pessoa = { nome: 'Ana' }; // Isso gera um erro: "Assignment to constant variable"

// Para tornar um objeto completamente imutável, usamos Object.freeze():
Object.freeze(pessoa); // Agora o objeto e seus atributos não podem mais ser alterados.

pessoa.nome = 'Maria'; // Não gera erro, mas também não altera o valor.
pessoa.endereco = 'Rua ABC'; // Não cria um novo atributo, pois o objeto está congelado.
delete pessoa.nome; // Também não deleta o atributo.

console.log(pessoa.nome); // 'Pedro'
console.log(pessoa); // { nome: 'Pedro' }

// Criando um objeto já imutável desde o início:
const pessoaConstante = Object.freeze({ nome: 'João' });
console.log(pessoaConstante); // { nome: 'João' }