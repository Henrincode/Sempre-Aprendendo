const porta = 3003

const express = require('express') // Importa o módulo Express para criar o servidor
const app = express() // Inicializa uma aplicação Express

// Define uma rota GET para '/produtos' que retorna um objeto como resposta
app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 }) // Envia um objeto que será automaticamente convertido para JSON
})

// Inicia o servidor na porta especificada e exibe uma mensagem no console
app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})