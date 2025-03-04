// Entendendo o uso de concat() e flatMap() para manipulação de arrays

const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}];

// Função para obter a nota de um aluno
const getNotaDoAluno = aluno => aluno.nota;

// Função para mapear as notas de todos os alunos em uma turma
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno);

// Usando map() para obter as notas de todos os alunos em cada turma
const notas1 = escola.map(getNotasDaTurma);
console.log(notas1); // Exibe as notas de cada turma como um array dentro de um array

// Utilizando concat() para juntar arrays de notas
console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ])); // Junta as notas das duas turmas em um único array

// Criando o método flatMap() para juntar e "achatar" arrays
Array.prototype.flatMap = function(callback) {
    // Usando o método concat para combinar os resultados em um único array
    return Array.prototype.concat.apply([], this.map(callback));
};

// Usando o método flatMap() para obter as notas de todas as turmas em um único array
const notas2 = escola.flatMap(getNotasDaTurma);
console.log(notas2); // Exibe todas as notas em um único array