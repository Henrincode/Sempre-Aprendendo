// Funções em JavaScript são "First-Class Objects" (ou First-Class Citizens),
// o que significa que elas podem ser tratadas como dados. 
// Isso permite armazená-las em variáveis, passá-las como parâmetros e retorná-las de outras funções.

// Funções também podem ser "Higher-Order Functions",
// o que significa que podem receber outras funções como argumentos 
// ou retornar funções.

// Criar uma função de forma literal
function fun1() {} // Função declarada diretamente usando o comando function

// Armazenar uma função em uma variável
const fun2 = function () {}; // Função anônima atribuída a uma variável

// Armazenar uma função em um array
const array = [
    function (a, b) { return a + b; }, // Função que soma dois números
    fun1, // Referência à função fun1
    fun2  // Referência à função fun2
];
console.log(array[0](2, 3)); // Chama a primeira função do array, passando 2 e 3 como argumentos

// Armazenar uma função como atributo de um objeto
const obj = {};
obj.falar = function () { return 'Opa'; }; // Função atribuída ao atributo "falar"
console.log(obj.falar()); // Chama a função armazenada no atributo "falar"

// Passar uma função como parâmetro para outra função
function run(fun) {
    fun(); // Executa a função recebida como argumento
}

run(function () { console.log('Executando...'); }); // Passa uma função anônima como argumento

// Retornar ou conter uma função dentro de outra função
function soma(a, b) {
    // Retorna uma nova função
    return function (c) {
        console.log(a + b + c); // Soma os valores de a, b e c
    };
}

// Exemplo 1: Chama a função retornada imediatamente
soma(2, 3)(4); // (a=2, b=3) -> Retorna uma função que soma 4 -> Resultado: 9

// Exemplo 2: Armazena a função retornada em uma variável
const cincoMais = soma(2, 3); // Armazena a função retornada com a soma de a e b fixada
cincoMais(4); // Chama a função armazenada, passando 4 como argumento -> Resultado: 9
