// Exemplo de uso do laço Do/While (faça enquanto)

// Função para gerar um número aleatório dentro de um intervalo (min, max)
function aleatorio(min = 0, max = 100) {
    // Garante que o valor de 'min' será menor que 'max', caso contrário, os valores são trocados
    if (min > max) {
        [min, max] = [max, min]; // Se min for maior que max, troca os valores
    }
    
    // Gera um número decimal aleatório dentro do intervalo e o arredonda para o inteiro mais próximo
    const valor = Math.random() * (max - min) + min;
    return Math.round(valor); // Retorna o valor arredondado
}

let opcao; // Inicializa a variável 'opcao', sem atribuir um valor inicial

// O laço 'do/while' sempre executa o bloco de código pelo menos uma vez antes de verificar a condição
do {
    // Chama a função aleatorio para definir a 'opcao', que será gerada aleatoriamente entre -1 e 10
    opcao = aleatorio(-1, 10); 
    console.log(`Opção escolhida foi ${opcao}`); // Exibe a opção gerada no console
} while (opcao !== -1); // Continua repetindo até que a opção gerada seja -1
