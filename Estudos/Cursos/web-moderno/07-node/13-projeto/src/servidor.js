const porta = 3003

const express = require('express') // Importa o framework Express para criar o servidor
const app = express() // Inicializa a aplicação Express
const bodyParser = require('body-parser') // Importa o body-parser para processar dados das requisições
const bancoDeDados = require('./bancoDeDados.js') // Importa o módulo de banco de dados personalizado

app.use(bodyParser.urlencoded({ extended: true })) // Configura o body-parser para interpretar dados URL-encoded

// Rota GET para listar todos os produtos
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // Envia a lista de produtos como resposta
})

// Rota GET para buscar um produto específico pelo ID
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) // Retorna o produto com o ID informado
})

// Rota POST para criar um novo produto
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome, // Pega o nome do corpo da requisição
        preco: req.body.preco // Pega o preço do corpo da requisição
    })
    res.send(produto) // Retorna o produto salvo como resposta
})

// Rota PUT para atualizar um produto existente pelo ID
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id, // Usa o ID da URL
        nome: req.body.nome, // Atualiza o nome com o valor enviado
        preco: req.body.preco // Atualiza o preço com o valor enviado
    })
    res.send(produto) // Retorna o produto atualizado
})

// Rota DELETE para excluir um produto pelo ID
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id) // Remove o produto com o ID informado
    res.send(produto) // Retorna o produto excluído (ou null, dependendo da implementação)
})

// Inicia o servidor na porta definida
app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`) // Confirma que o servidor está rodando
})