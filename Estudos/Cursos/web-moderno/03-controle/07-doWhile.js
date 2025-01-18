// Exemplo de uso do laço Do/While (faça enquanto)

// Função para gerar um número aleatório dentro de um intervalo (min, max)
function aleatorio(min = 0, max = 100) {
    if (min > max) {
        [min, max] = [max, min]; // Se min for maior que max, troca os valores
    };
    const valor = Math.random() * (max - min) + min; // Gera um número decimal aleatório dentro do intervalo
    return Math.round(valor); // Arredonda o número para o inteiro mais próximo
}

let opcao; // Como o Do/While vai primeiro inserir o valor da variavel apra depois comparar não é necessário atribuir valor aqui, somente inicair a variável

// Mesmo que a contição já tenha sido atendida o Do/While vai executar o bloco ao menos uma vez
do {
    opcao = aleatorio(-1, 10);opcao
    console.log(`Opção escolhida foi ${opcao}`);
} while (opcao !== -1);