console.log("desafio 01:");

const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const soma1 = numeros1
  .filter((n) => n % 2 === 0)
  .map((n) => n ** 2)
  .reduce((acc, n) => acc + n);

console.log(soma1);

console.log("-----------");

console.log("desafio 02:");

const palavras2 = ["maçã", "banana", "maçã", "laranja", "banana", "banana"];
const soma2 = palavras2.reduce((nome, contador) => {
  if (!nome[contador]) nome[contador] = 0;
  nome[contador] += 1;
  return nome;
}, {});

console.log(soma2);

console.log("-----------");

console.log("desafio 03:");

const pessoas3 = [
  { nome: "Alice", idade: 25 },
  { nome: "Bruno", idade: 30 },
  { nome: "Carlos", idade: 25 },
  { nome: "Diana", idade: 30 },
];

const grupoIdade3 = pessoas3.reduce((grupo, pessoa) => {
  if (!grupo[pessoa.idade]) grupo[pessoa.idade] = [];
  grupo[pessoa.idade].push({ nome: pessoa.nome, idade: pessoa.idade });
  return grupo;
}, {});

console.log(grupoIdade3);

console.log("-----------");

console.log("desafio 04:");

const produtos4 = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 700 },
  { nome: "Headset", preco: 90 },
];

const produtoPreco4 = produtos4
  .filter((p) => p.preco > 100)
  .map((p) => `${p.nome}: R$ ${p.preco.toFixed(2).replace(".", ",")}`);

console.log(produtoPreco4);

console.log("-----------");

console.log("desafio 05:");

const numeros5 = [10, 25, 5, 40, 32, 2, 90];
const menorMaior5 = {};

menorMaior5.menor = numeros5.reduce((menor, numero) =>
  menor < numero ? menor : numero
);
menorMaior5.maior = numeros5.reduce((maior, numero) =>
  maior > numero ? maior : numero
);

console.log(menorMaior5);

console.log("-----------");

console.log("desafio 06:");

const pessoas6 = [
  { nome: "Lucas", idade: 35 },
  { nome: "Ana", idade: 22 },
  { nome: "Marcos", idade: 29 },
  { nome: "Paula", idade: 27 },
];

const porIdade6 = pessoas6
  .sort((a, b) => a.idade - b.idade)
  .map((p) => [p.nome, p.idade]);

console.log(porIdade6);

console.log("-----------");

console.log("desafio 07:");

const compras7 = [
  { categoria: "Alimentação", valor: 30 },
  { categoria: "Transporte", valor: 50 },
  { categoria: "Alimentação", valor: 20 },
  { categoria: "Lazer", valor: 100 },
  { categoria: "Transporte", valor: 30 },
];

const gastoCategoria7 = compras7.reduce((categoria, produto) => {
  if (!categoria[produto.categoria]) categoria[produto.categoria] = 0;
  categoria[produto.categoria] += produto.valor;
  return categoria;
}, {});

console.log(gastoCategoria7);

console.log("-----------");

console.log("desafio 08:");

const numeros8 = [3, 7, 10, 15, 18, 21];
const x8 = 5;

const mutiplo8 = numeros8.filter((n) => n % x8 === 0)[0];

console.log(mutiplo8);

console.log("-----------");

console.log("desafio 09:");

const a9 = [1, 2, 3];
const b9 = [5, 3, 1, 2, 8, 4];

const contem9 = a9
  .map((a) => {
    let teste = false;
    b9.forEach((b) => {
      if (a === b) teste = true;
    });
    return teste;
  })
  .reduce((acc, att) => acc === att, true);

console.log(contem9);

console.log("-----------");

console.log("desafio 10:");

const palavras10 = ["maçã", "banana", "laranja", "uva"];

const palavra10 = palavras10.reduce(
  (palavra, palavras) => palavra + ` ${palavras}`
);

console.log(palavra10);

console.log("-----------");
