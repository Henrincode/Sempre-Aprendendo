// Exporta um único objeto que será compartilhado entre todos os requires
// O Node.js armazena este módulo em cache, criando uma instância única
module.exports = {
    valor: 1,
    inc() {
        this.valor++; // Incrementa o valor da instância atual
    }
};