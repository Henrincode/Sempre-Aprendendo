// Conhecendo funções async e await

// Importa o módulo 'http' do Node.js para realizar requisições HTTP
const http = require("http");

// Função que obtém uma turma a partir da letra passada (A, B ou C)
// Retorna uma Promise que será resolvida com os dados da turma
const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = "";

      // Evento 'data' é disparado quando chegam pedaços (chunks) de dados
      res.on("data", dados => {
        resultado += dados;
      });

      // Evento 'end' é disparado quando toda a resposta já foi recebida
      res.on("end", () => {
        try {
          // Converte o resultado em objeto JavaScript
          resolve(JSON.parse(resultado));
        } catch (e) {
          // Se houver erro ao fazer o parse do JSON, rejeita a Promise
          reject(e);
        }
      });
    });
  });
};

// Função assíncrona que obtém os dados de três turmas
// Recurso introduzido no ES8 (ECMAScript 2017)
// Permite escrever código assíncrono de forma mais simples e parecida com código síncrono
let obterAlunos = async () => {
  const ta = await getTurma("A"); // Espera a Promise de turma A resolver
  const tb = await getTurma("B"); // Espera a Promise de turma B resolver
  const tc = await getTurma("C"); // Espera a Promise de turma C resolver
  return [].concat(ta, tb, tc); // Junta todas as turmas em um único array
};

// Chama a função para obter os alunos
obterAlunos()
  .then(alunos => alunos.map(a => a.nome)) // Extrai apenas os nomes dos alunos
  .then(nomes => console.log(nomes)); // Exibe os nomes no console
