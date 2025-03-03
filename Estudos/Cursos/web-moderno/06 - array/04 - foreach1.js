// Exemplo de uso do método forEach em JavaScript

// O método forEach percorre todos os elementos de um array e executa uma função de callback para cada elemento.
// Ele recebe até três parâmetros: o valor atual (elemento), o índice e o próprio array (opcional).

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

// Percorrendo o array com função anônima, recebendo o nome e o índice como parâmetros
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`); // Mostra o índice (somado com 1) e o nome
});

// Percorrendo o array com função arrow, apenas com o nome como parâmetro
aprovados.forEach(nome => console.log(nome));

// Definindo uma função separada para exibir os aprovados
const exibirAprovados = aprovados => console.log(aprovados);

// Passando a função como argumento para o forEach
aprovados.forEach(exibirAprovados);