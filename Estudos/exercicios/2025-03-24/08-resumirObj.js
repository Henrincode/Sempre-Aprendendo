// Criar um dicionário de produtos e preços
// Descrição: Dado um array de objetos representando produtos, retorne um objeto onde a chave seja o nome do produto e o valor seja o preço.

// Entrada:
// [
//     { nome: "Teclado", preco: 100 },
//     { nome: "Mouse", preco: 50 }
// ]
// Saída esperada: { "Teclado": 100, "Mouse": 50 }

// Método recomendado: .reduce()

// Criando array
const produtos = [
  { nome: "Teclado", preco: 100 },
  { nome: "Mouse", preco: 50 },
];

// Tratando os dados com .reduce()
const produtosCurto = produtos.reduce((pCurto, pLongo) => {
  pCurto[pLongo.nome] = pLongo.preco; // Cria obj novo sem chave/valor do antigo
  return pCurto; // Retorna o novo obj
}, {}); // , {} cria um obj vazio para acumulador pCurto

// Imprimindo no console
console.log(produtosCurto);
