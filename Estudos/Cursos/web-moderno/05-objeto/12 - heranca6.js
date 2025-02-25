// Definição de uma função construtora chamada Aula
// Em JavaScript, funções construtoras são utilizadas para criar objetos com base em um modelo específico.
function Aula(nome, videoID) {
    this.nome = nome; // Atributo 'nome' do objeto
    this.videoID = videoID; // Atributo 'videoID' do objeto
}

// Criando novos objetos utilizando a função construtora e o operador 'new'
// O operador 'new' cria um novo objeto e define seu protótipo como o da função construtora.
const aula1 = new Aula('Bem Vindo', 123);
const aula2 = new Aula('Até Breve', 456);

console.log(aula1, aula2); // Exibe os objetos criados no console

// Simulando o comportamento do operador 'new' com uma função personalizada
function novo(f, ...params) {
    const obj = {}; // Cria um novo objeto vazio
    obj.__proto__ = f.prototype; // Define o protótipo do objeto como o da função passada
    f.apply(obj, params); // Chama a função construtora, passando o objeto criado como contexto ('this') e os parâmetros
    return obj; // Retorna o novo objeto criado
}

// Criando objetos utilizando a função 'novo', que simula o operador 'new'
const aula3 = novo(Aula, 'Bem Vindo', 123);
const aula4 = novo(Aula, 'Até Breve', 456);

console.log(aula3, aula4); // Exibe os objetos criados com a função 'novo'