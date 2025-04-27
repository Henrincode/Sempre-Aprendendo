// Importa o módulo 'http' para fazer requisições
const http = require("http");

// Função que obtém dados da turma a partir de uma letra (A, B ou C)
// Retorna uma Promise que resolve com os dados dos alunos da turma
const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = "";

      // Recebe os dados da resposta em partes (chunks) e acumula em 'resultado'
      res.on("data", dados => {
        resultado += dados;
      });

      // Quando todos os dados forem recebidos ('end' é disparado)
      res.on("end", () => {
        try {
          // Tenta converter a resposta para JSON e resolve a Promise
          resolve(JSON.parse(resultado));
        } catch (e) {
          // Se ocorrer erro na conversão para JSON, rejeita a Promise
          reject(e);
        }
      });
    });
  });
};

// Exemplo de callback hell (comentado para mostrar como seria uma má prática):

/*
let nomes = [];

getTurma("A").then(alunos => {
  nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));
  getTurma("B").then(alunos => {
    nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`));
    getTurma("C").then(alunos => {
      nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`));
      console.log(nomes);
    });
  });
});
*/

// Melhorando o código: usando Promise.all para evitar o callback hell

// Executa todas as Promises em paralelo
Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
  .then(turmas => [].concat(...turmas)) // Junta todas as turmas em um único array de alunos
  .then(alunos => alunos.map(aluno => aluno.nome)) // Extrai apenas os nomes dos alunos
  .then(nomes => console.log(nomes)); // Exibe o resultado final no console
