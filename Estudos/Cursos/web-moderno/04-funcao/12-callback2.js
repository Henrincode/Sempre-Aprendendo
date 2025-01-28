// Exemplo de uso de callback em JavaScript

// Array de notas
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Sem callback: identificando notas menores que 7 manualmente
const notasBaixas1 = [];
for (let i in notas) { // Percorre os índices do array
    if (notas[i] < 7) { // Verifica se a nota atual é menor que 7
        notasBaixas1.push(notas[i]); // Adiciona a nota ao array de notas baixas
    }
}

console.log(notasBaixas1); // Exibe o resultado: [6.5, 5.2, 3.6]

// Com callback: utilizando a função filter para simplificar o código
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7; // Retorna apenas as notas menores que 7
});

console.log(notasBaixas2); // Exibe o resultado: [6.5, 5.2, 3.6]

// Com callback e arrow function: versão mais concisa
const notasBaixas3 = notas.filter(nota => nota < 7);

console.log(notasBaixas3); // Exibe o resultado: [6.5, 5.2, 3.6]