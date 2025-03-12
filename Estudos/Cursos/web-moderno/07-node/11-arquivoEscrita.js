// Importando o módulo 'fs' (File System) do Node.js para manipular arquivos
const fs = require('fs');

// Criando um objeto que representa um produto com suas propriedades
const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
};

// Escrevendo o objeto no arquivo '11-arquivoGerado.json' no mesmo diretório do script
// O JSON.stringify converte o objeto para uma string no formato JSON
fs.writeFile(__dirname + '/11-arquivoGerado.json', JSON.stringify(produto), (err) => {
    // Se houver erro, exibe-o no console; caso contrário, confirma que o arquivo foi salvo
    console.log(err ? err : 'Arquivo salvo com sucesso!');
});