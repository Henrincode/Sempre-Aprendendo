// Importando a biblioteca lodash
const _ = require('lodash');

// Função que gera um número aleatório entre 500 e 600 a cada 2 segundos
setInterval(() => {
    // O método _.random(min, max) gera um número aleatório dentro do intervalo especificado
    console.log(_.random(500, 600));
}, 2000);

// Explicação:
// - Lodash é uma biblioteca JavaScript que fornece utilitários para manipulação de arrays, objetos e outras estruturas de dados.
// - O método setInterval executa uma função repetidamente após um intervalo de tempo definido (neste caso, a cada 2000ms ou 2 segundos).
// - O nodemon é uma ferramenta que monitora alterações nos arquivos do projeto e reinicia automaticamente a aplicação quando um arquivo é modificado.
// - Para rodar o nodemon neste arquivo, use o comando:
//   nodemon 02-usandoModulosTerceiros.js
// - Dessa forma, qualquer alteração no código será aplicada sem precisar reiniciar manualmente a aplicação.
