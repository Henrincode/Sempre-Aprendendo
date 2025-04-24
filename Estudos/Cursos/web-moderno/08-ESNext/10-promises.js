// Promises em JavaScript

// Uma *Promise* é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona.
// Ela facilita o trabalho com código assíncrono, evitando o "callback hell".

// A função abaixo retorna uma Promise que será resolvida após um tempo determinado
function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    // setTimeout simula uma operação assíncrona, como uma requisição a uma API, por exemplo
    setTimeout(() => {
      resolve(frase); // A Promise é resolvida com a frase passada como parâmetro
    }, segundos * 1000); // Converte os segundos em milissegundos
  });
}

// Chamando a função e lidando com a resposta usando .then()
falarDepoisDe(3, "Que legal!")
  .then(frase => frase.concat("?!?")) // Modifica a frase quando a Promise for resolvida
  .then(outraFrase => console.log(outraFrase)); // Exibe o resultado final no console

// Saída após 3 segundos: "Que legal!?!"
