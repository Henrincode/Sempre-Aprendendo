// Exemplo de uso de operadores lógicos em JavaScript
// Esta função avalia as possibilidades de compras com base em dois trabalhos realizados
// Cada trabalho pode resultar em verdadeiro (true) ou falso (false)

// A função compras recebe dois parâmetros booleanos: trabalho1 e trabalho2
function compras(trabalho1, trabalho2) {
    // Operador lógico OU (||): Retorna true se pelo menos um dos trabalhos for verdadeiro
    const comprarSorvete = trabalho1 || trabalho2;

    // Operador lógico E (&&): Retorna true apenas se ambos os trabalhos forem verdadeiros
    const comprarTv50 = trabalho1 && trabalho2;

    // Operador lógico de diferença (!=): Retorna true se os valores forem diferentes
    // Também usado aqui para simular o comportamento do XOR lógico
    const comprarTv32 = trabalho1 != trabalho2;

    // Operador unário de negação (!): Inverte o valor lógico
    // Neste caso, manter saudável significa não comprar sorvete
    const manterSaudavel = !comprarSorvete;

    // Retorna um objeto com os resultados das decisões de compra
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}

// Exemplo de como usar um XOR bit a bit para simular o XOR lógico
// O operador ^ (bitwise XOR) compara cada bit dos operandos
// A dupla negação (!!) converte o resultado para um valor booleano
// const comprarTv32 = !!(trabalho1 ^ trabalho2); // Exemplo de uso do XOR bitwise

// Exibindo os resultados para diferentes combinações de trabalhos
console.log('01)', compras(true, true));   // Ambos os trabalhos realizados
console.log('02)', compras(true, false));  // Apenas o primeiro trabalho realizado
console.log('03)', compras(false, true));  // Apenas o segundo trabalho realizado
console.log('04)', compras(false, false)); // Nenhum dos trabalhos realizado