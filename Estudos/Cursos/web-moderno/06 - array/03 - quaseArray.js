// Exemplo de como simular um array utilizando um objeto

// Criando um objeto que simula um array, onde as chaves numéricas representam os índices
const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' };
console.log(quaseArray); // Exibe o objeto com as propriedades numéricas

// Definindo uma propriedade personalizada no objeto para implementar o método toString()
// Object.defineProperty() permite definir propriedades com características específicas
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) }, // Retorna os valores das propriedades do objeto como um array
    enumerable: false // A propriedade não será listada em laços como for...in ou Object.keys()
});

// Acessando diretamente uma propriedade pelo índice (igual ao comportamento de arrays)
console.log(quaseArray[0]); // Rafael

// Criando um array convencional para comparação
const meuArray = ['Rafael', 'Ana', 'Bia'];

// Chamando o método toString() no objeto simulado e exibindo a diferença entre ele e o array real
console.log(quaseArray.toString(), meuArray); 