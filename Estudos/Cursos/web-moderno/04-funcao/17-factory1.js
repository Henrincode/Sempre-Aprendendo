// Exemplo de função factory (fábrica), que retorna um objeto
// Uma função factory é uma função que cria e retorna um novo objeto a cada chamada.
// Isso é útil quando queremos criar várias instâncias de um objeto com a mesma estrutura.

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    };
}

console.log(criarPessoa()); // Exibe um objeto com as propriedades 'nome' e 'sobrenome'