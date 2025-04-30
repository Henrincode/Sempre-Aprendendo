const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados.txt");

const lerArquivo = caminho => {
  return new Promise(resolve => {
    const exibirConteudo = (_, conteudo) => resolve(conteudo.toString());
    fs.readFile(caminho, exibirConteudo);
  });
};

lerArquivo(caminho)
  .then(conteudo => conteudo.split(/\r?\n/))
  .then(linhas => linhas.join(","))
  .then(conteudo => `O valor final é: ${conteudo}`)
  .then(console.log);
