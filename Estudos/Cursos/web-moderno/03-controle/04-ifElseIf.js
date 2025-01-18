// Exemplo de uso das estruturas de controle if (se), else if (se não se) e else (se não)
// O objetivo é classificar uma nota recebida de acordo com faixas pré-definidas.

// Função que avalia a nota e imprime o resultado
const imprimirResultado = function (nota) {
    // Verifica se a nota é maior ou igual a 9 e menor ou igual a 10
    if (nota >= 9 && nota <= 10) {
        console.log('Quadro de Honra');
    } 
    // Verifica se a nota é maior ou igual a 7 e menor que 9
    else if (nota >= 7 && nota < 9) {
        console.log('Aprovado');
    } 
    // Verifica se a nota é maior ou igual a 4 e menor que 7
    else if (nota >= 4 && nota < 7) {
        console.log('Recuperação');
    } 
    // Verifica se a nota é maior ou igual a 0 e menor que 4
    else if (nota >= 0 && nota < 4) {
        console.log('Reprovado');
    } 
    // Caso a nota não esteja em nenhuma das faixas acima
    else {
        console.log('Nota inválida');
    }
};

// Chamadas da função com diferentes valores para testar os casos
imprimirResultado(10);   // Quadro de Honra
imprimirResultado(8.9);  // Aprovado
imprimirResultado(6.55); // Recuperação
imprimirResultado(2.3);  // Reprovado
imprimirResultado(-1);   // Nota inválida
imprimirResultado(11);   // Nota inválida
