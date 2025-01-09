// Uma função é um bloco de código que pode receber parâmetros, executar ações e/ou retornar valores

// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3); // "5"
imprimirSoma(2); // "NaN" (JS tenta somar com 'undefined')
imprimirSoma(2, 10, 4); // "12" (soma os dois primeiros e ignora o restante)
imprimirSoma(); // "NaN" (parâmetros ausentes)

// Função com retorno
function soma(a, b = 1) { // 'b' tem valor padrão de 1
    return a + b;
}

console.log(soma(2, 3)); // "5"
console.log(soma(2)); // "3" (usa o valor padrão de 'b')
console.log(soma()); // "NaN" (falta valor para 'a')
