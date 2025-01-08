// Objeto é uma combinação de chave/valor.
// JSON (JavaScript Object Notation) é um formato de dados usado para troca de informações.
// Em JavaScript, um objeto (Object) não é a mesma coisa que JSON, apesar de poder ser convertido entre eles.

const prod1 = {};
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
};

console.log(prod2);