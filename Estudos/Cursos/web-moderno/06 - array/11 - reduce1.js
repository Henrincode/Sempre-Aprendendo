// Usando o método .reduce para somar as notas dos alunos
// O método .reduce percorre o array e acumula valores em uma única variável

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
];

// Usando o método .map para extrair apenas as notas do array de objetos
console.log(alunos.map(a => a.nota)); // Retorna um novo array apenas com as notas

// Usando o método .reduce para somar todas as notas
// O método recebe dois parâmetros na função de callback:
// acumulador → armazena o valor total da soma
// atual → valor atual percorrido na iteração
// O segundo argumento do .reduce (0) define o valor inicial do acumulador
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual); // Mostra o valor do acumulador e o valor atual a cada iteração
    return acumulador + atual; // Soma o valor atual ao acumulador
}, 0);

console.log(resultado); // Exibe o resultado final da soma das notas