console.log(7 / 0); // ao invés de travar retorna infinito
console.log("10" / 2); // verifica se a string é number, se for faz a operação
console.log("3" + 2); // nesse caso por ser "+" vai concatenar
console.log("Show" * 2); // Algumas linguagens escreveria Show Show, javascript n faz isso
// console.log(10.toString());
console.log((10).toString());

console.log(0.1 + 0.7); // não retorna 0.8, devido a especificação IEEE

//  Matematicamente,  0.1 + 0.7 = 0.8.
//  No entanto, em algumas linguagens de programação, como JavaScript ou Python,
//  você pode encontrar resultados ligeiramente diferentes, como 0.7999999999999999
//  devido à forma como números de ponto flutuante são representados em binário.
//  Isso é chamado de imprecisão em ponto flutuante.

// Para imprimir o valor exato em JavaScript,
// você pode usar o método toFixed() para formatar o número com a
// quantidade desejada de casas decimais. Por exemplo:

// let resultado = 0.1 + 0.7;
// console.log(resultado.toFixed(1)); // "0.8"

console.log((0.1 + 0.7).toFixed(1))