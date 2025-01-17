// Exemplo de estrutura IF (SE)

// Função que verifica se a nota é suficiente para aprovação
function soBoaNoticia(nota) {
    // Verifica se a nota é maior ou igual a 7
    if (nota >= 7) {
        console.log('01) Aprovado com ' + nota);
    }
}

// Testando a função com diferentes notas
soBoaNoticia(8.1); // Saída: 01) Aprovado com 8.1
soBoaNoticia(6.1); // Não exibe nada porque a condição não é verdadeira

// Função que exibe uma mensagem se o valor for considerado verdadeiro
function seForVerdadeEuFalo(valor) {
    // Em JavaScript, alguns valores são considerados "falsos" em um contexto booleano:
    // false, null, undefined, NaN, '', 0.
    if (valor) {
        console.log('02) É verdade... ' + valor);
    }
}

// Testando a função com diferentes valores
seForVerdadeEuFalo();          // Não exibe nada porque undefined é "falso"
seForVerdadeEuFalo(null);      // Não exibe nada porque null é "falso"
seForVerdadeEuFalo(undefined); // Não exibe nada porque undefined é "falso"
seForVerdadeEuFalo(NaN);       // Não exibe nada porque NaN é "falso"
seForVerdadeEuFalo('');        // Não exibe nada porque string vazia é "falsa"
seForVerdadeEuFalo(0);         // Não exibe nada porque 0 é "falso"
seForVerdadeEuFalo(-1);        // Exibe: 02) É verdade... -1
seForVerdadeEuFalo(' ');       // Exibe: 02) É verdade...  
seForVerdadeEuFalo('?');       // Exibe: 02) É verdade... ?
seForVerdadeEuFalo([]);        // Exibe: 02) É verdade... 
seForVerdadeEuFalo([1, 2]);    // Exibe: 02) É verdade... 1,2
seForVerdadeEuFalo({});        // Exibe: 02) É verdade... [object Object]