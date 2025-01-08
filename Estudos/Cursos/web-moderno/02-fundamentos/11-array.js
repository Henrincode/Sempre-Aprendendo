// No JavaScript, o array é heterogêneo porque a linguagem é fracamente tipada.
// Além disso, o array pode crescer e diminuir dinamicamente, sem um tamanho fixo.

const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); // se tentar acessar um indice que não existe ele não retorna erro.

valores[4] = 10;
console.log(valores); // imprime a estrutura do array
console.log(valores.length); // retorna o tamanho do array

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop());
delete valores[0]; // apaga somente o condeúdo do indice e o mantem vazio "empty"
console.log(valores);

console.log(typeof valores); // em JS array é um obj