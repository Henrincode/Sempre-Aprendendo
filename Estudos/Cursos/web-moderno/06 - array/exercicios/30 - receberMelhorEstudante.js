// Elabore uma função que receba um objeto com estudantes e suas notas. As notas de cada estudante estarão num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com os atributos nome e média, que indica o aluno que teve o melhor desempenho nas notas.

// Exemplo:

// receberMelhorEstudante({
//     Joao: [8, 7.6, 8.9, 6], // média 7.625
//     Mariana: [9, 6.6, 7.9, 8], // média 7.875
//     Carla: [7, 7, 8, 9] // média 7.75
// }) // retornará { nome: "Mariana", media: 7.875 }

// Recebe um objeto onde as chaves são nomes e os valores são arrays de notas
const receberMelhorEstudante = (objEstudantes) => {
    // Objeto inicial para armazenar o melhor estudante e sua média
    let objMelhor = { nome: '', media: 0 };

    // Iterando sobre cada chave (nome) do objeto usando for...in
    for (let nome in objEstudantes) {
        const notas = objEstudantes[nome]; // Array de notas do estudante atual

        // Calculando a soma das notas usando reduce
        const somaNotas = notas.reduce((acc, nota) => acc + nota, 0);
        // Calculando a média dividindo a soma pelo número de notas
        const media = somaNotas / notas.length;

        // Se a média atual for maior que a maior média registrada até agora
        if (media > objMelhor.media) {
            // Atualiza o objeto com o nome e a média do estudante atual
            objMelhor = { nome: nome, media: media };
        }
    }

    // Exibindo o resultado no console
    console.log(objMelhor);
};

// Testando a função com um objeto de estudantes e suas notas
receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],    // Média: 7.625
    Mariana: [9, 6.6, 7.9, 8], // Média: 7.875
    Carla: [7, 7, 8, 9]        // Média: 7.75
});