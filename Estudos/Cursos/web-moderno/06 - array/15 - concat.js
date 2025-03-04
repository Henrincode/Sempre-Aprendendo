// Usando o método concat para combinar arrays
// O concat combina dois ou mais arrays, retornando um novo array com todos os elementos

const filhas = ['Valeskah', 'Cibalena']; // Array com os nomes das filhas
const filhos = ['Uoxiton', 'Vesclei']; // Array com os nomes dos filhos
const todos = filhas.concat(filhos, 'Fulano'); // Concatenando os arrays 'filhas' e 'filhos' com o valor 'Fulano'
console.log(todos); // Exibindo o array resultante da concatenação

// Exemplo adicional utilizando concat
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));
// Concatenando vários elementos, incluindo arrays e valores individuais
// O resultado será [1, 2, 3, 4, 5, [6, 7]]