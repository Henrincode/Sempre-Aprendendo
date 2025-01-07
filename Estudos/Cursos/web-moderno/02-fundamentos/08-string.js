const escola = "Cod3r";

console.log(escola.charAt(4)); // imprime o caracter do indice
console.log(escola.charAt(5)); // quando o indice é maior q a string n retorna erro
console.log(escola.charCodeAt(3)); // imprime o código unicode do caracter do indice
console.log(escola.indexOf('3')); // imprime o indice do simbolo informado

console.log(escola.substring(1)); // remove a quantidade de caracteres informados
console.log(escola.substring(0, 3)); // imprime somente caracteres do indice A até o indice B

console.log('Escola '.concat(escola).concat("!")); // concatena
console.log(escola.replace('3', 'e')); // troca o simbolo B pelo simbolo A

console.log('Ana,Maria,Pedro'.split(',')); // transforma em array usando o separador informado