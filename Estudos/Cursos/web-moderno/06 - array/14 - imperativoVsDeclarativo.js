// Entendendo a diferença entre programação imperativa e declarativa

const alunos = [
    {nome: 'João', nota: 7.9}, // Objeto representando um aluno com nome e nota
    {nome: 'Maria', nota: 9.2} // Outro objeto representando um aluno
];

// Abordagem Imperativa
// Descreve *como* algo deve ser feito, passo a passo
let total1 = 0; // Inicializando a variável para somar as notas
for (let i = 0; i < alunos.length; i++) { // Percorrendo todos os elementos do array
    total1 += alunos[i].nota; // Somando a nota de cada aluno
}
console.log(total1 / alunos.length); // Calculando e exibindo a média das notas

// Abordagem Declarativa
// Descreve *o que* deve ser feito, focando no resultado e não no processo
const getNota = aluno => aluno.nota; // Função para obter a nota de um aluno
const soma = (total, atual) => total + atual; // Função para somar dois valores
const total2 = alunos.map(getNota).reduce(soma); // Mapeando as notas e somando todas elas
console.log(total2 / alunos.length); // Calculando e exibindo a média das notas