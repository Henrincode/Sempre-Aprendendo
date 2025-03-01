// Array de pilotos
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

// Remove o último elemento do array
pilotos.pop(); 
console.log(pilotos);

// Adiciona um elemento no final do array
pilotos.push('Verstappen');
console.log(pilotos);

// Remove o primeiro elemento do array
pilotos.shift();
console.log(pilotos);

// Adiciona um elemento no início do array
pilotos.unshift('Hamilton');
console.log(pilotos);

// O método splice pode adicionar e remover elementos

// Adiciona os elementos 'Bottas' e 'Massa' na posição 2 (índice 2) sem remover nenhum elemento
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// Remove 1 elemento a partir do índice 3 (remove 'Massa')
pilotos.splice(3, 1);
console.log(pilotos);

// Cria um novo array a partir do índice 2 até o final
const algunsPilotos1 = pilotos.slice(2);
console.log(algunsPilotos1);

// Cria um novo array do índice 1 até o índice 4 (não inclui o índice 4)
const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);