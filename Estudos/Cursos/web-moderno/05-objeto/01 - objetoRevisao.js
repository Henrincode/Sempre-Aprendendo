// Um objeto é uma coleção dinâmica de pares chave/valor
const produto = new Object(); // O operador "new" cria uma instância do objeto Object

// Adicionando propriedades ao objeto
produto.nome = 'Cadeira'; // Definição de uma propriedade diretamente
produto['marca do produto'] = 'Genérica'; // Definição usando notação de colchetes (útil para chaves com espaços)
produto.preco = 220;

console.log(produto);

// Removendo propriedades do objeto
delete produto.preco;
delete produto['marca do produto'];

console.log(produto);

// Definição de um objeto utilizando a notação literal
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [ // Um array de objetos dentro do objeto carro
        {
            nome: 'Junior',
            idade: 19
        },
        {
            nome: 'Ana',
            idade: 42
        }
    ],
    calcularValorSeguro: function () { // Método do objeto carro
        // Cálculo do seguro pode ser implementado aqui
    }
};

console.log(carro);

// Removendo propriedades do objeto
// delete carro.condutores; // Esta linha foi comentada, pois se deletarmos 'condutores', a linha 'console.log(carro.condutores.length)' dará erro

delete carro.proprietario.endereco; // Remove o endereço do proprietário
delete carro.calcularValorSeguro; // Remove o método do objeto

console.log(carro);
console.log(carro.condutores); // Ainda acessa a propriedade condutores, pois não foi deletada
console.log(carro.condutores.length); // Exibe o tamanho do array de condutores
