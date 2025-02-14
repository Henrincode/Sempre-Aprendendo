// Exemplos das diferentes formas de se criar um objeto em JavaScript

// Criando um objeto usando a notação literal
const obj1 = {}; // Objeto vazio
console.log(obj1);

// Criando um objeto com a função construtora Object
console.log(typeof Object, typeof new Object()); // Object é uma função, new Object() cria um objeto
const obj2 = new Object(); // Criando um objeto a partir de Object
console.log(obj2);

// Criando objetos usando funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome; // Atributo público
    
    // Método para calcular o preço com desconto
    this.getPrecoComDesconto = function() {
        return preco * (1 - desconto);
    };
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 2998.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Criando objetos usando uma função Factory (Padrão Factory)
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        // Método para calcular o salário com base nas faltas
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    };
}

const f1 = criarFuncionario('João', 7980, 4);
const f2 = criarFuncionario('Maria', 11400, 1);
console.log(f1.getSalario(), f2.getSalario());

// Criando um objeto usando Object.create
const filha = Object.create(null); // Cria um objeto sem protótipo
filha.nome = 'Ana';
console.log(filha);