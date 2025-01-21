// Exemplo de uso do `this` e como resolver o escopo léxico usando o método `.bind`

// Objeto com uma propriedade `saudacao` e um método `falar`
const pessoa = {
  saudacao: 'Bom dia!',
  falar() {
    // O `this` aqui refere-se ao objeto `pessoa`
    console.log(this.saudacao);
  }
};

// Chamando o método `falar` diretamente no contexto do objeto `pessoa`
pessoa.falar(); // Saída: "Bom dia!"

// Atribuindo o método `falar` a uma variável
const falar = pessoa.falar;

// Quando chamado dessa forma, o `this` perde a referência ao objeto `pessoa`
// Isso ocorre porque agora o `falar` é tratado como uma função independente
falar(); // Saída: undefined (ou erro, dependendo do ambiente)

// Usando `.bind` para garantir que o `this` continue apontando para o objeto `pessoa`
const falarDePessoa = pessoa.falar.bind(pessoa); 
// O método `.bind` cria uma nova função onde o `this` é explicitamente definido como `pessoa`

falarDePessoa(); // Saída: "Bom dia!"