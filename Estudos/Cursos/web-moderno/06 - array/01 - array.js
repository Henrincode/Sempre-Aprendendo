// Exemplo de como declarar arrays, substituir valores e usar métodos protótipos em JavaScript

// Mostra o tipo de dados de Array, instância de Array e array literal
console.log(typeof Array, typeof new Array, typeof []);

// Criando um array usando o construtor 'new Array()'
let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

// Criando um array utilizando a forma literal (mais recomendada)
aprovados = ['Bia', 'Carlos', 'Ana'];

// Acessando elementos do array pelos índices
console.log(aprovados[0]); // 'Bia'
console.log(aprovados[1]); // 'Carlos'
console.log(aprovados[2]); // 'Ana'
console.log(aprovados[3]); // undefined (não existe esse índice ainda)

// Substituindo o valor do índice 3
aprovados[3] = 'Paulo'; // Adicionando 'Paulo' na posição 3

// Adicionando um elemento no final do array usando push()
aprovados.push('Abia');
console.log(aprovados.length); // 5 elementos no array

// Adicionando um elemento diretamente em um índice distante
aprovados[9] = 'Rafael';
console.log(aprovados.length); // O comprimento do array agora é 10 (índices vazios entre 5 e 9)

// Verificando se o índice 8 está vazio (undefined)
console.log(aprovados[8] === undefined);

// Mostrando o array completo
console.log(aprovados);

// Ordenando os elementos do array em ordem alfabética usando sort()
aprovados.sort();
console.log(aprovados);

// Removendo um elemento usando delete (deixa o índice como undefined, mas não reorganiza o array)
delete aprovados[1];
console.log(aprovados[1]); // undefined
console.log(aprovados[2]); // Mantém o elemento na posição 2

// Reinicializando o array para outro exemplo
aprovados = ['Bia', 'Carlos', 'Ana'];

// Usando splice para remover um elemento a partir do índice 1 (Carlos será removido)
aprovados.splice(1, 1);
console.log(aprovados); // ['Bia', 'Ana']