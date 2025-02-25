// Verificando o tipo dos principais objetos da linguagem JavaScript
console.log(typeof String); // function
console.log(typeof Array);  // function
console.log(typeof Object); // function
console.log(typeof Number); // function

// Adicionando um novo método ao prototype de String
String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};

console.log('Escola Cod3r'.reverse()); // "r3doC alocsE"

// Adicionando um método ao prototype de Array para retornar o primeiro elemento
Array.prototype.first = function() {
    return this[0];
};

console.log([1, 2, 3, 4, 5].first()); // 1
console.log(['a', 'b', 'c'].first()); // 'a'

// Cuidado ao modificar prototypes de objetos nativos, pois isso pode causar efeitos colaterais
// Aqui, estamos substituindo o método toString de String, o que pode gerar problemas
String.prototype.toString = function() {
    return 'Lascou tudo';
};

console.log('Escola Cod3r'.toString()); // "Lascou tudo"