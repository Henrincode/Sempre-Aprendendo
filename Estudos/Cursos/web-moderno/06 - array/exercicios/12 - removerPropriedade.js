// Quando temos um objeto e manipulamos seus atributos, adicionando,
// atualizando ou removendo-os, estamos apenas modificando-o, mas,
//  em essência, o objeto continua o mesmo, ou seja, a sua referência de memória é a mesma.

// Num projeto que você está trabalhando, você foi designado a
// refatorar diversas funções para que façam cópias de objetos e manipulem
// os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
// algumas situações devido a referências a objetos. Abaixo, está a
// descrição de uma dessas funções.

// Você escreverá uma função que receba um objeto como primeiro parâmetro e,
// como segundo parâmetro, o nome de uma propriedade contida nesse objeto.
// Em seguida, retorne uma cópia desse objeto sem a
// propriedade especificada no segundo parâmetro.

// Exemplos:

// removePropriedade({ a: 1, b: 2 }, "a") // retornará { b: 2 }

// removePropriedade({ 
//   id: 28, 
//   nome: "caneta", 
//   descricao: "Não preenchida" 
// }, "descricao") // retornará { id: 28, nome: "caneta" }

// A fim de testar se o objeto retornado não é o mesmo que foi passado
// como parâmetro para a função removePropriedade, você poderá usar a
// função Object.is(), por exemplo:
// Object.is(removePropriedade(objeto, "descricao"), objeto)
// Retornará false se o objeto não for o mesmo.

const removePropriedade = (obj, remover) => { // Teste 1
    const copia = {...obj} // Faz a cópia do obj
    delete copia[remover]; // Remove o atributo
    return copia; // Retorna a cópia do obj
};

const obj1 = { a: 1, b: 2 }; // Cria o objeto
const result1 = removePropriedade(obj1, "a"); // Retorna a cópia sem atributo
console.log(result1); // Imprime o resultado
console.log(Object.is(result1, obj1)) // Compara se é o mesmo obj ou cópia, false pra cópia

const obj2 = { // Teste 2
    id: 28, 
    nome: "caneta", 
    descricao: "Não preenchida" 
  };
const result2 = removePropriedade(obj2, "descricao");
console.log(result2);
console.log(Object.is(result2, obj2))