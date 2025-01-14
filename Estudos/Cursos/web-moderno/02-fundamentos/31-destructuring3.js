// Destructuring em funções usando objetos
// O destructuring é uma técnica que permite extrair valores de objetos ou arrays 
// e atribuí-los a variáveis de maneira mais concisa, como mostrado abaixo:

function rand({ min = 0, max = 1000 } = {}) {
    // O destructuring é feito diretamente nos parâmetros da função,
    // onde 'min' e 'max' são extraídos do objeto passado para a função.
    // Se nenhum valor for fornecido para 'min' ou 'max', eles assumem valores padrão de 0 e 1000, respectivamente.

    const valor = Math.random() * (max - min) + min; // Gera um número aleatório entre 'min' e 'max'
    return Math.round(valor); // Arredonda o valor para o inteiro mais próximo
}

// Testando a função com diferentes objetos
const obj = { max: 50, min: 40 };
console.log(rand(obj)); // Deve gerar um número aleatório entre 40 e 50
console.log(rand({ min: 955 })); // Deve gerar um número aleatório com min = 955 e max = 1000
console.log(rand({})); // Deve gerar um número aleatório com min = 0 e max = 1000
console.log(rand()); // Deve gerar um número aleatório com min = 0 e max = 1000, pois o argumento é um objeto vazio
