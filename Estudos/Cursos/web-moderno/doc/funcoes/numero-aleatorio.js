// A função abaixo gera um número aleatório entre um valor mínimo e máximo.
// O valor mínimo tem um valor padrão de 0 e o valor máximo tem um valor padrão de 1000.

function numeroAleatorio(min = 0, max = 1000) {
    // Ordem das operações aritméticas:
    // 1. Primeiro, calculamos o intervalo: (max - min).
    // 2. Em seguida, geramos um número aleatório com Math.random(), que retorna um número entre 0 e 1.
    // 3. Multiplicamos o número aleatório pelo intervalo (max - min) para escalá-lo ao tamanho do intervalo desejado.
    // 4. Finalmente, somamos o valor de 'min' para ajustar o número ao intervalo [min, max].
    
    const valor = Math.random() * (max - min) + min;
    
    // Math.round() arredonda o número gerado para o inteiro mais próximo.
    return Math.round(valor);
}

// Exemplo de uso da função:
// Gera um número aleatório entre 0 e 100.
console.log(numeroAleatorio(0, 100)); 
