// Exemplo de comportamento do this em funções normais e arrow functions no JavaScript

// Declaração de uma função normal que compara o this com o parâmetro passado
let comparaComThis = function (param) {
    console.log(this === param);
    // Atenção: Ao determinar um atributo ao this dentro de uma função normal, 
    // o this pode referir-se ao objeto global (em Node.js, o objeto global é "global").
    // Isso pode gerar comportamentos inesperados se não for bem compreendido.
};

// Teste 1: Comparando o this com o objeto global
comparaComThis(global); // Em uma função normal, o this aponta para global (em Node.js)

// Teste 2: Comparando o this com o próprio módulo
comparaComThis(this); // Aqui o this é diferente do global no contexto do módulo

// Criando um objeto para testar o bind
const obj = {};
comparaComThis = comparaComThis.bind(obj); // O método bind fixa o this ao obj

// Teste 3: Comparando o this com global após usar bind
comparaComThis(global); // Após o bind, o this não aponta mais para o global

// Teste 4: Comparando o this com o objeto ao qual foi associado com bind
comparaComThis(obj); // O this agora é o obj, pois foi fixado com bind

// Testando com arrow functions
// Arrow functions têm um comportamento diferente: o this é determinado no momento em que a função é definida e não muda

let comparaComThisArrow = (param) => console.log(this === param);

// Teste 5: Comparando o this de uma arrow function com o objeto global
comparaComThisArrow(global); // Em arrow functions, o this não aponta para global

// Teste 6: Comparando o this de uma arrow function com module.exports
comparaComThisArrow(module.exports); // O this de uma arrow function é o contexto onde foi definida (aqui, module.exports)

// Teste 7: Comparando o this de uma arrow function com o próprio this do módulo
comparaComThisArrow(this); // O this na arrow function é o mesmo que module.exports no Node.js

// Testando quem é mais forte: o this da arrow function ou o bind

// Tenta mudar o this de uma arrow function usando bind
comparaComThisArrow = comparaComThisArrow.bind(obj);

// Teste 8: Comparando o this de uma arrow function com obj após usar bind
comparaComThisArrow(obj); // O this da arrow function não muda, mesmo com bind

// Teste 9: Comparando o this de uma arrow function com module.exports
comparaComThisArrow(module.exports); // O this continua sendo o contexto onde a função foi definida

// Teste 10: Comparando o this de uma arrow function com o próprio this do módulo
comparaComThisArrow(this); // O this ainda é o mesmo do contexto original (module.exports)

// Conclusão:
// Em uma função normal, o this pode mudar dependendo de como a função é chamada.
// Em uma arrow function, o this é fixado no contexto em que a função foi definida e não pode ser alterado, nem mesmo com bind.