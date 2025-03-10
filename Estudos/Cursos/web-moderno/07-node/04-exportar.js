// module.exports inicia como um objeto vazio por padrão
console.log(module.exports) 
// Saída: {}

// No início, 'this', 'exports' e 'module.exports' apontam para o mesmo objeto
console.log(module.exports === this) 
// Saída: true

console.log(module.exports === exports) 
// Saída: true

// Adicionando propriedades ao objeto compartilhado
this.a = 1
exports.b = 2
module.exports.c = 3

console.log(module.exports) 
// Saída: { a: 1, b: 2, c: 3 }

// 'this' e 'exports' ainda referenciam o mesmo objeto
console.log(module.exports === this) 
// Saída: true

console.log(module.exports === exports) 
// Saída: true

// Aqui, 'exports' é reatribuído para 'null', mas isso NÃO afeta 'module.exports'
exports = null 

console.log(exports) 
// Saída: null

// Após reatribuir 'exports', ele não aponta mais para 'module.exports'
console.log(module.exports === this) 
// Saída: true

console.log(module.exports === exports) 
// Saída: false

console.log(module.exports) 
// Saída: { a: 1, b: 2, c: 3 } (continua inalterado)

// Agora 'exports' recebe um novo objeto
exports = { nome: 'Teste' }

console.log(module.exports) 
// Saída: { a: 1, b: 2, c: 3 } (permanece o mesmo)

// Aqui, 'module.exports' é redefinido completamente
module.exports = { publico: true }

console.log(module.exports) 
// Saída: { publico: true }

// Agora 'this' e 'exports' não apontam mais para 'module.exports'
console.log(module.exports === this) 
// Saída: false

console.log(module.exports === exports) 
// Saída: falsecd