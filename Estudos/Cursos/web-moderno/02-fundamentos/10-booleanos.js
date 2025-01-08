let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log('\nos verdadeiros...');
// todos os números exceto o 0 é verdadeiro
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('\nos falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('\npra finalizar...');
console.log(!!('' || null || 0 || ' ')); // verifica se pelo menos 1 valor é verdadeiro

// uma das formas de colocar um valor padrão em variáveis
let nome = '';
console.log(nome || 'Desconhecido');