// Exemplo de como usar funções anônimas em JavaScript e Node.js

// Função anônima armazenada em uma constante
// Aqui criamos uma função que recebe dois parâmetros (x e y) e retorna a soma deles
const soma = function (x, y) {
    return x + y;
};

// Função que imprime o resultado de uma operação matemática
// Recebe dois números (a e b) e uma operação (por padrão, a função soma)
// Caso nenhuma operação seja passada, a função soma será usada
const imprimirResultado = function (a, b, operacao = soma) {
    console.log('console.log 01)', operacao(a, b)); // Chama a operação com os argumentos a e b
};

// Testando a função imprimirResultado com diferentes operações
imprimirResultado(3, 4); // Usa a operação padrão (soma)
imprimirResultado(3, 4, soma); // Passa explicitamente a função soma
imprimirResultado(3, 4, function (x, y) {
    return x - y; // Usa uma função anônima para subtração
});
imprimirResultado(3, 4, (x, y) => x * y); // Usa uma função arrow para multiplicação

// Criando um objeto chamado "pessoa"
// O objeto possui um método chamado "falar", que é uma função que imprime "Opa" no console
const pessoa = {
    falar() {
        console.log('console.log 02)', 'Opa'); // Exibe "Opa" no console
    }
};

// Chamando o método "falar" do objeto pessoa
pessoa.falar();