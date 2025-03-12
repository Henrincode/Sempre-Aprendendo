// Factory function que cria e retorna uma nova instância a cada chamada
// O () no require executa a função imediatamente
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++; // Incrementa o valor desta instância específica
        }
    };
};