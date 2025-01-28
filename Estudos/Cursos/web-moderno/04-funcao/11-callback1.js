// Exemplo de callback em JavaScript e Node.js

// Uma callback é uma função passada como argumento para outra função. 
// Ela será chamada posteriormente, geralmente dentro do contexto dessa função maior.
// O método .forEach() é um exemplo clássico de onde usamos callbacks.

// Criando um array de fabricantes
const fabricantes = ["Mercedes", "Audi", "BMW"];

// Função que será usada como callback
function imprimir(nome, indice) {
    // O parâmetro 'nome' contém o elemento atual do array.
    // O parâmetro 'indice' contém a posição do elemento no array.
    console.log(`${indice + 1}. ${nome}`);
}

// Utilizando o método .forEach()
// O método .forEach() executa uma função (callback) para cada elemento do array.
fabricantes.forEach(imprimir); // Aqui, passamos a função 'imprimir' como callback.

// Também podemos usar uma callback diretamente no formato de arrow function
// No exemplo abaixo, imprimimos cada fabricante sem usar uma função externa.
fabricantes.forEach(fabricante => console.log(`${fabricante}`));