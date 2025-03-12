// Exporta uma função que aceita múltiplos parâmetros (nomes) usando o operador rest (...nomes)
// O operador rest transforma os argumentos em um array
module.exports = function (...nomes) {
    // Usa o método map para criar um novo array com saudações personalizadas para cada nome
    return nomes.map(nome => `Boa semana ${nome}!`);
};