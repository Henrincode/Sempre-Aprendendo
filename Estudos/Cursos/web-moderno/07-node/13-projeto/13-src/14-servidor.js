const porta = 3003 // Define a porta em que o servidor será executado

const express = require('express') // Importa o framework Express para criar o servidor
const app = express() // Inicializa a aplicação Express
const bancoDeDados = require('./14-bancoDeDados.js') // Importa as funções do arquivo de banco de dados

// Rota GET para listar todos os produtos
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // Envia a lista de produtos como resposta em formato JSON
})

// Rota GET para buscar um produto específico pelo ID
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) // Corrige "ra.params.id" para "req.params.id" e retorna o produto correspondente ao ID
})

// Rota POST para adicionar um novo produto
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name, // Pega o nome do corpo da requisição
        preco: req.body.preco // Pega o preço do corpo da requisição (corrige "preco" para consistência)
    })
    res.send(produto) // Retorna o produto salvo como resposta em formato JSON
})

// Inicia o servidor na porta definida
app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`) // Exibe mensagem no console quando o servidor inicia
})