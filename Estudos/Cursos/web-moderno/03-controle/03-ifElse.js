// Exemplo de uso da estrutura if (se) e else (senão)

const imprimirResultado = function (nota) {
    // Verifica se a nota é maior ou igual a 7
    if (nota >= 7) {
        console.log('01) Aprovado');
    } 
    // Se não for maior ou igual a 7, exibe "Reprovado!"
    else {
        console.log('02) Reprovado!');
    }
};

// Testando a função com diferentes valores
imprimirResultado(10); // 10 é maior que 7, então imprime "Aprovado"
imprimirResultado(4);  // 4 é menor que 7, então imprime "Reprovado!"
imprimirResultado('Epa!'); 
// O valor 'Epa!' não é um número, mas o JavaScript ainda tenta comparar com 7, o que pode gerar um comportamento indesejado.