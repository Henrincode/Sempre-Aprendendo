// O objeto 'global' no Node.js é semelhante ao 'window' no navegador: é o escopo global onde tudo está disponível
// Aqui estamos adicionando uma propriedade 'MinhaApp' ao objeto global para que ela possa ser acessada de qualquer lugar
global.MinhaApp = Object.freeze({
    // Método 'saudacao' retorna uma string fixa
    saudacao() {
        return 'Estou em todos os lugares!';
    },
    // Propriedade 'nome' com um valor inicial
    nome: 'Sistema Legal'
});

// Usamos Object.freeze() para "congelar" o objeto, impedindo que ele seja modificado diretamente
// Isso é uma boa prática para proteger dados que não deveriam mudar