// Exemplo de função com ou sem retorno em JavaScript
// Esta função calcula a área de um retângulo com base na largura e altura fornecidas.
function area(largura, altura) {
    // Multiplica a largura pela altura para obter a área
    const area = largura * altura;

    // Verifica se a área é maior que 20
    if (area > 20) {
        // Se a área for maior que 20, exibe uma mensagem informando o limite excedido
        console.log(`Valor acima do permitido: ${area}m2`);
    } else {
        // Caso contrário, retorna o valor da área
        return area;
    }
}

// Exemplos de chamadas da função 'area'

// Caso válido: largura e altura são 2. Resultado esperado: 4
console.log(area(2, 2)); 

// Caso inválido: apenas largura é fornecida. Resultado: NaN (multiplicação com 'undefined')
console.log(area(2)); 

// Caso inválido: nenhum parâmetro fornecido. Resultado: NaN (multiplicação com 'undefined')
console.log(area()); 

// Excesso de argumentos: apenas os dois primeiros são considerados (largura e altura). Resultado esperado: 6
console.log(area(2, 3, 17, 22, 44)); 

// Caso onde a área excede o limite. Resultado: mensagem "Valor acima do permitido"
console.log(area(5, 5)); 
