// Desafio: Recriar o método prototype .map

Array.prototype.map2 = function (callback) {
  let nArr = [];
  for (let i = 0; i < this.length; i++) {
    nArr[i] = callback(this[i], i, this);
  }
  return nArr;
};

let carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
];

const paraObj = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const mostrarPrecos = e => e.map2(paraObj).map2(apenasPreco);

console.log(mostrarPrecos(carrinho));
