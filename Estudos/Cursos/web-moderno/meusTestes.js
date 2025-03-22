console.log("desafio 1:");

let numeros = [1, 2, 3, 4, 5, 100, 15];
let soma = numeros.reduce((acc, numeros) => acc + numeros);
console.log(soma);

console.log("-----------");

console.log("desafio 2:");

numeros = [1, 2, 3, 4, 5, 6];
let pares = numeros.filter((n) => n % 2 === 0);
console.log(pares);

console.log("-----------");

console.log("desafio 3:");

numeros = [1, 2, 3, 4];
let dobra = numeros.map((n) => n * 2);
console.log(dobra);

console.log("-----------");

console.log("desafio 4:");

numeros = [3, 5, 8, 12, 1];
let peloMenos = numeros.some((n) => n > 10);
console.log(peloMenos);

console.log("-----------");

console.log("desafio 5:");

numeros = [-1, 2, -3, 4, -5];
let negativos = numeros.filter((n) => n < 0).length;
console.log(negativos);

console.log("-----------");

console.log("desafio 6:");

let pessoas = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 30 },
  { nome: "Pedro", idade: 35 },
];
let nomeMaiusculo = pessoas.map((p) => p.nome.toUpperCase());
console.log(nomeMaiusculo);

console.log("-----------");

console.log("desafio 7:");

let alunos = [
  { nome: "João", nota: 6 },
  { nome: "Maria", nota: 8 },
  { nome: "Pedro", nota: 9 },
  { nome: "Ana", nota: 7 },
];
let notaMaior = alunos.filter((a) => a.nota > 7);
console.log(notaMaior);

console.log("-----------");

console.log("desafio 8:");

pessoas = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 30 },
  { nome: "Pedro", idade: 35 },
  { nome: "Ana", idade: 40 },
];

let somaIdade = pessoas.reduce((acc, p) => acc + p.idade, 0);
console.log(somaIdade);

console.log("-----------");

console.log("desafio 9:");

alunos = [
  { nome: "João", nota: 6 },
  { nome: "Maria", nota: 8 },
  { nome: "Pedro", nota: 9 },
  { nome: "Ana", nota: 7 },
];

let maiorNota = alunos.reduce((notaMaior, notaAtual) => {
  return notaAtual.nota > notaMaior.nota ? notaAtual : notaMaior;
});

console.log(maiorNota);

console.log("-----------");

console.log("desafio 10:");
console.log("-----------");
