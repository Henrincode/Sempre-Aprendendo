// Destructuring em funções utilizando arrays

// A função 'rand' recebe um array com dois valores opcionais: 'min' e 'max'.
// Se o array estiver vazio ou os valores não forem passados, os valores padrão serão 0 e 1000.
function rand([min = 0, max = 1000] = []) {
    // Verifica se 'min' é maior que 'max'. Se for, inverte os valores.
    if (min > max) [min, max] = [max, min];

    // Gera um número aleatório entre 'min' e 'max', arredondando o valor.
    const valor = Math.random() * (max - min) + min;
    return Math.round(valor);
}

// Exemplos de uso da função rand:
// Gera um valor aleatório entre 40 e 50
console.log(rand([50, 40]));
// Gera um valor aleatório entre 0 e 982 (valor mínimo não foi passado)
console.log(rand([982]));
// Gera um valor aleatório entre 0 e 10 (valor mínimo não foi passado)
console.log(rand([, 10]));
// Gera um valor aleatório entre 0 e 1000 (nenhum valor foi passado)
console.log(rand([]));
// Gera um valor aleatório entre 0 e 1000 (nenhum valor foi passado)
console.log(rand());
