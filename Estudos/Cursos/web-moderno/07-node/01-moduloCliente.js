// Criando e exportando módulos em Node.js
// No Node.js, cada arquivo representa um módulo independente
// Podemos exportar valores e funções de um módulo para serem utilizados em outros arquivos

// Importando os módulos criados anteriormente
const moduloA = require('./01-moduloA');
const moduloB = require('./01-moduloB');

// Acessando e exibindo os valores exportados de moduloA
console.log(moduloA.ola); // 'Fala Pessoal'
console.log(moduloA.bemVindo); // 'Bem vindo ao Node'
console.log(moduloA.ateLogo); // 'Até próximo exemplo'
console.log(moduloA); // Exibindo todo o conteúdo exportado de moduloA

// Acessando e exibindo os valores exportados de moduloB
console.log(moduloB.bomDia); // 'Bom dia'
console.log(moduloB.boaNoite()); // Chamando a função boaNoite e exibindo seu retorno 'Boa noite'
console.log(moduloB); // Exibindo todo o conteúdo exportado de moduloB