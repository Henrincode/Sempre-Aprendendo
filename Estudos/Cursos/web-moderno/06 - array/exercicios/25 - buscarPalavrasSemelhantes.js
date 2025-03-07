// A fim de criar um mecanismo de busca para sua aplicação,
// você precisa iniciar criando uma função para identificar palavras semelhantes.

// Escreva uma função que receba como primeiro parâmetro uma palavra e,
// como segundo parâmetro, um array de strings. A função deverá filtrar
// as palavras do array que contenham nela a string do primeiro parâmetro.

// Exemplos:

// buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])
// retornará ["programação", "profissional"]

// buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"])
// retornará []

const buscarPalavrasSemelhantes = (busca, texto) => console.log(
    texto.filter(texto => texto.includes(busca))
);

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])
// retornará ["programação", "profissional"]

buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"])
// retornará []