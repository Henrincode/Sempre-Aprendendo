// Exemplo demonstrando o uso do "this" com uma arrow function dentro de um objeto

// Definimos uma função construtora chamada "Pessoa"
function Pessoa() {
    // Criamos uma propriedade "idade" no objeto que será instanciado
    this.idade = 0;

    // Usamos "setInterval" para executar uma função a cada 1 segundo (1000 ms)
    // A função é uma arrow function, que mantém o contexto de "this" da função que a criou
    setInterval(() => {
        // Incrementamos a idade em 1 a cada execução
        this.idade++;
        // Exibimos o valor atualizado de "idade" no console
        console.log(this.idade);
    }, 1000);
}

// Criamos uma nova instância de "Pessoa"
// Isso fará com que a propriedade "idade" da instância seja atualizada continuamente
new Pessoa();