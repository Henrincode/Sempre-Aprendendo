// Aprendendo Promise

// Função que recebe um array ou uma string e retorna o primeiro elemento
const primeiroElemento = arrayOuString => arrayOuString[0];

// Função que recebe uma letra e transforma ela em minúscula
const letraMinuscula = letra => letra.toLowerCase();

// Criando uma nova Promise
// Uma Promise representa um valor que pode estar disponível agora, no futuro, ou nunca (em caso de erro)
// A função 'resolve' é chamada para indicar que a operação foi concluída com sucesso
new Promise(function (resolve) {
  resolve(["Ana", "Bia", "Carlos", "Daniel"]); // Resolvendo a Promise com um array de nomes
})
  // Cada 'then' recebe o resultado anterior e executa uma função sobre ele
  .then(primeiroElemento) // Pega o primeiro elemento do array: "Ana"
  .then(primeiroElemento) // Pega o primeiro caractere da string "Ana": "A"
  .then(letraMinuscula) // Converte o caractere "A" para minúsculo: "a"
  .then(console.log); // Exibe o resultado final no console: "a"
