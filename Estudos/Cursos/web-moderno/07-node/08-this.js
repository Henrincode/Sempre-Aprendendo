// Em um módulo Node.js, 'this' no escopo superior refere-se ao objeto 'module.exports'
console.log(this === global); // false - 'this' não é o objeto global, mas sim 'module.exports'
console.log(this === module); // false - 'module' é um objeto maior que contém 'exports', 'this' aponta apenas para 'module.exports'
console.log(this === module.exports); // true - no escopo superior de um módulo, 'this' é igual a 'module.exports'
console.log(this === exports); // true - 'exports' é uma referência inicial para 'module.exports'

// Função definida no escopo do módulo
function logThis() {
    console.log('Dentro de uma função...');
    console.log(this === exports); // false - dentro de uma função solta, 'this' aponta para o objeto global
    console.log(this === module.exports); // false - idem, não é mais 'module.exports'
    console.log(this === global); // true - em funções normais (não arrow functions), 'this' é o objeto global por padrão

    // Cuidado: adicionar propriedades a 'this' aqui afeta o objeto global!
    this.perigo = '...'; // Isso adiciona 'perigo' ao objeto 'global', não ao módulo
}

// Chama a função
logThis();