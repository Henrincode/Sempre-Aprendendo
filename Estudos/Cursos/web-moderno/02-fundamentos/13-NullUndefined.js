// Variáveis que armazenam tipos primitivos copiam diretamente o valor de uma para a outra. 
// Por outro lado, variáveis que referenciam objetos não copiam o conteúdo do objeto, 
// mas sim compartilham a referência na memória. 
// Isso significa que alterações feitas no objeto através de uma variável 
// serão refletidas em todas as outras variáveis que apontam para o mesmo objeto.


// const a = {name: "Teste"};
// console.log("a", a);

// const b = a;
// console.log("b", b);

// b.name = "Opa";
// console.log("a", a);
// console.log("b", b)

// const c = [1, 2, 3];
// const d = c;

// console.log("c", c, "\nd", d);

// d[0] = 4;
// console.log("c", c, "\nd", d);


let valor // declarada mas não iniciada, retorna undefined
console.log(valor);
// console.log(valor2); // não foi iniciada e nem declarada, retorna erro

valor = null; // VAZIA! null significa que ela não esta apontando para nenhum endereço de memória
console.log(valor);
// console.log(valor.toString()); // Vai dar erro, não é possivel ler valor de vazio "null"

const produto = {}; // gera um objeto vazio
console.log(produto); // produto sem propriedades
console.log(produto.preco) // propriedade não definida retorna undefined
// console.log(produto.preco.a) // da erro pois não da para acessar uma propriedade de algo indefinido

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined // Apenas para estudos, EVITE DEFINIR UNDEFINED NO CÓDIGO, em ultimo caso use null
console.log(!!produto.preco);
delete produto.preco; // forma correta de retirar um atributo de objeto
console.log(produto)

produto.preco = null // uma forma de definir que o produto não tem preço
// se definir 00.00 pode colocar um produto de graça por exemplo.

console.log(!!produto.preco) // preço do pruduto setado? não.
console.log(produto)