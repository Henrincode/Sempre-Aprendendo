// Demonstração de instância única vs instância nova em Node.js
// Importa o mesmo objeto (instância única) em ambas as variáveis
const contadorA = require('./06-instanciaUnica');
const contadorB = require('./06-instanciaUnica');

// Importa novas instâncias independentes através da factory
const contadorC = require('./06-instanciaNova')();
const contadorD = require('./06-instanciaNova')();

// Incrementa o contadorA duas vezes - afeta contadorB também
contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor); // Mostra 3 3

// Incrementa o contadorC duas vezes - não afeta contadorD
contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor); // Mostra 3 1