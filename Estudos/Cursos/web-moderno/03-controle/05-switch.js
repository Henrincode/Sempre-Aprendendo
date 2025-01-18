// Exemplo de uso do Switch (escolha)

// O Switch pode ser utilizado tanto com blocos de código (com {}) quanto sem eles.

const imprimirResultado = function (nota) {
    // O Math.floor é usado para arredondar a nota para baixo.
    switch (Math.floor(nota)) {
        case 10: // Caso a nota arredondada seja 10, o código segue para o próximo case, por isso, sem o break, executa o próximo também.
        case 9:
            console.log('Quadro de Honra');
            break;
        case 8: case 7:
            console.log('Aprovado');
            break;
        case 6: case 5: case 4:
            console.log('Recuperação');
            break;
        case 3: case 2: case 1: case 0:
            console.log('Reprovado');
            break;
        default:
            // O 'default' é executado quando nenhum dos casos anteriores é atendido, geralmente para lidar com entradas inesperadas.
            console.log('Nota inválida');
    }
};

// Testando a função com diferentes notas
imprimirResultado(10);   // Quadro de Honra
imprimirResultado(8.9);  // Aprovado
imprimirResultado(6.55); // Recuperação
imprimirResultado(2.3);  // Reprovado
imprimirResultado(-1);   // Nota inválida
imprimirResultado(11);   // Nota inválida