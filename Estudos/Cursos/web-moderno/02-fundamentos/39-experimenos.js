// Escopo Global em Node.js

// Variáveis criadas sem `var`, `let` ou `const` são automaticamente adicionadas ao objeto global.
// Evite criar variáveis globais, pois podem causar conflitos em grandes projetos.

// O objeto `global` é um objeto global que existe em todos os módulos Node.js e é usado para acessar variáveis globais.
// O objeto `this` em um módulo geralmente se refere ao objeto `exports`.
// `module.exports` é um objeto que permite exportar valores de um módulo para outros módulos.

// Demonstração de escopo global e objeto `this`
let a = 123;

console.log('01) Valor de a:', a); // Acessando a variável local
console.log('02) Valor de a no objeto global:', global.a); // Acessando a variável local através do objeto global
console.log('03) Valor de this.a:', this.a); // Em um módulo, `this` geralmente se refere a `exports`

global.b = 456;

console.log('04) Valor de b:', b); // Acessando a variável global
console.log('05) Valor de b no objeto global:', global.b);
console.log('06) Valor de this.b:', this.b);

this.c = 789;

// console.log(c); // Retorna erro, pois c não foi definida no escopo local
console.log('07) Valor de global.c:', global.c);
console.log('08) Valor de this.c:', this.c); // `this.c` é o mesmo que `module.exports.c`

console.log('09) module.exports.c:', module.exports.c);
console.log('10) module.exports === this:', module.exports === this); // Geralmente verdadeiro em módulos
console.log('11) module.exports === global:', module.exports === global); // Geralmente falso

// Evite criar variáveis globais desta forma
abc = 3; // Não faça isso!

console.log('12) Valor de global.abc:', global.abc);

// Exportando valores do módulo
module.exports = { e: 456, f: false, g: 'teste' };