// Exemplo de Contexto Léxico em JavaScript

const valor = 'Global'; // A variável 'valor' é definida no escopo global

function minhaFuncao() {
    console.log(valor); // A função vai acessar o valor da variável 'valor'
}

function exec() {
    const valor = 'Local'; // A variável 'valor' é redefinida no escopo local da função 'exec'
    minhaFuncao(); // Chama a função 'minhaFuncao', que acessa a variável 'valor' do contexto léxico
}

exec(); // Vai imprimir 'Global'

// Explicação:
// A função 'minhaFuncao' acessa a variável 'valor' que foi definida no contexto léxico onde a função foi escrita,
// ou seja, no escopo global. Mesmo que a função seja chamada dentro de outra função ('exec'), ela "lembra" o valor
// da variável definida no escopo global, não o valor local definido dentro de 'exec'. Isso ocorre porque o JavaScript
// utiliza o contexto léxico para resolver variáveis.