// Objeto para gerar IDs sequenciais
const sequence = {
    _id: 1, // Valor inicial do ID
    get id() { return this._id++ } // Getter que retorna o ID atual e incrementa para o próximo
}

const produtos = {} // Objeto que armazena os produtos como um "banco de dados" em memória

// Função para salvar um produto no "banco de dados"
function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id // Atribui um ID ao produto se ele não tiver um
    produtos[produto.id] = produto // Armazena o produto no objeto produtos usando o ID como chave
    return produto // Retorna o produto salvo
}

// Função para buscar um produto pelo ID
function getProduto(id) {
    return produtos[id] || {} // Retorna o produto correspondente ao ID ou um objeto vazio se não existir
}

// Função para listar todos os produtos
function getProdutos() {
    return Object.values(produtos) // Converte o objeto produtos em um array com todos os valores
}

// Função para excluir um produto do "banco de dados"
function excluirProduto(id) {
    const produto = produtos[id] // Armazena o produto a ser excluído antes de removê-lo
    delete produtos[id] // Remove o produto do objeto produtos usando o ID como chave
    return produto // Retorna o produto excluído
}

// Exporta as funções para uso em outros arquivos
module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }