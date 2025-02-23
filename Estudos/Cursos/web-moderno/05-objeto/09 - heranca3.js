// Exemplo de herança utilizando Object.create
const pai = { nome: 'Pedro', corCabelo: 'preto' };

// Criando um novo objeto que herda de "pai"
const filha1 = Object.create(pai); // Object.create cria um novo objeto já apontando para o protótipo "pai"
filha1.nome = 'Ana'; // Adicionando uma propriedade própria ao objeto "filha1"
console.log(filha1.corCabelo); // Como "corCabelo" não está diretamente em "filha1", ele busca no protótipo "pai"

// Criando outro objeto com propriedades definidas explicitamente
const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
    // writable: false -> impede que o valor seja alterado
    // enumerable: true -> permite que a propriedade seja listada nos loops
});

console.log(filha2.nome); // Exibe "Bia"
filha2.nome = 'Carla'; // Tentativa de alterar "nome" (não terá efeito, pois writable é false)
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

// Listando as chaves do objeto (apenas as próprias, não as herdadas)
console.log(Object.keys(filha1)); // Apenas propriedades próprias de "filha1"
console.log(Object.keys(filha2)); // Apenas propriedades próprias de "filha2"

// Percorrendo todas as propriedades, incluindo as herdadas
for (let key in filha2) {
    if (filha2.hasOwnProperty(key)) {
        // Se for uma propriedade própria do objeto, exibe normalmente
        console.log(key);
    } else {
        // Se for uma propriedade herdada, exibe indicando que veio por herança
        console.log(`Por herança: ${key}`);
    }
}