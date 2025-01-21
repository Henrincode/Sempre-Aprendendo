// Exemplo de comparação entre função normal e função arrow
// Funções arrow (arrow functions) têm um comportamento específico para o `this`.
// O `this` em funções arrow é lexical, ou seja, ele é definido com base no local
// onde a função foi escrita e não muda dependendo do contexto de execução.

// Função normal para calcular o dobro
let dobro = function (a) {
    return 2 * a; // Retorna o dobro do parâmetro `a`
};

// Reescrevendo a mesma função usando arrow function
dobro = (a) => {
    return 2 * a; // Retorna o dobro do parâmetro `a`
};

// Reduzindo ainda mais a função com uma sintaxe simplificada
// Quando há apenas um parâmetro, os parênteses podem ser omitidos.
// Além disso, quando a função contém apenas uma linha com `return`, o `return` é implícito.
dobro = a => 2 * a;

console.log(dobro(Math.PI)); // Mostra no console o dobro de PI (~6.28)

// Exemplo de função que retorna uma saudação
let ola = function () {
    return 'Olá'; // Retorna a string 'Olá'
};

// Reescrevendo a mesma função como uma arrow function sem parâmetros
ola = () => 'Olá'; // Mesmo sem parâmetros, é obrigatório usar parênteses ()

// Outra possibilidade, menos comum, é usar um sublinhado (_) como parâmetro:
// Essa prática é usada por alguns programadores para indicar que o parâmetro não será utilizado.
ola = _ => 'Olá'; // Aqui `_` é tecnicamente um parâmetro, mas pode ser ignorado.

// Chamando a função para exibir a saudação
console.log(ola());