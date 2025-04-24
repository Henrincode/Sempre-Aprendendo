// Importa o módulo 'http' nativo do Node.js para fazer requisições HTTP
const http = require("http");

// Função que busca os dados de uma turma (A, B ou C) a partir de uma URL.
// Recebe a letra da turma e uma função de callback que será executada ao final da requisição.
const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  http.get(url, res => {
    let resultado = "";

    // Evento disparado quando chegam pedaços (chunks) de dados da resposta
    res.on("data", dados => {
      resultado += dados;
    });

    // Evento disparado quando a resposta termina de ser recebida
    res.on("end", () => {
      // Converte os dados JSON em objeto JavaScript e chama o callback
      callback(JSON.parse(resultado));
    });
  });
};

// Exemplo de callback hell:
// Várias chamadas aninhadas de funções de callback que tornam o código difícil de ler e manter.
// Aqui estamos buscando as turmas A, B e C, uma após a outra, e montando uma lista com os nomes.
let nomes = [];

getTurma("A", alunos => {
  nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));
  getTurma("B", alunos => {
    nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`));
    getTurma("C", alunos => {
      nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`));
      console.log(nomes);
    });
  });
});

/*
  O que é "callback hell"?

  "Callback hell" (inferno dos callbacks) é uma expressão usada para descrever o código JavaScript
  que tem muitos callbacks aninhados uns dentro dos outros. Isso geralmente acontece em código assíncrono
  que depende da ordem de execução. Embora funcione, esse estilo dificulta a leitura, manutenção e depuração
  do código.

  Soluções modernas para evitar o callback hell incluem o uso de Promises e async/await.
*/
