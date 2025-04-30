// Evitando o "callback hell"

// Callback hell (ou "pirâmide da perdição") acontece quando usamos muitos callbacks aninhados,
// tornando o código difícil de ler e manter. Exemplo abaixo (comentado):
//
// setTimeout(() => {
//   console.log("Executando callback...");
//
//   setTimeout(() => {
//     console.log("Executando callback...");
//
//     setTimeout(() => {
//       console.log("Executando callback...");
//     }, 2000);
//   }, 2000);
// }, 2000);

// Uma forma de evitar o callback hell é usando Promises,
// que permitem um encadeamento mais organizado de operações assíncronas.

function esperarPor(tempo = 2000) {
  // Esta função retorna uma Promise que será resolvida após um tempo determinado (default: 2 segundos)
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Executando promise...");
      resolve();
    }, tempo);
  });
}

// Encadeando chamadas usando .then()
// Isso torna o código mais limpo e fácil de entender do que múltiplos callbacks aninhados
esperarPor()
  .then(() => esperarPor())
  .then(esperarPor);
