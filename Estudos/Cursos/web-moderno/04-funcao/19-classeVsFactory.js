// Exemplo de classe vs factory

// Definindo a classe Pessoa com um construtor para inicializar o nome
class Pessoa {
    constructor(nome) {
        this.nome = nome; // Atribuindo o nome ao objeto
    };

    // Método para a pessoa se apresentar
    falar() {
        console.log(`Meu nome é ${this.nome}.`); // Exibindo o nome no console
    };
};

// Criando uma instância de Pessoa e chamando o método 'falar'
const p1 = new Pessoa('João');
p1.falar(); // Saída: "Meu nome é João."

// Função factory para criar objetos com o método 'falar'
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}.`) // A função 'falar' usa o nome fornecido
    };
};

// Criando uma pessoa com a função factory e chamando o método 'falar'
const p2 = criarPessoa('João');
p2.falar(); // Saída: "Meu nome é João."