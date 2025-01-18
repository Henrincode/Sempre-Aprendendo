// Exemplo de uso do laço While (enquanto) para repetir ações até uma condição ser satisfeita

// Função para gerar um número aleatório dentro de um intervalo (min, max)
function aleatorio(min = 0, max = 100) {
    if (min > max) {
        [min, max] = [max, min]; // Se min for maior que max, troca os valores
    };
    const valor = Math.random() * (max - min) + min; // Gera um número decimal aleatório dentro do intervalo
    return Math.round(valor); // Arredonda o número para o inteiro mais próximo
}

let opcao = 0;

// Loop que continuará rodando até que a opção seja igual a -1
while (opcao !== -1) {
    opcao = aleatorio(-1, 10); // Chama a função aleatorio e armazena o valor gerado na variável opcao
    console.log(`Opção escolhida foi ${opcao}`); // Exibe a opção gerada no console
};