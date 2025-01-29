// Exemplos de tipos de declaração de funções

console.log(soma(3, 4)); 
// Function declaration: 
// O interpretador de JS carrega todas as declarações de função antes
// de executar o código linha a linha.
function soma(x, y) {
    return x + y;
}

// Function expression: 
// A função é carregada pelo interpretador somente quando o código
// chega na linha onde a função foi definida.
const sub = function (x, y) {
    return x - y;
};
console.log(sub(3, 4));

// Named function expression:
// Semelhante à function expression, mas com a vantagem de que,
// em caso de erro, o nome da função aparece no debug 
// ao invés de "anonymous" (função anônima).
const mult = function mult(x, y) {
    return x * y;
};