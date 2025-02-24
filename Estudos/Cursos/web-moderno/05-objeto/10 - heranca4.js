// Criando uma função construtora chamada MeuObjeto
function MeuObjeto() {}

// O prototype de uma função construtora é um objeto que será compartilhado por todas as instâncias criadas a partir dela.
console.log(MeuObjeto.prototype); // Exibe o prototype da função MeuObjeto

// Criando duas instâncias de MeuObjeto usando o operador 'new'
const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();

// Comparando os protótipos das instâncias
console.log(obj1.__proto__ === obj2.__proto__); // true (ambos compartilham o mesmo prototype)
console.log(MeuObjeto.prototype === obj1.__proto__); // true (o prototype de MeuObjeto é o __proto__ das instâncias)

// Adicionando propriedades e métodos ao prototype de MeuObjeto
MeuObjeto.prototype.nome = 'Anônimo';
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`);
};

// Chamando o método 'falar' para obj1 (usará a propriedade 'nome' do prototype)
obj1.falar();

// Alterando a propriedade 'nome' de obj2 (agora terá sua própria propriedade e não usará a do prototype)
obj2.nome = 'Rafael';
obj2.falar();

// Criando um novo objeto e definindo manualmente seu prototype como MeuObjeto.prototype
const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype; // Definição manual do protótipo
obj3.nome = 'Obj3';
obj3.falar();

// Resumindo a hierarquia de protótipos...
console.log((new MeuObjeto()).__proto__ === MeuObjeto.prototype); // true (instâncias apontam para o prototype da função construtora)
console.log(MeuObjeto.__proto__ === Function.prototype); // true (funções em JS são objetos e derivam de Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype); // true (Function.prototype deriva de Object.prototype)
console.log(Object.prototype.__proto__ === null); // true (Object.prototype é o topo da cadeia de protótipos)