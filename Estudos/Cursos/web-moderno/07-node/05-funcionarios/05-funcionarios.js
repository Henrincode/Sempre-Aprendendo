// Importando o módulo axios para fazer requisições HTTP
const axios = require('axios');

// URL do arquivo JSON com a lista de funcionários
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

// Fazendo uma requisição GET para obter os dados do arquivo JSON
axios.get(url).then(response => {
    // Armazenando os funcionários retornados na variável
    const funcionarios = response.data;
    
    // Função para filtrar apenas funcionárias do gênero feminino
    const genero = funcionario => funcionario.genero === 'F';
    
    // Função para filtrar apenas funcionárias da China
    const pais = funcionario => funcionario.pais === 'China';
    
    // Função para encontrar a funcionária com o menor salário
    const menorSalario = (menor, atual) => atual.salario < menor.salario ? atual : menor;
    
    // Aplicando os filtros e a redução para encontrar a funcionária chinesa com menor salário
    const chinesaMenorSalario = funcionarios
        .filter(genero) // Filtra apenas funcionárias do gênero feminino
        .filter(pais)   // Filtra apenas funcionárias da China
        .reduce(menorSalario); // Reduz o array para encontrar a de menor salário

    // Exibindo o resultado
    console.log(`A chinesa com menor salário é ${chinesaMenorSalario.nome}, ficha:`);
    console.log(chinesaMenorSalario);
});