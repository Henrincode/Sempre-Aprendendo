// Exemplo de como chamar uma função e as diferenças entre `call` e `apply` em JavaScript

function getPreco(imposto = 0, moeda = 'R$') {
    // Retorna o preço com a aplicação de desconto e imposto, usando o contexto `this`
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco // A função é atribuída diretamente ao objeto
};

global.preco = 20;
global.desc = 0.1;

console.log(getPreco()); // Chamando a função diretamente (contexto global)
console.log(produto.getPreco()); // Chamando a função a partir de um objeto (contexto produto)

// Criando um objeto `carro` com preço e desconto
const carro = { preco: 49990, desc: 0.20 };

// Usando `call` para invocar a função com o contexto do objeto `carro`
console.log(getPreco.call(carro)); // O contexto é o objeto `carro`

// Usando `apply` de forma semelhante ao `call`, mas os parâmetros são passados como array
console.log(getPreco.apply(carro)); // O contexto é o objeto `carro`

// A diferença entre `call` e `apply` é a forma de passar os parâmetros:
// - `call` recebe os parâmetros separados por vírgula
console.log(getPreco.call(carro, 0.17, '$'));

// - `apply` recebe os parâmetros dentro de um array
console.log(getPreco.apply(global, [0.17, '$'])); // O contexto é `global`