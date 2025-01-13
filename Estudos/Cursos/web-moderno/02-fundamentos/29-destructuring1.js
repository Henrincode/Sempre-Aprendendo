// Recurso introduzido no ES2015 (ES6): Destructuring

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
};

// Destructuring do objeto pessoa
const { nome, idade } = pessoa; // Extrai os atributos 'nome' e 'idade' do objeto pessoa e cria variáveis com o mesmo nome
console.log(nome, idade);

// O objeto original permanece inalterado
console.log(pessoa); // 'nome' e 'idade' continuam presentes no objeto

// Destructuring com renomeação de variáveis
const { nome: n, idade: i } = pessoa; // Renomeia 'nome' para 'n' e 'idade' para 'i'
console.log(n, i);

// Atribuindo valores padrão para atributos inexistentes
const { sobrenome, bemHumorada = true } = pessoa; // 'sobrenome' é undefined e 'bemHumorada' recebe o valor padrão true
console.log(sobrenome, bemHumorada);

// Destructuring de objetos aninhados
const { endereco: { logradouro, numero, cep } } = pessoa; // Extrai atributos de 'endereco'
console.log(logradouro, numero, cep); // 'cep' será undefined, pois não existe no objeto

// Tentativa de acessar propriedades de um objeto inexistente gera erro
// const { conta: { ag, num } } = pessoa; // 'conta' não está definido, causando erro
// console.log(ag, num); // Descomentar essas linhas resultará em um erro
