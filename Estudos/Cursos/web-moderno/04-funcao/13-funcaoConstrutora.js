// Exemplo de função construtora em JavaScript

// Uma função construtora é utilizada para criar múltiplos objetos com a mesma estrutura.
// Em JavaScript, ela funciona como uma "classe", permitindo a criação de instâncias.
// Convenciona-se iniciar o nome de funções construtoras com letra maiúscula.

function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo privado
    // Essa variável não é acessível diretamente de fora da função construtora.
    let velocidadeAtual = 0;

    // Método público
    // Permite aumentar a velocidade do carro, respeitando o limite máximo.
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    };

    // Método público
    // Retorna a velocidade atual do carro.
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    };
}

// Criando instâncias da função construtora Carro
const uno = new Carro(); // Cria um carro com velocidade máxima padrão de 200 km/h
uno.acelerar(); // Acelera uma vez
console.log(uno.getVelocidadeAtual()); // Exibe a velocidade atual do Uno

const ferrari = new Carro(350, 20); // Cria um carro com velocidade máxima de 350 km/h e incremento de 20 km/h
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual()); // Exibe a velocidade atual da Ferrari

// Verificando os tipos
console.log(typeof Carro); // Exibe "function", pois Carro é uma função construtora
console.log(typeof ferrari); // Exibe "object", pois ferrari é uma instância da função Carro