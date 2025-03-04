// Criando um array de objetos com informações sobre os alunos
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false }, // João não é bolsista
    { nome: 'Maria', nota: 9.2, bolsista: true },  // Maria é bolsista
    { nome: 'Pedro', nota: 9.8, bolsista: false }, // Pedro não é bolsista
    { nome: 'Ana', nota: 8.7, bolsista: true },    // Ana é bolsista
];

// Desafio 1: Verificar se todos os alunos são bolsistas
// Função que recebe o resultado acumulado e o valor atual (se o aluno é bolsista)
// Retorna true se ambos forem true, caso contrário retorna false
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;

// Usando o método map() para extrair apenas o valor da propriedade bolsista
// Em seguida, usando o método reduce() para aplicar a função todosBolsistas
// O reduce() verifica se todos os valores são true
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas)); // false

// Desafio 2: Verificar se algum aluno é bolsista
// Função que recebe o resultado acumulado e o valor atual (se o aluno é bolsista)
// Retorna true se pelo menos um dos valores for true
const algumBolsista = (resultado, bolsista) => resultado || bolsista;

// Usando o método map() para extrair apenas o valor da propriedade bolsista
// Em seguida, usando o método reduce() para aplicar a função algumBolsista
// O reduce() verifica se pelo menos um dos valores é true
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista)); // true