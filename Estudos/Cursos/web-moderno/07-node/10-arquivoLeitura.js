// Importando o módulo 'fs' (File System) do Node.js para manipular arquivos
const fs = require('fs');

// Caminho do arquivo JSON baseado no diretório atual (__dirname)
const caminho = __dirname + '/10-arquivo.json';

// Leitura síncrona de arquivo - bloqueia o event loop, use apenas em casos específicos
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log('Conteúdo do arquivo (síncrono):', conteudo);

// Leitura assíncrona de arquivo - método recomendado para não bloquear o event loop
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }
    // Converte o conteúdo de string JSON para objeto JavaScript
    const config = JSON.parse(conteudo);
    console.log('Configuração do banco de dados:', `${config.db.host}:${config.db.port}`);
});

// Carregando diretamente um arquivo JSON usando require - forma mais simples para JSON
const config = require('./10-arquivo.json');
console.log('Acessando diretamente via require:', config.db);

// Lendo o conteúdo de um diretório de forma assíncrona
fs.readdir(__dirname, (err, arquivos) => {
    if (err) {
        console.error('Erro ao ler o diretório:', err);
        return;
    }
    console.log('Conteúdo do diretório atual:');
    console.log(arquivos);
});