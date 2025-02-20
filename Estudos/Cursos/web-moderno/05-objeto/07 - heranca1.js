// Exemplo de herança e protótipos em JavaScript

const ferrari = {
    modelo: "F40",
    velMax: 234,
  };
  
  const volvo = {
    modelo: "V40",
    velMax: 200,
  };
  
  // Tentando acessar o protótipo diretamente
  console.log(ferrari.prototype); // undefined (Objetos literais não possuem a propriedade 'prototype')
  
  // Acessando o protótipo através de __proto__
  console.log(ferrari.__proto__); // Equivalente a Object.getPrototypeOf(ferrari)
  
  // Verificando se o protótipo do objeto ferrari é Object.prototype
  console.log(ferrari.__proto__ === Object.prototype); // true
  console.log(volvo.__proto__ === Object.prototype); // true
  
  // O protótipo de Object.prototype é null (não há mais herança acima dele)
  console.log(Object.prototype.__proto__); // null
  
  // Criando uma função construtora
  function MeuObjeto() {};
  
  // Verificando os tipos
  console.log(typeof Object, typeof MeuObjeto); // function function
  
  // O prototype do objeto Object e da função MeuObjeto
  console.log(Object.prototype, typeof MeuObjeto.prototype);
  