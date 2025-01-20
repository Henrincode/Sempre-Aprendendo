// Exemplo de antigas estratégias para gerar valores padrão em funções

// Estratégia 1: Usar o operador lógico `||` para definir valores padrão
function soma1(a, b, c) {
    // Se os argumentos não forem passados ou forem avaliados como "falsos" (false), 
    // o valor 1 será atribuído como padrão.
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

// Problema dessa estratégia:
// Caso seja passado o valor 0 como argumento, ele será considerado "false"
// e substituído pelo valor padrão (1), mesmo que 0 seja um valor válido.
console.log(soma1());          // Saída: 3 (1 + 1 + 1)
console.log(soma1(3));         // Saída: 5 (3 + 1 + 1)
console.log(soma1(1, 2, 3));   // Saída: 6 (1 + 2 + 3)
console.log(soma1(0, 0, 0));   // Saída: 3 (1 + 1 + 1) -> Problema: 0 foi ignorado

// Estratégias 2, 3 e 4: Métodos alternativos para gerar valores padrão
function soma2(a, b, c) {
    // Estratégia 1: Verifica se o argumento `a` é diferente de `undefined`
    a = a !== undefined ? a : 1;

    // Estratégia 2: Verifica se o índice 1 existe no objeto `arguments` (parâmetros da função)
    b = 1 in arguments ? b : 1;

    // Estratégia 3: Usa `isNaN` para verificar se o valor de `c` é um número válido
    c = isNaN(c) ? 1 : c;

    return a + b + c;
}

console.log(soma2());          // Saída: 3 (1 + 1 + 1)
console.log(soma2(3));         // Saída: 5 (3 + 1 + 1)
console.log(soma2(1, 2, 3));   // Saída: 6 (1 + 2 + 3)
console.log(soma2(0, 0, 0));   // Saída: 0 (0 + 0 + 0) -> Correto

// Estratégia moderna: Uso de valores padrão do ES2015 (ES6)
function soma3(a = 1, b = 1, c = 1) {
    // Atribui valores padrão diretamente na definição dos parâmetros
    return a + b + c;
}

console.log(soma3());          // Saída: 3 (1 + 1 + 1)
console.log(soma3(3));         // Saída: 5 (3 + 1 + 1)
console.log(soma3(1, 2, 3));   // Saída: 6 (1 + 2 + 3)
console.log(soma3(0, 0, 0));   // Saída: 0 (0 + 0 + 0) -> Correto

// Explicação do ES2015:
// Ao definir valores padrão diretamente nos parâmetros da função, o problema de 0 ser tratado como "falsy" é resolvido.
// Essa abordagem é mais limpa, moderna e recomendada para evitar ambiguidades.