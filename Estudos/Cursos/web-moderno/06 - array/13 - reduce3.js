// Criando um método personalizado chamado reduce2 para o objeto Array usando prototype
// O método reduce2 permite reduzir um array a um único valor, aplicando uma função acumuladora

Array.prototype.reduce2 = function(callback, valorInicial) {
    // Definindo o índice inicial
    // Se valorInicial for fornecido, o índice começa em 0
    // Se não for fornecido, o índice começa em 1 e o acumulador recebe o primeiro elemento do array
    const indiceInicial = valorInicial ? 0 : 1;
    let acumulador = valorInicial || this[0];

    // Percorrendo todos os elementos do array a partir do índice inicial
    for (let i = indiceInicial; i < this.length; i++) {
        // Chamando a função callback para acumular valores
        // Passando como parâmetros:
        // acumulador → valor acumulado até o momento
        // this[i] → elemento atual do array
        // i → índice atual
        // this → o próprio array
        acumulador = callback(acumulador, this[i], i, this);
    }

    // Retornando o valor final acumulado
    return acumulador;
};

// Função para somar dois valores
const soma = (total, valor) => total + valor;

// Array de números
const nums = [1, 2, 3, 4, 5, 6];

// Usando o método personalizado reduce2 para somar todos os valores do array
// O valor inicial fornecido é 21
console.log(nums.reduce2(soma, 21)); // Saída: 42