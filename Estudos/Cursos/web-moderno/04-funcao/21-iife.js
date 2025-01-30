// IIFE - Immediately Invoked Function Expression
// Expressão de Função Imediatamente Invocada
// Essa expressão cria uma função anônima que é executada imediatamente após sua definição.

// A função é definida entre parênteses para que seja tratada como uma expressão e, em seguida, invocada logo após a definição.
(function(){
    // Abaixo, a função é executada imediatamente, sem a necessidade de chamá-la diretamente
    console.log('Será executado na hora!'); // Exibe a mensagem imediatamente no console.
    console.log('Foge do escopo mais abrangente!'); // A função é executada dentro de um escopo local, sem afetar o escopo global.
})(); 