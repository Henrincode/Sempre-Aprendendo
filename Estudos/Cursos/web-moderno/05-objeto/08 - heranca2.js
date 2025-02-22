// Exemplo de cadeia de protótipos (prototype chain)

// Evite modificar o Object.prototype, pois pode causar efeitos colaterais no código
Object.prototype.attr0 = '0'; // Apenas para exemplo, não recomendado

const avo = { attr1: 'A' }; // Objeto "avô"
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }; // Herda de "avô"
const filho = { __proto__: pai, attr3: 'C' }; // Herda de "pai" e sobrescreve attr3

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);
// Saída: 0 A B C

// Objeto base para veículos
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
};

// Criando objetos específicos que herdam de "carro"
const ferrari = {
    modelo: 'F40',
    velMax: 324 // Sobrescreve a velocidade máxima do protótipo
};

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`; // Usa "super" para acessar o método do protótipo
    }
};

// Definindo "carro" como protótipo de "ferrari" e "volvo"
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari); // Exibe as propriedades próprias de "ferrari"
console.log(volvo); // Exibe as propriedades próprias de "volvo"

volvo.acelerarMais(100);
console.log(volvo.status()); // Saída: V40: 100Km/h de 200Km/h

ferrari.acelerarMais(300);
console.log(ferrari.status()); // Saída: 300Km/h de 324Km/h