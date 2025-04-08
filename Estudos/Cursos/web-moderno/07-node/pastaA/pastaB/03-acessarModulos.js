// Forma mais correta para importar um módulo
const moduloA = require("../../01-moduloA");
console.log(moduloA.ola);

// Atenção ao uso de maiúsculas e minúsculas: o Windows e o Mac permitem letras em caixa diferente,
// enquanto o Linux é case-sensitive e pode não encontrar o módulo se a caixa da letra for alterada.
// const moduloA = require('../../01-moduloa');
// console.log(moduloA.ola);

// Pode ser usado o caminho absoluto para importar o módulo
// const moduloA = require('P:/Codando/GitHub/Sempre-Aprendendo/Estudos/Cursos/web-moderno/07 - node/01-moduloA.js');
// console.log(moduloA.ola);

// O Node.js também aceita o caminho sem a extensão .js
// const moduloA = require('P:/Codando/GitHub/Sempre-Aprendendo/Estudos/Cursos/web-moderno/07 - node/01-moduloA');
// console.log(moduloA.ola);

// Criando um módulo na pasta 'modules' para evitar o uso de caminhos relativos
const saudacao = require("saudacao");
console.log(saudacao.ola);

// Caso o arquivo na pasta 'pastaC' seja index.js, não é necessário referenciar o nome do arquivo
const c = require("./pastaC");
console.log(c.ola);

// Módulos internos do Node.js, chamados de Modulos Core, podem ser usados diretamente sem necessidade de instalação
// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.write("Bom dia");
//     res.end();
//   })
//   .listen(8080);
