// Exemplo de operador ternário
// O operador ternário é uma forma simplificada de escrever uma expressão condicional. 
// Sintaxe: condição ? valor_se_verdadeiro : valor_se_falso

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

// Chamando a função com a nota 8 e imprimindo o resultado no console
console.log('O resultado do aluno é:', resultado(8));