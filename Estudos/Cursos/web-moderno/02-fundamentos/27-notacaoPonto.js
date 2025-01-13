// **Sobre a notação ponto**
// A notação ponto (objeto.metodo ou objeto.propriedade) é usada para acessar membros de um objeto. 
// Esses membros podem ser métodos (funções associadas ao objeto) ou propriedades (dados armazenados no objeto).
// Exemplo: Math.ceil significa "acessar o método `ceil` do objeto global `Math`".

// Usa a notação ponto para acessar o método `ceil` do objeto global `Math`
// O método `Math.ceil` arredonda o número para cima (para o próximo inteiro).
console.log(Math.ceil(6.1)); // Saída: 7

// Criação de um objeto vazio chamado `obj1`
const obj1 = {};

// Usa a notação ponto para adicionar uma nova propriedade `nome` ao objeto `obj1`
// Aqui estamos dizendo que `obj1` terá uma propriedade `nome` com o valor 'Bola'.
obj1.nome = 'Bola';

// Alternativamente, podemos usar a notação de colchetes para acessar ou definir a propriedade:
// obj1['nome'] = 'bola2';

// Usa a notação ponto para acessar o valor da propriedade `nome` de `obj1`
console.log(obj1.nome); // Saída: 'Bola'

// Define uma função construtora chamada `Obj` para criar novos objetos
function Obj(nome) {
    // Usa `this` para definir a propriedade `nome` no objeto que será criado
    this.nome = nome;

    // Usa `this` para definir um método `exec` no objeto que será criado
    this.exec = function() {
        // Método que imprime 'Exec...' no console
        console.log('Exec...');
    };
}

// Cria uma nova instância de `Obj` chamada `obj2` com a propriedade `nome` definida como 'Cadeira'
const obj2 = new Obj('Cadeira');

// Cria outra instância de `Obj` chamada `obj3` com a propriedade `nome` definida como 'Mesa'
const obj3 = new Obj('Mesa');

// Usa a notação ponto para acessar a propriedade `nome` de `obj2`
console.log(obj2.nome); // Saída: 'Cadeira'

// Usa a notação ponto para acessar a propriedade `nome` de `obj3`
console.log(obj3.nome); // Saída: 'Mesa'

// Usa a notação ponto para chamar o método `exec` de `obj3`
obj3.exec(); // Saída: 'Exec...'