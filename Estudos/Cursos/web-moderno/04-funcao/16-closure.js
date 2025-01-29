// Closure é o conceito em que uma função "lembra" o ambiente em que foi criada,
// permitindo que ela acesse e manipule variáveis do escopo externo, mesmo após a execução do escopo original.

// Contexto léxico em ação!

const x = 'Global'; // A variável x é declarada no escopo global.

function fora() {
    const x = 'Local'; // A variável x é declarada no escopo da função fora.
    function dentro() {
        return x; // A função dentro tem acesso à variável x do escopo de fora, devido ao closure.
    }
    return dentro; // Retorna a função dentro, criando um closure.
}

const minhaFuncao = fora(); // Chama a função fora e armazena a função dentro retornada.
console.log(minhaFuncao()); // Chama a função dentro, que retorna 'Local', mesmo após a execução da função fora.