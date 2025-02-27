// Classe Avo, que representa a classe base (ancestral)
class Avo {
    constructor(sobrenome) {
        // O sobrenome é atribuído ao objeto Avo
        this.sobrenome = sobrenome;
    };
};

// Classe Pai, que herda da classe Avo
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        // Chama o construtor da classe Avo para inicializar o sobrenome
        super(sobrenome);
        // Define a profissão do pai, com valor padrão 'Professor'
        this.profissao = profissao;
    };
};

// Classe Filho, que herda da classe Pai
class Filho extends Pai {
    constructor() {
        // Chama o construtor da classe Pai, passando o sobrenome 'Silva'
        super('Silva');
    };
};

// Criando uma instância da classe Filho
const filho = new Filho();
// Exibe no console as propriedades do objeto filho
console.log(filho);